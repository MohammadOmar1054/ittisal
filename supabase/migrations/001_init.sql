-- 001_init.sql: Schema for ittisal Job Hunter Platform
-- Enables UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 1. TABLES
-- ==============================================================================

-- PROFILES: Linked to Supabase Auth users
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  full_name text,
  age int,
  avatar_url text,
  degree text,
  field_of_study text,
  location text,
  bio text,
  skills text[] DEFAULT '{}'::text[],
  language text DEFAULT 'en',
  theme text DEFAULT 'dark',
  created_at timestamptz DEFAULT now()
);

-- RESUMES: Stored resume metadata for Easy Apply
CREATE TABLE IF NOT EXISTS public.resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  file_path text NOT NULL,
  easy_apply_enabled boolean DEFAULT true,
  uploaded_at timestamptz DEFAULT now(),
  CONSTRAINT resumes_profile_id_key UNIQUE (profile_id)
);

-- COMPANIES: Employer company profiles
CREATE TABLE IF NOT EXISTS public.companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  industry text,
  location text,
  about text
);

-- JOBS: GCC job listings
CREATE TABLE IF NOT EXISTS public.jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  category text,
  level text,
  required_skills text[] DEFAULT '{}'::text[],
  experience_years int DEFAULT 0,
  salary_min int,
  salary_max int,
  currency text,
  work_mode text,
  location text,
  country text,
  posted_at timestamptz DEFAULT now(),
  applicants_count int DEFAULT 0
);

-- APPLICATIONS: Job seeker submissions
CREATE TABLE IF NOT EXISTS public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  profile_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  status text DEFAULT 'applied',
  applied_at timestamptz DEFAULT now(),
  CONSTRAINT applications_job_profile_unique UNIQUE (job_id, profile_id)
);

-- ==============================================================================
-- 2. INDEXES
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_jobs_title ON public.jobs (title);
CREATE INDEX IF NOT EXISTS idx_jobs_work_mode ON public.jobs (work_mode);
CREATE INDEX IF NOT EXISTS idx_jobs_location ON public.jobs (location);
CREATE INDEX IF NOT EXISTS idx_jobs_category ON public.jobs (category);
CREATE INDEX IF NOT EXISTS idx_jobs_level ON public.jobs (level);
CREATE INDEX IF NOT EXISTS idx_jobs_posted_at ON public.jobs (posted_at DESC);
CREATE INDEX IF NOT EXISTS idx_jobs_company_id ON public.jobs (company_id);
CREATE INDEX IF NOT EXISTS idx_applications_profile_id ON public.applications (profile_id);
CREATE INDEX IF NOT EXISTS idx_applications_job_id ON public.applications (job_id);

-- ==============================================================================
-- 3. AUTH TRIGGER: Auto-create profile on user signup
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    age,
    avatar_url,
    degree,
    field_of_study,
    location,
    bio,
    skills,
    language,
    theme
  ) VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''),
    NULLIF(new.raw_user_meta_data->>'age', '')::int,
    COALESCE(new.raw_user_meta_data->>'avatar_url', ''),
    COALESCE(new.raw_user_meta_data->>'degree', ''),
    COALESCE(new.raw_user_meta_data->>'field_of_study', new.raw_user_meta_data->>'field', ''),
    COALESCE(new.raw_user_meta_data->>'location', ''),
    COALESCE(new.raw_user_meta_data->>'bio', ''),
    CASE 
      WHEN jsonb_typeof(new.raw_user_meta_data->'skills') = 'array' 
      THEN ARRAY(SELECT jsonb_array_elements_text(new.raw_user_meta_data->'skills'))
      ELSE '{}'::text[]
    END,
    COALESCE(new.raw_user_meta_data->>'language', 'en'),
    COALESCE(new.raw_user_meta_data->>'theme', 'dark')
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = CASE WHEN EXCLUDED.full_name <> '' THEN EXCLUDED.full_name ELSE public.profiles.full_name END;

  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ==============================================================================
-- 4. ROW LEVEL SECURITY (RLS)
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- PROFILES POLICIES
DROP POLICY IF EXISTS "Users can select own profile" ON public.profiles;
CREATE POLICY "Users can select own profile" ON public.profiles
  FOR SELECT TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can delete own profile" ON public.profiles;
CREATE POLICY "Users can delete own profile" ON public.profiles
  FOR DELETE TO authenticated USING (auth.uid() = id);

-- RESUMES POLICIES
DROP POLICY IF EXISTS "Users can select own resume" ON public.resumes;
CREATE POLICY "Users can select own resume" ON public.resumes
  FOR SELECT TO authenticated USING (auth.uid() = profile_id);

DROP POLICY IF EXISTS "Users can insert own resume" ON public.resumes;
CREATE POLICY "Users can insert own resume" ON public.resumes
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = profile_id);

DROP POLICY IF EXISTS "Users can update own resume" ON public.resumes;
CREATE POLICY "Users can update own resume" ON public.resumes
  FOR UPDATE TO authenticated USING (auth.uid() = profile_id) WITH CHECK (auth.uid() = profile_id);

DROP POLICY IF EXISTS "Users can delete own resume" ON public.resumes;
CREATE POLICY "Users can delete own resume" ON public.resumes
  FOR DELETE TO authenticated USING (auth.uid() = profile_id);

-- APPLICATIONS POLICIES
DROP POLICY IF EXISTS "Users can select own applications" ON public.applications;
CREATE POLICY "Users can select own applications" ON public.applications
  FOR SELECT TO authenticated USING (auth.uid() = profile_id);

DROP POLICY IF EXISTS "Users can insert own applications" ON public.applications;
CREATE POLICY "Users can insert own applications" ON public.applications
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = profile_id);

DROP POLICY IF EXISTS "Users can update own applications" ON public.applications;
CREATE POLICY "Users can update own applications" ON public.applications
  FOR UPDATE TO authenticated USING (auth.uid() = profile_id) WITH CHECK (auth.uid() = profile_id);

DROP POLICY IF EXISTS "Users can delete own applications" ON public.applications;
CREATE POLICY "Users can delete own applications" ON public.applications
  FOR DELETE TO authenticated USING (auth.uid() = profile_id);

-- COMPANIES & JOBS POLICIES: Public read, no client writes
DROP POLICY IF EXISTS "Public read companies" ON public.companies;
CREATE POLICY "Public read companies" ON public.companies
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "Public read jobs" ON public.jobs;
CREATE POLICY "Public read jobs" ON public.jobs
  FOR SELECT TO anon, authenticated USING (true);

-- ==============================================================================
-- 5. STORAGE POLICIES
-- ==============================================================================
-- Ensure buckets exist
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('avatars', 'avatars', true),
  ('resumes', 'resumes', false)
ON CONFLICT (id) DO UPDATE SET public = EXCLUDED.public;

-- Avatars: public read
DROP POLICY IF EXISTS "Avatars are publicly readable" ON storage.objects;
CREATE POLICY "Avatars are publicly readable" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'avatars');

-- Avatars: owner write
DROP POLICY IF EXISTS "Users can upload own avatar" ON storage.objects;
CREATE POLICY "Users can upload own avatar" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);

DROP POLICY IF EXISTS "Users can update own avatar" ON storage.objects;
CREATE POLICY "Users can update own avatar" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text)
  WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);

DROP POLICY IF EXISTS "Users can delete own avatar" ON storage.objects;
CREATE POLICY "Users can delete own avatar" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Resumes: owner read only
DROP POLICY IF EXISTS "Users can read own resume" ON storage.objects;
CREATE POLICY "Users can read own resume" ON storage.objects
  FOR SELECT TO authenticated
  USING (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Resumes: owner write
DROP POLICY IF EXISTS "Users can upload own resume" ON storage.objects;
CREATE POLICY "Users can upload own resume" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.uid()::text);

DROP POLICY IF EXISTS "Users can update own resume" ON storage.objects;
CREATE POLICY "Users can update own resume" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.uid()::text)
  WITH CHECK (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.uid()::text);

DROP POLICY IF EXISTS "Users can delete own resume" ON storage.objects;
CREATE POLICY "Users can delete own resume" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.uid()::text);

-- 002_min_age.sql: Require account holders to be at least 18 years old.
-- Enforced server-side so the rule cannot be bypassed by calling Supabase Auth directly.

-- 1. Reject sign-ups whose metadata lacks a valid age of 18+.
--    Raising inside this BEFORE INSERT trigger aborts the auth.users insert,
--    so the account is never created.
CREATE OR REPLACE FUNCTION public.enforce_min_signup_age()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  raw_age text := new.raw_user_meta_data->>'age';
BEGIN
  IF raw_age IS NULL OR raw_age !~ '^\d{1,3}$' OR raw_age::int < 18 THEN
    RAISE EXCEPTION 'You must be at least 18 years old to create an account.'
      USING ERRCODE = 'check_violation';
  END IF;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS enforce_min_signup_age ON auth.users;
CREATE TRIGGER enforce_min_signup_age
  BEFORE INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.enforce_min_signup_age();

-- 2. Prevent profiles from being updated to an under-18 age later.
--    NOT VALID skips existing rows so the migration won't fail on legacy data.
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_min_age_check;
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_min_age_check CHECK (age IS NULL OR age >= 18) NOT VALID;

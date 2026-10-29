-- Seed data generated for ittisal Job Hunter Platform
-- Contains companies and 150+ GCC jobs with realistic salaries and currencies

-- 1. COMPANIES
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000001', 'Al Futtaim', 'https://www.google.com/s2/favicons?domain=alfuttaim.com&sz=128', 'Retail & Conglomerate', 'Dubai, UAE', 'Al Futtaim is one of the most progressive regional family business houses headquartered in Dubai.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000002', 'STC', 'https://www.google.com/s2/favicons?domain=stc.com.sa&sz=128', 'Telecommunications', 'Riyadh, Saudi Arabia', 'STC is a leading telecom and digital solutions provider across the Middle East.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000003', 'Saudi Aramco', 'https://www.google.com/s2/favicons?domain=aramco.com&sz=128', 'Energy & Petroleum', 'Dhahran, Saudi Arabia', 'Saudi Aramco is a global energy and chemical company driving industrial innovation.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000004', 'G42', 'https://www.google.com/s2/favicons?domain=g42.ai&sz=128', 'Artificial Intelligence & Cloud', 'Abu Dhabi, UAE', 'G42 is a leading AI and cloud computing company based in Abu Dhabi.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000005', 'Qatar Airways', 'https://www.google.com/s2/favicons?domain=qatarairways.com&sz=128', 'Aviation & Travel', 'Doha, Qatar', 'Qatar Airways is the national airline of the State of Qatar, known for global connectivity.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000006', 'Emaar', 'https://www.google.com/s2/favicons?domain=emaar.com&sz=128', 'Real Estate & Hospitality', 'Dubai, UAE', 'Emaar Properties is a pioneer developer shaping urban landscapes in Dubai.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000007', 'Careem', 'https://www.google.com/s2/favicons?domain=careem.com&sz=128', 'Super-App & Mobility', 'Riyadh, Saudi Arabia', 'Careem simplifies and improves the lives of people through everyday digital services.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000008', 'Talabat', 'https://www.google.com/s2/favicons?domain=talabat.com&sz=128', 'Food & Q-Commerce', 'Kuwait City, Kuwait', 'Talabat is the leading on-demand food and grocery delivery platform in the region.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000009', 'Honeywell', 'https://www.google.com/s2/favicons?domain=honeywell.com&sz=128', 'Industrial Technology', 'Manama, Bahrain', 'Honeywell delivers industry-specific solutions including aerospace and building technologies.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-00000000000a', 'Petrofac', 'https://www.google.com/s2/favicons?domain=petrofac.com&sz=128', 'Energy Infrastructure', 'Muscat, Oman', 'Petrofac designs, builds, and maintains critical energy and infrastructure assets.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-00000000000b', 'Mubadala', 'https://www.google.com/s2/favicons?domain=mubadala.com&sz=128', 'Sovereign Investment', 'Abu Dhabi, UAE', 'Mubadala Investment Company invests globally to generate sustainable financial returns.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-00000000000c', 'Microsoft', 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128', 'Cloud & Enterprise Software', 'Dubai, UAE', 'Microsoft Middle East empowers organizations to achieve more with intelligent cloud.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-00000000000d', 'Noon', 'https://www.google.com/s2/favicons?domain=noon.com&sz=128', 'E-Commerce', 'Jeddah, Saudi Arabia', 'Noon is the homegrown digital marketplace and logistics network for the Arab world.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-00000000000e', 'QatarEnergy', 'https://www.google.com/s2/favicons?domain=qatarenergy.qa&sz=128', 'Energy & LNG', 'Doha, Qatar', 'QatarEnergy is the premier integrated energy company responsible for the development of cleaner energy.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-00000000000f', 'DP World', 'https://www.google.com/s2/favicons?domain=dpworld.com&sz=128', 'Logistics & Supply Chain', 'Dubai, UAE', 'DP World enables global trade flows through smart logistics and terminal operations.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000010', 'Zain', 'https://www.google.com/s2/favicons?domain=zain.com&sz=128', 'Telecommunications', 'Kuwait City, Kuwait', 'Zain is a leading mobile voice and data services operator across the MENA region.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000011', 'Omantel', 'https://www.google.com/s2/favicons?domain=omantel.om&sz=128', 'Telecommunications', 'Muscat, Oman', 'Omantel is the pioneer provider of integrated telecommunication services in the Sultanate of Oman.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;
INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('10000000-0000-0000-0000-000000000012', 'Bahrain Mumtalakat', 'https://upload.wikimedia.org/wikipedia/commons/0/04/%D8%B4%D8%B1%D9%83%D8%A9_%D9%85%D9%85%D8%AA%D9%84%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D9%82%D8%A7%D8%A8%D8%B6%D8%A9.png', 'Sovereign Wealth', 'Manama, Bahrain', 'Mumtalakat is the sovereign wealth fund of the Kingdom of Bahrain investing locally and internationally.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;

-- 2. JOBS
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000001',
  '10000000-0000-0000-0000-000000000001',
  'Frontend Engineer',
  'Join Al Futtaim as a Frontend Engineer in Dubai, UAE. Key skills: React, Next.js, TypeScript. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['React', 'Next.js', 'TypeScript']::text[],
  4,
  14000,
  18000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '1 days',
  8
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000002',
  '10000000-0000-0000-0000-000000000002',
  'Backend Engineer',
  'Join STC as a Backend Engineer in Riyadh, Saudi Arabia. Key skills: Node.js, APIs, PostgreSQL. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['Node.js', 'APIs', 'PostgreSQL']::text[],
  4,
  15000,
  20000,
  'SAR',
  'Remote',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '2 days',
  27
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000003',
  '10000000-0000-0000-0000-000000000003',
  'Full Stack Developer',
  'Join Saudi Aramco as a Full Stack Developer in Dhahran, Saudi Arabia. Key skills: React, Node.js, AWS. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['React', 'Node.js', 'AWS']::text[],
  4,
  16000,
  21000,
  'SAR',
  'Hybrid',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '3 days',
  46
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000004',
  '10000000-0000-0000-0000-000000000004',
  'Staff Software Engineer',
  'Join G42 as a Staff Software Engineer in Abu Dhabi, UAE. Key skills: Distributed Systems, Java, Kubernetes. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Senior',
  ARRAY['Distributed Systems', 'Java', 'Kubernetes']::text[],
  8,
  26000,
  33000,
  'AED',
  'Remote',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '4 days',
  65
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000005',
  '10000000-0000-0000-0000-000000000005',
  'Android Developer',
  'Join Qatar Airways as a Android Developer in Doha, Qatar. Key skills: Kotlin, Android, Jetpack. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['Kotlin', 'Android', 'Jetpack']::text[],
  4,
  18000,
  24000,
  'QAR',
  'Hybrid',
  'Doha, Qatar',
  'Qatar',
  now() - interval '5 days',
  84
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000006',
  '10000000-0000-0000-0000-000000000006',
  'iOS Developer',
  'Join Emaar as a iOS Developer in Dubai, UAE. Key skills: Swift, iOS, UIKit. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['Swift', 'iOS', 'UIKit']::text[],
  4,
  14000,
  18000,
  'AED',
  'Remote',
  'Dubai, UAE',
  'UAE',
  now() - interval '6 days',
  11
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000007',
  '10000000-0000-0000-0000-000000000007',
  'React Native Engineer',
  'Join Careem as a React Native Engineer in Riyadh, Saudi Arabia. Key skills: React Native, JavaScript, Mobile. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Entry-level',
  ARRAY['React Native', 'JavaScript', 'Mobile']::text[],
  1,
  7000,
  9000,
  'SAR',
  'Hybrid',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '7 days',
  30
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000008',
  '10000000-0000-0000-0000-000000000008',
  'Game Developer',
  'Join Talabat as a Game Developer in Kuwait City, Kuwait. Key skills: Unity, C#, 3D. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['Unity', 'C#', '3D']::text[],
  4,
  1600,
  2100,
  'KWD',
  'Onsite',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '8 days',
  49
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000009',
  '10000000-0000-0000-0000-000000000009',
  'Embedded Software Engineer',
  'Join Honeywell as a Embedded Software Engineer in Manama, Bahrain. Key skills: C, RTOS, Embedded Linux. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Senior',
  ARRAY['C', 'RTOS', 'Embedded Linux']::text[],
  8,
  2500,
  3000,
  'BHD',
  'Onsite',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '9 days',
  68
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000000a',
  '10000000-0000-0000-0000-00000000000a',
  'API Platform Engineer',
  'Join Petrofac as a API Platform Engineer in Muscat, Oman. Key skills: REST, GraphQL, Go. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Senior',
  ARRAY['REST', 'GraphQL', 'Go']::text[],
  8,
  2500,
  3100,
  'OMR',
  'Remote',
  'Muscat, Oman',
  'Oman',
  now() - interval '10 days',
  87
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000000b',
  '10000000-0000-0000-0000-00000000000b',
  'Ruby on Rails Developer',
  'Join Mubadala as a Ruby on Rails Developer in Abu Dhabi, UAE. Key skills: Ruby, Rails, PostgreSQL. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['Ruby', 'Rails', 'PostgreSQL']::text[],
  4,
  14000,
  18000,
  'AED',
  'Remote',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '11 days',
  14
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000000c',
  '10000000-0000-0000-0000-00000000000c',
  'Java Solutions Developer',
  'Join Microsoft as a Java Solutions Developer in Dubai, UAE. Key skills: Java, Spring, Microservices. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['Java', 'Spring', 'Microservices']::text[],
  4,
  15000,
  20000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '12 days',
  33
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000000d',
  '10000000-0000-0000-0000-00000000000d',
  'PHP Application Developer',
  'Join Noon as a PHP Application Developer in Jeddah, Saudi Arabia. Key skills: PHP, Laravel, MySQL. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Entry-level',
  ARRAY['PHP', 'Laravel', 'MySQL']::text[],
  1,
  8000,
  11000,
  'SAR',
  'Onsite',
  'Jeddah, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '13 days',
  52
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000000e',
  '10000000-0000-0000-0000-00000000000e',
  'QA Automation Engineer',
  'Join QatarEnergy as a QA Automation Engineer in Doha, Qatar. Key skills: Cypress, Playwright, CI/CD. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Mid-level',
  ARRAY['Cypress', 'Playwright', 'CI/CD']::text[],
  4,
  17000,
  22000,
  'QAR',
  'Hybrid',
  'Doha, Qatar',
  'Qatar',
  now() - interval '14 days',
  71
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000000f',
  '10000000-0000-0000-0000-00000000000f',
  'Performance Test Engineer',
  'Join DP World as a Performance Test Engineer in Dubai, UAE. Key skills: JMeter, Load Testing, APIs. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Senior',
  ARRAY['JMeter', 'Load Testing', 'APIs']::text[],
  8,
  27000,
  35000,
  'AED',
  'Remote',
  'Dubai, UAE',
  'UAE',
  now() - interval '15 days',
  90
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000010',
  '10000000-0000-0000-0000-000000000010',
  'Developer Experience Engineer',
  'Join Zain as a Developer Experience Engineer in Kuwait City, Kuwait. Key skills: Tooling, CLI, Documentation. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Senior',
  ARRAY['Tooling', 'CLI', 'Documentation']::text[],
  8,
  2200,
  2800,
  'KWD',
  'Remote',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '16 days',
  17
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000011',
  '10000000-0000-0000-0000-000000000011',
  'Machine Learning Engineer',
  'Join Omantel as a Machine Learning Engineer in Muscat, Oman. Key skills: Python, PyTorch, MLOps. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['Python', 'PyTorch', 'MLOps']::text[],
  8,
  2300,
  2900,
  'OMR',
  'Hybrid',
  'Muscat, Oman',
  'Oman',
  now() - interval '17 days',
  36
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000012',
  '10000000-0000-0000-0000-000000000012',
  'Generative AI Engineer',
  'Join Bahrain Mumtalakat as a Generative AI Engineer in Manama, Bahrain. Key skills: LLMs, RAG, Python. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['LLMs', 'RAG', 'Python']::text[],
  8,
  2400,
  3000,
  'BHD',
  'Remote',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '18 days',
  55
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000013',
  '10000000-0000-0000-0000-000000000001',
  'Computer Vision Engineer',
  'Join Al Futtaim as a Computer Vision Engineer in Dubai, UAE. Key skills: OpenCV, PyTorch, Vision. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Mid-level',
  ARRAY['OpenCV', 'PyTorch', 'Vision']::text[],
  4,
  17000,
  22000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '19 days',
  74
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000014',
  '10000000-0000-0000-0000-000000000002',
  'Natural Language Processing Engineer',
  'Join STC as a Natural Language Processing Engineer in Riyadh, Saudi Arabia. Key skills: NLP, Transformers, Python. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['NLP', 'Transformers', 'Python']::text[],
  8,
  27000,
  35000,
  'SAR',
  'Remote',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '20 days',
  93
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000015',
  '10000000-0000-0000-0000-000000000003',
  'AI Research Scientist',
  'Join Saudi Aramco as a AI Research Scientist in Dhahran, Saudi Arabia. Key skills: Research, Deep Learning, Papers. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['Research', 'Deep Learning', 'Papers']::text[],
  8,
  24000,
  31000,
  'SAR',
  'Hybrid',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '21 days',
  20
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000016',
  '10000000-0000-0000-0000-000000000004',
  'AI Product Manager',
  'Join G42 as a AI Product Manager in Abu Dhabi, UAE. Key skills: AI Products, Roadmaps, Strategy. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['AI Products', 'Roadmaps', 'Strategy']::text[],
  8,
  25000,
  32000,
  'AED',
  'Hybrid',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '22 days',
  39
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000017',
  '10000000-0000-0000-0000-000000000005',
  'Prompt Engineer',
  'Join Qatar Airways as a Prompt Engineer in Doha, Qatar. Key skills: Prompt Design, Evaluation, LLMs. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Entry-level',
  ARRAY['Prompt Design', 'Evaluation', 'LLMs']::text[],
  1,
  8000,
  11000,
  'QAR',
  'Remote',
  'Doha, Qatar',
  'Qatar',
  now() - interval '23 days',
  58
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000018',
  '10000000-0000-0000-0000-000000000006',
  'AI Safety Analyst',
  'Join Emaar as a AI Safety Analyst in Dubai, UAE. Key skills: Model Risk, Safety, Policy. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Mid-level',
  ARRAY['Model Risk', 'Safety', 'Policy']::text[],
  4,
  17000,
  22000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '24 days',
  77
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000019',
  '10000000-0000-0000-0000-000000000007',
  'Data Scientist',
  'Join Careem as a Data Scientist in Riyadh, Saudi Arabia. Key skills: Python, Statistics, SQL. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Mid-level',
  ARRAY['Python', 'Statistics', 'SQL']::text[],
  4,
  18000,
  24000,
  'SAR',
  'Hybrid',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '25 days',
  96
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000001a',
  '10000000-0000-0000-0000-000000000008',
  'Data Analyst',
  'Join Talabat as a Data Analyst in Kuwait City, Kuwait. Key skills: SQL, Power BI, Excel. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Entry-level',
  ARRAY['SQL', 'Power BI', 'Excel']::text[],
  1,
  950,
  1300,
  'KWD',
  'Onsite',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '26 days',
  23
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000001b',
  '10000000-0000-0000-0000-000000000009',
  'Analytics Engineer',
  'Join Honeywell as a Analytics Engineer in Manama, Bahrain. Key skills: dbt, SQL, Snowflake. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Mid-level',
  ARRAY['dbt', 'SQL', 'Snowflake']::text[],
  4,
  1500,
  1900,
  'BHD',
  'Remote',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '27 days',
  42
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000001c',
  '10000000-0000-0000-0000-00000000000a',
  'Data Engineer',
  'Join Petrofac as a Data Engineer in Muscat, Oman. Key skills: Spark, Airflow, Python. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Senior',
  ARRAY['Spark', 'Airflow', 'Python']::text[],
  8,
  2400,
  3000,
  'OMR',
  'Hybrid',
  'Muscat, Oman',
  'Oman',
  now() - interval '28 days',
  61
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000001d',
  '10000000-0000-0000-0000-00000000000b',
  'Data Quality Engineer',
  'Join Mubadala as a Data Quality Engineer in Abu Dhabi, UAE. Key skills: Data Quality, SQL, Testing. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Mid-level',
  ARRAY['Data Quality', 'SQL', 'Testing']::text[],
  4,
  17000,
  22000,
  'AED',
  'Remote',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '29 days',
  80
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000001e',
  '10000000-0000-0000-0000-00000000000c',
  'Business Intelligence Developer',
  'Join Microsoft as a Business Intelligence Developer in Dubai, UAE. Key skills: Power BI, DAX, Warehousing. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Mid-level',
  ARRAY['Power BI', 'DAX', 'Warehousing']::text[],
  4,
  18000,
  24000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '30 days',
  99
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000001f',
  '10000000-0000-0000-0000-00000000000d',
  'Quantitative Analyst',
  'Join Noon as a Quantitative Analyst in Jeddah, Saudi Arabia. Key skills: Python, Finance, Models. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Senior',
  ARRAY['Python', 'Finance', 'Models']::text[],
  8,
  24000,
  31000,
  'SAR',
  'Onsite',
  'Jeddah, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '1 days',
  26
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000020',
  '10000000-0000-0000-0000-00000000000e',
  'Research Data Coordinator',
  'Join QatarEnergy as a Research Data Coordinator in Doha, Qatar. Key skills: Research, Surveys, Reporting. You will collaborate with dynamic regional teams on high-impact projects.',
  'Research',
  'Entry-level',
  ARRAY['Research', 'Surveys', 'Reporting']::text[],
  1,
  7000,
  9000,
  'QAR',
  'Hybrid',
  'Doha, Qatar',
  'Qatar',
  now() - interval '2 days',
  45
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000021',
  '10000000-0000-0000-0000-00000000000f',
  'Cloud Solutions Architect',
  'Join DP World as a Cloud Solutions Architect in Dubai, UAE. Key skills: Azure, Cloud, Architecture. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Senior',
  ARRAY['Azure', 'Cloud', 'Architecture']::text[],
  8,
  26000,
  33000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '3 days',
  64
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000022',
  '10000000-0000-0000-0000-000000000010',
  'AWS Cloud Engineer',
  'Join Zain as a AWS Cloud Engineer in Kuwait City, Kuwait. Key skills: AWS, Terraform, Linux. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Mid-level',
  ARRAY['AWS', 'Terraform', 'Linux']::text[],
  4,
  1700,
  2200,
  'KWD',
  'Remote',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '4 days',
  83
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000023',
  '10000000-0000-0000-0000-000000000011',
  'Azure Infrastructure Engineer',
  'Join Omantel as a Azure Infrastructure Engineer in Muscat, Oman. Key skills: Azure, Networking, PowerShell. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Mid-level',
  ARRAY['Azure', 'Networking', 'PowerShell']::text[],
  4,
  1800,
  2400,
  'OMR',
  'Onsite',
  'Muscat, Oman',
  'Oman',
  now() - interval '5 days',
  10
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000024',
  '10000000-0000-0000-0000-000000000012',
  'DevOps Engineer',
  'Join Bahrain Mumtalakat as a DevOps Engineer in Manama, Bahrain. Key skills: Docker, Kubernetes, CI/CD. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Senior',
  ARRAY['Docker', 'Kubernetes', 'CI/CD']::text[],
  8,
  2200,
  2800,
  'BHD',
  'Remote',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '6 days',
  29
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000025',
  '10000000-0000-0000-0000-000000000001',
  'Site Reliability Engineer',
  'Join Al Futtaim as a Site Reliability Engineer in Dubai, UAE. Key skills: SRE, Observability, Linux. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Senior',
  ARRAY['SRE', 'Observability', 'Linux']::text[],
  8,
  25000,
  32000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '7 days',
  48
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000026',
  '10000000-0000-0000-0000-000000000002',
  'Platform Engineer',
  'Join STC as a Platform Engineer in Riyadh, Saudi Arabia. Key skills: Kubernetes, Go, Platforms. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Senior',
  ARRAY['Kubernetes', 'Go', 'Platforms']::text[],
  8,
  26000,
  33000,
  'SAR',
  'Remote',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '8 days',
  67
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000027',
  '10000000-0000-0000-0000-000000000003',
  'Cloud FinOps Analyst',
  'Join Saudi Aramco as a Cloud FinOps Analyst in Dhahran, Saudi Arabia. Key skills: FinOps, AWS, Budgets. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Entry-level',
  ARRAY['FinOps', 'AWS', 'Budgets']::text[],
  1,
  9000,
  12000,
  'SAR',
  'Hybrid',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '9 days',
  86
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000028',
  '10000000-0000-0000-0000-000000000004',
  'Network Engineer',
  'Join G42 as a Network Engineer in Abu Dhabi, UAE. Key skills: Cisco, Routing, Firewalls. You will collaborate with dynamic regional teams on high-impact projects.',
  'Infrastructure',
  'Mid-level',
  ARRAY['Cisco', 'Routing', 'Firewalls']::text[],
  4,
  18000,
  24000,
  'AED',
  'Onsite',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '10 days',
  13
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000029',
  '10000000-0000-0000-0000-000000000005',
  'Systems Administrator',
  'Join Qatar Airways as a Systems Administrator in Doha, Qatar. Key skills: Linux, Windows Server, Backup. You will collaborate with dynamic regional teams on high-impact projects.',
  'Infrastructure',
  'Mid-level',
  ARRAY['Linux', 'Windows Server', 'Backup']::text[],
  4,
  14000,
  18000,
  'QAR',
  'Onsite',
  'Doha, Qatar',
  'Qatar',
  now() - interval '11 days',
  32
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000002a',
  '10000000-0000-0000-0000-000000000006',
  'IT Support Specialist',
  'Join Emaar as a IT Support Specialist in Dubai, UAE. Key skills: Helpdesk, Hardware, Support. You will collaborate with dynamic regional teams on high-impact projects.',
  'Infrastructure',
  'Entry-level',
  ARRAY['Helpdesk', 'Hardware', 'Support']::text[],
  1,
  7000,
  9000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '12 days',
  51
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000002b',
  '10000000-0000-0000-0000-000000000007',
  'Cybersecurity Analyst',
  'Join Careem as a Cybersecurity Analyst in Riyadh, Saudi Arabia. Key skills: SIEM, Incident Response, Risk. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Mid-level',
  ARRAY['SIEM', 'Incident Response', 'Risk']::text[],
  4,
  16000,
  21000,
  'SAR',
  'Hybrid',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '13 days',
  70
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000002c',
  '10000000-0000-0000-0000-000000000008',
  'Application Security Engineer',
  'Join Talabat as a Application Security Engineer in Kuwait City, Kuwait. Key skills: AppSec, OWASP, SAST. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Senior',
  ARRAY['AppSec', 'OWASP', 'SAST']::text[],
  8,
  2500,
  3000,
  'KWD',
  'Remote',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '14 days',
  89
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000002d',
  '10000000-0000-0000-0000-000000000009',
  'Cloud Security Engineer',
  'Join Honeywell as a Cloud Security Engineer in Manama, Bahrain. Key skills: IAM, Cloud Security, Compliance. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Senior',
  ARRAY['IAM', 'Cloud Security', 'Compliance']::text[],
  8,
  2500,
  3100,
  'BHD',
  'Hybrid',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '15 days',
  16
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000002e',
  '10000000-0000-0000-0000-00000000000a',
  'Penetration Tester',
  'Join Petrofac as a Penetration Tester in Muscat, Oman. Key skills: Kali Linux, Web Security, Reports. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Mid-level',
  ARRAY['Kali Linux', 'Web Security', 'Reports']::text[],
  4,
  1400,
  1800,
  'OMR',
  'Remote',
  'Muscat, Oman',
  'Oman',
  now() - interval '16 days',
  35
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000002f',
  '10000000-0000-0000-0000-00000000000b',
  'GRC Security Consultant',
  'Join Mubadala as a GRC Security Consultant in Abu Dhabi, UAE. Key skills: GRC, ISO 27001, Audits. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Mid-level',
  ARRAY['GRC', 'ISO 27001', 'Audits']::text[],
  4,
  15000,
  20000,
  'AED',
  'Hybrid',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '17 days',
  54
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000030',
  '10000000-0000-0000-0000-00000000000c',
  'Identity and Access Engineer',
  'Join Microsoft as a Identity and Access Engineer in Dubai, UAE. Key skills: IAM, SSO, Okta. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Senior',
  ARRAY['IAM', 'SSO', 'Okta']::text[],
  8,
  26000,
  33000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '18 days',
  73
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000031',
  '10000000-0000-0000-0000-00000000000d',
  'Hardware Systems Engineer',
  'Join Noon as a Hardware Systems Engineer in Jeddah, Saudi Arabia. Key skills: Embedded, PCB, Prototyping. You will collaborate with dynamic regional teams on high-impact projects.',
  'Hardware',
  'Mid-level',
  ARRAY['Embedded', 'PCB', 'Prototyping']::text[],
  4,
  17000,
  22000,
  'SAR',
  'Onsite',
  'Jeddah, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '19 days',
  92
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000032',
  '10000000-0000-0000-0000-00000000000e',
  'Hardware Test Engineer',
  'Join QatarEnergy as a Hardware Test Engineer in Doha, Qatar. Key skills: Testing, Validation, Lab. You will collaborate with dynamic regional teams on high-impact projects.',
  'Hardware',
  'Entry-level',
  ARRAY['Testing', 'Validation', 'Lab']::text[],
  1,
  10000,
  14000,
  'QAR',
  'Onsite',
  'Doha, Qatar',
  'Qatar',
  now() - interval '20 days',
  19
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000033',
  '10000000-0000-0000-0000-00000000000f',
  'Firmware Engineer',
  'Join DP World as a Firmware Engineer in Dubai, UAE. Key skills: C, Firmware, Microcontrollers. You will collaborate with dynamic regional teams on high-impact projects.',
  'Hardware',
  'Mid-level',
  ARRAY['C', 'Firmware', 'Microcontrollers']::text[],
  4,
  14000,
  18000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '21 days',
  38
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000034',
  '10000000-0000-0000-0000-000000000010',
  'FPGA Design Engineer',
  'Join Zain as a FPGA Design Engineer in Kuwait City, Kuwait. Key skills: FPGA, Verilog, Digital Design. You will collaborate with dynamic regional teams on high-impact projects.',
  'Hardware',
  'Senior',
  ARRAY['FPGA', 'Verilog', 'Digital Design']::text[],
  8,
  2300,
  2900,
  'KWD',
  'Onsite',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '22 days',
  57
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000035',
  '10000000-0000-0000-0000-000000000011',
  'PCB Design Engineer',
  'Join Omantel as a PCB Design Engineer in Muscat, Oman. Key skills: PCB, Altium, Electronics. You will collaborate with dynamic regional teams on high-impact projects.',
  'Electronics',
  'Mid-level',
  ARRAY['PCB', 'Altium', 'Electronics']::text[],
  4,
  1600,
  2100,
  'OMR',
  'Onsite',
  'Muscat, Oman',
  'Oman',
  now() - interval '23 days',
  76
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000036',
  '10000000-0000-0000-0000-000000000012',
  'Electronics Technician',
  'Join Bahrain Mumtalakat as a Electronics Technician in Manama, Bahrain. Key skills: Circuits, Testing, Repair. You will collaborate with dynamic regional teams on high-impact projects.',
  'Electronics',
  'Entry-level',
  ARRAY['Circuits', 'Testing', 'Repair']::text[],
  1,
  1100,
  1500,
  'BHD',
  'Onsite',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '24 days',
  95
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000037',
  '10000000-0000-0000-0000-000000000001',
  'Robotics Engineer',
  'Join Al Futtaim as a Robotics Engineer in Dubai, UAE. Key skills: ROS, Robotics, C++. You will collaborate with dynamic regional teams on high-impact projects.',
  'Robotics',
  'Senior',
  ARRAY['ROS', 'Robotics', 'C++']::text[],
  8,
  27000,
  35000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '25 days',
  22
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000038',
  '10000000-0000-0000-0000-000000000002',
  'IoT Solutions Engineer',
  'Join STC as a IoT Solutions Engineer in Riyadh, Saudi Arabia. Key skills: IoT, MQTT, Sensors. You will collaborate with dynamic regional teams on high-impact projects.',
  'IoT',
  'Mid-level',
  ARRAY['IoT', 'MQTT', 'Sensors']::text[],
  4,
  14000,
  18000,
  'SAR',
  'Hybrid',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '26 days',
  41
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000039',
  '10000000-0000-0000-0000-000000000003',
  'Automation Controls Engineer',
  'Join Saudi Aramco as a Automation Controls Engineer in Dhahran, Saudi Arabia. Key skills: PLC, SCADA, Controls. You will collaborate with dynamic regional teams on high-impact projects.',
  'Industrial Technology',
  'Senior',
  ARRAY['PLC', 'SCADA', 'Controls']::text[],
  8,
  25000,
  32000,
  'SAR',
  'Onsite',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '27 days',
  60
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000003a',
  '10000000-0000-0000-0000-000000000004',
  'Technical Product Manager',
  'Join G42 as a Technical Product Manager in Abu Dhabi, UAE. Key skills: Roadmaps, APIs, Stakeholders. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Senior',
  ARRAY['Roadmaps', 'APIs', 'Stakeholders']::text[],
  8,
  26000,
  33000,
  'AED',
  'Hybrid',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '28 days',
  79
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000003b',
  '10000000-0000-0000-0000-000000000005',
  'Product Operations Manager',
  'Join Qatar Airways as a Product Operations Manager in Doha, Qatar. Key skills: Operations, Product, Analytics. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Mid-level',
  ARRAY['Operations', 'Product', 'Analytics']::text[],
  4,
  17000,
  22000,
  'QAR',
  'Remote',
  'Doha, Qatar',
  'Qatar',
  now() - interval '29 days',
  98
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000003c',
  '10000000-0000-0000-0000-000000000006',
  'Technical Program Manager',
  'Join Emaar as a Technical Program Manager in Dubai, UAE. Key skills: Programs, Agile, Delivery. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Senior',
  ARRAY['Programs', 'Agile', 'Delivery']::text[],
  8,
  27000,
  35000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '30 days',
  25
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000003d',
  '10000000-0000-0000-0000-000000000007',
  'Solutions Consultant',
  'Join Careem as a Solutions Consultant in Riyadh, Saudi Arabia. Key skills: Solutions, Demos, Cloud. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Mid-level',
  ARRAY['Solutions', 'Demos', 'Cloud']::text[],
  4,
  14000,
  18000,
  'SAR',
  'Remote',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '1 days',
  44
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000003e',
  '10000000-0000-0000-0000-000000000008',
  'ERP Implementation Consultant',
  'Join Talabat as a ERP Implementation Consultant in Kuwait City, Kuwait. Key skills: SAP, ERP, Implementation. You will collaborate with dynamic regional teams on high-impact projects.',
  'Enterprise Technology',
  'Senior',
  ARRAY['SAP', 'ERP', 'Implementation']::text[],
  8,
  2300,
  2900,
  'KWD',
  'Hybrid',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '2 days',
  63
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000003f',
  '10000000-0000-0000-0000-000000000009',
  'Salesforce Administrator',
  'Join Honeywell as a Salesforce Administrator in Manama, Bahrain. Key skills: Salesforce, CRM, Automation. You will collaborate with dynamic regional teams on high-impact projects.',
  'Enterprise Technology',
  'Mid-level',
  ARRAY['Salesforce', 'CRM', 'Automation']::text[],
  4,
  1600,
  2100,
  'BHD',
  'Remote',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '3 days',
  82
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000040',
  '10000000-0000-0000-0000-00000000000a',
  'SAP Business Analyst',
  'Join Petrofac as a SAP Business Analyst in Muscat, Oman. Key skills: SAP, Business Analysis, ERP. You will collaborate with dynamic regional teams on high-impact projects.',
  'Enterprise Technology',
  'Mid-level',
  ARRAY['SAP', 'Business Analysis', 'ERP']::text[],
  4,
  1700,
  2200,
  'OMR',
  'Hybrid',
  'Muscat, Oman',
  'Oman',
  now() - interval '4 days',
  9
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000041',
  '10000000-0000-0000-0000-00000000000b',
  'Blockchain Developer',
  'Join Mubadala as a Blockchain Developer in Abu Dhabi, UAE. Key skills: Solidity, Web3, Smart Contracts. You will collaborate with dynamic regional teams on high-impact projects.',
  'Emerging Technology',
  'Mid-level',
  ARRAY['Solidity', 'Web3', 'Smart Contracts']::text[],
  4,
  18000,
  24000,
  'AED',
  'Remote',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '5 days',
  28
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000042',
  '10000000-0000-0000-0000-00000000000c',
  'AR/VR Developer',
  'Join Microsoft as a AR/VR Developer in Dubai, UAE. Key skills: Unity, AR, VR. You will collaborate with dynamic regional teams on high-impact projects.',
  'Emerging Technology',
  'Mid-level',
  ARRAY['Unity', 'AR', 'VR']::text[],
  4,
  14000,
  18000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '6 days',
  47
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000043',
  '10000000-0000-0000-0000-00000000000d',
  'Technical Writer',
  'Join Noon as a Technical Writer in Jeddah, Saudi Arabia. Key skills: Documentation, APIs, Writing. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Entry-level',
  ARRAY['Documentation', 'APIs', 'Writing']::text[],
  1,
  7000,
  9000,
  'SAR',
  'Remote',
  'Jeddah, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '7 days',
  66
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000044',
  '10000000-0000-0000-0000-00000000000e',
  'Release Engineer',
  'Join QatarEnergy as a Release Engineer in Doha, Qatar. Key skills: Releases, CI/CD, Automation. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Mid-level',
  ARRAY['Releases', 'CI/CD', 'Automation']::text[],
  4,
  16000,
  21000,
  'QAR',
  'Hybrid',
  'Doha, Qatar',
  'Qatar',
  now() - interval '8 days',
  85
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000045',
  '10000000-0000-0000-0000-00000000000f',
  'Build and Tools Engineer',
  'Join DP World as a Build and Tools Engineer in Dubai, UAE. Key skills: Build Systems, C++, Tooling. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Senior',
  ARRAY['Build Systems', 'C++', 'Tooling']::text[],
  8,
  26000,
  33000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '9 days',
  12
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000046',
  '10000000-0000-0000-0000-000000000010',
  'Observability Engineer',
  'Join Zain as a Observability Engineer in Kuwait City, Kuwait. Key skills: Grafana, Prometheus, Tracing. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Mid-level',
  ARRAY['Grafana', 'Prometheus', 'Tracing']::text[],
  4,
  1800,
  2400,
  'KWD',
  'Remote',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '10 days',
  31
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000047',
  '10000000-0000-0000-0000-000000000011',
  'Database Reliability Engineer',
  'Join Omantel as a Database Reliability Engineer in Muscat, Oman. Key skills: PostgreSQL, Backups, Reliability. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Senior',
  ARRAY['PostgreSQL', 'Backups', 'Reliability']::text[],
  8,
  2200,
  2800,
  'OMR',
  'Hybrid',
  'Muscat, Oman',
  'Oman',
  now() - interval '11 days',
  50
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000048',
  '10000000-0000-0000-0000-000000000012',
  'Virtualization Engineer',
  'Join Bahrain Mumtalakat as a Virtualization Engineer in Manama, Bahrain. Key skills: VMware, Linux, Datacenters. You will collaborate with dynamic regional teams on high-impact projects.',
  'Infrastructure',
  'Mid-level',
  ARRAY['VMware', 'Linux', 'Datacenters']::text[],
  4,
  1500,
  1900,
  'BHD',
  'Onsite',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '12 days',
  69
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000049',
  '10000000-0000-0000-0000-000000000001',
  'Storage Engineer',
  'Join Al Futtaim as a Storage Engineer in Dubai, UAE. Key skills: Storage, SAN, Backup. You will collaborate with dynamic regional teams on high-impact projects.',
  'Infrastructure',
  'Senior',
  ARRAY['Storage', 'SAN', 'Backup']::text[],
  8,
  26000,
  33000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '13 days',
  88
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000004a',
  '10000000-0000-0000-0000-000000000002',
  'IT Asset Manager',
  'Join STC as a IT Asset Manager in Riyadh, Saudi Arabia. Key skills: ITIL, Assets, Inventory. You will collaborate with dynamic regional teams on high-impact projects.',
  'Infrastructure',
  'Entry-level',
  ARRAY['ITIL', 'Assets', 'Inventory']::text[],
  1,
  9000,
  12000,
  'SAR',
  'Hybrid',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '14 days',
  15
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000004b',
  '10000000-0000-0000-0000-000000000003',
  'Service Desk Analyst',
  'Join Saudi Aramco as a Service Desk Analyst in Dhahran, Saudi Arabia. Key skills: Service Desk, Troubleshooting, ITIL. You will collaborate with dynamic regional teams on high-impact projects.',
  'Infrastructure',
  'Entry-level',
  ARRAY['Service Desk', 'Troubleshooting', 'ITIL']::text[],
  1,
  10000,
  14000,
  'SAR',
  'Onsite',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '15 days',
  34
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000004c',
  '10000000-0000-0000-0000-000000000004',
  'Network Security Engineer',
  'Join G42 as a Network Security Engineer in Abu Dhabi, UAE. Key skills: Firewalls, VPN, Network Security. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Senior',
  ARRAY['Firewalls', 'VPN', 'Network Security']::text[],
  8,
  24000,
  31000,
  'AED',
  'Onsite',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '16 days',
  53
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000004d',
  '10000000-0000-0000-0000-000000000005',
  'Threat Intelligence Analyst',
  'Join Qatar Airways as a Threat Intelligence Analyst in Doha, Qatar. Key skills: Threats, OSINT, Intelligence. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Mid-level',
  ARRAY['Threats', 'OSINT', 'Intelligence']::text[],
  4,
  15000,
  20000,
  'QAR',
  'Remote',
  'Doha, Qatar',
  'Qatar',
  now() - interval '17 days',
  72
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000004e',
  '10000000-0000-0000-0000-000000000006',
  'Digital Forensics Analyst',
  'Join Emaar as a Digital Forensics Analyst in Dubai, UAE. Key skills: Forensics, Evidence, Investigations. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Mid-level',
  ARRAY['Forensics', 'Evidence', 'Investigations']::text[],
  4,
  16000,
  21000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '18 days',
  91
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000004f',
  '10000000-0000-0000-0000-000000000007',
  'Privacy Compliance Analyst',
  'Join Careem as a Privacy Compliance Analyst in Riyadh, Saudi Arabia. Key skills: Privacy, GDPR, Compliance. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Entry-level',
  ARRAY['Privacy', 'GDPR', 'Compliance']::text[],
  1,
  9000,
  12000,
  'SAR',
  'Hybrid',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '19 days',
  18
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000050',
  '10000000-0000-0000-0000-000000000008',
  'Security Operations Engineer',
  'Join Talabat as a Security Operations Engineer in Kuwait City, Kuwait. Key skills: SOC, SIEM, Detection. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Mid-level',
  ARRAY['SOC', 'SIEM', 'Detection']::text[],
  4,
  1800,
  2400,
  'KWD',
  'Onsite',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '20 days',
  37
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000051',
  '10000000-0000-0000-0000-000000000009',
  'Data Governance Manager',
  'Join Honeywell as a Data Governance Manager in Manama, Bahrain. Key skills: Governance, Metadata, Policy. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Senior',
  ARRAY['Governance', 'Metadata', 'Policy']::text[],
  8,
  2200,
  2800,
  'BHD',
  'Hybrid',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '21 days',
  56
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000052',
  '10000000-0000-0000-0000-00000000000a',
  'Master Data Specialist',
  'Join Petrofac as a Master Data Specialist in Muscat, Oman. Key skills: Master Data, Quality, ERP. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Mid-level',
  ARRAY['Master Data', 'Quality', 'ERP']::text[],
  4,
  1500,
  1900,
  'OMR',
  'Onsite',
  'Muscat, Oman',
  'Oman',
  now() - interval '22 days',
  75
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000053',
  '10000000-0000-0000-0000-00000000000b',
  'ETL Developer',
  'Join Mubadala as a ETL Developer in Abu Dhabi, UAE. Key skills: ETL, SQL, Informatica. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Mid-level',
  ARRAY['ETL', 'SQL', 'Informatica']::text[],
  4,
  16000,
  21000,
  'AED',
  'Hybrid',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '23 days',
  94
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000054',
  '10000000-0000-0000-0000-00000000000c',
  'Streaming Data Engineer',
  'Join Microsoft as a Streaming Data Engineer in Dubai, UAE. Key skills: Kafka, Flink, Streaming. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Senior',
  ARRAY['Kafka', 'Flink', 'Streaming']::text[],
  8,
  26000,
  33000,
  'AED',
  'Remote',
  'Dubai, UAE',
  'UAE',
  now() - interval '24 days',
  21
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000055',
  '10000000-0000-0000-0000-00000000000d',
  'Geospatial Data Analyst',
  'Join Noon as a Geospatial Data Analyst in Jeddah, Saudi Arabia. Key skills: GIS, Maps, Spatial Data. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Entry-level',
  ARRAY['GIS', 'Maps', 'Spatial Data']::text[],
  1,
  10000,
  14000,
  'SAR',
  'Onsite',
  'Jeddah, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '25 days',
  40
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000056',
  '10000000-0000-0000-0000-00000000000e',
  'Computer Vision Research Assistant',
  'Join QatarEnergy as a Computer Vision Research Assistant in Doha, Qatar. Key skills: Computer Vision, Research, Python. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Entry-level',
  ARRAY['Computer Vision', 'Research', 'Python']::text[],
  1,
  6000,
  8000,
  'QAR',
  'Hybrid',
  'Doha, Qatar',
  'Qatar',
  now() - interval '26 days',
  59
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000057',
  '10000000-0000-0000-0000-00000000000f',
  'MLOps Engineer',
  'Join DP World as a MLOps Engineer in Dubai, UAE. Key skills: MLOps, Model Serving, Docker. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['MLOps', 'Model Serving', 'Docker']::text[],
  8,
  25000,
  32000,
  'AED',
  'Remote',
  'Dubai, UAE',
  'UAE',
  now() - interval '27 days',
  78
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000058',
  '10000000-0000-0000-0000-000000000010',
  'Responsible AI Specialist',
  'Join Zain as a Responsible AI Specialist in Kuwait City, Kuwait. Key skills: AI Ethics, Policy, Risk. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Mid-level',
  ARRAY['AI Ethics', 'Policy', 'Risk']::text[],
  4,
  1600,
  2100,
  'KWD',
  'Hybrid',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '28 days',
  97
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000059',
  '10000000-0000-0000-0000-000000000011',
  'AI Evaluation Analyst',
  'Join Omantel as a AI Evaluation Analyst in Muscat, Oman. Key skills: Evaluation, LLMs, Quality. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Entry-level',
  ARRAY['Evaluation', 'LLMs', 'Quality']::text[],
  1,
  1100,
  1500,
  'OMR',
  'Remote',
  'Muscat, Oman',
  'Oman',
  now() - interval '29 days',
  24
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000005a',
  '10000000-0000-0000-0000-000000000012',
  'Speech Recognition Engineer',
  'Join Bahrain Mumtalakat as a Speech Recognition Engineer in Manama, Bahrain. Key skills: Speech, Audio, Deep Learning. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['Speech', 'Audio', 'Deep Learning']::text[],
  8,
  2500,
  3100,
  'BHD',
  'Hybrid',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '30 days',
  43
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000005b',
  '10000000-0000-0000-0000-000000000001',
  'Recommendation Systems Engineer',
  'Join Al Futtaim as a Recommendation Systems Engineer in Dubai, UAE. Key skills: Recommendations, Python, Ranking. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['Recommendations', 'Python', 'Ranking']::text[],
  8,
  24000,
  31000,
  'AED',
  'Remote',
  'Dubai, UAE',
  'UAE',
  now() - interval '1 days',
  62
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000005c',
  '10000000-0000-0000-0000-000000000002',
  'Applied Scientist',
  'Join STC as a Applied Scientist in Riyadh, Saudi Arabia. Key skills: Experiments, Statistics, Machine Learning. You will collaborate with dynamic regional teams on high-impact projects.',
  'AI',
  'Senior',
  ARRAY['Experiments', 'Statistics', 'Machine Learning']::text[],
  8,
  25000,
  32000,
  'SAR',
  'Onsite',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '2 days',
  81
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000005d',
  '10000000-0000-0000-0000-000000000003',
  'Digital Twin Engineer',
  'Join Saudi Aramco as a Digital Twin Engineer in Dhahran, Saudi Arabia. Key skills: Digital Twins, IoT, Simulation. You will collaborate with dynamic regional teams on high-impact projects.',
  'Industrial Technology',
  'Mid-level',
  ARRAY['Digital Twins', 'IoT', 'Simulation']::text[],
  4,
  16000,
  21000,
  'SAR',
  'Hybrid',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '3 days',
  8
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000005e',
  '10000000-0000-0000-0000-000000000004',
  'Industrial IoT Architect',
  'Join G42 as a Industrial IoT Architect in Abu Dhabi, UAE. Key skills: IIoT, Edge, Architecture. You will collaborate with dynamic regional teams on high-impact projects.',
  'Industrial Technology',
  'Senior',
  ARRAY['IIoT', 'Edge', 'Architecture']::text[],
  8,
  26000,
  33000,
  'AED',
  'Onsite',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '4 days',
  27
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000005f',
  '10000000-0000-0000-0000-000000000005',
  'SCADA Engineer',
  'Join Qatar Airways as a SCADA Engineer in Doha, Qatar. Key skills: SCADA, PLC, Industrial Networks. You will collaborate with dynamic regional teams on high-impact projects.',
  'Industrial Technology',
  'Mid-level',
  ARRAY['SCADA', 'PLC', 'Industrial Networks']::text[],
  4,
  18000,
  24000,
  'QAR',
  'Onsite',
  'Doha, Qatar',
  'Qatar',
  now() - interval '5 days',
  46
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000060',
  '10000000-0000-0000-0000-000000000006',
  'Manufacturing Systems Engineer',
  'Join Emaar as a Manufacturing Systems Engineer in Dubai, UAE. Key skills: MES, Manufacturing, Automation. You will collaborate with dynamic regional teams on high-impact projects.',
  'Industrial Technology',
  'Senior',
  ARRAY['MES', 'Manufacturing', 'Automation']::text[],
  8,
  24000,
  31000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '6 days',
  65
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000061',
  '10000000-0000-0000-0000-000000000007',
  'Mechatronics Engineer',
  'Join Careem as a Mechatronics Engineer in Riyadh, Saudi Arabia. Key skills: Mechatronics, Robotics, CAD. You will collaborate with dynamic regional teams on high-impact projects.',
  'Robotics',
  'Entry-level',
  ARRAY['Mechatronics', 'Robotics', 'CAD']::text[],
  1,
  7000,
  9000,
  'SAR',
  'Onsite',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '7 days',
  84
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000062',
  '10000000-0000-0000-0000-000000000008',
  'Autonomous Systems Engineer',
  'Join Talabat as a Autonomous Systems Engineer in Kuwait City, Kuwait. Key skills: Autonomy, C++, Robotics. You will collaborate with dynamic regional teams on high-impact projects.',
  'Robotics',
  'Senior',
  ARRAY['Autonomy', 'C++', 'Robotics']::text[],
  8,
  2400,
  3000,
  'KWD',
  'Hybrid',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '8 days',
  11
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000063',
  '10000000-0000-0000-0000-000000000009',
  'Drone Systems Technician',
  'Join Honeywell as a Drone Systems Technician in Manama, Bahrain. Key skills: Drones, Electronics, Maintenance. You will collaborate with dynamic regional teams on high-impact projects.',
  'Robotics',
  'Entry-level',
  ARRAY['Drones', 'Electronics', 'Maintenance']::text[],
  1,
  1100,
  1500,
  'BHD',
  'Onsite',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '9 days',
  30
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000064',
  '10000000-0000-0000-0000-00000000000a',
  'Computer Hardware Technician',
  'Join Petrofac as a Computer Hardware Technician in Muscat, Oman. Key skills: PC Hardware, Diagnostics, Repair. You will collaborate with dynamic regional teams on high-impact projects.',
  'Hardware',
  'Entry-level',
  ARRAY['PC Hardware', 'Diagnostics', 'Repair']::text[],
  1,
  1100,
  1600,
  'OMR',
  'Onsite',
  'Muscat, Oman',
  'Oman',
  now() - interval '10 days',
  49
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000065',
  '10000000-0000-0000-0000-00000000000b',
  'Semiconductor Process Engineer',
  'Join Mubadala as a Semiconductor Process Engineer in Abu Dhabi, UAE. Key skills: Semiconductors, Process, Yield. You will collaborate with dynamic regional teams on high-impact projects.',
  'Hardware',
  'Senior',
  ARRAY['Semiconductors', 'Process', 'Yield']::text[],
  8,
  24000,
  31000,
  'AED',
  'Onsite',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '11 days',
  68
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000066',
  '10000000-0000-0000-0000-00000000000c',
  'ASIC Verification Engineer',
  'Join Microsoft as a ASIC Verification Engineer in Dubai, UAE. Key skills: ASIC, SystemVerilog, Verification. You will collaborate with dynamic regional teams on high-impact projects.',
  'Hardware',
  'Senior',
  ARRAY['ASIC', 'SystemVerilog', 'Verification']::text[],
  8,
  25000,
  32000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '12 days',
  87
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000067',
  '10000000-0000-0000-0000-00000000000d',
  'RF Engineer',
  'Join Noon as a RF Engineer in Jeddah, Saudi Arabia. Key skills: RF, Wireless, Testing. You will collaborate with dynamic regional teams on high-impact projects.',
  'Electronics',
  'Mid-level',
  ARRAY['RF', 'Wireless', 'Testing']::text[],
  4,
  16000,
  21000,
  'SAR',
  'Onsite',
  'Jeddah, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '13 days',
  14
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000068',
  '10000000-0000-0000-0000-00000000000e',
  'Power Electronics Engineer',
  'Join QatarEnergy as a Power Electronics Engineer in Doha, Qatar. Key skills: Power, Converters, Electronics. You will collaborate with dynamic regional teams on high-impact projects.',
  'Electronics',
  'Mid-level',
  ARRAY['Power', 'Converters', 'Electronics']::text[],
  4,
  17000,
  22000,
  'QAR',
  'Onsite',
  'Doha, Qatar',
  'Qatar',
  now() - interval '14 days',
  33
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000069',
  '10000000-0000-0000-0000-00000000000f',
  'Technical Support Engineer',
  'Join DP World as a Technical Support Engineer in Dubai, UAE. Key skills: Troubleshooting, APIs, Support. You will collaborate with dynamic regional teams on high-impact projects.',
  'Customer Technology',
  'Entry-level',
  ARRAY['Troubleshooting', 'APIs', 'Support']::text[],
  1,
  10000,
  14000,
  'AED',
  'Remote',
  'Dubai, UAE',
  'UAE',
  now() - interval '15 days',
  52
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000006a',
  '10000000-0000-0000-0000-000000000010',
  'Implementation Engineer',
  'Join Zain as a Implementation Engineer in Kuwait City, Kuwait. Key skills: Implementation, Integrations, APIs. You will collaborate with dynamic regional teams on high-impact projects.',
  'Customer Technology',
  'Mid-level',
  ARRAY['Implementation', 'Integrations', 'APIs']::text[],
  4,
  1400,
  1800,
  'KWD',
  'Hybrid',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '16 days',
  71
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000006b',
  '10000000-0000-0000-0000-000000000011',
  'Solutions Architect Associate',
  'Join Omantel as a Solutions Architect Associate in Muscat, Oman. Key skills: Architecture, Cloud, Demos. You will collaborate with dynamic regional teams on high-impact projects.',
  'Customer Technology',
  'Entry-level',
  ARRAY['Architecture', 'Cloud', 'Demos']::text[],
  1,
  1000,
  1400,
  'OMR',
  'Hybrid',
  'Muscat, Oman',
  'Oman',
  now() - interval '17 days',
  90
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000006c',
  '10000000-0000-0000-0000-000000000012',
  'Pre-Sales Solutions Engineer',
  'Join Bahrain Mumtalakat as a Pre-Sales Solutions Engineer in Manama, Bahrain. Key skills: Pre-Sales, Demos, Technical Sales. You will collaborate with dynamic regional teams on high-impact projects.',
  'Customer Technology',
  'Mid-level',
  ARRAY['Pre-Sales', 'Demos', 'Technical Sales']::text[],
  4,
  1600,
  2100,
  'BHD',
  'Remote',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '18 days',
  17
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000006d',
  '10000000-0000-0000-0000-000000000001',
  'Developer Relations Engineer',
  'Join Al Futtaim as a Developer Relations Engineer in Dubai, UAE. Key skills: Community, APIs, Presentations. You will collaborate with dynamic regional teams on high-impact projects.',
  'Developer Experience',
  'Mid-level',
  ARRAY['Community', 'APIs', 'Presentations']::text[],
  4,
  17000,
  22000,
  'AED',
  'Remote',
  'Dubai, UAE',
  'UAE',
  now() - interval '19 days',
  36
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000006e',
  '10000000-0000-0000-0000-000000000002',
  'Open Source Program Manager',
  'Join STC as a Open Source Program Manager in Riyadh, Saudi Arabia. Key skills: Open Source, Community, Programs. You will collaborate with dynamic regional teams on high-impact projects.',
  'Developer Experience',
  'Senior',
  ARRAY['Open Source', 'Community', 'Programs']::text[],
  8,
  27000,
  35000,
  'SAR',
  'Remote',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '20 days',
  55
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000006f',
  '10000000-0000-0000-0000-000000000003',
  'Engineering Manager',
  'Join Saudi Aramco as a Engineering Manager in Dhahran, Saudi Arabia. Key skills: Leadership, Architecture, Delivery. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Senior',
  ARRAY['Leadership', 'Architecture', 'Delivery']::text[],
  8,
  24000,
  31000,
  'SAR',
  'Hybrid',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '21 days',
  74
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000070',
  '10000000-0000-0000-0000-000000000004',
  'Technical Lead',
  'Join G42 as a Technical Lead in Abu Dhabi, UAE. Key skills: Leadership, Code Review, Architecture. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Senior',
  ARRAY['Leadership', 'Code Review', 'Architecture']::text[],
  8,
  25000,
  32000,
  'AED',
  'Onsite',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '22 days',
  93
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000071',
  '10000000-0000-0000-0000-000000000005',
  'Software Engineering Intern',
  'Join Qatar Airways as a Software Engineering Intern in Doha, Qatar. Key skills: Git, Programming, Testing. You will collaborate with dynamic regional teams on high-impact projects.',
  'Software Engineering',
  'Entry-level',
  ARRAY['Git', 'Programming', 'Testing']::text[],
  1,
  8000,
  11000,
  'QAR',
  'Hybrid',
  'Doha, Qatar',
  'Qatar',
  now() - interval '23 days',
  20
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000072',
  '10000000-0000-0000-0000-000000000006',
  'Data Engineering Intern',
  'Join Emaar as a Data Engineering Intern in Dubai, UAE. Key skills: Python, SQL, Pipelines. You will collaborate with dynamic regional teams on high-impact projects.',
  'Data',
  'Entry-level',
  ARRAY['Python', 'SQL', 'Pipelines']::text[],
  1,
  9000,
  12000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '24 days',
  39
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000073',
  '10000000-0000-0000-0000-000000000007',
  'Cloud Support Associate',
  'Join Careem as a Cloud Support Associate in Riyadh, Saudi Arabia. Key skills: Cloud, Linux, Support. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cloud & Infrastructure',
  'Entry-level',
  ARRAY['Cloud', 'Linux', 'Support']::text[],
  1,
  10000,
  14000,
  'SAR',
  'Remote',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '25 days',
  58
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000074',
  '10000000-0000-0000-0000-000000000008',
  'Cybersecurity Intern',
  'Join Talabat as a Cybersecurity Intern in Kuwait City, Kuwait. Key skills: Security, Networking, Research. You will collaborate with dynamic regional teams on high-impact projects.',
  'Cybersecurity',
  'Entry-level',
  ARRAY['Security', 'Networking', 'Research']::text[],
  1,
  950,
  1300,
  'KWD',
  'Hybrid',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '26 days',
  77
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000075',
  '10000000-0000-0000-0000-000000000009',
  'UX Engineer',
  'Join Honeywell as a UX Engineer in Manama, Bahrain. Key skills: CSS, Accessibility, Design Systems. You will collaborate with dynamic regional teams on high-impact projects.',
  'Design Technology',
  'Mid-level',
  ARRAY['CSS', 'Accessibility', 'Design Systems']::text[],
  4,
  1500,
  1900,
  'BHD',
  'Remote',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '27 days',
  96
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000076',
  '10000000-0000-0000-0000-00000000000a',
  'Design Systems Engineer',
  'Join Petrofac as a Design Systems Engineer in Muscat, Oman. Key skills: Design Systems, React, Accessibility. You will collaborate with dynamic regional teams on high-impact projects.',
  'Design Technology',
  'Senior',
  ARRAY['Design Systems', 'React', 'Accessibility']::text[],
  8,
  2400,
  3000,
  'OMR',
  'Hybrid',
  'Muscat, Oman',
  'Oman',
  now() - interval '28 days',
  23
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000077',
  '10000000-0000-0000-0000-00000000000b',
  'Accessibility Specialist',
  'Join Mubadala as a Accessibility Specialist in Abu Dhabi, UAE. Key skills: Accessibility, WCAG, Testing. You will collaborate with dynamic regional teams on high-impact projects.',
  'Design Technology',
  'Mid-level',
  ARRAY['Accessibility', 'WCAG', 'Testing']::text[],
  4,
  17000,
  22000,
  'AED',
  'Remote',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '29 days',
  42
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000078',
  '10000000-0000-0000-0000-00000000000c',
  'Technical Project Coordinator',
  'Join Microsoft as a Technical Project Coordinator in Dubai, UAE. Key skills: Agile, Jira, Coordination. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Entry-level',
  ARRAY['Agile', 'Jira', 'Coordination']::text[],
  1,
  10000,
  14000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '30 days',
  61
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000079',
  '10000000-0000-0000-0000-00000000000d',
  'Technology Change Manager',
  'Join Noon as a Technology Change Manager in Jeddah, Saudi Arabia. Key skills: Change, Transformation, Communication. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology',
  'Senior',
  ARRAY['Change', 'Transformation', 'Communication']::text[],
  8,
  24000,
  31000,
  'SAR',
  'Hybrid',
  'Jeddah, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '1 days',
  80
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000007a',
  '10000000-0000-0000-0000-00000000000e',
  'IT Procurement Analyst',
  'Join QatarEnergy as a IT Procurement Analyst in Doha, Qatar. Key skills: Procurement, Vendors, IT. You will collaborate with dynamic regional teams on high-impact projects.',
  'Enterprise Technology',
  'Entry-level',
  ARRAY['Procurement', 'Vendors', 'IT']::text[],
  1,
  7000,
  9000,
  'QAR',
  'Onsite',
  'Doha, Qatar',
  'Qatar',
  now() - interval '2 days',
  99
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000007b',
  '10000000-0000-0000-0000-00000000000f',
  'Enterprise Architect',
  'Join DP World as a Enterprise Architect in Dubai, UAE. Key skills: Architecture, Governance, Strategy. You will collaborate with dynamic regional teams on high-impact projects.',
  'Enterprise Technology',
  'Senior',
  ARRAY['Architecture', 'Governance', 'Strategy']::text[],
  8,
  26000,
  33000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '3 days',
  26
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000007c',
  '10000000-0000-0000-0000-000000000010',
  'CRM Integration Engineer',
  'Join Zain as a CRM Integration Engineer in Kuwait City, Kuwait. Key skills: CRM, Integrations, APIs. You will collaborate with dynamic regional teams on high-impact projects.',
  'Enterprise Technology',
  'Mid-level',
  ARRAY['CRM', 'Integrations', 'APIs']::text[],
  4,
  1700,
  2200,
  'KWD',
  'Remote',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '4 days',
  45
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000007d',
  '10000000-0000-0000-0000-000000000011',
  'Technology Risk Analyst',
  'Join Omantel as a Technology Risk Analyst in Muscat, Oman. Key skills: Risk, Controls, Technology. You will collaborate with dynamic regional teams on high-impact projects.',
  'Technology Risk',
  'Entry-level',
  ARRAY['Risk', 'Controls', 'Technology']::text[],
  1,
  1100,
  1600,
  'OMR',
  'Hybrid',
  'Muscat, Oman',
  'Oman',
  now() - interval '5 days',
  64
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000007e',
  '10000000-0000-0000-0000-000000000012',
  'Digital Transformation Analyst',
  'Join Bahrain Mumtalakat as a Digital Transformation Analyst in Manama, Bahrain. Key skills: Transformation, Process, Analysis. You will collaborate with dynamic regional teams on high-impact projects.',
  'Digital Transformation',
  'Mid-level',
  ARRAY['Transformation', 'Process', 'Analysis']::text[],
  4,
  1400,
  1800,
  'BHD',
  'Hybrid',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '6 days',
  83
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000007f',
  '10000000-0000-0000-0000-000000000001',
  'Petroleum Engineer',
  'Join Al Futtaim as a Petroleum Engineer in Dubai, UAE. Key skills: Reservoirs, Drilling, Production. You will collaborate with dynamic regional teams on high-impact projects.',
  'Petroleum',
  'Senior',
  ARRAY['Reservoirs', 'Drilling', 'Production']::text[],
  8,
  25000,
  32000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '7 days',
  10
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000080',
  '10000000-0000-0000-0000-000000000002',
  'Drilling Engineer',
  'Join STC as a Drilling Engineer in Riyadh, Saudi Arabia. Key skills: Drilling, Well Design, Safety. You will collaborate with dynamic regional teams on high-impact projects.',
  'Petroleum',
  'Mid-level',
  ARRAY['Drilling', 'Well Design', 'Safety']::text[],
  4,
  16000,
  21000,
  'SAR',
  'Onsite',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '8 days',
  29
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000081',
  '10000000-0000-0000-0000-000000000003',
  'Refinery Process Engineer',
  'Join Saudi Aramco as a Refinery Process Engineer in Dhahran, Saudi Arabia. Key skills: Process, Refining, Operations. You will collaborate with dynamic regional teams on high-impact projects.',
  'Petroleum',
  'Mid-level',
  ARRAY['Process', 'Refining', 'Operations']::text[],
  4,
  17000,
  22000,
  'SAR',
  'Onsite',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '9 days',
  48
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000082',
  '10000000-0000-0000-0000-000000000004',
  'Construction Project Manager',
  'Join G42 as a Construction Project Manager in Abu Dhabi, UAE. Key skills: Construction, Planning, Leadership. You will collaborate with dynamic regional teams on high-impact projects.',
  'Construction',
  'Senior',
  ARRAY['Construction', 'Planning', 'Leadership']::text[],
  8,
  27000,
  35000,
  'AED',
  'Onsite',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '10 days',
  67
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000083',
  '10000000-0000-0000-0000-000000000005',
  'Site Engineer',
  'Join Qatar Airways as a Site Engineer in Doha, Qatar. Key skills: Civil, Site Safety, AutoCAD. You will collaborate with dynamic regional teams on high-impact projects.',
  'Construction',
  'Entry-level',
  ARRAY['Civil', 'Site Safety', 'AutoCAD']::text[],
  1,
  6000,
  8000,
  'QAR',
  'Onsite',
  'Doha, Qatar',
  'Qatar',
  now() - interval '11 days',
  86
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000084',
  '10000000-0000-0000-0000-000000000006',
  'Quantity Surveyor',
  'Join Emaar as a Quantity Surveyor in Dubai, UAE. Key skills: Cost Control, Contracts, BOQ. You will collaborate with dynamic regional teams on high-impact projects.',
  'Construction',
  'Mid-level',
  ARRAY['Cost Control', 'Contracts', 'BOQ']::text[],
  4,
  15000,
  20000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '12 days',
  13
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000085',
  '10000000-0000-0000-0000-000000000007',
  'Growth Marketing Manager',
  'Join Careem as a Growth Marketing Manager in Riyadh, Saudi Arabia. Key skills: Growth, Performance, Analytics. You will collaborate with dynamic regional teams on high-impact projects.',
  'Marketing',
  'Mid-level',
  ARRAY['Growth', 'Performance', 'Analytics']::text[],
  4,
  16000,
  21000,
  'SAR',
  'Hybrid',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '13 days',
  32
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000086',
  '10000000-0000-0000-0000-000000000008',
  'Social Media Coordinator',
  'Join Talabat as a Social Media Coordinator in Kuwait City, Kuwait. Key skills: Content, Social, Arabic. You will collaborate with dynamic regional teams on high-impact projects.',
  'Marketing',
  'Entry-level',
  ARRAY['Content', 'Social', 'Arabic']::text[],
  1,
  1100,
  1500,
  'KWD',
  'Remote',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '14 days',
  51
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000087',
  '10000000-0000-0000-0000-000000000009',
  'Enterprise Sales Executive',
  'Join Honeywell as a Enterprise Sales Executive in Manama, Bahrain. Key skills: B2B, CRM, Negotiation. You will collaborate with dynamic regional teams on high-impact projects.',
  'Sales',
  'Mid-level',
  ARRAY['B2B', 'CRM', 'Negotiation']::text[],
  4,
  1800,
  2400,
  'BHD',
  'Hybrid',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '15 days',
  70
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000088',
  '10000000-0000-0000-0000-00000000000a',
  'Sales Development Representative',
  'Join Petrofac as a Sales Development Representative in Muscat, Oman. Key skills: Prospecting, Outreach, CRM. You will collaborate with dynamic regional teams on high-impact projects.',
  'Sales',
  'Entry-level',
  ARRAY['Prospecting', 'Outreach', 'CRM']::text[],
  1,
  950,
  1300,
  'OMR',
  'Remote',
  'Muscat, Oman',
  'Oman',
  now() - interval '16 days',
  89
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000089',
  '10000000-0000-0000-0000-00000000000b',
  'Delivery Driver',
  'Join Mubadala as a Delivery Driver in Abu Dhabi, UAE. Key skills: Driving, Logistics, Customer Service. You will collaborate with dynamic regional teams on high-impact projects.',
  'Delivery Driver',
  'Entry-level',
  ARRAY['Driving', 'Logistics', 'Customer Service']::text[],
  1,
  7000,
  9000,
  'AED',
  'Onsite',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '17 days',
  16
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000008a',
  '10000000-0000-0000-0000-00000000000c',
  'Fleet Coordinator',
  'Join Microsoft as a Fleet Coordinator in Dubai, UAE. Key skills: Routing, Dispatch, Operations. You will collaborate with dynamic regional teams on high-impact projects.',
  'Delivery Driver',
  'Mid-level',
  ARRAY['Routing', 'Dispatch', 'Operations']::text[],
  4,
  16000,
  21000,
  'AED',
  'Onsite',
  'Dubai, UAE',
  'UAE',
  now() - interval '18 days',
  35
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000008b',
  '10000000-0000-0000-0000-00000000000d',
  'Mechanical Design Engineer',
  'Join Noon as a Mechanical Design Engineer in Jeddah, Saudi Arabia. Key skills: CAD, Design, Manufacturing. You will collaborate with dynamic regional teams on high-impact projects.',
  'Mechanical',
  'Mid-level',
  ARRAY['CAD', 'Design', 'Manufacturing']::text[],
  4,
  17000,
  22000,
  'SAR',
  'Hybrid',
  'Jeddah, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '19 days',
  54
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000008c',
  '10000000-0000-0000-0000-00000000000e',
  'Maintenance Engineer',
  'Join QatarEnergy as a Maintenance Engineer in Doha, Qatar. Key skills: Maintenance, Reliability, Safety. You will collaborate with dynamic regional teams on high-impact projects.',
  'Mechanical',
  'Senior',
  ARRAY['Maintenance', 'Reliability', 'Safety']::text[],
  8,
  27000,
  35000,
  'QAR',
  'Onsite',
  'Doha, Qatar',
  'Qatar',
  now() - interval '20 days',
  73
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000008d',
  '10000000-0000-0000-0000-00000000000f',
  'Strategy Consultant',
  'Join DP World as a Strategy Consultant in Dubai, UAE. Key skills: Strategy, Research, Presentations. You will collaborate with dynamic regional teams on high-impact projects.',
  'Consulting',
  'Senior',
  ARRAY['Strategy', 'Research', 'Presentations']::text[],
  8,
  24000,
  31000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '21 days',
  92
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000008e',
  '10000000-0000-0000-0000-000000000010',
  'Financial Analyst',
  'Join Zain as a Financial Analyst in Kuwait City, Kuwait. Key skills: Finance, Excel, Forecasting. You will collaborate with dynamic regional teams on high-impact projects.',
  'Finance',
  'Entry-level',
  ARRAY['Finance', 'Excel', 'Forecasting']::text[],
  1,
  1000,
  1400,
  'KWD',
  'Hybrid',
  'Kuwait City, Kuwait',
  'Kuwait',
  now() - interval '22 days',
  19
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-00000000008f',
  '10000000-0000-0000-0000-000000000011',
  'Supply Chain Specialist',
  'Join Omantel as a Supply Chain Specialist in Muscat, Oman. Key skills: Supply Chain, Inventory, Planning. You will collaborate with dynamic regional teams on high-impact projects.',
  'Logistics',
  'Mid-level',
  ARRAY['Supply Chain', 'Inventory', 'Planning']::text[],
  4,
  1600,
  2100,
  'OMR',
  'Hybrid',
  'Muscat, Oman',
  'Oman',
  now() - interval '23 days',
  38
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000090',
  '10000000-0000-0000-0000-000000000012',
  'People & Culture Partner',
  'Join Bahrain Mumtalakat as a People & Culture Partner in Manama, Bahrain. Key skills: People, Culture, HR. You will collaborate with dynamic regional teams on high-impact projects.',
  'Human Resources',
  'Senior',
  ARRAY['People', 'Culture', 'HR']::text[],
  8,
  2500,
  3000,
  'BHD',
  'Hybrid',
  'Manama, Bahrain',
  'Bahrain',
  now() - interval '24 days',
  57
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000091',
  '10000000-0000-0000-0000-000000000001',
  'UX Researcher',
  'Join Al Futtaim as a UX Researcher in Dubai, UAE. Key skills: Research, Interviews, Figma. You will collaborate with dynamic regional teams on high-impact projects.',
  'Design',
  'Mid-level',
  ARRAY['Research', 'Interviews', 'Figma']::text[],
  4,
  18000,
  24000,
  'AED',
  'Remote',
  'Dubai, UAE',
  'UAE',
  now() - interval '25 days',
  76
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000092',
  '10000000-0000-0000-0000-000000000002',
  'Customer Success Associate',
  'Join STC as a Customer Success Associate in Riyadh, Saudi Arabia. Key skills: Support, Onboarding, CRM. You will collaborate with dynamic regional teams on high-impact projects.',
  'Customer Service',
  'Entry-level',
  ARRAY['Support', 'Onboarding', 'CRM']::text[],
  1,
  6000,
  8000,
  'SAR',
  'Remote',
  'Riyadh, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '26 days',
  95
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000093',
  '10000000-0000-0000-0000-000000000003',
  'Renewable Energy Engineer',
  'Join Saudi Aramco as a Renewable Energy Engineer in Dhahran, Saudi Arabia. Key skills: Solar, Energy, Engineering. You will collaborate with dynamic regional teams on high-impact projects.',
  'Energy',
  'Mid-level',
  ARRAY['Solar', 'Energy', 'Engineering']::text[],
  4,
  15000,
  20000,
  'SAR',
  'Onsite',
  'Dhahran, Saudi Arabia',
  'Saudi Arabia',
  now() - interval '27 days',
  22
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000094',
  '10000000-0000-0000-0000-000000000004',
  'Healthcare Administrator',
  'Join G42 as a Healthcare Administrator in Abu Dhabi, UAE. Key skills: Healthcare, Scheduling, Records. You will collaborate with dynamic regional teams on high-impact projects.',
  'Healthcare',
  'Entry-level',
  ARRAY['Healthcare', 'Scheduling', 'Records']::text[],
  1,
  8000,
  11000,
  'AED',
  'Onsite',
  'Abu Dhabi, UAE',
  'UAE',
  now() - interval '28 days',
  41
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000095',
  '10000000-0000-0000-0000-000000000005',
  'Airport Operations Agent',
  'Join Qatar Airways as a Airport Operations Agent in Doha, Qatar. Key skills: Airports, Service, Coordination. You will collaborate with dynamic regional teams on high-impact projects.',
  'Aviation',
  'Entry-level',
  ARRAY['Airports', 'Service', 'Coordination']::text[],
  1,
  9000,
  12000,
  'QAR',
  'Onsite',
  'Doha, Qatar',
  'Qatar',
  now() - interval '29 days',
  60
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;
INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '20000000-0000-0000-0000-000000000096',
  '10000000-0000-0000-0000-000000000006',
  'Executive Assistant',
  'Join Emaar as a Executive Assistant in Dubai, UAE. Key skills: Organisation, Calendar, Communication. You will collaborate with dynamic regional teams on high-impact projects.',
  'Administration',
  'Entry-level',
  ARRAY['Organisation', 'Calendar', 'Communication']::text[],
  1,
  10000,
  14000,
  'AED',
  'Hybrid',
  'Dubai, UAE',
  'UAE',
  now() - interval '30 days',
  79
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;

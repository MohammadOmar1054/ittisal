import fs from "fs";
import path from "path";
import { jobs } from "../lib/jobs.js";

// Deterministic UUID generator from index
function makeUuid(prefix, index) {
  const hex = (index + 1).toString(16).padStart(12, "0");
  return `${prefix}-0000-0000-0000-${hex}`;
}

const companiesData = [
  ["Al Futtaim", "Dubai, UAE", "Retail & Conglomerate", "Al Futtaim is one of the most progressive regional family business houses headquartered in Dubai."],
  ["STC", "Riyadh, Saudi Arabia", "Telecommunications", "STC is a leading telecom and digital solutions provider across the Middle East."],
  ["Saudi Aramco", "Dhahran, Saudi Arabia", "Energy & Petroleum", "Saudi Aramco is a global energy and chemical company driving industrial innovation."],
  ["G42", "Abu Dhabi, UAE", "Artificial Intelligence & Cloud", "G42 is a leading AI and cloud computing company based in Abu Dhabi."],
  ["Qatar Airways", "Doha, Qatar", "Aviation & Travel", "Qatar Airways is the national airline of the State of Qatar, known for global connectivity."],
  ["Emaar", "Dubai, UAE", "Real Estate & Hospitality", "Emaar Properties is a pioneer developer shaping urban landscapes in Dubai."],
  ["Careem", "Riyadh, Saudi Arabia", "Super-App & Mobility", "Careem simplifies and improves the lives of people through everyday digital services."],
  ["Talabat", "Kuwait City, Kuwait", "Food & Q-Commerce", "Talabat is the leading on-demand food and grocery delivery platform in the region."],
  ["Honeywell", "Manama, Bahrain", "Industrial Technology", "Honeywell delivers industry-specific solutions including aerospace and building technologies."],
  ["Petrofac", "Muscat, Oman", "Energy Infrastructure", "Petrofac designs, builds, and maintains critical energy and infrastructure assets."],
  ["Mubadala", "Abu Dhabi, UAE", "Sovereign Investment", "Mubadala Investment Company invests globally to generate sustainable financial returns."],
  ["Microsoft", "Dubai, UAE", "Cloud & Enterprise Software", "Microsoft Middle East empowers organizations to achieve more with intelligent cloud."],
  ["Noon", "Jeddah, Saudi Arabia", "E-Commerce", "Noon is the homegrown digital marketplace and logistics network for the Arab world."],
  ["QatarEnergy", "Doha, Qatar", "Energy & LNG", "QatarEnergy is the premier integrated energy company responsible for the development of cleaner energy."],
  ["DP World", "Dubai, UAE", "Logistics & Supply Chain", "DP World enables global trade flows through smart logistics and terminal operations."],
  ["Zain", "Kuwait City, Kuwait", "Telecommunications", "Zain is a leading mobile voice and data services operator across the MENA region."],
  ["Omantel", "Muscat, Oman", "Telecommunications", "Omantel is the pioneer provider of integrated telecommunication services in the Sultanate of Oman."],
  ["Bahrain Mumtalakat", "Manama, Bahrain", "Sovereign Wealth", "Mumtalakat is the sovereign wealth fund of the Kingdom of Bahrain investing locally and internationally."]
];

const companyMap = new Map();
companiesData.forEach(([name, location, industry, about], idx) => {
  const id = makeUuid("10000000", idx);
  companyMap.set(name, { id, name, location, industry, about });
});

let sql = `-- Seed data generated for ittisal Job Hunter Platform
-- Contains companies and 150+ GCC jobs with realistic salaries and currencies

-- 1. COMPANIES
`;

for (const company of companyMap.values()) {
  const escName = company.name.replace(/'/g, "''");
  const escLoc = company.location.replace(/'/g, "''");
  const escInd = company.industry.replace(/'/g, "''");
  const escAbout = company.about.replace(/'/g, "''");
  sql += `INSERT INTO public.companies (id, name, logo_url, industry, location, about)
VALUES ('${company.id}', '${escName}', null, '${escInd}', '${escLoc}', '${escAbout}')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  industry = EXCLUDED.industry,
  about = EXCLUDED.about;\n`;
}

sql += `\n-- 2. JOBS\n`;

jobs.forEach((job, idx) => {
  const jobId = makeUuid("20000000", idx);
  const company = companyMap.get(job.company);
  if (!company) return;

  const escTitle = job.title.replace(/'/g, "''");
  const escLoc = job.location.replace(/'/g, "''");
  const country = job.location.includes("UAE") ? "UAE"
    : job.location.includes("Saudi Arabia") ? "Saudi Arabia"
    : job.location.includes("Qatar") ? "Qatar"
    : job.location.includes("Kuwait") ? "Kuwait"
    : job.location.includes("Bahrain") ? "Bahrain"
    : "Oman";

  const expYears = job.level === "Entry-level" ? 1 : job.level === "Mid-level" ? 4 : 8;
  const currency = job.salary.split(" ")[0];

  // Parse salary min and max from salary string (e.g. "SAR 15k–20k", "KWD 950–1.3k")
  let salMin = job.salaryMin;
  let salMax = Math.round(salMin * 1.3);
  const parts = job.salary.replace(currency, "").trim().split("–");
  if (parts.length === 2) {
    const parseVal = (str) => {
      const trimmed = str.trim();
      if (trimmed.endsWith("k")) {
        return Math.round(parseFloat(trimmed.replace("k", "")) * 1000);
      }
      return parseInt(trimmed, 10);
    };
    const parsedMin = parseVal(parts[0]);
    const parsedMax = parseVal(parts[1]);
    if (!isNaN(parsedMin)) salMin = parsedMin;
    if (!isNaN(parsedMax)) salMax = parsedMax;
  }

  const skillsArray = `ARRAY[${job.skills.map(s => `'${s.replace(/'/g, "''")}'`).join(", ")}]::text[]`;
  const desc = `Join ${company.name} as a ${job.title} in ${job.location}. Key skills: ${job.skills.join(", ")}. You will collaborate with dynamic regional teams on high-impact projects.`.replace(/'/g, "''");
  const escCat = (job.category || "").replace(/'/g, "''");
  const escLevel = (job.level || "").replace(/'/g, "''");

  sql += `INSERT INTO public.jobs (
  id, company_id, title, description, category, level, required_skills, experience_years,
  salary_min, salary_max, currency, work_mode, location, country, posted_at, applicants_count
) VALUES (
  '${jobId}',
  '${company.id}',
  '${escTitle}',
  '${desc}',
  '${escCat}',
  '${escLevel}',
  ${skillsArray},
  ${expYears},
  ${salMin},
  ${salMax},
  '${currency}',
  '${job.mode}',
  '${escLoc}',
  '${country}',
  now() - interval '${job.days} days',
  ${job.applicants}
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max,
  currency = EXCLUDED.currency,
  applicants_count = EXCLUDED.applicants_count;\n`;
});

const outputPath = path.resolve("supabase/seed.sql");
fs.writeFileSync(outputPath, sql, "utf8");
console.log(`Generated ${outputPath} with ${jobs.length} jobs.`);

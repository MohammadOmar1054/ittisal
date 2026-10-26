const jobTemplates = [
  ["product-lead", "Senior Product Lead", "Al Futtaim", "Dubai, UAE", "Hybrid", "Senior", "AED 28k–36k", 28000, ["Product", "Strategy", "B2B"]],
  ["frontend-engineer", "Frontend Engineer", "STC", "Riyadh, Saudi Arabia", "Onsite", "Mid-level", "SAR 18k–25k", 18000, ["React", "Next.js", "TypeScript"]],
  ["growth-manager", "Growth Marketing Manager", "Qatar Airways", "Doha, Qatar", "Hybrid", "Mid-level", "QAR 20k–28k", 20000, ["Growth", "Performance", "Analytics"]],
  ["data-scientist", "Data Scientist", "Mubadala", "Abu Dhabi, UAE", "Onsite", "Senior", "AED 30k–42k", 30000, ["Python", "ML", "SQL"]],
  ["ux-designer", "Product Designer", "Zain", "Kuwait City, Kuwait", "Remote", "Mid-level", "KWD 1.8k–2.5k", 1800, ["UX", "Figma", "Research"]],
  ["finance-analyst", "Financial Analyst", "Bahrain Mumtalakat", "Manama, Bahrain", "Hybrid", "Entry-level", "BHD 1.2k–1.8k", 1200, ["Finance", "Excel", "Forecasting"]],
  ["operations-lead", "Operations Lead", "Omantel", "Muscat, Oman", "Onsite", "Senior", "OMR 2.2k–3.1k", 2200, ["Operations", "Leadership", "Scale"]],
  ["content-strategist", "Content Strategist", "Careem", "Riyadh, Saudi Arabia", "Remote", "Mid-level", "SAR 14k–20k", 14000, ["Content", "Arabic", "Brand"]],
  ["cloud-architect", "Cloud Solutions Architect", "Microsoft", "Dubai, UAE", "Hybrid", "Senior", "AED 35k–48k", 35000, ["Azure", "Cloud", "Architecture"]],
  ["people-partner", "People & Culture Partner", "QatarEnergy", "Doha, Qatar", "Hybrid", "Senior", "QAR 22k–30k", 22000, ["People", "Culture", "HR"]],
  ["mobile-engineer", "Mobile Engineer", "Noon", "Jeddah, Saudi Arabia", "Remote", "Mid-level", "SAR 17k–24k", 17000, ["React Native", "iOS", "Android"]],
  ["project-manager", "Project Manager", "Aldar", "Abu Dhabi, UAE", "Onsite", "Mid-level", "AED 22k–30k", 22000, ["Projects", "Agile", "Delivery"]]
];

export const jobs = Array.from({ length: 150 }, (_, index) => {
  const template = jobTemplates[index % jobTemplates.length];
  const cycle = Math.floor(index / jobTemplates.length);
  const [slug, title, company, location, mode, level, salary, salaryMin, skills] = template;
  const days = (index % 28) + 1;
  return {
    id: cycle === 0 ? slug === "product-lead" ? "product-lead-dubai" : `${slug}-${location.split(",")[0].toLowerCase().replaceAll(" ", "-")}` : `${slug}-${cycle + 1}`,
    title: cycle ? `${title} · ${cycle + 1}` : title,
    company,
    location,
    mode,
    level,
    salary,
    salaryMin,
    posted: `${days} days ago`,
    days,
    applicants: 15 + ((index * 17) % 76),
    skills
  };
});

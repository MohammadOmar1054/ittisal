const jobTemplates = [
  ["product-lead", "Senior Product Lead", "Al Futtaim", "Dubai, UAE", "Hybrid", "Senior", "AED 28k–36k", 28000, "Technology", ["Product", "Strategy", "B2B"]],
  ["frontend-engineer", "Frontend Engineer", "STC", "Riyadh, Saudi Arabia", "Onsite", "Mid-level", "SAR 18k–25k", 18000, "Software Engineering", ["React", "Next.js", "TypeScript"]],
  ["petroleum-engineer", "Petroleum Engineer", "Saudi Aramco", "Dhahran, Saudi Arabia", "Onsite", "Senior", "SAR 24k–34k", 24000, "Petroleum", ["Reservoirs", "Drilling", "Production"]],
  ["ai-engineer", "AI / Machine Learning Engineer", "G42", "Abu Dhabi, UAE", "Hybrid", "Senior", "AED 30k–44k", 30000, "AI", ["Python", "TensorFlow", "LLMs"]],
  ["data-scientist", "Data Scientist", "Mubadala", "Abu Dhabi, UAE", "Onsite", "Senior", "AED 30k–42k", 30000, "AI", ["Python", "ML", "SQL"]],
  ["construction-manager", "Construction Project Manager", "Emaar", "Dubai, UAE", "Onsite", "Senior", "AED 25k–38k", 25000, "Construction", ["Construction", "Planning", "Leadership"]],
  ["growth-manager", "Growth Marketing Manager", "Qatar Airways", "Doha, Qatar", "Hybrid", "Mid-level", "QAR 20k–28k", 20000, "Marketing", ["Growth", "Performance", "Analytics"]],
  ["sales-executive", "Enterprise Sales Executive", "Oracle", "Riyadh, Saudi Arabia", "Hybrid", "Mid-level", "SAR 16k–25k", 16000, "Sales", ["B2B", "CRM", "Negotiation"]],
  ["delivery-driver", "Delivery Driver", "Talabat", "Kuwait City, Kuwait", "Onsite", "Entry-level", "KWD 450–700", 450, "Delivery Driver", ["Driving", "Logistics", "Customer Service"]],
  ["electronics-technician", "Electronics Technician", "Honeywell", "Manama, Bahrain", "Onsite", "Mid-level", "BHD 900–1.4k", 900, "Electronics", ["Circuits", "Testing", "Repair"]],
  ["mechanical-engineer", "Mechanical Design Engineer", "Petrofac", "Muscat, Oman", "Hybrid", "Mid-level", "OMR 1.8k–2.7k", 1800, "Mechanical", ["CAD", "Design", "Manufacturing"]],
  ["strategy-consultant", "Strategy Consultant", "Strategy&", "Doha, Qatar", "Hybrid", "Senior", "QAR 24k–35k", 24000, "Consulting", ["Strategy", "Research", "Presentations"]],
  ["cloud-architect", "Cloud Solutions Architect", "Microsoft", "Dubai, UAE", "Hybrid", "Senior", "AED 35k–48k", 35000, "Technology", ["Azure", "Cloud", "Architecture"]],
  ["hardware-engineer", "Hardware Systems Engineer", "Siemens", "Abu Dhabi, UAE", "Onsite", "Mid-level", "AED 20k–30k", 20000, "Hardware", ["Embedded", "PCB", "Prototyping"]],
  ["finance-analyst", "Financial Analyst", "Bahrain Mumtalakat", "Manama, Bahrain", "Hybrid", "Entry-level", "BHD 1.2k–1.8k", 1200, "Finance", ["Finance", "Excel", "Forecasting"]],
  ["operations-lead", "Operations Lead", "Omantel", "Muscat, Oman", "Onsite", "Senior", "OMR 2.2k–3.1k", 2200, "Operations", ["Operations", "Leadership", "Scale"]],
  ["content-strategist", "Content Strategist", "Careem", "Riyadh, Saudi Arabia", "Remote", "Mid-level", "SAR 14k–20k", 14000, "Marketing", ["Content", "Arabic", "Brand"]],
  ["people-partner", "People & Culture Partner", "QatarEnergy", "Doha, Qatar", "Hybrid", "Senior", "QAR 22k–30k", 22000, "Human Resources", ["People", "Culture", "HR"]],
  ["mobile-engineer", "Mobile Engineer", "Noon", "Jeddah, Saudi Arabia", "Remote", "Mid-level", "SAR 17k–24k", 17000, "Software Engineering", ["React Native", "iOS", "Android"]],
  ["supply-chain-specialist", "Supply Chain Specialist", "DP World", "Dubai, UAE", "Hybrid", "Mid-level", "AED 16k–24k", 16000, "Logistics", ["Supply Chain", "Inventory", "Planning"]]
];

export const jobs = Array.from({ length: 150 }, (_, index) => {
  const template = jobTemplates[index % jobTemplates.length];
  const cycle = Math.floor(index / jobTemplates.length);
  const [slug, title, company, location, mode, level, salary, salaryMin, category, skills] = template;
  const days = (index % 28) + 1;
  const locationSlug = location.split(",")[0].toLowerCase().replaceAll(" ", "-");

  return {
    id: cycle === 0
      ? slug === "product-lead" ? "product-lead-dubai" : `${slug}-${locationSlug}`
      : `${slug}-${cycle + 1}`,
    title: cycle ? `${title} · ${cycle + 1}` : title,
    company,
    location,
    mode,
    level,
    category,
    salary,
    salaryMin,
    posted: `${days} days ago`,
    days,
    applicants: 15 + ((index * 17) % 76),
    skills
  };
});

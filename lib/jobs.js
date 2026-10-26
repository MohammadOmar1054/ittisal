const roleCatalog = [
  ["Product Manager", "Technology", ["Product", "Roadmaps", "Strategy"]],
  ["Frontend Engineer", "Software Engineering", ["React", "Next.js", "TypeScript"]],
  ["Backend Engineer", "Software Engineering", ["Node.js", "APIs", "Databases"]],
  ["QA Automation Engineer", "Software Engineering", ["Testing", "Cypress", "CI/CD"]],
  ["Petroleum Engineer", "Petroleum", ["Reservoirs", "Drilling", "Production"]],
  ["Drilling Engineer", "Petroleum", ["Drilling", "Well Design", "Safety"]],
  ["Process Engineer", "Petroleum", ["Process", "Refining", "Operations"]],
  ["Machine Learning Engineer", "AI", ["Python", "TensorFlow", "LLMs"]],
  ["AI Research Assistant", "AI", ["Python", "Research", "Statistics"]],
  ["Data Analyst", "AI", ["SQL", "Dashboards", "Excel"]],
  ["Construction Project Manager", "Construction", ["Construction", "Planning", "Leadership"]],
  ["Site Engineer", "Construction", ["Civil", "Site Safety", "AutoCAD"]],
  ["Quantity Surveyor", "Construction", ["Cost Control", "Contracts", "BOQ"]],
  ["Growth Marketing Manager", "Marketing", ["Growth", "Performance", "Analytics"]],
  ["Social Media Coordinator", "Marketing", ["Content", "Social", "Arabic"]],
  ["Brand Strategist", "Marketing", ["Brand", "Research", "Campaigns"]],
  ["Enterprise Sales Executive", "Sales", ["B2B", "CRM", "Negotiation"]],
  ["Sales Development Representative", "Sales", ["Prospecting", "Outreach", "CRM"]],
  ["Account Executive", "Sales", ["Accounts", "Presentations", "Closing"]],
  ["Delivery Driver", "Delivery Driver", ["Driving", "Logistics", "Customer Service"]],
  ["Fleet Coordinator", "Delivery Driver", ["Routing", "Dispatch", "Operations"]],
  ["Electronics Technician", "Electronics", ["Circuits", "Testing", "Repair"]],
  ["Embedded Systems Engineer", "Electronics", ["C", "Microcontrollers", "IoT"]],
  ["Mechanical Design Engineer", "Mechanical", ["CAD", "Design", "Manufacturing"]],
  ["Maintenance Engineer", "Mechanical", ["Maintenance", "Reliability", "Safety"]],
  ["Strategy Consultant", "Consulting", ["Strategy", "Research", "Presentations"]],
  ["Technology Consultant", "Consulting", ["Transformation", "Advisory", "Delivery"]],
  ["Cloud Solutions Architect", "Technology", ["Azure", "Cloud", "Architecture"]],
  ["Cybersecurity Analyst", "Technology", ["Security", "SIEM", "Risk"]],
  ["Hardware Systems Engineer", "Hardware", ["Embedded", "PCB", "Prototyping"]],
  ["Hardware Test Engineer", "Hardware", ["Testing", "Validation", "Lab"]],
  ["Financial Analyst", "Finance", ["Finance", "Excel", "Forecasting"]],
  ["Accounts Payable Specialist", "Finance", ["Accounting", "Invoices", "ERP"]],
  ["Operations Lead", "Operations", ["Operations", "Leadership", "Scale"]],
  ["Operations Coordinator", "Operations", ["Scheduling", "Reporting", "Process"]],
  ["People & Culture Partner", "Human Resources", ["People", "Culture", "HR"]],
  ["Talent Acquisition Coordinator", "Human Resources", ["Recruiting", "Sourcing", "Interviews"]],
  ["Supply Chain Specialist", "Logistics", ["Supply Chain", "Inventory", "Planning"]],
  ["Warehouse Supervisor", "Logistics", ["Warehouse", "Safety", "Teamwork"]],
  ["Mobile Engineer", "Software Engineering", ["React Native", "iOS", "Android"]],
  ["UX Researcher", "Design", ["Research", "Interviews", "Figma"]],
  ["Product Designer", "Design", ["UX", "Figma", "Prototyping"]],
  ["Content Writer", "Marketing", ["Writing", "SEO", "Arabic"]],
  ["Customer Success Associate", "Customer Service", ["Support", "Onboarding", "CRM"]],
  ["Procurement Officer", "Procurement", ["Vendors", "Contracts", "Purchasing"]],
  ["Legal Counsel", "Legal", ["Contracts", "Compliance", "Advisory"]],
  ["Environmental Specialist", "Energy", ["Sustainability", "ESG", "Audits"]],
  ["Renewable Energy Engineer", "Energy", ["Solar", "Energy", "Engineering"]],
  ["Health and Safety Officer", "Safety", ["HSE", "Audits", "Training"]],
  ["Airport Operations Agent", "Aviation", ["Airports", "Service", "Coordination"]],
  ["Hotel Guest Relations Officer", "Hospitality", ["Hospitality", "Service", "Languages"]],
  ["Restaurant Operations Manager", "Hospitality", ["Restaurants", "People", "Operations"]],
  ["Teacher of English", "Education", ["Teaching", "English", "Curriculum"]],
  ["Training Coordinator", "Education", ["Training", "Learning", "Events"]],
  ["Healthcare Administrator", "Healthcare", ["Healthcare", "Scheduling", "Records"]],
  ["Clinical Data Coordinator", "Healthcare", ["Clinical", "Data", "Compliance"]],
  ["Real Estate Advisor", "Real Estate", ["Property", "Sales", "Market Research"]],
  ["Urban Planner", "Real Estate", ["Planning", "GIS", "Development"]],
  ["Research Associate", "Research", ["Research", "Reports", "Analysis"]],
  ["Executive Assistant", "Administration", ["Organisation", "Calendar", "Communication"]]
];

const companies = [
  ["Al Futtaim", "Dubai, UAE"], ["STC", "Riyadh, Saudi Arabia"], ["Saudi Aramco", "Dhahran, Saudi Arabia"],
  ["G42", "Abu Dhabi, UAE"], ["Qatar Airways", "Doha, Qatar"], ["Emaar", "Dubai, UAE"],
  ["Careem", "Riyadh, Saudi Arabia"], ["Talabat", "Kuwait City, Kuwait"], ["Honeywell", "Manama, Bahrain"],
  ["Petrofac", "Muscat, Oman"], ["Mubadala", "Abu Dhabi, UAE"], ["Microsoft", "Dubai, UAE"],
  ["Noon", "Jeddah, Saudi Arabia"], ["QatarEnergy", "Doha, Qatar"], ["DP World", "Dubai, UAE"],
  ["Zain", "Kuwait City, Kuwait"], ["Omantel", "Muscat, Oman"], ["Bahrain Mumtalakat", "Manama, Bahrain"]
];

const variants = [
  { label: "Graduate", level: "Entry-level", salary: 6500, mode: "Onsite" },
  { label: "Associate", level: "Entry-level", salary: 9000, mode: "Hybrid" },
  { label: "Specialist", level: "Mid-level", salary: 15000, mode: "Hybrid" },
  { label: "Senior", level: "Senior", salary: 24000, mode: "Remote" }
];

const currency = (location, amount) => {
  if (location.includes("UAE")) return `AED ${(amount / 1000).toFixed(0)}k–${((amount * 1.28) / 1000).toFixed(0)}k`;
  if (location.includes("Qatar")) return `QAR ${(amount * .82 / 1000).toFixed(0)}k–${(amount / 1000).toFixed(0)}k`;
  if (location.includes("Kuwait")) return `KWD ${(amount / 17).toFixed(1)}k–${(amount / 12).toFixed(1)}k`;
  if (location.includes("Bahrain")) return `BHD ${(amount / 22).toFixed(1)}k–${(amount / 16).toFixed(1)}k`;
  if (location.includes("Oman")) return `OMR ${(amount / 11).toFixed(1)}k–${(amount / 8).toFixed(1)}k`;
  return `SAR ${(amount / 1000).toFixed(0)}k–${((amount * 1.28) / 1000).toFixed(0)}k`;
};

export const jobs = roleCatalog.flatMap(([role, category, skills], roleIndex) =>
  variants.map((variant, variantIndex) => {
    const [company, location] = companies[(roleIndex * 3 + variantIndex) % companies.length];
    const index = roleIndex * variants.length + variantIndex;
    const slug = `${role}-${variant.label}-${location}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
    const days = (index % 30) + 1;
    return {
      id: roleIndex === 0 && variantIndex === 0 ? "product-lead-dubai" : slug,
      title: `${variant.label} ${role}`,
      company,
      location,
      mode: variant.mode,
      level: variant.level,
      category,
      salary: currency(location, variant.salary + ((roleIndex % 5) * 700)),
      salaryMin: variant.salary,
      posted: `${days} days ago`,
      days,
      applicants: 8 + ((index * 19) % 92),
      skills
    };
  })
);

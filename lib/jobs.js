const roleCatalog = [
  // Software engineering
  ["Frontend Engineer", "Software Engineering", ["React", "Next.js", "TypeScript"], "Mid-level", "Hybrid"],
  ["Backend Engineer", "Software Engineering", ["Node.js", "APIs", "PostgreSQL"], "Mid-level", "Remote"],
  ["Full Stack Developer", "Software Engineering", ["React", "Node.js", "AWS"], "Mid-level", "Hybrid"],
  ["Staff Software Engineer", "Software Engineering", ["Distributed Systems", "Java", "Kubernetes"], "Senior", "Remote"],
  ["Android Developer", "Software Engineering", ["Kotlin", "Android", "Jetpack"], "Mid-level", "Hybrid"],
  ["iOS Developer", "Software Engineering", ["Swift", "iOS", "UIKit"], "Mid-level", "Remote"],
  ["React Native Engineer", "Software Engineering", ["React Native", "JavaScript", "Mobile"], "Entry-level", "Hybrid"],
  ["Game Developer", "Software Engineering", ["Unity", "C#", "3D"], "Mid-level", "Onsite"],
  ["Embedded Software Engineer", "Software Engineering", ["C", "RTOS", "Embedded Linux"], "Senior", "Onsite"],
  ["API Platform Engineer", "Software Engineering", ["REST", "GraphQL", "Go"], "Senior", "Remote"],
  ["Ruby on Rails Developer", "Software Engineering", ["Ruby", "Rails", "PostgreSQL"], "Mid-level", "Remote"],
  ["Java Solutions Developer", "Software Engineering", ["Java", "Spring", "Microservices"], "Mid-level", "Hybrid"],
  ["PHP Application Developer", "Software Engineering", ["PHP", "Laravel", "MySQL"], "Entry-level", "Onsite"],
  ["QA Automation Engineer", "Software Engineering", ["Cypress", "Playwright", "CI/CD"], "Mid-level", "Hybrid"],
  ["Performance Test Engineer", "Software Engineering", ["JMeter", "Load Testing", "APIs"], "Senior", "Remote"],
  ["Developer Experience Engineer", "Software Engineering", ["Tooling", "CLI", "Documentation"], "Senior", "Remote"],
  // AI, data, and research
  ["Machine Learning Engineer", "AI", ["Python", "PyTorch", "MLOps"], "Senior", "Hybrid"],
  ["Generative AI Engineer", "AI", ["LLMs", "RAG", "Python"], "Senior", "Remote"],
  ["Computer Vision Engineer", "AI", ["OpenCV", "PyTorch", "Vision"], "Mid-level", "Onsite"],
  ["Natural Language Processing Engineer", "AI", ["NLP", "Transformers", "Python"], "Senior", "Remote"],
  ["AI Research Scientist", "AI", ["Research", "Deep Learning", "Papers"], "Senior", "Hybrid"],
  ["AI Product Manager", "AI", ["AI Products", "Roadmaps", "Strategy"], "Senior", "Hybrid"],
  ["Prompt Engineer", "AI", ["Prompt Design", "Evaluation", "LLMs"], "Entry-level", "Remote"],
  ["AI Safety Analyst", "AI", ["Model Risk", "Safety", "Policy"], "Mid-level", "Hybrid"],
  ["Data Scientist", "Data", ["Python", "Statistics", "SQL"], "Mid-level", "Hybrid"],
  ["Data Analyst", "Data", ["SQL", "Power BI", "Excel"], "Entry-level", "Onsite"],
  ["Analytics Engineer", "Data", ["dbt", "SQL", "Snowflake"], "Mid-level", "Remote"],
  ["Data Engineer", "Data", ["Spark", "Airflow", "Python"], "Senior", "Hybrid"],
  ["Data Quality Engineer", "Data", ["Data Quality", "SQL", "Testing"], "Mid-level", "Remote"],
  ["Business Intelligence Developer", "Data", ["Power BI", "DAX", "Warehousing"], "Mid-level", "Hybrid"],
  ["Quantitative Analyst", "Data", ["Python", "Finance", "Models"], "Senior", "Onsite"],
  ["Research Data Coordinator", "Research", ["Research", "Surveys", "Reporting"], "Entry-level", "Hybrid"],
  // Cloud, infrastructure, and security
  ["Cloud Solutions Architect", "Cloud & Infrastructure", ["Azure", "Cloud", "Architecture"], "Senior", "Hybrid"],
  ["AWS Cloud Engineer", "Cloud & Infrastructure", ["AWS", "Terraform", "Linux"], "Mid-level", "Remote"],
  ["Azure Infrastructure Engineer", "Cloud & Infrastructure", ["Azure", "Networking", "PowerShell"], "Mid-level", "Onsite"],
  ["DevOps Engineer", "Cloud & Infrastructure", ["Docker", "Kubernetes", "CI/CD"], "Senior", "Remote"],
  ["Site Reliability Engineer", "Cloud & Infrastructure", ["SRE", "Observability", "Linux"], "Senior", "Hybrid"],
  ["Platform Engineer", "Cloud & Infrastructure", ["Kubernetes", "Go", "Platforms"], "Senior", "Remote"],
  ["Cloud FinOps Analyst", "Cloud & Infrastructure", ["FinOps", "AWS", "Budgets"], "Entry-level", "Hybrid"],
  ["Network Engineer", "Infrastructure", ["Cisco", "Routing", "Firewalls"], "Mid-level", "Onsite"],
  ["Systems Administrator", "Infrastructure", ["Linux", "Windows Server", "Backup"], "Mid-level", "Onsite"],
  ["IT Support Specialist", "Infrastructure", ["Helpdesk", "Hardware", "Support"], "Entry-level", "Onsite"],
  ["Cybersecurity Analyst", "Cybersecurity", ["SIEM", "Incident Response", "Risk"], "Mid-level", "Hybrid"],
  ["Application Security Engineer", "Cybersecurity", ["AppSec", "OWASP", "SAST"], "Senior", "Remote"],
  ["Cloud Security Engineer", "Cybersecurity", ["IAM", "Cloud Security", "Compliance"], "Senior", "Hybrid"],
  ["Penetration Tester", "Cybersecurity", ["Kali Linux", "Web Security", "Reports"], "Mid-level", "Remote"],
  ["GRC Security Consultant", "Cybersecurity", ["GRC", "ISO 27001", "Audits"], "Mid-level", "Hybrid"],
  ["Identity and Access Engineer", "Cybersecurity", ["IAM", "SSO", "Okta"], "Senior", "Onsite"],
  // Hardware, electronics, and engineering technology
  ["Hardware Systems Engineer", "Hardware", ["Embedded", "PCB", "Prototyping"], "Mid-level", "Onsite"],
  ["Hardware Test Engineer", "Hardware", ["Testing", "Validation", "Lab"], "Entry-level", "Onsite"],
  ["Firmware Engineer", "Hardware", ["C", "Firmware", "Microcontrollers"], "Mid-level", "Hybrid"],
  ["FPGA Design Engineer", "Hardware", ["FPGA", "Verilog", "Digital Design"], "Senior", "Onsite"],
  ["PCB Design Engineer", "Electronics", ["PCB", "Altium", "Electronics"], "Mid-level", "Onsite"],
  ["Electronics Technician", "Electronics", ["Circuits", "Testing", "Repair"], "Entry-level", "Onsite"],
  ["Robotics Engineer", "Robotics", ["ROS", "Robotics", "C++"], "Senior", "Hybrid"],
  ["IoT Solutions Engineer", "IoT", ["IoT", "MQTT", "Sensors"], "Mid-level", "Hybrid"],
  ["Automation Controls Engineer", "Industrial Technology", ["PLC", "SCADA", "Controls"], "Senior", "Onsite"],
  ["Technical Product Manager", "Technology", ["Roadmaps", "APIs", "Stakeholders"], "Senior", "Hybrid"],
  ["Product Operations Manager", "Technology", ["Operations", "Product", "Analytics"], "Mid-level", "Remote"],
  ["Technical Program Manager", "Technology", ["Programs", "Agile", "Delivery"], "Senior", "Hybrid"],
  ["Solutions Consultant", "Technology", ["Solutions", "Demos", "Cloud"], "Mid-level", "Remote"],
  ["ERP Implementation Consultant", "Enterprise Technology", ["SAP", "ERP", "Implementation"], "Senior", "Hybrid"],
  ["Salesforce Administrator", "Enterprise Technology", ["Salesforce", "CRM", "Automation"], "Mid-level", "Remote"],
  ["SAP Business Analyst", "Enterprise Technology", ["SAP", "Business Analysis", "ERP"], "Mid-level", "Hybrid"],
  ["Blockchain Developer", "Emerging Technology", ["Solidity", "Web3", "Smart Contracts"], "Mid-level", "Remote"],
  ["AR/VR Developer", "Emerging Technology", ["Unity", "AR", "VR"], "Mid-level", "Hybrid"],
  ["Technical Writer", "Technology", ["Documentation", "APIs", "Writing"], "Entry-level", "Remote"],
  ["Release Engineer", "Technology", ["Releases", "CI/CD", "Automation"], "Mid-level", "Hybrid"],
  ["Build and Tools Engineer", "Technology", ["Build Systems", "C++", "Tooling"], "Senior", "Onsite"],
  ["Observability Engineer", "Cloud & Infrastructure", ["Grafana", "Prometheus", "Tracing"], "Mid-level", "Remote"],
  ["Database Reliability Engineer", "Cloud & Infrastructure", ["PostgreSQL", "Backups", "Reliability"], "Senior", "Hybrid"],
  ["Virtualization Engineer", "Infrastructure", ["VMware", "Linux", "Datacenters"], "Mid-level", "Onsite"],
  ["Storage Engineer", "Infrastructure", ["Storage", "SAN", "Backup"], "Senior", "Onsite"],
  ["IT Asset Manager", "Infrastructure", ["ITIL", "Assets", "Inventory"], "Entry-level", "Hybrid"],
  ["Service Desk Analyst", "Infrastructure", ["Service Desk", "Troubleshooting", "ITIL"], "Entry-level", "Onsite"],
  ["Network Security Engineer", "Cybersecurity", ["Firewalls", "VPN", "Network Security"], "Senior", "Onsite"],
  ["Threat Intelligence Analyst", "Cybersecurity", ["Threats", "OSINT", "Intelligence"], "Mid-level", "Remote"],
  ["Digital Forensics Analyst", "Cybersecurity", ["Forensics", "Evidence", "Investigations"], "Mid-level", "Onsite"],
  ["Privacy Compliance Analyst", "Cybersecurity", ["Privacy", "GDPR", "Compliance"], "Entry-level", "Hybrid"],
  ["Security Operations Engineer", "Cybersecurity", ["SOC", "SIEM", "Detection"], "Mid-level", "Onsite"],
  ["Data Governance Manager", "Data", ["Governance", "Metadata", "Policy"], "Senior", "Hybrid"],
  ["Master Data Specialist", "Data", ["Master Data", "Quality", "ERP"], "Mid-level", "Onsite"],
  ["ETL Developer", "Data", ["ETL", "SQL", "Informatica"], "Mid-level", "Hybrid"],
  ["Streaming Data Engineer", "Data", ["Kafka", "Flink", "Streaming"], "Senior", "Remote"],
  ["Geospatial Data Analyst", "Data", ["GIS", "Maps", "Spatial Data"], "Entry-level", "Onsite"],
  ["Computer Vision Research Assistant", "AI", ["Computer Vision", "Research", "Python"], "Entry-level", "Hybrid"],
  ["MLOps Engineer", "AI", ["MLOps", "Model Serving", "Docker"], "Senior", "Remote"],
  ["Responsible AI Specialist", "AI", ["AI Ethics", "Policy", "Risk"], "Mid-level", "Hybrid"],
  ["AI Evaluation Analyst", "AI", ["Evaluation", "LLMs", "Quality"], "Entry-level", "Remote"],
  ["Speech Recognition Engineer", "AI", ["Speech", "Audio", "Deep Learning"], "Senior", "Hybrid"],
  ["Recommendation Systems Engineer", "AI", ["Recommendations", "Python", "Ranking"], "Senior", "Remote"],
  ["Applied Scientist", "AI", ["Experiments", "Statistics", "Machine Learning"], "Senior", "Onsite"],
  ["Digital Twin Engineer", "Industrial Technology", ["Digital Twins", "IoT", "Simulation"], "Mid-level", "Hybrid"],
  ["Industrial IoT Architect", "Industrial Technology", ["IIoT", "Edge", "Architecture"], "Senior", "Onsite"],
  ["SCADA Engineer", "Industrial Technology", ["SCADA", "PLC", "Industrial Networks"], "Mid-level", "Onsite"],
  ["Manufacturing Systems Engineer", "Industrial Technology", ["MES", "Manufacturing", "Automation"], "Senior", "Onsite"],
  ["Mechatronics Engineer", "Robotics", ["Mechatronics", "Robotics", "CAD"], "Entry-level", "Onsite"],
  ["Autonomous Systems Engineer", "Robotics", ["Autonomy", "C++", "Robotics"], "Senior", "Hybrid"],
  ["Drone Systems Technician", "Robotics", ["Drones", "Electronics", "Maintenance"], "Entry-level", "Onsite"],
  ["Computer Hardware Technician", "Hardware", ["PC Hardware", "Diagnostics", "Repair"], "Entry-level", "Onsite"],
  ["Semiconductor Process Engineer", "Hardware", ["Semiconductors", "Process", "Yield"], "Senior", "Onsite"],
  ["ASIC Verification Engineer", "Hardware", ["ASIC", "SystemVerilog", "Verification"], "Senior", "Hybrid"],
  ["RF Engineer", "Electronics", ["RF", "Wireless", "Testing"], "Mid-level", "Onsite"],
  ["Power Electronics Engineer", "Electronics", ["Power", "Converters", "Electronics"], "Mid-level", "Onsite"],
  ["Technical Support Engineer", "Customer Technology", ["Troubleshooting", "APIs", "Support"], "Entry-level", "Remote"],
  ["Implementation Engineer", "Customer Technology", ["Implementation", "Integrations", "APIs"], "Mid-level", "Hybrid"],
  ["Solutions Architect Associate", "Customer Technology", ["Architecture", "Cloud", "Demos"], "Entry-level", "Hybrid"],
  ["Pre-Sales Solutions Engineer", "Customer Technology", ["Pre-Sales", "Demos", "Technical Sales"], "Mid-level", "Remote"],
  ["Developer Relations Engineer", "Developer Experience", ["Community", "APIs", "Presentations"], "Mid-level", "Remote"],
  ["Open Source Program Manager", "Developer Experience", ["Open Source", "Community", "Programs"], "Senior", "Remote"],
  ["Engineering Manager", "Software Engineering", ["Leadership", "Architecture", "Delivery"], "Senior", "Hybrid"],
  ["Technical Lead", "Software Engineering", ["Leadership", "Code Review", "Architecture"], "Senior", "Onsite"],
  ["Software Engineering Intern", "Software Engineering", ["Git", "Programming", "Testing"], "Entry-level", "Hybrid"],
  ["Data Engineering Intern", "Data", ["Python", "SQL", "Pipelines"], "Entry-level", "Onsite"],
  ["Cloud Support Associate", "Cloud & Infrastructure", ["Cloud", "Linux", "Support"], "Entry-level", "Remote"],
  ["Cybersecurity Intern", "Cybersecurity", ["Security", "Networking", "Research"], "Entry-level", "Hybrid"],
  ["UX Engineer", "Design Technology", ["CSS", "Accessibility", "Design Systems"], "Mid-level", "Remote"],
  ["Design Systems Engineer", "Design Technology", ["Design Systems", "React", "Accessibility"], "Senior", "Hybrid"],
  ["Accessibility Specialist", "Design Technology", ["Accessibility", "WCAG", "Testing"], "Mid-level", "Remote"],
  ["Technical Project Coordinator", "Technology", ["Agile", "Jira", "Coordination"], "Entry-level", "Hybrid"],
  ["Technology Change Manager", "Technology", ["Change", "Transformation", "Communication"], "Senior", "Hybrid"],
  ["IT Procurement Analyst", "Enterprise Technology", ["Procurement", "Vendors", "IT"], "Entry-level", "Onsite"],
  ["Enterprise Architect", "Enterprise Technology", ["Architecture", "Governance", "Strategy"], "Senior", "Hybrid"],
  ["CRM Integration Engineer", "Enterprise Technology", ["CRM", "Integrations", "APIs"], "Mid-level", "Remote"],
  ["Technology Risk Analyst", "Technology Risk", ["Risk", "Controls", "Technology"], "Entry-level", "Hybrid"],
  ["Digital Transformation Analyst", "Digital Transformation", ["Transformation", "Process", "Analysis"], "Mid-level", "Hybrid"],
  // Other sectors
  ["Petroleum Engineer", "Petroleum", ["Reservoirs", "Drilling", "Production"], "Senior", "Onsite"],
  ["Drilling Engineer", "Petroleum", ["Drilling", "Well Design", "Safety"], "Mid-level", "Onsite"],
  ["Refinery Process Engineer", "Petroleum", ["Process", "Refining", "Operations"], "Mid-level", "Onsite"],
  ["Construction Project Manager", "Construction", ["Construction", "Planning", "Leadership"], "Senior", "Onsite"],
  ["Site Engineer", "Construction", ["Civil", "Site Safety", "AutoCAD"], "Entry-level", "Onsite"],
  ["Quantity Surveyor", "Construction", ["Cost Control", "Contracts", "BOQ"], "Mid-level", "Hybrid"],
  ["Growth Marketing Manager", "Marketing", ["Growth", "Performance", "Analytics"], "Mid-level", "Hybrid"],
  ["Social Media Coordinator", "Marketing", ["Content", "Social", "Arabic"], "Entry-level", "Remote"],
  ["Enterprise Sales Executive", "Sales", ["B2B", "CRM", "Negotiation"], "Mid-level", "Hybrid"],
  ["Sales Development Representative", "Sales", ["Prospecting", "Outreach", "CRM"], "Entry-level", "Remote"],
  ["Delivery Driver", "Delivery Driver", ["Driving", "Logistics", "Customer Service"], "Entry-level", "Onsite"],
  ["Fleet Coordinator", "Delivery Driver", ["Routing", "Dispatch", "Operations"], "Mid-level", "Onsite"],
  ["Mechanical Design Engineer", "Mechanical", ["CAD", "Design", "Manufacturing"], "Mid-level", "Hybrid"],
  ["Maintenance Engineer", "Mechanical", ["Maintenance", "Reliability", "Safety"], "Senior", "Onsite"],
  ["Strategy Consultant", "Consulting", ["Strategy", "Research", "Presentations"], "Senior", "Hybrid"],
  ["Financial Analyst", "Finance", ["Finance", "Excel", "Forecasting"], "Entry-level", "Hybrid"],
  ["Supply Chain Specialist", "Logistics", ["Supply Chain", "Inventory", "Planning"], "Mid-level", "Hybrid"],
  ["People & Culture Partner", "Human Resources", ["People", "Culture", "HR"], "Senior", "Hybrid"],
  ["UX Researcher", "Design", ["Research", "Interviews", "Figma"], "Mid-level", "Remote"],
  ["Customer Success Associate", "Customer Service", ["Support", "Onboarding", "CRM"], "Entry-level", "Remote"],
  ["Renewable Energy Engineer", "Energy", ["Solar", "Energy", "Engineering"], "Mid-level", "Onsite"],
  ["Healthcare Administrator", "Healthcare", ["Healthcare", "Scheduling", "Records"], "Entry-level", "Onsite"],
  ["Airport Operations Agent", "Aviation", ["Airports", "Service", "Coordination"], "Entry-level", "Onsite"],
  ["Executive Assistant", "Administration", ["Organisation", "Calendar", "Communication"], "Entry-level", "Hybrid"]
];

const companies = [
  ["Al Futtaim", "Dubai, UAE"], ["STC", "Riyadh, Saudi Arabia"], ["Saudi Aramco", "Dhahran, Saudi Arabia"],
  ["G42", "Abu Dhabi, UAE"], ["Qatar Airways", "Doha, Qatar"], ["Emaar", "Dubai, UAE"],
  ["Careem", "Riyadh, Saudi Arabia"], ["Talabat", "Kuwait City, Kuwait"], ["Honeywell", "Manama, Bahrain"],
  ["Petrofac", "Muscat, Oman"], ["Mubadala", "Abu Dhabi, UAE"], ["Microsoft", "Dubai, UAE"],
  ["Noon", "Jeddah, Saudi Arabia"], ["QatarEnergy", "Doha, Qatar"], ["DP World", "Dubai, UAE"],
  ["Zain", "Kuwait City, Kuwait"], ["Omantel", "Muscat, Oman"], ["Bahrain Mumtalakat", "Manama, Bahrain"]
];

const salaryTiers = {
  "Entry-level": {
    sar: { base: 6000, step: 1000, mult: 1.35 },
    dinar: { base: 950, step: 50, mult: 1.35 }
  },
  "Mid-level": {
    sar: { base: 14000, step: 1000, mult: 1.32 },
    dinar: { base: 1400, step: 100, mult: 1.3 }
  },
  "Senior": {
    sar: { base: 24000, step: 800, mult: 1.28 },
    dinar: { base: 2200, step: 80, mult: 1.25 }
  }
};

export function formatSalaryAmount(val) {
  if (val >= 1000) {
    const k = val / 1000;
    const formatted = k >= 10 ? Math.round(k) : Number(k.toFixed(1));
    return `${formatted}k`;
  }
  return `${Math.round(val)}`;
}

export function formatPosted(days, language = "en") {
  if (language === "ar") {
    if (days === 1) return "منذ يوم واحد";
    if (days === 2) return "منذ يومين";
    if (days >= 3 && days <= 10) return `منذ ${days} أيام`;
    return `منذ ${days} يوم`;
  }
  return days === 1 ? "1 day ago" : `${days} days ago`;
}

function getSalaryInfo(location, level, index) {
  const isDinar = location.includes("Kuwait") || location.includes("Bahrain") || location.includes("Oman");
  const currencyCode = location.includes("Kuwait")
    ? "KWD"
    : location.includes("Bahrain")
    ? "BHD"
    : location.includes("Oman")
    ? "OMR"
    : location.includes("Qatar")
    ? "QAR"
    : location.includes("UAE")
    ? "AED"
    : "SAR";

  const config = salaryTiers[level] || salaryTiers["Mid-level"];
  const tier = isDinar ? config.dinar : config.sar;
  const rawMin = tier.base + ((index % 5) * tier.step);
  const min = isDinar ? Math.round(rawMin / 50) * 50 : Math.round(rawMin / 1000) * 1000;
  const rawMax = min * tier.mult;
  const max = isDinar ? Math.round(rawMax / 50) * 50 : Math.round(rawMax / 1000) * 1000;

  return {
    salary: `${currencyCode} ${formatSalaryAmount(min)}–${formatSalaryAmount(max)}`,
    salaryMin: min
  };
}

export const jobs = roleCatalog.map(([title, category, skills, level, mode], index) => {
  const [company, location] = companies[index % companies.length];
  const days = (index % 30) + 1;
  const slug = `${title}-${company}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
  const { salary, salaryMin } = getSalaryInfo(location, level, index);
  return {
    id: index === 0 ? "product-lead-dubai" : slug,
    title,
    company,
    location,
    mode,
    level,
    category,
    salary,
    salaryMin,
    posted: formatPosted(days, "en"),
    postedAr: formatPosted(days, "ar"),
    days,
    applicants: 8 + ((index * 19) % 92),
    skills
  };
});

export const jobCount = jobs.length;

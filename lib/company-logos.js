const companyDomains = {
  "Al Futtaim": "alfuttaim.com",
  STC: "stc.com.sa",
  "Saudi Aramco": "aramco.com",
  G42: "g42.ai",
  "Qatar Airways": "qatarairways.com",
  Emaar: "emaar.com",
  Careem: "careem.com",
  Talabat: "talabat.com",
  Honeywell: "honeywell.com",
  Petrofac: "petrofac.com",
  Mubadala: "mubadala.com",
  Microsoft: "microsoft.com",
  Noon: "noon.com",
  QatarEnergy: "qatarenergy.qa",
  "DP World": "dpworld.com",
  Zain: "zain.com",
  Omantel: "omantel.om",
  "Bahrain Mumtalakat": "mumtalakat.bh"
};

export function getCompanyLogo(name, logoUrl) {
  if (logoUrl) return logoUrl;
  if (name === "Bahrain Mumtalakat") {
    return "https://upload.wikimedia.org/wikipedia/commons/0/04/%D8%B4%D8%B1%D9%83%D8%A9_%D9%85%D9%85%D8%AA%D9%84%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D9%82%D8%A7%D8%A8%D8%B6%D8%A9.png";
  }
  const domain = companyDomains[name];
  return domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : null;
}

export { companyDomains };

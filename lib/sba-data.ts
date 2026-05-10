export const PROGRAMS = [
  {
    code: "7(a)",
    name: "Standard 7(a) Loan",
    tagline:
      "The SBA's flagship working-capital and acquisition vehicle — broad eligibility, partial federal guaranty.",
    maxAmount: "$5,000,000",
    termRange: "10–25 yrs",
    decisionTime: "5–10 days",
    use: "Working capital, equipment, real estate, refinancing, acquisitions.",
  },
  {
    code: "504",
    name: "CDC / 504 Loan",
    tagline:
      "Long-term, fixed-rate financing for owner-occupied real estate and major fixed assets.",
    maxAmount: "$5,500,000",
    termRange: "10 / 20 / 25 yrs",
    decisionTime: "30–45 days",
    use: "Real estate, heavy machinery, energy-efficiency upgrades.",
  },
  {
    code: "Express",
    name: "SBA Express",
    tagline:
      "Streamlined 7(a) variant with a 36-hour SBA response and a 50% guaranty.",
    maxAmount: "$500,000",
    termRange: "Up to 10 yrs",
    decisionTime: "36 hours",
    use: "Lines of credit, small term loans, quick working capital.",
  },
  {
    code: "Micro",
    name: "Microloan",
    tagline:
      "Capital under $50K delivered through nonprofit intermediaries — often with technical assistance.",
    maxAmount: "$50,000",
    termRange: "Up to 7 yrs",
    decisionTime: "2–4 weeks",
    use: "Inventory, supplies, equipment, working capital.",
  },
  {
    code: "EIDL",
    name: "Economic Injury Disaster",
    tagline:
      "Direct SBA lending for businesses in federally declared disaster areas.",
    maxAmount: "$2,000,000",
    termRange: "Up to 30 yrs",
    decisionTime: "2–3 weeks",
    use: "Fixed debt, payroll, accounts payable post-disaster.",
  },
];

export const FY_APPROVALS = [
  { m: "Oct", loans: 4820, vol: 2.1 },
  { m: "Nov", loans: 5210, vol: 2.4 },
  { m: "Dec", loans: 4980, vol: 2.3 },
  { m: "Jan", loans: 5640, vol: 2.6 },
  { m: "Feb", loans: 5910, vol: 2.7 },
  { m: "Mar", loans: 6420, vol: 3.0 },
  { m: "Apr", loans: 6180, vol: 2.9 },
  { m: "May", loans: 6720, vol: 3.2 },
  { m: "Jun", loans: 6510, vol: 3.1 },
  { m: "Jul", loans: 6980, vol: 3.3 },
  { m: "Aug", loans: 7240, vol: 3.5 },
  { m: "Sep", loans: 7120, vol: 3.4 },
];

export const RATES_HISTORY = [
  { d: "'21", prime: 3.25, sba: 6.0 },
  { d: "'22 H1", prime: 4.0, sba: 6.75 },
  { d: "'22 H2", prime: 7.0, sba: 9.5 },
  { d: "'23 H1", prime: 8.25, sba: 10.75 },
  { d: "'23 H2", prime: 8.5, sba: 11.25 },
  { d: "'24 H1", prime: 8.5, sba: 11.5 },
  { d: "'24 H2", prime: 8.0, sba: 11.0 },
  { d: "'25 H1", prime: 7.75, sba: 10.75 },
  { d: "'25 H2", prime: 8.25, sba: 11.25 },
  { d: "'26 Q1", prime: 8.5, sba: 11.5 },
];

export const STATE_VOLUME = [
  { s: "CA", v: 5.4 },
  { s: "TX", v: 4.1 },
  { s: "FL", v: 3.6 },
  { s: "NY", v: 2.9 },
  { s: "IL", v: 1.8 },
  { s: "GA", v: 1.5 },
  { s: "PA", v: 1.4 },
  { s: "OH", v: 1.2 },
];

export const SECTOR_MIX = [
  { name: "Professional services", pct: 22 },
  { name: "Food & accommodation", pct: 18 },
  { name: "Retail trade", pct: 14 },
  { name: "Construction", pct: 12 },
  { name: "Healthcare", pct: 10 },
  { name: "Manufacturing", pct: 9 },
  { name: "Other", pct: 15 },
];

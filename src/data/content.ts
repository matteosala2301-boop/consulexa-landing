/**
 * Site content as data. Keeping copy here (rather than hard-coded in JSX)
 * makes it trivial to edit, translate or move to a CMS later.
 */

export const site = {
  name: "CONSULEXA",
  person: "Walter Galimberti",
  email: "walter@consulexa.com",
  pec: "consulexa@pec.it",
  phone: "+39 333 6823154",
  phoneHref: "+393336823154",
  linkedin: "https://www.linkedin.com/",
  location: "Monza, Italy",
  vat: "P. IVA 14496480964",
  legalName: "CONSULEXA di Walter Galimberti",
} as const;

export interface Service {
  title: string;
  body: string;
}

export const services: Service[] = [
  {
    title: "Sourcing",
    body: "Supplier scouting, qualification and selection across China and ASEAN. Factory visits, sample evaluation, capability assessment — done in person, not through intermediaries.",
  },
  {
    title: "Procurement",
    body: "Negotiation, purchase order management, contract terms and ongoing supplier relations. Built to protect margins without compromising the relationship.",
  },
  {
    title: "Quality & logistics",
    body: "Pre-shipment inspections, quality control protocols, freight coordination and customs documentation. The operational side of getting goods from the factory floor to destination.",
  },
  {
    title: "Advisory",
    body: "Market entry, operational setup, supplier consolidation, cost reviews. Useful when the question is broader than a single purchase order.",
  },
];

export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: "Direct engagement.",
    body: "Every call, every supplier meeting, every report comes from the same person. No team behind the scenes, no handovers.",
  },
  {
    title: "On the ground.",
    body: "I travel to suppliers in person. Remote audits and video calls have their place, but they don't replace walking through a factory.",
  },
  {
    title: "Local fluency.",
    body: "Two decades living in China and Thailand mean reading context, not just contracts. It shapes how negotiations go and which problems get flagged early.",
  },
  {
    title: "Transparent fees.",
    body: "Project-based or retainer, agreed upfront. No commissions from suppliers, no hidden margins on procurement.",
  },
];

export interface NetworkPartner {
  country: string;
  name: string;
  paragraphs: string[];
}

export const network: NetworkPartner[] = [
  {
    country: "CHINA",
    name: "SRS — Fujian Sunrising Sports Co., Ltd.",
    paragraphs: [
      "Chinese manufacturer of outdoor, tactical and sports backpacks. I handle European operations directly for the company — client management, product development, OEM and ODM projects.",
      "The route from client brief to factory floor goes through me, not through intermediaries.",
    ],
  },
  {
    country: "HONG KONG",
    name: "Blink Asia",
    paragraphs: [
      "A sourcing structure spanning Hong Kong, China and Thailand. Stationery is the core — office, school and writing supplies — alongside corporate gifts, branded gadgets and event merchandise.",
      "A reliable and trusted partner.",
    ],
  },
  {
    country: "THAILAND",
    name: "Adam Group Thailand Co., Ltd.",
    paragraphs: [
      "Phuket-based construction and design firm — villa building, renovations and interior design. My reference point for real estate investments in Phuket, and through the founder a wider local network built over eleven years living there.",
      "Adam is Thai-owned, which in Thailand is not a detail.",
    ],
  },
  {
    country: "ITALY",
    name: "Studio Marco Ferrara",
    paragraphs: [
      "Chartered accountants and statutory auditors based in Italy. Marco and I have known each other professionally for years — my own first years of work were in his profession, before Asia.",
      "Today his studio is the reference point for matters requiring regulated tax and accounting advice for clients operating across borders.",
    ],
  },
];

export const about = {
  headline: "Italian by origin, based between Europe and Asia.",
  paragraphs: [
    "Background in economics and accounting — degree in Economics and Commerce, with my first years of work spent as a chartered accountant in Italy.",
    "Two decades in Asia followed. From 2001 to 2006 in China, working with Italian shipyards on the development of a fleet of rigid inflatable boats. From 2006 to 2017 in Thailand, in the boat and yachting business, including coordination work on superyacht refit projects. From 2017 to 2022 back in China as general manager of a sourcing and procurement company.",
    "CONSULEXA was founded in 2022 to bring that experience to European companies that prefer working with a senior individual rather than a large firm.",
  ],
} as const;

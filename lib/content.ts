export interface ServiceItemContent {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  highlights: string[];
  process: Array<{ title: string; description: string }>;
  stats: Array<{ value: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export interface ProjectItem {
  title: string;
  type: string;
  location: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export const services: ServiceItemContent[] = [
  {
    slug: "roof-waterproofing",
    title: "Roof Waterproofing",
    shortTitle: "Roof systems",
    description: "Advanced protection for exposed terraces, podium decks, and rooftop slabs with drainage-first performance.",
    intro:
      "We design roof systems that stop water migration at the source while preserving thermal comfort and long-term structural integrity.",
    highlights: [
      "UV-resistant membranes",
      "Seamless waterproofing coverage",
      "Drainage planning for storm resilience",
    ],
    process: [
      { title: "Surface diagnosis", description: "We inspect cracks, joints, ponding zones, and prior repair failures." },
      { title: "System specification", description: "We select the right membrane, primer, and drainage strategy for your roof profile." },
      { title: "Precision installation", description: "Every joint, edge, and outlet is treated with detail-oriented workmanship." },
    ],
    stats: [
      { value: "20+", label: "Years of roof expertise" },
      { value: "98%", label: "Leak elimination rate" },
      { value: "10 yr", label: "Material performance warranty" },
    ],
    faqs: [
      { question: "How long does roof waterproofing last?", answer: "A premium system can protect the structure for 10 years or more when maintained correctly." },
      { question: "Can it be applied during monsoon season?", answer: "Yes, when conditions allow safe access and the substrate is suitably prepared." },
    ],
  },
  {
    slug: "basement-waterproofing",
    title: "Basement Waterproofing",
    shortTitle: "Basement protection",
    description: "Subterranean moisture control that prevents dampness, mould growth, and structural decay.",
    intro:
      "Our basement treatments combine moisture barriers, drainage, and crack repair to create permanently dry below-grade spaces.",
    highlights: [
      "Interior and exterior barrier systems",
      "Pressure-relief drainage design",
      "Mould-resistant finish options",
    ],
    process: [
      { title: "Moisture mapping", description: "We identify hydrostatic pressure points and seepage routes before design." },
      { title: "Barrier implementation", description: "We apply the appropriate membrane or injection system based on the substrate." },
      { title: "Drying and finishing", description: "We complete the treatment with drainage and protective finishes for long-term reliability." },
    ],
    stats: [
      { value: "100%", label: "Moisture-control planning" },
      { value: "24/7", label: "Emergency response readiness" },
      { value: "5★", label: "Client satisfaction" },
    ],
    faqs: [
      { question: "Will waterproofing stop all dampness?", answer: "It drastically reduces moisture ingress and creates a controlled dry envelope when the root cause is addressed." },
    ],
  },
  {
    slug: "terrace-waterproofing",
    title: "Terrace Waterproofing",
    shortTitle: "Terrace protection",
    description: "Protect high-use terraces from rain, heat, and repeated foot traffic with resilient membrane systems.",
    intro:
      "Terraces need more than a basic coating—they need systems that endure thermal movement, sun exposure, and daily use.",
    highlights: [
      "Flexible UV-stable membranes",
      "Crack bridging resilience",
      "Pedestrian-safe finishing",
    ],
    process: [
      { title: "Surface preparation", description: "We remove weak coatings, clean the substrate, and correct surface defects." },
      { title: "System layering", description: "We build a layered membrane system suited to climate and expected traffic." },
      { title: "Final protection", description: "We add protective top coats, drainage details, and inspection seals where required." },
    ],
    stats: [
      { value: "15 yr", label: "Typical service life" },
      { value: "7d", label: "Average turnaround" },
      { value: "100%", label: "Surface inspection coverage" },
    ],
    faqs: [
      { question: "Can terraces be waterproofed without major disruption?", answer: "Yes. We plan phased access and use methods that minimise disturbance to occupied spaces." },
    ],
  },
  {
    slug: "wet-area-waterproofing",
    title: "Wet Area Waterproofing",
    shortTitle: "Bathrooms and kitchens",
    description: "A clean, durable barrier for bathrooms, kitchens, laundry zones, and utility spaces.",
    intro:
      "When moisture is present every day, the barrier has to be precise, hygienic, and suited to daily use.",
    highlights: [
      "Joint and corner detailing",
      "Mould-resistant applications",
      "Fast-curing premium systems",
    ],
    process: [
      { title: "Leak tracing", description: "We identify failure points around drains, joints, and transitions." },
      { title: "Barrier installation", description: "We apply the chosen system with carefully detailed edge sealing." },
      { title: "Finish and verification", description: "We test drainage, inspect transitions, and confirm a clean, durable finish." },
    ],
    stats: [
      { value: "1 day", label: "Typical assessment window" },
      { value: "4k+", label: "Wet area projects completed" },
      { value: "95%", label: "Repeat-client rate" },
    ],
    faqs: [
      { question: "Can this be done without replacing tiles?", answer: "In many cases, yes. We assess the substrate and recommend the least disruptive option available." },
    ],
  },
  {
    slug: "concrete-repair",
    title: "Concrete Repair and Protection",
    shortTitle: "Concrete treatment",
    description: "Repair spalled concrete, blocked movement joints, and aging substrates before leaks spread deeper.",
    intro:
      "Concrete damage often begins as a cosmetic defect and becomes a structural and moisture issue if left untreated.",
    highlights: [
      "Surface restoration",
      "Corrosion protection",
      "Joint and crack remediation",
    ],
    process: [
      { title: "Damage assessment", description: "We inspect surface deterioration, moisture pockets, and active movement." },
      { title: "Repair and stabilization", description: "We restore the concrete and stabilize the failing zones before sealing." },
      { title: "Protective coating", description: "We lock in the repair with a durable protective system for future resilience." },
    ],
    stats: [
      { value: "30%", label: "Reduction in future moisture callbacks" },
      { value: "12 yrs", label: "Average repair durability" },
      { value: "A1", label: "Site safety compliance" },
    ],
    faqs: [
      { question: "Is concrete repair necessary before waterproofing?", answer: "Often yes. A strong base ensures the waterproofing system performs as intended." },
    ],
  },
  {
    slug: "expansion-joints",
    title: "Expansion Joint Treatment",
    shortTitle: "Joint protection",
    description: "Control movement-related leakage with engineered joint systems designed for buildings in motion.",
    intro:
      "Buildings move, and joints are where water finds the easiest path inward. Our systems are built to flex without failing.",
    highlights: [
      "Movement-compatible seals",
      "Joint detailing for slabs and facades",
      "Reduced future maintenance burden",
    ],
    process: [
      { title: "Joint survey", description: "We map the movement profile, width, and exposure of every joint." },
      { title: "System selection", description: "We configure the right sealant, backing, and movement allowance for the application." },
      { title: "Monitoring and handover", description: "We leave behind a clear maintenance plan and inspection guidance." },
    ],
    stats: [
      { value: "90%", label: "Fewer joint-related callbacks" },
      { value: "8 yrs", label: "Typical seal life" },
      { value: "100%", label: "Inspection documentation" },
    ],
    faqs: [
      { question: "Do expansion joints need periodic reinspection?", answer: "Yes. We recommend annual checks to preserve movement continuity and stop small failures from expanding." },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Riverside Residence",
    type: "Private villa",
    location: "Bengaluru",
    description: "A full-roof and terrace treatment for a contemporary hillside home with persistent seepage issues.",
    image: "/assets/illustrations/project-riverside.svg",
  },
  {
    title: "Harbor Office Tower",
    type: "Commercial retrofit",
    location: "Mumbai",
    description: "Basement and podium waterproofing works completed with zero disruption to operations.",
    image: "/assets/illustrations/project-harbor.svg",
  },
  {
    title: "Cedar Apartment Complex",
    type: "Multi-unit residential",
    location: "Pune",
    description: "Wet-area and expansion-joint protection for a large residential community with active water ingress.",
    image: "/assets/illustrations/project-cedar.svg",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "The team diagnosed the issue quickly and delivered a system that has kept the terrace dry through every monsoon.",
    author: "Aarav Mehta",
    role: "Homeowner, Bengaluru",
  },
  {
    quote: "Their process felt thoughtful and transparent. We understood the plan, the risks, and the outcome from day one.",
    author: "Shalini Rao",
    role: "Property Manager, Mumbai",
  },
  {
    quote: "We finally have a waterproofing solution that feels engineered, not improvised.",
    author: "Nikhil Verma",
    role: "Architect, Pune",
  },
];

export const posts: BlogPost[] = [
  {
    slug: "why-roof-leaks-return",
    title: "Why roof leaks return after a quick repair",
    excerpt: "The hidden causes of recurring leaks and how a proper remediation plan prevents repeat damage.",
    category: "Knowledge",
    date: "June 18, 2026",
  },
  {
    slug: "signs-your-basement-needs-attention",
    title: "Five signs your basement needs waterproofing attention",
    excerpt: "Early indicators that moisture problems are becoming structural concerns.",
    category: "Guides",
    date: "May 12, 2026",
  },
  {
    slug: "maintaining-waterproofing-after-monsoon",
    title: "How to maintain waterproofing after the monsoon season",
    excerpt: "A practical maintenance checklist to preserve performance and reduce future repair costs.",
    category: "Maintenance",
    date: "April 26, 2026",
  },
];

export const faqs = [
  {
    question: "How do I know if my property needs waterproofing?",
    answer: "Common symptoms include recurring dampness, bubbling paint, musty odours, staining, and visible cracks around joints or terraces.",
  },
  {
    question: "Do you provide a written inspection report?",
    answer: "Yes. Each assessment includes a clear diagnosis, recommended treatment scope, and an explanation of the risks involved.",
  },
  {
    question: "Can you work on occupied homes?",
    answer: "Absolutely. We coordinate carefully to keep the site safe, tidy, and functional throughout treatment.",
  },
  {
    question: "What materials do you use?",
    answer: "We use premium, application-specific systems tailored to roof, terrace, basement, wet-area, and structural repair needs.",
  },
];

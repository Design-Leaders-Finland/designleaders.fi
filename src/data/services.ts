export interface Service {
  title: string;
  /** Simple HTML (e.g. wrapped in `<p>`) for the long description. */
  descriptionHtml: string;
  features: string[];
  /** Name of a `lucide-react` export, e.g. `CircuitBoard`. */
  icon: string;
}

export const services: Service[] = [
  {
    icon: "CircuitBoard",
    title: "Prototyping",
    descriptionHtml:
      "<p>End-to-end prototyping services for both hardware and software solutions, bringing your ideas to life.</p>",
    features: [
      "Hardware Prototype Development",
      "Software Prototype Creation",
      "Rapid Prototyping & Iteration",
      "User Testing & Validation",
      "Technical Feasibility Studies",
      "Integration Planning",
    ],
  },
  {
    icon: "Sparkles",
    title: "Design Systems",
    descriptionHtml:
      "<p>Build and maintain scalable design systems that enhance consistency and efficiency across your digital products.</p>",
    features: [
      "Design System Strategy & Planning",
      "Component Library Development",
      "Documentation & Guidelines",
      "Implementation Support",
      "Team Training & Workshops",
      "System Maintenance & Evolution",
    ],
  },
  {
    icon: "Zap",
    title: "Design Quality",
    descriptionHtml:
      "<p>Establish and maintain exceptional design quality standards throughout your organization.</p>",
    features: [
      "Quality Assessment Framework",
      "Design Review Processes",
      "Usability Testing",
      "Accessibility Compliance",
      "Performance Optimization",
      "Design Metrics & Analytics",
    ],
  },
  {
    icon: "Users",
    title: "Design Leadership",
    descriptionHtml:
      "<p>Develop strong design leadership capabilities and establish effective design processes.</p>",
    features: [
      "Design Team Structure",
      "Process Optimization",
      "Career Development",
      "Design Operations",
      "Stakeholder Management",
      "Design Culture Building",
    ],
  },
];

export interface TeamMember {
  name: string;
  title?: string;
  keyCompetencies?: string[];
  /** @description Trusted static HTML (e.g. former Contentful rich text rendered once). */
  storyHtml?: string;
  /** @description Image URL or path under `public/` (e.g. `/photos/jane.jpg`). */
  pictureSrc?: string;
  linkedin?: string;
}

/**
 * @description Paste your team entries here (from Contentful or any source). Rich text stories: paste as HTML,
 * or a single `<p>...</p>`.
 */
export const teamMembers: TeamMember[] = [
  {
    keyCompetencies: [
      "UI/UX Design",
      "Visual Design",
      "Front-End Development",
      "Branding",
      "Motion Design",
    ],
    linkedin: "https://www.linkedin.com/in/anttijoonas/",
    name: "Antti Hämäläinen",
    storyHtml: `From TV / Cinema digital VFX to illustrative branding with marketing automation twist and eventually at the edge of UI/UX / software design. As a cross-technical, result-oriented, and Front-End Development-fascinated designer with adaptable creation capabilities I'm inspired by compelling visuals, seamless user experience, plus conception, iteration, and the practical implementation of the above mentioned. I draw my motivation from inquisitive experimentation, the trial-and-error approach for perceiving new things, and shared experiences of success. I believe in the ideal of learning by doing and the importance of continuous reflection on the path to growth, both as a person and as a professional.`,
    title: "Versatile Designer",
  },
  {
    keyCompetencies: ["Design Leadership", "Design Systems", "Design Quality"],
    linkedin: "https://www.linkedin.com/in/jukka-paasonen/",
    name: "Jukka Paasonen",
    storyHtml:
      "Jukka Paasonen is the founder and leader of operations, bringing a rare blend of design, engineering, and security expertise into a single, cohesive vision. With a career spanning startups to global enterprises, he has built and led high-performing teams focused on accessible, scalable, and trustworthy digital experiences. Jukka is known for championing design systems, embedding security into user experience, and fostering a culture where empathy, craftsmanship, and measurable impact go hand in hand.",
    title: "Founder, Head of Engineering",
  },
  {
    keyCompetencies: [
      "Design Strategy",
      "UX Design",
      "UI Design",
      "Service Design",
      "Design Leadership",
    ],
    linkedin: "https://www.linkedin.com/in/veskunurmi/",
    name: "Vesa-Matti Nurmi",
    storyHtml: `Vesku has extensive experience in designing digital products, websites, and services across diverse contexts. His expertise spans a wide range of design competencies, with a strong focus on design strategy, user experience (UX), user interface (UI), and digital product design. Additionally, he excels in service design, brand and content strategy, visual design, and user research. Vesku is experienced in leading design teams, driving cross-functional collaboration, and delivering exceptional customer experiences.

Past: 
hasan & partners, Nokia, Comptel, Ida Fram, Imageneering | worldwide partners, DNA

Clients: 
KONE, Neste, Kesko, Metsä Group, Aalto University, Nokia`,
    title: "Design Director",
  },
];

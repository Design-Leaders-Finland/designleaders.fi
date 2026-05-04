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
    storyHtml: `From cinematic VFX and TV post production to illustrative branding, infused with marketing automation, and now at the forefront of UI/UX and software design — Antti brings a uniquely cross-disciplinary perspective to digital design. As a result-driven creative with a strong passion for front-end development, he crafts experiences that balance compelling visuals with intuitive and seamless usability. His approach blends concept, iteration, and hands-on implementation, ensuring ideas don’t just inspire but perform also. Driven by curiosity, Antti embraces experimentation and a trial-and-error mindset to uncover smarter, more effective solutions.`,
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

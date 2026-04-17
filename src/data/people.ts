export interface TeamMember {
  name: string;
  title?: string;
  keyCompetencies?: string[];
  /** Trusted static HTML (e.g. former Contentful rich text rendered once). */
  storyHtml?: string;
  /** Image URL or path under `public/` (e.g. `/photos/jane.jpg`). */
  pictureSrc?: string;
  linkedin?: string;
}

/**
 * Paste your team entries here (from Contentful or any source).
 * Rich text stories: paste as HTML, or a single `<p>...</p>`.
 */
export const teamMembers: TeamMember[] = [
  {
    name: "Antti Hämäläinen",
    title: "Versatile Designer",
    
    storyHtml: `From TV / Cinema digital VFX to illustrative branding with marketing automation twist and eventually at the edge of UI/UX / software design. As a cross-technical, result-oriented, and Front-End Development-fascinated designer with adaptable creation capabilities I'm inspired by compelling visuals, seamless user experience, plus conception, iteration, and the practical implementation of the above mentioned. I draw my motivation from inquisitive experimentation, the trial-and-error approach for perceiving new things, and shared experiences of success. I believe in the ideal of learning by doing and the importance of continuous reflection on the path to growth, both as a person and as a professional.`, 
  },
  {
    name: "Jukka Paasonen",
    title: "Founder, Head of Engineering",
    keyCompetencies: ["Design Leadership", "Design Systems", "Design Quality"],
    storyHtml: "",
    linkedin: "https://www.linkedin.com/in/jukka-paasonen/",
  },
  {
    name: "Vesa-Matti Nurmi"
  },
];

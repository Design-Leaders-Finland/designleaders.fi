import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import LottieCursor from "@/components/LottieCursor";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent-red/10 text-accent-red rounded-full animate-fade-in">
            Leading Digital Design in Finland
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight animate-fade-up">
            Elevating Digital Design Through Expert Guidance
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            We provide strategic sparring, mentoring, and leadership in design
            systems, quality, and leadership to help your team excel.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-accent-red hover:bg-accent-red/90 rounded-lg transition-colors animate-fade-up delay-200"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-secondary text-foreground rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive Design Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer specialized consulting services to elevate your design
              practices and team capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-accent-red" />,
                title: "Design Systems",
                description:
                  "Build and maintain scalable design systems that enhance consistency and efficiency.",
              },
              {
                icon: <Zap className="h-8 w-8 text-accent-sage" />,
                title: "Design Quality",
                description:
                  "Implement processes and tools to ensure exceptional design quality across all touchpoints.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Design Leadership",
                description:
                  "Develop strong design leadership capabilities within your organization.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border hover:border-accent-red/20 bg-card transition-all duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent-red/10 text-accent-red rounded-full">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore how we've helped organizations transform their design
              practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                title: "Fintech Design System",
                description:
                  "Creating a scalable design system for Finland's fastest-growing fintech company",
                tags: ["Design Systems", "Fintech"],
              },
              {
                image:
                  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
                title: "E-commerce Redesign",
                description:
                  "Implementing design quality framework for major Nordic retailer",
                tags: ["Design Quality", "E-commerce"],
              },
              {
                image:
                  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                title: "Design Team Scaling",
                description:
                  "Supporting rapid design team growth for enterprise SaaS platform",
                tags: ["Leadership", "Enterprise"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden border border-border bg-card motion-safe:animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center motion-safe:animate-on-scroll opacity-0">
            <a
              href="https://dribbble.com/Design Leaders Finland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-accent-red hover:bg-accent-red/90 rounded-lg transition-colors"
            >
              View More on Dribbble
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-secondary text-foreground rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet the Experts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collective of seasoned design leaders and practitioners
              dedicated to elevating digital design in Finland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="relative group animate-on-scroll opacity-0">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Maria Virtanen - Founder"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <LottieCursor />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Maria Virtanen</h3>
                <p className="text-accent-red">
                  Founder & Principal Consultant
                </p>
                <p className="mt-2 text-gray-600">
                  Former Design Lead at Nokia, with 15+ years of experience in
                  design systems and leadership.
                </p>
              </div>
            </div>

            {/* Design Director 1 */}
            <div className="relative group animate-on-scroll opacity-0">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Antti Korhonen - Design Director"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <LottieCursor />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Antti Korhonen</h3>
                <p className="text-accent-sage">Design Director</p>
                <p className="mt-2 text-gray-600">
                  Specialist in design systems implementation and team scaling.
                </p>
              </div>
            </div>

            {/* Design Director 2 */}
            <div className="relative group animate-on-scroll opacity-0">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Laura Mäkinen - Design Director"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <LottieCursor />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Laura Mäkinen</h3>
                <p className="text-accent-sage">Design Director</p>
                <p className="mt-2 text-gray-600">
                  Expert in design quality processes and team mentoring.
                </p>
              </div>
            </div>

            {/* Advisor Grid */}
            <div className="md:col-span-2 lg:col-span-3 mt-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Our Advisors
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Mikko Seppänen",
                    role: "Strategy Advisor",
                    expertise: "Digital Transformation",
                  },
                  {
                    name: "Elena Järvinen",
                    role: "Technology Advisor",
                    expertise: "Design Systems Architecture",
                  },
                  {
                    name: "Juho Nieminen",
                    role: "Industry Advisor",
                    expertise: "Enterprise Design",
                  },
                  {
                    name: "Sofia Koskinen",
                    role: "Research Advisor",
                    expertise: "Design Analytics",
                  },
                ].map((advisor, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl border border-gray-200 hover:border-accent-red/20 transition-all duration-300 animate-on-scroll opacity-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-lg font-semibold">{advisor.name}</h4>
                    <p className="text-accent-red text-sm">{advisor.role}</p>
                    <p className="mt-2 text-gray-600 text-sm">
                      {advisor.expertise}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent-red/10 text-accent-red rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your Design Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to elevate your design practice? Let's discuss how we can
              help.
            </p>
          </div>

          <form className="space-y-6 animate-on-scroll opacity-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent-red focus:ring-1 focus:ring-accent-red/20 transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent-red focus:ring-1 focus:ring-accent-red/20 transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent-red focus:ring-1 focus:ring-accent-red/20 transition-colors"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-accent-red hover:bg-accent-red/90 rounded-lg transition-colors"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

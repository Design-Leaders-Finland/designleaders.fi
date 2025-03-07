import Navigation from "@/components/Navigation";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  BarChart,
  Lightbulb,
  Shield,
  CircuitBoard,
  Computer,
} from "lucide-react";
import { Link } from "react-router";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center mb-8 text-sm font-medium text-foreground hover:text-accent-red transition-colors"
            aria-label="Back to home page"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground ">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8  ">
            Comprehensive design consulting services to transform your digital
            products and team capabilities.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {[
            {
              icon: <CircuitBoard className="h-12 w-12 text-accent-red" />,
              title: "Prototyping",
              description:
                "End-to-end prototyping services for both hardware and software solutions, bringing your ideas to life.",
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
              icon: <Sparkles className="h-12 w-12 text-accent-sage" />,
              title: "Design Systems",
              description:
                "Build and maintain scalable design systems that enhance consistency and efficiency across your digital products.",
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
              icon: <Zap className="h-12 w-12 text-accent-red" />,
              title: "Design Quality",
              description:
                "Establish and maintain exceptional design quality standards throughout your organization.",
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
              icon: <Users className="h-12 w-12 text-foreground" />,
              title: "Design Leadership",
              description:
                "Develop strong design leadership capabilities and establish effective design processes.",
              features: [
                "Design Team Structure",
                "Process Optimization",
                "Career Development",
                "Design Operations",
                "Stakeholder Management",
                "Design Culture Building",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="mb-20 last:mb-0 grid md:grid-cols-2 gap-12 items-start"
            >
              <div className="space-y-6">
                <div className="p-3 rounded-2xl bg-secondary inline-block">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-lg text-foreground/80">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-accent-red hover:text-accent-red/90 transition-colors font-medium"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Shield className="h-5 w-5 mr-3 text-accent-red shrink-0 mt-1" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Additional Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Computer className="h-8 w-8 text-accent-red" />,
                title: "Software Prototyping",
                description:
                  "Rapid development of interactive software prototypes for validation and testing.",
              },
              {
                icon: <CircuitBoard className="h-8 w-8 text-accent-sage" />,
                title: "Hardware Prototyping",
                description:
                  "Physical prototype development with advanced manufacturing techniques.",
              },
              {
                icon: <BarChart className="h-8 w-8 text-accent-red" />,
                title: "Design Analytics",
                description:
                  "Data-driven insights to measure and improve design impact.",
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-accent-sage" />,
                title: "Innovation Workshops",
                description:
                  "Facilitated sessions to spark creativity and problem-solving.",
              },
              {
                icon: <Shield className="h-8 w-8 text-foreground" />,
                title: "Design Audits",
                description:
                  "Comprehensive evaluation of your current design practices.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border shadow-sm group hover:border-accent-red/20 transition-colors"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Transform Your Design Practice?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Let's discuss how our services can help you achieve your design
            goals.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-accent-red hover:bg-accent-red/90 rounded-lg transition-colors"
            aria-label="Get in touch with us"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

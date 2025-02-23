
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent-red/10 text-accent-red rounded-full animate-fade-in">
            Leading Digital Design in Finland
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight animate-fade-up">
            Elevating Digital Design Through Expert Guidance
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            We provide strategic sparring, mentoring, and leadership in design systems, quality, and leadership to help your team excel.
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
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive Design Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer specialized consulting services to elevate your design practices and team capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-accent-red" />,
                title: "Design Systems",
                description: "Build and maintain scalable design systems that enhance consistency and efficiency.",
              },
              {
                icon: <Zap className="h-8 w-8 text-accent-sage" />,
                title: "Design Quality",
                description: "Implement processes and tools to ensure exceptional design quality across all touchpoints.",
              },
              {
                icon: <Users className="h-8 w-8 text-gray-700" />,
                title: "Design Leadership",
                description: "Develop strong design leadership capabilities within your organization.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-accent-red/20 transition-all duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent-red/10 text-accent-red rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your Design Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your design practice? Let's discuss how we can help.
            </p>
          </div>

          <form className="space-y-6 animate-on-scroll opacity-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-red focus:ring-1 focus:ring-accent-red/20 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-red focus:ring-1 focus:ring-accent-red/20 transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-red focus:ring-1 focus:ring-accent-red/20 transition-colors"
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
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Consulto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

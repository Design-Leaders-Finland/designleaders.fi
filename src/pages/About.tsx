import Navigation from "@/components/Navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  Users,
  Award,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center mb-8 text-sm text-foreground hover:text-accent-red transition-colors"
            aria-label="Back to home page"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 motion-safe:animate-fade-up">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl text-foreground mb-8 motion-safe:animate-fade-up motion-safe:delay-100">
            From a vision of better design to Finland's leading design
            consultancy
          </p>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-24">
            {/* Foundation */}
            <div className="relative motion-safe:animate-on-scroll opacity-0">
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-accent-red" />
                <h2 className="text-2xl font-bold ml-4">
                  2018: The Foundation
                </h2>
              </div>
              <p className="text-foreground text-lg leading-relaxed">
                Design Leaders Finland was born from a simple observation:
                Finnish companies were creating amazing digital products, but
                many lacked the design infrastructure to scale effectively. Our
                founders, experienced design leaders from Nokia and Supercell,
                joined forces to bridge this gap.
              </p>
            </div>

            {/* Early Days */}
            <div className="relative motion-safe:animate-on-scroll opacity-0">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-accent-sage" />
                <h2 className="text-2xl font-bold ml-4">2019: Early Success</h2>
              </div>
              <p className="text-foreground text-lg leading-relaxed">
                Our first year saw us partnering with three of Finland's
                fastest-growing startups, helping them establish design systems
                and processes that could scale with their rapid growth. The
                results spoke for themselves - our clients saw significant
                improvements in design consistency and development speed.
              </p>
            </div>

            {/* Growth */}
            <div className="relative motion-safe:animate-on-scroll opacity-0">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-foreground" />
                <h2 className="text-2xl font-bold ml-4">
                  2020-2021: Growing Impact
                </h2>
              </div>
              <p className="text-foreground text-lg leading-relaxed">
                As our reputation grew, so did our team. We expanded our
                services beyond design systems to include comprehensive design
                quality frameworks and leadership development. During this
                period, we helped over 20 companies transform their design
                practices, from early-stage startups to established enterprises.
              </p>
            </div>

            {/* Present */}
            <div className="relative motion-safe:animate-on-scroll opacity-0">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-accent-red" />
                <h2 className="text-2xl font-bold ml-4">
                  Today: Leading the Way
                </h2>
              </div>
              <p className="text-foreground text-lg leading-relaxed">
                Today, Design Leaders Finland stands as Finland's premier design
                consultancy, known for our expertise in design systems, quality,
                and leadership. Our team of experienced consultants continues to
                push the boundaries of what's possible in digital design, while
                maintaining our core mission: helping organizations build better
                products through better design practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from the advice we give to the relationships we build.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe the best results come from true partnership with our clients and within our team.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly explore new approaches and technologies to keep our clients ahead of the curve.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border motion-safe:animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Join Our Story
          </h2>
          <p className="text-lg text-foreground mb-8">
            Ready to be part of the next chapter in our journey? Let's create
            something amazing together.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-accent-red hover:bg-accent-red/90 rounded-lg transition-colors"
            aria-label="Contact us to learn more"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

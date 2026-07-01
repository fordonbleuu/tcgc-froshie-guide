"use client";

import { motion } from "framer-motion";
import {
  Award,
  Globe,
  Users,
  Briefcase,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const reasons = [
  {
    icon: Award,
    title: "Quality Education",
    description:
      "Accredited programs delivered by experienced faculty committed to academic excellence and student success.",
    stat: "95%",
    statLabel: "Pass Rate",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Curriculum designed with international standards, preparing students for global careers and cross-cultural collaboration.",
    stat: "15+",
    statLabel: "International Partners",
  },
  {
    icon: Users,
    title: "Student-Centered",
    description:
      "Small class sizes ensure personalized attention, mentorship, and a supportive learning environment for every student.",
    stat: "20:1",
    statLabel: "Student Ratio",
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    description:
      "Industry partnerships and internship programs provide real-world experience and strong employment pathways after graduation.",
    stat: "85%",
    statLabel: "Employment Rate",
  },
  {
    icon: BookOpen,
    title: "Holistic Development",
    description:
      "Beyond academics, we offer leadership programs, community service, and extracurricular activities for well-rounded growth.",
    stat: "30+",
    statLabel: "Student Organizations",
  },
  {
    icon: TrendingUp,
    title: "Modern Facilities",
    description:
      "Invest in your future with access to contemporary laboratories, libraries, and technology-enhanced learning spaces.",
    stat: "8",
    statLabel: "Colleges",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-tcgc" className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Why Choose TCGC?"
            subtitle="Discover what sets Tangub City Global College apart and why it is the right choice for your higher education journey."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-subheading font-semibold text-white">
                        {reason.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-heading text-gold tracking-wide">
                      {reason.stat}
                    </span>
                    <span className="text-xs text-gray-400 font-subheading uppercase tracking-wider">
                      {reason.statLabel}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

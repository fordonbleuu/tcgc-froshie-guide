"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Microscope,
  Scale,
  Building2,
  Computer,
  Heart,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Program {
  id: string;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  category: string;
}

const programs: Program[] = [
  {
    id: "educ",
    title: "College of Education",
    description:
      "Prepare for a rewarding career in teaching with programs designed to develop competent and passionate educators ready to shape the next generation of learners.",
    icon: BookOpen,
    category: "Education",
  },
  {
    id: "eng",
    title: "College of Engineering",
    description:
      "Develop the skills and knowledge needed to excel in various engineering disciplines, with hands-on training and industry-aligned curriculum.",
    icon: Microscope,
    category: "Engineering",
  },
  {
    id: "law",
    title: "College of Law",
    description:
      "Pursue a career in law with a comprehensive program that emphasizes legal reasoning, ethics, and advocacy skills essential for the legal profession.",
    icon: Scale,
    category: "Law & Governance",
  },
  {
    id: "arch",
    title: "College of Architecture",
    description:
      "Unlock your creative potential and learn to design sustainable, innovative structures that blend functionality with aesthetic excellence.",
    icon: Building2,
    category: "Design & Built Environment",
  },
  {
    id: "it",
    title: "College of Information Technology",
    description:
      "Master the latest technologies and computing concepts to thrive in the digital age, with specializations in software development, networking, and cybersecurity.",
    icon: Computer,
    category: "Technology",
  },
  {
    id: "health",
    title: "College of Health Sciences",
    description:
      "Embark on a fulfilling path in healthcare with programs that combine rigorous academic training with clinical experience to produce competent health professionals.",
    icon: Heart,
    category: "Health & Medicine",
  },
  {
    id: "bus",
    title: "College of Business & Management",
    description:
      "Build a strong foundation in business principles, entrepreneurship, and management strategies to lead organizations in a competitive global marketplace.",
    icon: TrendingUp,
    category: "Business",
  },
  {
    id: "arts",
    title: "College of Arts & Sciences",
    description:
      "Explore the breadth of human knowledge through programs that foster critical thinking, creativity, and a deep understanding of the social and natural sciences.",
    icon: GraduationCap,
    category: "Arts & Humanities",
  },
];

const categories = [
  "All",
  "Education",
  "Engineering",
  "Law & Governance",
  "Design & Built Environment",
  "Technology",
  "Health & Medicine",
  "Business",
  "Arts & Humanities",
];

export default function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Programs Offered"
            subtitle="Explore our diverse range of academic programs designed to prepare you for a successful career in your chosen field."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-subheading font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-subheading font-semibold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <span className="inline-block mt-4 text-xs font-subheading font-medium text-gold uppercase tracking-wider">
                    {program.category}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

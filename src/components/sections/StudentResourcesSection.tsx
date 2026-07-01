"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  UserCheck,
  Briefcase,
  Lightbulb,
  MessageCircle,
  FileText,
  GraduationCap,
} from "lucide-react";

const resources = [
  {
    icon: Award,
    title: "Scholarships & Financial Aid",
    description: "Academic scholarships, athletic grants, and need-based financial assistance programs for qualified students.",
    gradient: "from-amber-50 to-amber-100/50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: BookOpen,
    title: "Learning Support",
    description: "Tutorial services, study skills workshops, and academic advising to help you excel in your studies.",
    gradient: "from-blue-50 to-blue-100/50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Guidance & Counseling",
    description: "Professional counseling services for personal, academic, and career-related concerns in a safe and confidential space.",
    gradient: "from-green-50 to-green-100/50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Briefcase,
    title: "Career Placement",
    description: "Job placement assistance, internship coordination, and career counseling to launch your professional journey.",
    gradient: "from-purple-50 to-purple-100/50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Leadership Programs",
    description: "Student government, organization leadership, and seminars that build your leadership and management skills.",
    gradient: "from-orange-50 to-orange-100/50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: MessageCircle,
    title: "Peer Mentoring",
    description: "Connect with upperclassmen mentors who provide guidance, support, and advice as you navigate college life.",
    gradient: "from-teal-50 to-teal-100/50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: FileText,
    title: "Registrar Services",
    description: "Enrollment, records, transcripts, and all academic documentation needs handled by our dedicated registrar team.",
    gradient: "from-rose-50 to-rose-100/50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: GraduationCap,
    title: "Alumni Network",
    description: "Join a growing network of TCGC graduates who support each other and open doors for new generations.",
    gradient: "from-indigo-50 to-indigo-100/50",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export default function StudentResourcesSection() {
  return (
    <section id="student-life" className="relative py-20 md:py-28 bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-dark" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Support & Resources
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-white uppercase tracking-wide mt-2">
            Student Resources
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We provide comprehensive support services to ensure every student has
            the tools, guidance, and opportunities to succeed.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((res, index) => {
            const Icon = res.icon;
            return (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.08 * index, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${res.iconBg} rounded-xl flex items-center justify-center mb-4 ${res.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-subheading font-semibold text-white mb-2">
                  {res.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {res.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

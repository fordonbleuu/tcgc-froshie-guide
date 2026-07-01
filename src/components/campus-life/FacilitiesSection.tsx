"use client";

import { motion } from "framer-motion";
import { Library, FlaskRound, Laptop, Building2, Trees, Droplets } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const facilities = [
  {
    icon: Library,
    title: "Modern Library",
    description:
      "A fully equipped library with an extensive collection of books, journals, digital resources, and comfortable study areas for individual and group learning.",
  },
  {
    icon: FlaskRound,
    title: "Science Laboratories",
    description:
      "State-of-the-art laboratories for biology, chemistry, and physics, providing hands-on experience in scientific research and experimentation.",
  },
  {
    icon: Laptop,
    title: "Computer Labs",
    description:
      "High-performance computer laboratories with the latest software and high-speed internet access for IT, engineering, and design programs.",
  },
  {
    icon: Building2,
    title: "Lecture Halls",
    description:
      "Spacious, air-conditioned lecture halls equipped with modern audiovisual technology for engaging and interactive learning sessions.",
  },
  {
    icon: Trees,
    title: "Campus Grounds",
    description:
      "Beautifully landscaped campus with open green spaces, gardens, and seating areas conducive for relaxation and outdoor study.",
  },
  {
    icon: Droplets,
    title: "Student Center",
    description:
      "A vibrant hub featuring a cafeteria, lounges, and multi-purpose spaces for organizations, events, and social gatherings.",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Our Campus
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Campus Facilities
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience a campus designed for learning, growth, and community. Every
            space is built to support your academic and personal development.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <PlaceholderImage
                  aspectRatio="16/10"
                  label={facility.title}
                  className="rounded-none"
                />
                <div className="p-5 md:p-6">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-subheading font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

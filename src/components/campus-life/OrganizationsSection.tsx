"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Music,
  BookOpen,
  Globe,
  HandHeart,
  Mic,
  Code,
  Theater,
} from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const orgs = [
  {
    icon: BookOpen,
    title: "Junior Philippine Computer Society",
    description: "For IT and CS students passionate about technology and innovation.",
  },
  {
    icon: Palette,
    title: "Performing Arts Guild",
    description: "Showcasing talent in theater, dance, and creative performances.",
  },
  {
    icon: Music,
    title: "TCGC Chorale & Band",
    description: "The official musical ensembles representing the college.",
  },
  {
    icon: Mic,
    title: "Debate Society",
    description: "Honing critical thinking and public speaking through competitive debate.",
  },
  {
    icon: HandHeart,
    title: "Peer Counseling Group",
    description: "Providing mental health support and peer-to-peer guidance.",
  },
  {
    icon: Code,
    title: "Engineering Student Society",
    description: "Uniting engineering students for academic and professional growth.",
  },
  {
    icon: Globe,
    title: "International Relations Club",
    description: "Exploring global issues and fostering cross-cultural understanding.",
  },
  {
    icon: Theater,
    title: "TCGC Theater Guild",
    description: "Bringing stories to life through stage productions and dramatic arts.",
  },
];

export default function OrganizationsSection() {
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
            Get Involved
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Student Organizations
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            With over 30 accredited organizations, there&apos;s a community for
            every interest. Find your people and make your mark.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <PlaceholderImage
            aspectRatio="21/7"
            label="TCGC — Student Organizations & Clubs"
            className="shadow-xl"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {orgs.map((org, index) => {
            const Icon = org.icon;
            return (
              <motion.div
                key={org.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group bg-light-gray rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-subheading font-semibold text-gray-900 mb-2">
                  {org.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {org.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

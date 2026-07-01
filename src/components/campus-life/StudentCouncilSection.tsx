"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Vote, HandHelping } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const roles = [
  { icon: ShieldCheck, label: "Student Governance" },
  { icon: Vote, label: "Representation" },
  { icon: HandHelping, label: "Advocacy" },
  { icon: Users, label: "Community Building" },
];

export default function StudentCouncilSection() {
  return (
    <section className="py-20 md:py-28 bg-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Student Leadership
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Student Council
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The duly elected representative body of the studentry, committed to
            serving, leading, and empowering every TCGC student.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-heading text-primary uppercase tracking-wide">
              The Voice of the Student Body
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The TCGC Student Council serves as the central governing body
              representing all students across every college and program. Elected
              annually, the council works tirelessly to bridge communication
              between students and the administration, advocate for student
              welfare, and organize events that enrich campus life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From organizing General Assemblies and leadership summits to
              implementing student-centered projects and initiatives, the Student
              Council is at the forefront of creating a vibrant, inclusive, and
              responsive campus environment.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {roles.map((r) => {
                const RIcon = r.icon;
                return (
                  <div
                    key={r.label}
                    className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-sm"
                  >
                    <RIcon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-subheading font-medium text-gray-700 text-center">
                      {r.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <PlaceholderImage
              aspectRatio="4/3"
              label="TCGC Student Council"
              className="shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {["Student Council General Assembly", "Leadership Summit & Planning Session"].map(
            (label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <PlaceholderImage
                  aspectRatio="21/9"
                  label={label}
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

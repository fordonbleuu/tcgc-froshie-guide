"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Building2, Award, Globe, Users, BookOpen } from "lucide-react";

const milestones = [
  {
    year: "1984",
    title: "Tangub City College Founded",
    description:
      "Tangub City Global College started as Tangub City College (TCC) in 1984, born during the incumbency of the late Mayor Alfonso D. Tan of Tangub City. By virtue of a city ordinance, the college opened its doors on June 1, 1984 to more than 200 pioneering students.",
    icon: GraduationCap,
  },
  {
    year: "1992",
    title: "Became GADTMC",
    description:
      "Under the term of Gov. Philip T. Tan, nephew of TCGC Founder, TCC turned into Gov. Alfonso D. Tan Memorial College (GADTMC). Gov. Tan vowed to improve the college's facilities and raise the standards of the school.",
    icon: Building2,
  },
  {
    year: "2003",
    title: "Became ADTC",
    description:
      "Under the governance of Mayor Jennifer Wee-Tan, GADTMC transitioned to Alfonso D. Tan College (ADTC), marking the third transition in the college's history.",
    icon: BookOpen,
  },
  {
    year: "2007",
    title: "Became GADTC",
    description:
      "In the same administration of Mayor Jennifer Wee-Tan, the college was renamed again to Gov. Alfonso D. Tan College (GADTC), further solidifying its legacy and commitment to quality education.",
    icon: Award,
  },
  {
    year: "Present",
    title: "Tangub City Global College",
    description:
      "At present, the college bears the name Tangub City Global College, stamped in its wavering green flag which emblematizes its excellence and pride with myriads of accomplishments achieved. TCGC continues to uplift the life of each individual, building their dreams and realizing their visions to be the light of the world.",
    icon: Globe,
  },
];

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-20 md:py-28 bg-light-gray overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Our Journey
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            History &amp; Milestones
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From our founding to the present, explore the key moments that have shaped
            Tangub City Global College into the institution it is today.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold via-primary to-gold rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-14 md:pl-0`}>
                    <span className="inline-block text-xs font-subheading font-bold text-gold bg-gold/10 px-3 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading text-primary uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-1 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-md"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </motion.div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import StudentLifeHero from "@/components/student-life/StudentLifeHero";
import FileCard from "@/components/student-life/FileCard";

const resources = [
  {
    title: "Student Handbook",
    description:
      "A comprehensive guide covering TCGC policies, student code of conduct, academic regulations, campus services, and essential information for every student.",
    qrSrc: "/images/qr-handbook.png",
  },
  {
    title: "Lux Mundi CBL",
    description:
      "The official Community-Based Learning manual outlining CBL objectives, project guidelines, documentation requirements, and rubric for the Lux Mundi program.",
    qrSrc: "/images/qr-cbl.png",
  },
];

export default function StudentLifePage() {
  return (
    <>
      <StudentLifeHero />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
              Organization
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
              Supreme Student Council
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              The pillars and backbone behind student activities and events.
            </p>
            <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>

          <div className="flex justify-center">
            <img
              src="/images/ssc-org-struct.png"
              alt="SSC Organizational Structure"
              className="w-full max-w-[2048px] rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
              Downloads
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
              Available Files
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Download important academic documents and reference materials to
              help you navigate your college life at TCGC.
            </p>
            <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((res, index) => (
              <FileCard
                key={res.title}
                title={res.title}
                description={res.description}
                qrSrc={res.qrSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

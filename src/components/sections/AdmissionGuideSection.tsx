"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  Calendar,
  CheckCircle,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const requirements = [
  "Form 138 / High School Report Card (original and photocopy)",
  "Certificate of Good Moral Character from the last school attended",
  "PSA-issued Birth Certificate (original and photocopy)",
  "2x2 ID pictures (4 pieces, white background)",
  "1x1 ID pictures (4 pieces, white background)",
  "Long brown envelope",
  "Accomplished Application Form (available at the Registrar's Office)",
];

const steps = [
  {
    step: 1,
    title: "Submit Requirements",
    description:
      "Visit the Registrar's Office with all the required documents listed above. Ensure all forms are properly accomplished.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Entrance Examination",
    description:
      "Take the TCGC College Entrance Test scheduled by the Admissions Office. The exam assesses aptitude in core subject areas.",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Interview",
    description:
      "Qualified applicants will be scheduled for an interview with the program dean or admissions panel to discuss academic goals and program fit.",
    icon: Calendar,
  },
  {
    step: 4,
    title: "Enrollment",
    description:
      "Upon passing all requirements, proceed with enrollment by paying the required fees and securing your class schedule for the semester.",
    icon: CheckCircle,
  },
];

const deadlines = [
  { event: "First Semester Application", date: "March 1 - August 15" },
  { event: "Second Semester Application", date: "October 1 - January 15" },
  { event: "Summer Term Application", date: "April 1 - May 15" },
];

export default function AdmissionGuideSection() {
  return (
    <section id="admission" className="py-20 md:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Admission Guide"
            subtitle="Your pathway to becoming a TCGC freshman. Review the requirements, understand the process, and take the first step toward your future."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <AnimatedSection direction="left">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full">
              <h3 className="text-xl font-heading text-primary uppercase tracking-wide mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-gold" />
                Requirements
              </h3>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  Requirements may vary per program. It is recommended to
                  confirm with the Registrar&apos;s Office for program-specific
                  requirements.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-heading text-primary uppercase tracking-wide mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-gold" />
                Important Dates
              </h3>
              <div className="space-y-4">
                {deadlines.map((d) => (
                  <div
                    key={d.event}
                    className="flex items-center justify-between p-4 bg-light-gray rounded-xl"
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {d.event}
                    </span>
                    <span className="text-sm text-primary font-subheading font-semibold">
                      {d.date}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Dates are subject to change. Please check the official TCGC
                website or visit the Registrar&apos;s Office for the most
                up-to-date information.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="relative">
          <AnimatedSection>
            <h3 className="text-xl md:text-2xl font-heading text-primary uppercase tracking-wide text-center mb-12">
              Step-by-Step Process
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <AnimatedSection key={step.step} delay={index * 0.15}>
                  <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center h-full group hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-subheading font-bold text-sm">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-subheading font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    {!isLast && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-gold" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Ready to begin your journey at Tangub City Global College?
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Admissions Office
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

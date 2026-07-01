"use client";

import { useState } from "react";
import AcademicsHero from "@/components/academics/AcademicsHero";
import InstituteCard from "@/components/academics/InstituteCard";
import InstituteModal from "@/components/academics/InstituteModal";
import { institutes, type InstituteData } from "@/lib/institutes-data";

export default function AcademicsPage() {
  const [selectedInstitute, setSelectedInstitute] = useState<InstituteData | null>(null);

  return (
    <>
      <AcademicsHero />

      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutes.map((inst, index) => (
              <InstituteCard
                key={inst.id}
                logo={inst.logo}
                title={inst.title}
                description={inst.shortDesc}
                index={index}
                onLearnMore={() => setSelectedInstitute(inst)}
              />
            ))}
          </div>
        </div>
      </section>

      <InstituteModal
        institute={selectedInstitute}
        onClose={() => setSelectedInstitute(null)}
      />
    </>
  );
}

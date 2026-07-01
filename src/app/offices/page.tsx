"use client";

import OfficesHero from "@/components/offices/OfficesHero";
import OfficeCard from "@/components/offices/OfficeCard";
import { offices } from "@/lib/offices-data";

export default function OfficesPage() {
  return (
    <>
      <OfficesHero />

      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <OfficeCard
                key={office.id}
                icon={office.icon}
                title={office.title}
                description={office.description}
                bgLight={office.bgLight}
                textColor={office.textColor}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

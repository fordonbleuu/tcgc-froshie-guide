import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { Target, Eye, Shield, Heart, Star } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding the highest standards of honesty, transparency, and ethical conduct in all academic and administrative endeavors.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Fostering a culture of empathy, kindness, and genuine care for others within and beyond the campus community.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Striving for the highest quality in everything we do, inspiring students and staff to reach their fullest potential.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="About TCGC"
            subtitle="Discover the story, mission, and values that make Tangub City Global College a premier institution for higher learning in Misamis Occidental."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading text-primary uppercase tracking-wide">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tangub City Global College started as Tangub City College (TCC)
                in 1984, opened on June 1 of that year to more than 200
                pioneering students. It was born during the incumbency of the
                late Mayor Alfonso D. Tan of Tangub City.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In 1992, under Gov. Philip T. Tan, it became Gov. Alfonso D. Tan
                Memorial College (GADTMC). It transitioned to Alfonso D. Tan
                College (ADTC) in 2003 and later to Gov. Alfonso D. Tan College
                (GADTC) in 2007. Today, as Tangub City Global College, it
                continues to uplift lives, build dreams, and realize visions to
                be the light of the world.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <PlaceholderImage
              aspectRatio="4/3"
              label="TCGC Campus Aerial View"
              className="shadow-2xl"
            />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <AnimatedSection delay={0.1} className="h-full">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading text-primary uppercase tracking-wide mb-3">
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To equip the faculty and staff through continuing professional
                development programs to produce Globally Competitive graduates
                by ensuring a holistic approach to education.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="h-full">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading text-primary uppercase tracking-wide mb-3">
                Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                TCGC is the leading Higher Education Institution in Northwest
                Mindanao providing quality education and producing God-Centered
                citizens committed to be the Light of the World.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h3 className="text-2xl md:text-3xl font-heading text-primary uppercase tracking-wide text-center mb-10">
            Core Values
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-lg font-subheading font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

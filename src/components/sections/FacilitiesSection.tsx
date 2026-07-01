import { Library, FlaskRound, Laptop, Building2, Trees, Droplets } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
      "State-of-the-art laboratories for biology, chemistry, and physics, providing students with hands-on experience in scientific research and experimentation.",
  },
  {
    icon: Laptop,
    title: "Computer Labs",
    description:
      "High-performance computer laboratories with the latest software and high-speed internet access to support IT, engineering, and design programs.",
  },
  {
    icon: Building2,
    title: "Lecture Halls",
    description:
      "Spacious, air-conditioned lecture halls equipped with modern audiovisual technology to facilitate engaging and interactive learning sessions.",
  },
  {
    icon: Trees,
    title: "Campus Grounds",
    description:
      "A beautifully landscaped campus with open green spaces, gardens, and seating areas that provide a conducive environment for relaxation and outdoor study.",
  },
  {
    icon: Droplets,
    title: "Student Center",
    description:
      "A vibrant hub for student activities featuring a cafeteria, lounges, and multi-purpose spaces for organizations, events, and social gatherings.",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Campus Facilities"
            subtitle="Experience a campus designed for learning, growth, and community. Our facilities provide the ideal environment for academic and personal development."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <AnimatedSection key={facility.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <PlaceholderImage
                    aspectRatio="16/10"
                    label={`${facility.title}`}
                  />
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-subheading font-semibold text-gray-900 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

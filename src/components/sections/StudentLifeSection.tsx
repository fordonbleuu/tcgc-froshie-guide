import {
  Palette,
  Music,
  Trophy,
  Users,
  Mic,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const activities = [
  {
    icon: Palette,
    title: "Arts & Culture",
    description:
      "Join theater groups, dance troupes, and visual arts clubs that showcase talent and celebrate cultural heritage through performances and exhibits.",
  },
  {
    icon: Music,
    title: "Music & Bands",
    description:
      "Be part of the college band, choir, or contemporary music groups that perform at campus events and intercollegiate competitions.",
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    description:
      "Compete in basketball, volleyball, badminton, and other sports through our varsity teams and intramural programs.",
  },
  {
    icon: Users,
    title: "Student Organizations",
    description:
      "Choose from over 30 accredited student organizations spanning academic, cultural, social, and special interest groups.",
  },
  {
    icon: Mic,
    title: "Leadership Programs",
    description:
      "Develop your leadership potential through the student government, organization officer roles, and leadership seminars.",
  },
  {
    icon: HeartHandshake,
    title: "Community Service",
    description:
      "Engage in outreach programs, community development projects, and volunteer initiatives that make a positive social impact.",
  },
];

const orgs = [
  "TCGC Student Government",
  "Junior Philippine Computer Society",
  "Education Student Council",
  "Engineering Student Society",
  "Business Management Club",
  "Performing Arts Guild",
  "TCGC Debate Society",
  "Peer Counseling Group",
];

export default function StudentLifeSection() {
  return (
    <section id="student-life" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Student Life"
            subtitle="College is more than just academics. Discover a vibrant campus community filled with opportunities for growth, connection, and unforgettable experiences."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection direction="left">
            <PlaceholderImage
              aspectRatio="4/3"
              label="Student Life at TCGC"
              className="shadow-2xl"
            />
          </AnimatedSection>

          <AnimatedSection direction="right">
            <h3 className="text-2xl md:text-3xl font-heading text-primary uppercase tracking-wide mb-6">
              Life Beyond the Classroom
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At TCGC, student life is a vibrant tapestry of experiences that
              extend far beyond the classroom. From spirited cultural festivals
              and athletic competitions to meaningful community service
              initiatives, there is always something happening on campus. Our
              students are encouraged to explore their passions, develop new
              skills, and build lifelong friendships in a welcoming and
              inclusive environment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-light-gray rounded-xl p-4 text-center">
                <span className="text-2xl font-heading text-primary">30+</span>
                <p className="text-xs text-gray-500 font-subheading mt-1">
                  Organizations
                </p>
              </div>
              <div className="bg-light-gray rounded-xl p-4 text-center">
                <span className="text-2xl font-heading text-primary">15+</span>
                <p className="text-xs text-gray-500 font-subheading mt-1">
                  Annual Events
                </p>
              </div>
              <div className="bg-light-gray rounded-xl p-4 text-center">
                <span className="text-2xl font-heading text-primary">1,500+</span>
                <p className="text-xs text-gray-500 font-subheading mt-1">
                  Student Body
                </p>
              </div>
              <div className="bg-light-gray rounded-xl p-4 text-center">
                <span className="text-2xl font-heading text-primary">10+</span>
                <p className="text-xs text-gray-500 font-subheading mt-1">
                  Varsity Teams
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h3 className="text-xl md:text-2xl font-heading text-primary uppercase tracking-wide text-center mb-10">
            Activities & Organizations
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <AnimatedSection key={activity.title} delay={index * 0.1}>
                <div className="bg-light-gray rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-subheading font-semibold text-gray-900 mb-2">
                    {activity.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-heading text-white uppercase tracking-wide mb-4">
              Student Organizations
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join any of our accredited student organizations to find your
              community, develop leadership skills, and make the most of your
              college experience.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {orgs.map((org) => (
                <span
                  key={org}
                  className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-subheading font-medium hover:bg-white/20 transition-colors"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqItems = [
  {
    id: "faq-1",
    title: "When does the school year start at TCGC?",
    content:
      "The academic year at Tangub City Global College typically begins in August for the first semester and follows the standard Philippine academic calendar. The second semester starts in January, with a summer term from June to July. Exact dates are announced through the official academic calendar released by the Registrar's Office.",
  },
  {
    id: "faq-2",
    title: "What are the tuition fees at TCGC?",
    content:
      "Tuition fees at TCGC vary depending on the program and number of units enrolled per semester. TCGC strives to keep education accessible and affordable, offering competitive tuition rates along with various payment schemes. For specific tuition figures, we recommend contacting the Finance Office or visiting the campus for a detailed breakdown based on your chosen program.",
  },
  {
    id: "faq-3",
    title: "Does TCGC offer scholarships or financial aid?",
    content:
      "Yes, TCGC offers several scholarship programs for qualified students, including academic scholarships, athletic scholarships, and need-based financial assistance. Scholarships are typically awarded based on academic performance, entrance exam results, and other criteria set by the scholarship committee. Inquiries can be directed to the Scholarship Office during enrollment periods.",
  },
  {
    id: "faq-4",
    title: "Is TCGC a recognized and accredited institution?",
    content:
      "Yes, Tangub City Global College is recognized by the Commission on Higher Education (CHED) and operates in compliance with the standards set by the Department of Education. The college is committed to maintaining high academic standards and pursuing accreditation for its various programs through recognized accrediting bodies.",
  },
  {
    id: "faq-5",
    title: "What programs and courses does TCGC offer?",
    content:
      "TCGC offers a wide range of undergraduate programs across multiple colleges, including Education, Engineering, Law, Architecture, Information Technology, Health Sciences, Business and Management, and Arts and Sciences. Each program is designed to meet industry standards and prepare students for successful careers. Visit our Programs section for a complete list of offerings.",
  },
  {
    id: "faq-6",
    title: "Are there dormitories or boarding houses near the campus?",
    content:
      "While TCGC does not operate its own dormitories, there are several affordable boarding houses, apartments, and dormitories located within walking distance of the campus. The Student Affairs Office maintains a list of accredited and safe accommodations for students coming from outside Tangub City.",
  },
  {
    id: "faq-7",
    title: "How can I contact a specific department or professor?",
    content:
      "You can reach specific departments by calling the TCGC trunk line and asking to be connected to the appropriate office, or by sending an email to the department's official address. For the most direct communication, we recommend visiting the campus during office hours. Visit our Contact section for the college's main contact information.",
  },
  {
    id: "faq-8",
    title: "Does TCGC have a dress code policy?",
    content:
      "Yes, TCGC maintains a dress code policy that requires students to wear proper attire while on campus. On regular class days, students are expected to wear decent and appropriate clothing. Uniforms are required for specific programs on designated days. The complete dress code policy is outlined in the Student Handbook provided during enrollment.",
  },
  {
    id: "faq-9",
    title: "What student support services are available?",
    content:
      "TCGC provides comprehensive student support services including academic advising, guidance and counseling, career placement assistance, library services, health services, and a student affairs office that handles concerns regarding student welfare, organizations, and disciplinary matters. These services are designed to support students throughout their college journey.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about TCGC, admissions, campus life, and more. If you need further assistance, feel free to contact us."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion items={faqItems} />
        </AnimatedSection>
      </div>
    </section>
  );
}

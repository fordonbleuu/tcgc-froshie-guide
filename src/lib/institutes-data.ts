import {
  BookOpen,
  Computer,
  TrendingUp,
  Heart,
  GraduationCap,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface InstituteData {
  id: string;
  title: string;
  shortDesc: string;
  logo: string;
  icon: LucideIcon;
  color: string;
  bgLight: string;
  textColor: string;
  overview: string;
  programs: string[];
  careers: string[];
}

export const institutes: InstituteData[] = [
  {
    id: "business",
    title: "Institute of Business and Financial Services",
    shortDesc:
      "Developing future business leaders and financial professionals with strong foundations in management, marketing, and finance.",
    logo: "/institutes/ibfs.png",
    icon: TrendingUp,
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    overview:
      "The Institute of Business and Financial Services at Tangub City Global College equips students with the knowledge and skills needed to excel in the dynamic world of business and finance. Through a blend of theoretical foundations and practical applications, students develop expertise in human resource management, marketing, office administration, and financial management.",
    programs: [
      "Bachelor of Science in Business Administration Major in Human Resource Management",
      "Bachelor of Science in Business Administration Major in Marketing Management",
      "Bachelor of Science in Office Administration",
      "Bachelor of Science in Financial Management",
    ],
    careers: [
      "Human Resource Manager",
      "Marketing Manager",
      "Financial Analyst",
      "Office Administrator",
      "Business Consultant",
      "Entrepreneur",
    ],
  },
  {
    id: "arts-sciences",
    title: "Institute of Arts and Sciences",
    shortDesc:
      "Fostering critical thinking, effective communication, and a deep understanding of society through the humanities and social sciences.",
    logo: "/institutes/ias.png",
    icon: GraduationCap,
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
    overview:
      "The Institute of Arts and Sciences provides a well-rounded liberal arts education that develops students' communication, analytical, and critical thinking skills. With programs in communication, English language, and political science, students are prepared for diverse careers in media, education, governance, and public service.",
    programs: [
      "Bachelor of Arts in Communication",
      "Bachelor of Arts in English Language",
      "Bachelor of Arts in Political Science",
    ],
    careers: [
      "Communication Specialist",
      "Journalist",
      "English Instructor",
      "Policy Analyst",
      "Public Relations Officer",
      "Legislative Aide",
    ],
  },
  {
    id: "computer-studies",
    title: "Institute of Computer Studies",
    shortDesc:
      "Building expertise in computing and information technology to meet the demands of the digital age.",
    logo: "/institutes/ics.png",
    icon: Computer,
    color: "from-red-800 to-red-900",
    bgLight: "bg-red-50",
    textColor: "text-red-800",
    overview:
      "The Institute of Computer Studies offers a focused curriculum that prepares students for careers in the ever-evolving field of information technology. With emphasis on both theoretical foundations and practical application, graduates are equipped to solve real-world problems through computing.",
    programs: [
      "Bachelor of Science in Computer Studies",
    ],
    careers: [
      "IT Professional",
      "Software Developer",
      "Systems Analyst",
      "Network Administrator",
      "Database Administrator",
    ],
  },
  {
    id: "teacher-education",
    title: "Institute of Teacher Education",
    shortDesc:
      "Preparing dedicated and competent educators who shape the minds of future generations.",
    logo: "/institutes/ite.png",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    overview:
      "The Institute of Teacher Education at TCGC is committed to producing quality educators who are passionate, skilled, and ready to inspire. With a range of specialization areas, graduates are prepared to teach in elementary and secondary levels and contribute meaningfully to the education sector.",
    programs: [
      "Bachelor of Elementary Education",
      "Bachelor of Secondary Education Major in English",
      "Bachelor of Secondary Education Major in Filipino",
      "Bachelor of Secondary Education Major in Math",
      "Bachelor of Secondary Education Major in Social Studies",
    ],
    careers: [
      "Elementary School Teacher",
      "High School Teacher",
      "Curriculum Developer",
      "School Administrator",
      "Educational Consultant",
    ],
  },
  {
    id: "criminal-justice",
    title: "Institute of Criminal Justice Education",
    shortDesc:
      "Developing ethical and skilled professionals in criminology and security management for a safer society.",
    logo: "/institutes/icje.png",
    icon: Shield,
    color: "from-red-500 to-red-600",
    bgLight: "bg-red-50",
    textColor: "text-red-600",
    overview:
      "The Institute of Criminal Justice Education provides comprehensive training in criminology and industrial security management. Students gain a deep understanding of the criminal justice system, law enforcement, and security operations, preparing them for careers in public safety and private security.",
    programs: [
      "Bachelor of Science in Criminology",
      "Bachelor of Science in Industrial Security Management",
    ],
    careers: [
      "Criminologist",
      "Law Enforcement Officer",
      "Security Manager",
      "Forensic Investigator",
      "Corrections Officer",
    ],
  },
  {
    id: "health-sciences",
    title: "Institute of Health Sciences",
    shortDesc:
      "Training compassionate healthcare professionals dedicated to maternal and child health and community well-being.",
    logo: "/institutes/ihs.png",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    bgLight: "bg-pink-50",
    textColor: "text-pink-600",
    overview:
      "The Institute of Health Sciences is dedicated to producing competent and caring midwifery professionals who serve their communities with excellence. The program combines rigorous academic instruction with extensive clinical training, preparing graduates for licensure and professional practice.",
    programs: [
      "Bachelor of Science in Midwifery",
    ],
    careers: [
      "Registered Midwife",
      "Maternal and Child Health Worker",
      "Community Health Nurse",
      "Health Educator",
      "Hospital Administrator",
    ],
  },
];

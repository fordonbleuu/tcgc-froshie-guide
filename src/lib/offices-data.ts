import {
  ClipboardList,
  Building2,
  Award,
  HeartPulse,
  Users,
  ShieldCheck,
  Newspaper,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface OfficeData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgLight: string;
  textColor: string;
}

export const offices: OfficeData[] = [
  {
    id: "registrar",
    title: "Registrar",
    description:
      "The Registrar's Office contributes to the mission of the college by providing administrative, academic and logistical support for the college's curriculum, reinforcing its academic policies, maintaining the integrity of its institutional and educational records, and facilitating a culture that preserves the values of the college and its community.",
    icon: ClipboardList,
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: "administration",
    title: "Administration and Finance",
    description:
      "The office of the VP for Administration and Finance is a pervasive essential pillar of the institution. It studies, formulate and recommend financial management policies for the proper utilization of the financial transaction of the college. The office promotes good governance through accountability and transparency to the college and the City.",
    icon: Building2,
    color: "from-slate-600 to-slate-700",
    bgLight: "bg-slate-100",
    textColor: "text-slate-700",
  },
  {
    id: "scholarship",
    title: "Scholarship Office",
    description:
      "The Scholarship and Welfare Services of Tangub City Global College ensure that students receive both financial support and personal development assistance. Through accessible scholarship programs and comprehensive welfare services, the college promotes inclusive education and student well-being.",
    icon: Award,
    color: "from-amber-500 to-amber-600",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    id: "medical",
    title: "Medical and Dental Office",
    description:
      "Medical and Dental Services is committed to: Provide quality health care to every member of the institution to ensure that educational potential will not be hampered by unmet health needs; and endeavor to promote activities and programs to enforce proper preventive medicine and awareness of good health practices.",
    icon: HeartPulse,
    color: "from-rose-500 to-rose-600",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
  },
  {
    id: "student-life",
    title: "Office of Student Life and Development",
    description:
      "The Office of Student Life and Development includes guidance, admissions, and the prefect office, supporting students through counseling, enrollment processes, and leadership management to enhance their overall experience and success.",
    icon: Users,
    color: "from-teal-500 to-teal-600",
    bgLight: "bg-teal-50",
    textColor: "text-teal-600",
  },
  {
    id: "nstp",
    title: "NSTP Office",
    description:
      "The NSTP Office fosters community involvement and nation-building through service-oriented programs. It guides students in becoming responsible citizens and future leaders.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    id: "publication",
    title: "Student Publication Office",
    description:
      "The Student Publication Office is the voice of the student body, dedicated to responsible campus journalism. It fosters creativity, critical thinking, and ethical writing through published works that inform, inspire, and empower the community.",
    icon: Newspaper,
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: "socio-cultural",
    title: "Socio-Cultural Office",
    description:
      "The Socio-Cultural Office of Tangub City Global College fosters student growth through cultural awareness, creativity, and community involvement. It empowers students to embrace Filipino values and traditions while promoting diverse talents and holistic development.",
    icon: Globe,
    color: "from-orange-500 to-orange-600",
    bgLight: "bg-orange-50",
    textColor: "text-orange-600",
  },
];

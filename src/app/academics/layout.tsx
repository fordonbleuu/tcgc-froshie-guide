import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Institutes",
  description:
    "Explore the six specialized institutes at Tangub City Global College — Business and Financial Services, Arts and Sciences, Computer Studies, Teacher Education, Criminal Justice Education, and Health Sciences.",
};

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

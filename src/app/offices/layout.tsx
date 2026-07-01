import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Offices",
  description:
    "Explore the student services offices at Tangub City Global College — Registrar, Administration, Scholarship, Medical, Student Life, NSTP, Publication, and Socio Cultural.",
};

export default function OfficesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "Download essential student resources at Tangub City Global College — Student Handbook, Lux Mundi CBL manual, and more helpful guides. Get to know the pillars and the backbones behind student activities and events.",
};

export default function StudentLifeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

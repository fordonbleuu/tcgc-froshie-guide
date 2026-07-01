import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import VisionMissionCards from "@/components/about/VisionMissionCards";
import CoreValuesGrid from "@/components/about/CoreValuesGrid";
import CollegeHymn from "@/components/about/CollegeHymn";

export const metadata: Metadata = {
  title: "About TCGC",
  description:
    "Discover the history, vision, mission, core values, and college hymn of Tangub City Global College.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HistoryTimeline />
      <VisionMissionCards />
      <CoreValuesGrid />
      <CollegeHymn />
    </>
  );
}

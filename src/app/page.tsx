import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import QuickNavSection from "@/components/sections/QuickNavSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import AcademicInstitutesSection from "@/components/sections/AcademicInstitutesSection";
import StudentResourcesSection from "@/components/sections/StudentResourcesSection";
import ContactPreviewSection from "@/components/sections/ContactPreviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <QuickNavSection />
      <AboutPreviewSection />
      <AcademicInstitutesSection />
      <StudentResourcesSection />
      <ContactPreviewSection />
    </>
  );
}

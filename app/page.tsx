import AdmissionsSection from "@/components/LandingPage.tsx/AdmissionSection";
import { HeroSlider } from "@/components/LandingPage.tsx/Carousel";
import { CourseExplorer } from "@/components/LandingPage.tsx/ExploreCourses";
import WelcomeSection from "@/components/LandingPage.tsx/WelcomeSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <CourseExplorer />
      <AdmissionsSection />
    </>
  );
}

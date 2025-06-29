import AboutMeSection from "@/components/AboutMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutMeSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <Footer/>
    </div>
  );
}

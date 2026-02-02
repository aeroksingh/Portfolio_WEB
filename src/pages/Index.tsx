import Navbar from '@/components/Navbar';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import StarryBackground from '@/components/StarryBackground';
import HeroSection from '@/components/HeroSection';
import AboutCard from '@/components/AboutCard';
import ProblemSolverCard from '@/components/ProblemSolverCard';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectSpotlight from '@/components/ProjectSpotlight';
import CurrentlyReadingCard from '@/components/CurrentlyReadingCard';
import TerminalContact from '@/components/TerminalContact';
import SocialDock from '@/components/SocialDock';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Dynamic Starry Background */}
      <StarryBackground />

      <main className="relative container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="bento-grid gap-8 md:gap-12">
          {/* Hero Section - spans 7 cols on large screens */}
          <HeroSection />
          
          {/* About Card - spans 5 cols on large screens */}
          <AboutCard />
          
          {/* Problem Solver Card */}
          <ProblemSolverCard />
          
          {/* Currently Reading Card */}
          <CurrentlyReadingCard />
          
          {/* Skills Section - full width */}
          <SkillsSection />
          
          {/* Experience Section - full width */}
          <ExperienceSection />
          
          {/* Project Spotlight - full width */}
          <ProjectSpotlight />
          
          {/* Terminal Contact Form - full width */}
          <TerminalContact />
        </div>
      </main>

      {/* Floating Social Dock */}
      <SocialDock />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Index;

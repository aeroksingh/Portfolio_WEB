import HeroSection from '@/components/HeroSection';
import AboutCard from '@/components/AboutCard';
import ProblemSolverCard from '@/components/ProblemSolverCard';
import TechStackGrid from '@/components/TechStackGrid';
import CurrentlyReadingCard from '@/components/CurrentlyReadingCard';
import SocialDock from '@/components/SocialDock';
import TerminalContact from '@/components/TerminalContact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <main className="relative container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="bento-grid">
          {/* Hero Section - spans 7 cols on large screens */}
          <HeroSection />
          
          {/* About Card - spans 5 cols on large screens */}
          <AboutCard />
          
          {/* Problem Solver Card */}
          <ProblemSolverCard />
          
          {/* Tech Stack Grid - 3 cards for Backend, Frontend, Interests */}
          <TechStackGrid />
          
          {/* Currently Reading Card */}
          <CurrentlyReadingCard />
          
          {/* Terminal Contact Form - full width */}
          <TerminalContact />
        </div>
      </main>

      {/* Floating Social Dock */}
      <SocialDock />
    </div>
  );
};

export default Index;

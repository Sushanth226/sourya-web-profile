import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      
      {/* Abstract animated shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Welcome to my Portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-up">
            <span className="text-gradient">Sushanth Sourya Suru</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-medium text-foreground animate-fade-up stagger-1">
            Computer Science Engineer | AI & Blockchain Enthusiast
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up stagger-2">
            <em>"Exploring AI, Blockchain, and Software Engineering with Creativity and Innovation."</em>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-up stagger-3">
            <Button 
              size="lg" 
              className="hover-lift neon-glow"
              onClick={() => scrollToSection('about')}
            >
              Explore My Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="hover-lift glass"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
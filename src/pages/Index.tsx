import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import InternshipSection from '@/components/InternshipSection';
import CertificatesSection from '@/components/CertificatesSection';
import CodingProfiles from '@/components/CodingProfiles';
import ExtracurricularSection from '@/components/ExtracurricularSection';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gradient">SSS</h1>
            <div className="hidden md:flex space-x-6">
              {['about', 'skills', 'projects', 'internship', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-foreground transition-colors capitalize text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />
      
      {/* Coding Profiles */}
      <div className="container mx-auto px-6">
        <CodingProfiles />
      </div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Internship Section */}
      <InternshipSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Extracurricular Activities */}
      <ExtracurricularSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Mail className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's connect and explore opportunities together
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="glass hover-lift neon-glow">
                <CardContent className="pt-6 text-center">
                  <Phone className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a 
                    href="tel:+919491317744" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9491317744
                  </a>
                </CardContent>
              </Card>
              
              <Card className="glass hover-lift neon-glow">
                <CardContent className="pt-6 text-center">
                  <Mail className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a 
                    href="mailto:surusourya@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    surusourya@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="hover-lift pulse-glow" asChild>
                  <a href="https://github.com/Sushanth226" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="hover-lift glass" asChild>
                  <a href="https://www.linkedin.com/in/sushanth-sourya-suru-422070280/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Get in Touch</h3>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <a href="tel:+919491317744" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 9491317744
              </a>
              <a href="mailto:surusourya@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                surusourya@gmail.com
              </a>
              <a href="https://github.com/Sushanth226" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sushanth-sourya-suru-422070280/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              © 2024 Sushanth Sourya Suru. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

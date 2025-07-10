
import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, GraduationCap, Award, User, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground">Sushanth Sourya Suru</h1>
            <div className="hidden md:flex space-x-6">
              {['about', 'education', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-foreground transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Sushanth Sourya Suru
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Aspiring Computer Science Engineer
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate about technology, problem-solving, and software development. 
              Skilled in programming, algorithms, and data structures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => scrollToSection('contact')} size="lg">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/Sushanth226" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <User className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated Computer Science Engineering student with a passion for solving complex problems 
              through innovative software solutions. My journey in technology spans across multiple programming 
              languages and frameworks, with a strong foundation in algorithms and data structures. I enjoy 
              participating in coding competitions and building projects that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Education</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">B.Tech in Computer Science</CardTitle>
                <p className="text-muted-foreground">PVP Siddhartha Institute of Technology</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-semibold">CGPA: 8.54</span>
                  <span className="text-muted-foreground">2023 – Present</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Intermediate (MPC)</CardTitle>
                <p className="text-muted-foreground">Resonance, Vijayawada</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-semibold">90.5%</span>
                  <span className="text-muted-foreground">Completed</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Secondary Education</CardTitle>
                <p className="text-muted-foreground">V.S. St. John's Hr. Sec. School, Gannavaram</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-semibold">82.6%</span>
                  <span className="text-muted-foreground">Completed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Projects</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  Railway Management System
                  <a 
                    href="https://github.com/Sushanth226/Railway-Management-System-JAVA-PROJECT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardTitle>
                <p className="text-muted-foreground">Java, Swing, JDBC, MySQL</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A comprehensive train management system featuring ticketing, employee hiring, 
                  and cancellation functionalities. Built with Java Swing for the GUI and MySQL 
                  for database management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Swing', 'JDBC', 'MySQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Code className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Skills</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['C', 'Java', 'Python', 'HTML', 'CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    MySQL
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coding Profiles */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-foreground mb-6">Coding Profiles</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'CodeChef', url: 'https://www.codechef.com/users/sushanth_26' },
                { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/surusourya' },
                { name: 'LeetCode', url: 'https://leetcode.com/u/sushanth_216/' },
                { name: 'Codeforces', url: 'https://codeforces.com/profile/Sushanth26' }
              ].map((profile) => (
                <Button key={profile.name} variant="outline" asChild>
                  <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {profile.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Certifications</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {[
              { title: 'Basics in Python', issuer: 'Infosys Springboard' },
              { title: 'C Programming', issuer: 'Infosys Springboard' },
              { title: 'Problem Solving Using C', issuer: 'BYTS India' },
              { title: 'HTML5', issuer: 'Infosys Springboard' },
              { title: 'Programming in Java', issuer: 'NPTEL' }
            ].map((cert, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Mail className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a 
                    href="mailto:surusourya@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    surusourya@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a 
                    href="tel:+919491317744" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9491317744
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://github.com/Sushanth226" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/sushanth-sourya-suru-422070280/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sushanth Sourya Suru. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

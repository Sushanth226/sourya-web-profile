import React from 'react';
import { Briefcase, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Railway Management System',
      description: 'A comprehensive train management system featuring ticketing, employee hiring, and cancellation functionalities. Built with Java Swing for the GUI and MySQL for database management.',
      techStack: ['Java', 'MySQL', 'JDBC', 'Swing'],
      github: 'https://github.com/Sushanth226/Railway-Management-System-JAVA-PROJECT',
      highlights: [
        'Train management and scheduling',
        'Employee hiring system',
        'Ticket booking and cancellation',
        'GUI design with Java Swing',
        'Backend connectivity with JDBC'
      ]
    },
    {
      title: 'AI-Powered Feedback Automation',
      description: 'Designed a no-code AI workflow to automate customer feedback processing. Generated sentiment-tagged summaries and filtered irrelevant responses.',
      techStack: ['n8n', 'Gemini API', 'Google Sheets', 'AI Workflow'],
      highlights: [
        'Sentiment analysis automation',
        'Customer feedback processing',
        'No-code AI workflow design',
        'Adaptable across industries (cafés, e-commerce, hospitality)',
        'AI integration and workflow automation'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing expertise in software development, AI, and automation
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass hover-lift animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      {project.title}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {index === 0 && (
                    <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {project.github && (
                  <div className="mt-6">
                    <Button variant="outline" size="sm" asChild className="hover-lift">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
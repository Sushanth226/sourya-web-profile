import React from 'react';
import { Briefcase, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Inventory Management System',
      description: 'A full stack web application for managing inventory records through a responsive interface.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Sushanth226/inventory-management-system-mern',
      highlights: [
        'Managed 100+ inventory records with full CRUD operations',
        'Built secure RESTful APIs',
        'Optimized MongoDB queries achieving sub-20 ms response time'
      ]
    },
    {
      title: 'AI-Driven Feedback Automation',
      description: 'An AI-powered automation system for real-time feedback classification and analysis.',
      techStack: ['n8n', 'Gemini API', 'Lovable AI'],
      github: 'https://github.com/Sushanth226/cozy-web-spark',
      highlights: [
        'Automated processing of 50+ feedback entries per execution',
        'Implemented AI-based classification with 80% accuracy',
        'Reduced manual analysis effort by ~70%'
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
            Showcasing expertise in full stack development and AI automation
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
                  <h4 className="font-semibold text-sm text-foreground">Key Highlights:</h4>
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

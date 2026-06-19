import React from 'react';
import { Briefcase, ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const featured = [
    {
      title: 'Neural Forge — Agentic AI Career Coach',
      description: 'Flagship multi-agent AI platform that analyzes resumes, detects skill gaps, runs mock interviews, and discovers relevant jobs.',
      techStack: ['MERN', 'Gemini API', 'Groq API', 'MongoDB', 'Zod'],
      github: 'https://github.com/Sushanth226/Neural-Forge',
      highlights: [
        'Multi-agent workflow orchestrating resume analysis, skill gap detection and interview simulation',
        'Integrated Gemini and Groq LLMs for fast, context-aware responses',
        'Job discovery pipeline with type-safe Zod validation across services'
      ]
    },
    {
      title: 'Banking Ledger System',
      description: 'Secure banking backend implementing double-entry bookkeeping with fraud detection.',
      techStack: ['Node.js', 'MongoDB', 'JWT', 'Brain.js'],
      github: 'https://github.com/Sushanth226/Banking_application',
      highlights: [
        'Double-entry bookkeeping with atomic MongoDB transactions',
        'JWT-based authentication and authorization layer',
        'Brain.js neural network for real-time fraud detection on transactions'
      ]
    },
    {
      title: 'AI Study Assistant',
      description: 'RAG-powered study companion that ingests documents and answers questions with semantic search.',
      techStack: ['LangChain', 'OpenAI API', 'RAG', 'Vector Search'],
      github: 'https://github.com/Sushanth226/AI-Study-Assistent',
      highlights: [
        'RAG pipeline combining LangChain orchestration with OpenAI embeddings',
        'Semantic search over uploaded documents for accurate retrieval',
        'Document summarization and personalized learning suggestions'
      ]
    }
  ];

  const additional = [
    {
      title: 'Inventory Management System',
      tech: 'MERN',
      github: 'https://github.com/Sushanth226/inventory-management-system-mern',
      demo: 'https://inventory-management-system-mern-2.onrender.com'
    },
    {
      title: 'Railway Management System',
      tech: 'Java',
      github: 'https://github.com/Sushanth226/Railway-Management-System-JAVA-PROJECT'
    },
    {
      title: 'Weather Website',
      tech: 'JS · API',
      github: 'https://github.com/Sushanth226/Weather-website'
    },
    {
      title: 'Coze Coffee Shop Frontend',
      tech: 'HTML · CSS · JS',
      github: 'https://github.com/Sushanth226/Coze-Cofee-FRONTEND-PROJECT'
    },
    {
      title: 'Multi-Office Corporate Network Design',
      tech: 'Cisco Packet Tracer',
      github: 'https://github.com/Sushanth226/Multi-Office-Corporate-Network-Design-Implementation-Cisco-Packet-Tracer'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade work across Agentic AI, full-stack and secure backend systems
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8">
          {featured.map((project, index) => (
            <Card key={index} className="glass hover-lift animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      {project.title}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {index === 0 && <Star className="w-6 h-6 text-primary animate-pulse" />}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button variant="outline" size="sm" asChild className="hover-lift">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-gradient">Additional Projects</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additional.map((p, i) => (
              <Card key={i} className="glass hover-lift animate-zoom-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <CardContent className="pt-5 pb-5">
                  <h4 className="font-semibold text-foreground mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{p.tech}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" size="sm" asChild className="hover-lift">
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                    {p.demo && (
                      <Button variant="outline" size="sm" asChild className="hover-lift">
                        <a href={p.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3.5 w-3.5" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

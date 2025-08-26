import React from 'react';
import { Code, Database, Brain, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const programmingLanguages = [
    { name: 'Java', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Python', level: 80, color: 'from-blue-500 to-purple-500' },
    { name: 'C', level: 75, color: 'from-cyan-500 to-blue-500' },
    { name: 'HTML/CSS', level: 90, color: 'from-pink-500 to-purple-500' },
    { name: 'Solidity (Basics)', level: 40, color: 'from-gray-500 to-gray-700' },
  ];

  const skills = {
    database: ['MySQL'],
    aiTools: ['n8n', 'ElevenLabs', 'Zapier', 'Google Sheets'],
    subjects: ['Operating Systems', 'Computer Networking', 'Data Structures & Algorithms'],
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Code className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Skills applied in real projects and internships
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8">
          {/* Programming Languages with Progress Bars */}
          <Card className="glass hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {programmingLanguages.map((lang, index) => (
                <div key={lang.name} className="space-y-2 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}%</span>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Database */}
            <Card className="glass hover-lift animate-zoom-in stagger-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium hover:from-primary/20 hover:to-accent/20 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Tools */}
            <Card className="glass hover-lift animate-zoom-in stagger-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.aiTools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full text-sm font-medium hover:from-accent/20 hover:to-primary/20 transition-all">
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Subjects Mastered */}
            <Card className="glass hover-lift animate-zoom-in stagger-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Core Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skills.subjects.map((subject) => (
                    <li key={subject} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      • {subject}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
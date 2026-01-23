import React from 'react';
import { Code, Database, Brain, BookOpen, Globe, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Java', 'Python', 'C', 'JavaScript (ES6+)', 'SQL', 'Solidity (Basic)'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web & Backend',
      icon: Globe,
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'REST APIs'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI & Automation',
      icon: Brain,
      skills: ['n8n', 'Gemini API', 'Lovable AI'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      skills: ['AWS Cloud Practitioner', 'Git', 'GitHub', 'Postman', 'VS Code'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Core CS',
      icon: BookOpen,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Operating Systems', 'DBMS'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

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

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass hover-lift animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium hover:from-primary/20 hover:to-accent/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

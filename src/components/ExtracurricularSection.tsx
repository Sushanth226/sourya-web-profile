import React from 'react';
import { Users, Trophy, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExtracurricularSection = () => {
  const activities = [
    {
      icon: Trophy,
      title: 'Unstop Ambassador',
      description: 'Represented the platform, promoted hackathons, case competitions, and student upskilling, building leadership and networking skills.'
    },
    {
      icon: Users,
      title: 'ACM Member',
      description: 'Actively engaged in technical events, coding contests, and knowledge-sharing sessions to strengthen problem-solving skills.'
    },
    {
      icon: Palette,
      title: 'Art Club Member',
      description: 'Contributed to creative exhibitions and cultural activities, enhancing teamwork, design thinking, and creativity.'
    }
  ];

  return (
    <section id="extracurricular" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Users className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Extracurricular Activities</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="glass hover-lift animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="pt-6 text-center">
                <activity.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
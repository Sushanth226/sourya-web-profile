import React from 'react';
import { Users, Award, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExtracurricularSection = () => {
  const activities = [
    {
      title: 'Unstop Ambassador',
      icon: Award,
      description: 'Represented the platform, promoted hackathons, case competitions, and student upskilling',
      skills: 'Leadership & Networking',
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'ACM Member',
      icon: Users,
      description: 'Actively engaged in technical events, coding contests, and knowledge-sharing sessions',
      skills: 'Problem-Solving & Community',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Art Club Member',
      icon: Palette,
      description: 'Contributed to creative exhibitions and cultural activities',
      skills: 'Teamwork, Design Thinking & Creativity',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="extracurricular" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Users className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Extracurricular Activities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership, community involvement, and creative pursuits
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="glass hover-lift animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${activity.color} mb-4`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-medium text-primary">
                  {activity.skills}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;

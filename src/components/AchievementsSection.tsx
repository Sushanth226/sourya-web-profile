import React from 'react';
import { Trophy, Medal, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'ICPC 2025',
      subtitle: 'Global Rank 1137',
      description: 'Chennai Regional Preliminary',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'TCS CodeVita Season 13',
      subtitle: 'Round 1 Cleared',
      description: 'National Coding Competition',
      icon: Medal,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart India Hackathon',
      subtitle: 'Participant',
      description: '2024, 2025 Editions',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Trophy className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Competitive programming milestones and hackathon participation
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="glass hover-lift animate-zoom-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">{achievement.title}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{achievement.subtitle}</p>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

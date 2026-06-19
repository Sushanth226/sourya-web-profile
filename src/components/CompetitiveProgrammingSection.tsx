import React from 'react';
import { Trophy, ExternalLink, Code2, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CompetitiveProgrammingSection = () => {
  const platforms = [
    {
      name: 'LeetCode',
      letter: 'LC',
      url: 'https://leetcode.com/u/sushanth_216/',
      color: 'from-yellow-500 to-amber-500',
      stats: [
        { label: 'Problems Solved', value: '250+' },
        { label: 'Contest Rating', value: '1697' },
        { label: 'Top', value: '13.83%' }
      ]
    },
    {
      name: 'CodeChef',
      letter: 'CC',
      url: 'https://www.codechef.com/users/sushanth_26',
      color: 'from-amber-600 to-orange-600',
      stats: [
        { label: 'Rating', value: '1510' },
        { label: 'Division', value: '3' }
      ]
    },
    {
      name: 'Codeforces',
      letter: 'CF',
      url: 'https://codeforces.com/profile/Sushanth26',
      color: 'from-blue-500 to-cyan-500',
      stats: [
        { label: 'Active Profile', value: '—' }
      ]
    }
  ];

  const achievements = [
    'ICPC 2025 — Global Rank 1137 (Chennai Regional Preliminary)',
    'TCS CodeVita Season 13 — Round 1 Qualified'
  ];

  return (
    <section id="competitive" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Code2 className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Competitive Programming</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consistent practice across global platforms and contests
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
          {platforms.map((p, i) => (
            <Card key={p.name} className="glass hover-lift animate-zoom-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center font-bold text-white`}>
                    {p.letter}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                </div>
                <div className="space-y-2 mb-5">
                  {p.stats.map((s) => (
                    <div key={s.label} className="flex justify-between items-baseline border-b border-border/40 pb-1.5">
                      <span className="text-xs text-muted-foreground">{s.label}</span>
                      <span className="font-bold text-primary">{s.value}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild className="w-full hover-lift">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="glass">
            <CardContent className="pt-6 pb-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Programming Achievements
              </h3>
              <ul className="space-y-2">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;

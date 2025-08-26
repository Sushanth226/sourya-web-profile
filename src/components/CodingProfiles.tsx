import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CodingProfiles = () => {
  const profiles = [
    { name: 'CodeChef', url: 'https://www.codechef.com/users/sushanth_26', color: 'from-amber-500 to-orange-500' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/surusourya', color: 'from-green-500 to-emerald-500' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/sushanth_216/', color: 'from-yellow-500 to-amber-500' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/Sushanth26', color: 'from-blue-500 to-cyan-500' }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <Code2 className="mx-auto mb-4 h-10 w-10 text-primary" />
        <h3 className="text-2xl font-bold text-foreground">Coding Profiles</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {profiles.map((profile) => (
          <Button
            key={profile.name}
            variant="outline"
            className="hover-lift glass"
            asChild
          >
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${profile.color} mr-2`} />
              {profile.name}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
import React from 'react';
import { Building2, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InternshipSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Building2 className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Internship</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience in AI and automation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass hover-lift border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 text-primary">AI Summer Intern</CardTitle>
                  <p className="text-lg font-medium text-foreground">Mirai School of Technology</p>
                  <p className="text-sm text-muted-foreground">Remote</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Jul 2025 – Aug 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Designed and deployed automated workflows using <strong className="text-foreground">n8n</strong>, reducing manual operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Integrated <strong className="text-foreground">external APIs and AI services</strong> into production pipelines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Tested and debugged workflows achieving <strong className="text-foreground">99% reliability</strong>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;

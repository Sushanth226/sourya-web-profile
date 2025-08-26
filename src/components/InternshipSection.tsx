import React from 'react';
import { Building2, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InternshipSection = () => {
  return (
    <section id="internship" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Building2 className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world application of AI and automation technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass hover-lift border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 text-primary">AI Summer Intern</CardTitle>
                  <p className="text-lg font-medium text-foreground">Mirai School of Technology</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>July – August 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">Key Responsibilities & Technologies</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Applied <strong className="text-foreground">prompt engineering</strong> techniques to optimize AI responses
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Mastered automation tools including <strong className="text-foreground">n8n, Zapier, and ElevenLabs</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Integrated AI solutions with business workflows for enhanced efficiency
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-lg mb-3 text-foreground">Featured Project: BiteCart</h4>
                <p className="text-muted-foreground mb-3">
                  Developed a <strong className="text-foreground">production-ready food-ordering website</strong> with advanced AI integration:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <h5 className="font-medium text-sm text-primary mb-1">Order Automation</h5>
                    <p className="text-sm text-muted-foreground">
                      Automated confirmation messages for seamless customer experience
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5">
                    <h5 className="font-medium text-sm text-accent mb-1">Data Synchronization</h5>
                    <p className="text-sm text-muted-foreground">
                      Real-time customer data sync to Google Sheets for analytics
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 md:col-span-2">
                    <h5 className="font-medium text-sm text-primary mb-1">Production-Ready Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      Delivered a complete AI-powered solution ready for deployment
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-center text-muted-foreground italic">
                  This experience strengthened skills in <span className="text-primary font-semibold">automation</span>, 
                  <span className="text-accent font-semibold"> AI integration</span>, and 
                  <span className="text-primary font-semibold"> project execution</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
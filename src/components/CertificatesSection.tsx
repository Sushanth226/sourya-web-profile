import React from 'react';
import { Award, Cloud, Code, Brain, Network } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CertificatesSection = () => {
  const certCategories = [
    {
      title: 'Cloud',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      certs: [
        { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
        { title: 'AWS Cloud Quest', issuer: 'Amazon Web Services' }
      ]
    },
    {
      title: 'Networking',
      icon: Network,
      color: 'from-teal-500 to-emerald-500',
      certs: [
        { title: 'Cisco Networking Essentials', issuer: 'Cisco Networking Academy' }
      ]
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      certs: [
        { title: 'NPTEL Programming in Java – Elite', issuer: 'NPTEL' },
        { title: 'Python Certification', issuer: 'Infosys Springboard' },
        { title: 'C Programming Certification', issuer: 'Infosys Springboard' },
        { title: 'Frontend Web Development', issuer: 'Online Coursework' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      certs: [
        { title: 'AI Fundamentals (Top 5%)', issuer: 'NPTEL' },
        { title: 'Blockchain Basics', issuer: 'Cyfrin Updraft' }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Award className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications across cloud, programming and emerging tech
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certCategories.map((category, index) => (
            <Card key={index} className="glass hover-lift animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.certs.map((cert, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all">
                    <h4 className="font-semibold text-sm text-foreground">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

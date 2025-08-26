import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CertificatesSection = () => {
  const certificates = [
    { title: 'Basics in Python', issuer: 'Infosys Springboard', description: 'Introductory Python concepts and problem solving' },
    { title: 'Problem Solving using C', issuer: 'BYTS India', description: 'Strengthened algorithmic thinking with C programming' },
    { title: 'C Programming', issuer: 'Infosys Springboard', description: 'Hands-on foundational C coding' },
    { title: 'HTML5: The Language', issuer: 'Infosys Springboard', description: 'Core concepts of web structure and HTML elements' },
    { title: 'Programming in Java', issuer: 'NPTEL', description: 'Object-oriented programming and Java best practices' },
    { title: 'Networking Essentials', issuer: 'Cisco Networking Academy', description: 'Networking fundamentals, protocols, and security' },
    { title: 'Blockchain Basics', issuer: 'Cyfrin Updraft', description: 'Fundamentals of blockchain technology and smart contracts' }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Award className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <Card key={index} className="glass hover-lift animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-accent font-medium">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
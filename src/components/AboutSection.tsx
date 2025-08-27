import React, { useEffect, useRef } from 'react';
import { GraduationCap, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.observe-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12 observe-animate opacity-0 transition-all duration-700">
          <User className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate journey through technology and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass hover-lift p-8 observe-animate opacity-0 transition-all duration-700">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              I am a dedicated <strong className="text-primary">Computer Science Engineering student</strong> with 
              a passion for solving complex problems through innovative software solutions. My journey in technology 
              spans across multiple programming languages and frameworks, with a strong foundation in algorithms and 
              data structures.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Educational Excellence
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                    <h4 className="font-bold text-lg text-primary">B-Tech, Computer Science Engineering</h4>
                    <p className="text-muted-foreground">Prasad V. Potluri Siddhartha Institute of Technology (2023–Present)</p>
                    <p className="text-foreground mt-2">
                      Currently maintaining a strong <span className="font-bold text-accent">CGPA of 8.41</span>, 
                      reflecting consistent academic excellence and dedication to learning.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-bold text-lg">Intermediate (MPC)</h4>
                    <p className="text-muted-foreground">RESONANCE, Vijayawada (2021–2023)</p>
                    <p className="text-foreground mt-2">
                      Achieved <span className="font-bold text-accent">90.5%</span>, demonstrating a strong foundation 
                      in Mathematics, Physics, and Chemistry.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-bold text-lg">Secondary Education (CBSE)</h4>
                    <p className="text-muted-foreground">V.S. St. John's Hr. Sec. School, Gannavaram (2020–2021)</p>
                    <p className="text-foreground mt-2">
                      Secured <span className="font-bold text-accent">82.6%</span>, laying the groundwork for 
                      academic success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg mt-8 text-center text-muted-foreground italic">
              This educational journey highlights my <span className="text-primary font-semibold">commitment to learning</span>, 
              <span className="text-primary font-semibold"> strong academic performance</span>, and 
              <span className="text-primary font-semibold"> growing passion for technology</span>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
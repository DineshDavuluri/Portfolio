
import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate progress bars when skills section is visible
            if (entry.target === skillsRef.current) {
              const progressBars = entry.target.querySelectorAll('.progress-bar-fill');
              progressBars.forEach((bar) => {
                const width = bar.getAttribute('data-width');
                if (width) {
                  (bar as HTMLElement).style.width = width;
                }
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (achievementsRef.current) observer.unobserve(achievementsRef.current);
      if (chartRef.current) observer.unobserve(chartRef.current);
    };
  }, []);

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-transition">
          <h2 className="section-heading">Skills & Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div ref={skillsRef} className="section-transition" style={{ transitionDelay: '150ms' }}>
              <h3 className="text-xl font-medium mb-4">Technical Skills</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Java</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" data-width="85%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Python</span>
                    <span>80%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" data-width="80%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>JavaScript</span>
                    <span>75%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" data-width="75%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>HTML/CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" data-width="90%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>C++</span>
                    <span>70%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" data-width="70%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>DBMS</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" data-width="85%" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div ref={achievementsRef} className="section-transition mb-8" style={{ transitionDelay: '300ms' }}>
                <h3 className="text-xl font-medium mb-4">Most Proud Of</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start bg-card border border-border p-4 rounded-lg hover:border-primary/50 transition-all">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Hackathon's 1st Prize</h4>
                      <p className="text-muted-foreground text-sm">Developed a Health Monitoring System along with team members</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start bg-card border border-border p-4 rounded-lg hover:border-primary/50 transition-all">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Member of GFG Student Circle</h4>
                      <p className="text-muted-foreground text-sm">Joined as a Event Head in GFG local chapter for 3 years</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div ref={chartRef} className="section-transition" style={{ transitionDelay: '450ms' }}>
                <h3 className="text-xl font-medium mb-4">A Day Of My Life</h3>
                
                <div className="flex justify-center">
                  <div className="relative w-64 h-64">
                    <svg viewBox="0 0 100 100" className="day-of-life-chart">
                      <circle cx="50" cy="50" r="40" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
                      
                      {/* Programming */}
                      <path d="M50 10 A40 40 0 0 1 90 50 L50 50 Z" fill="#93c5fd" />
                      <text x="65" y="25" fontSize="5" fill="#1e3a8a">
                        Programming
                      </text>
                      
                      {/* Sleep */}
                      <path d="M50 50 A40 40 0 0 1 10 50 L50 50 Z" fill="#bfdbfe" />
                      <text x="15" y="50" fontSize="5" fill="#1e3a8a">
                        Sleep
                      </text>
                      
                      {/* College */}
                      <path d="M50 50 A40 40 0 0 1 50 10 L50 50 Z" fill="#dbeafe" />
                      <text x="50" y="25" fontSize="5" fill="#1e3a8a">
                        College
                      </text>
                      
                      {/* Family */}
                      <path d="M50 50 A40 40 0 0 1 50 90 L50 50 Z" fill="#eff6ff" />
                      <text x="45" y="75" fontSize="5" fill="#1e3a8a">
                        Family
                      </text>
                      
                      {/* Sports */}
                      <path d="M50 50 A40 40 0 0 1 90 50 L50 50 Z" fill="#a5b4fc" />
                      <text x="65" y="50" fontSize="5" fill="#1e3a8a">
                        Sports
                      </text>
                      
                      {/* Center circle */}
                      <circle cx="50" cy="50" r="5" fill="#1d4ed8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

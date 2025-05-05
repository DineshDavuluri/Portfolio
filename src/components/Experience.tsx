
import { useEffect, useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-transition">
          <h2 className="section-heading">Experience</h2>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-muted">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="bg-card border border-border p-6 rounded-lg transition-all hover:shadow-md hover:border-primary/50">
                <h3 className="text-lg font-medium mb-1">Web Development Virtual Internship</h3>
                <div className="text-muted-foreground">Prodigy</div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>October 2024</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Guntur</span>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Developed 4 Web Applications in 4 weeks.</li>
                  <li>It helped a lot to deepen frontend skills.</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-8 border-l-2 border-muted">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="bg-card border border-border p-6 rounded-lg transition-all hover:shadow-md hover:border-primary/50">
                <h3 className="text-lg font-medium mb-1">Virtual Internship on Java Programming</h3>
                <div className="text-muted-foreground">Codealpha</div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>August 2024</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Guntur</span>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Completed 3 real world applications within 15 days.</li>
                  <li>Internship boosted programming skills.</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="bg-card border border-border p-6 rounded-lg transition-all hover:shadow-md hover:border-primary/50">
                <h3 className="text-lg font-medium mb-1">Member of GFG Student Circle</h3>
                <div className="text-muted-foreground">GeeksforGeeks</div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>2021 - Present</span>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Joined as a Event Head in GFG local chapter for 3 years.</li>
                  <li>Organized technical workshops and coding competitions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

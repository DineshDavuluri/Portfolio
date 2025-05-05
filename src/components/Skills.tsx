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

            // Animate progress bars
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

    [sectionRef, skillsRef, achievementsRef, chartRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [sectionRef, skillsRef, achievementsRef, chartRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-transition space-y-12">
          <h2 className="section-heading text-3xl font-bold text-center mb-10">Skills & Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Technical Skills */}
            <div ref={skillsRef} className="section-transition" style={{ transitionDelay: '150ms' }}>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>

              <div className="space-y-6">
                {[
                  { skill: 'Java', level: '85%' },
                  { skill: 'Python', level: '80%' },
                  { skill: 'JavaScript', level: '75%' },
                  { skill: 'HTML/CSS', level: '90%' },
                  { skill: 'C++', level: '70%' },
                  { skill: 'DBMS', level: '85%' },
                ].map(({ skill, level }) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-1">
                      <span>{skill}</span>
                      <span>{level}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                      <div
                        className="progress-bar-fill h-4 bg-primary transition-all duration-1000 ease-in-out"
                        data-width={level}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Day Chart */}
            <div>
              {/* Achievements */}
              <div ref={achievementsRef} className="section-transition mb-12" style={{ transitionDelay: '300ms' }}>
                <h3 className="text-xl font-semibold mb-4">Most Proud Of</h3>

                <div className="space-y-4">
                  {[
                    {
                      title: "Hackathon's 1st Prize",
                      description: 'Developed a Health Monitoring System along with team members',
                      iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
                    },
                    {
                      title: 'Member of GFG Student Circle',
                      description: 'Joined as a Event Head in GFG local chapter for 3 years',
                      iconPath:
                        'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                    },
                  ].map(({ title, description, iconPath }) => (
                    <div
                      key={title}
                      className="flex gap-4 items-start bg-card border border-border p-4 rounded-lg hover:border-primary/50 transition-all"
                    >
                      <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">{title}</h4>
                        <p className="text-muted-foreground text-sm">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

<div ref={chartRef} className="section-transition" style={{ transitionDelay: '450ms' }}>
  <h3 className="text-xl font-semibold mb-4">A Day Of My Life</h3>

  <div className="flex justify-center">
    <div className="relative w-64 h-64">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        
        <path d="M50 50 L50 10 A40 40 0 0 1 88.51 29.39 Z" fill="#93c5fd" />   {/* Programming */}
        <path d="M50 50 L88.51 29.39 A40 40 0 0 1 73.51 79.39 Z" fill="#bfdbfe" /> {/* Sleep */}
        <path d="M50 50 L73.51 79.39 A40 40 0 0 1 26.49 79.39 Z" fill="#dbeafe" /> {/* College */}
        <path d="M50 50 L26.49 79.39 A40 40 0 0 1 11.49 29.39 Z" fill="#eff6ff" /> {/* Family */}
        <path d="M50 50 L11.49 29.39 A40 40 0 0 1 50 10 Z" fill="#a5b4fc" />   {/* Sports */}

        <circle cx="50" cy="50" r="2" fill="#1d4ed8" />

        <text x="68" y="28" fontSize="4" fill="#1e3a8a" textAnchor="middle">Programming</text>
        <text x="78" y="56" fontSize="4" fill="#1e3a8a" textAnchor="middle">Sleep</text>
        <text x="50" y="75" fontSize="4" fill="#1e3a8a" textAnchor="middle">College</text>
        <text x="27" y="55" fontSize="4" fill="#1e3a8a" textAnchor="middle">Family</text>
        <text x="33" y="30" fontSize="4" fill="#1e3a8a" textAnchor="middle">Sports</text>
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

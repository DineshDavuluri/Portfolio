
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-transition">
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="mb-4 text-muted-foreground">
                I'm a motivated computer science graduate with a passion for web development and programming. 
                With strong communication skills and a team-oriented mindset, I'm seeking an entry-level role 
                where I can apply my technical knowledge and continue to grow professionally.
              </p>
              
              <p className="mb-6 text-muted-foreground">
                During my academic journey, I've developed a solid foundation in Java, Python, C++, and web technologies.
                I've completed multiple internships and projects that have honed my skills in real-world applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-3">Personal Info</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Location:</span>
                      <span className="text-muted-foreground">Guntur, India</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Email:</span>
                      <span className="text-muted-foreground">dineshdavuluri1@gmail.com</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Phone:</span>
                      <span className="text-muted-foreground">7032032570</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Interests</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Web Development</li>
                    <li>Programming</li>
                    <li>Data Structures</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Strengths</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="skill-item">Hard-working</div>
                <div className="skill-item">Team Player</div>
                <div className="skill-item">Leader</div>
                <div className="skill-item">Problem Solver</div>
                <div className="skill-item">Detail-oriented</div>
                <div className="skill-item">Quick Learner</div>
              </div>
              
              <h3 className="font-medium mb-3">Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="skill-item">Telugu</div>
                <div className="skill-item">English</div>
                <div className="skill-item">Hindi</div>
              </div>
              
              <h3 className="font-medium mb-3">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">B.Tech (2022 - Ongoing)</div>
                  <div className="text-sm text-muted-foreground">Computer Science and Engineering</div>
                  <div className="text-sm text-muted-foreground">Vignan's Lara Institute of Technology and Science</div>
                  <div className="text-xs">CGPA: 8.5</div>
                </div>
                
                <div>
                  <div className="font-medium">Intermediate (2020 - 2022)</div>
                  <div className="text-sm text-muted-foreground">MPC</div>
                  <div className="text-sm text-muted-foreground">Sri Srinivasa Junior College</div>
                  <div className="text-xs">Percentage: 93</div>
                </div>
                
                <div>
                  <div className="font-medium">10th (2019 - 2020)</div>
                  <div className="text-sm text-muted-foreground">Sri Srinivasa EM High School</div>
                  <div className="text-xs">Percentage: 98</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { useEffect, useRef } from 'react';

const projects = [
  {
    title: "Student Data Entry System",
    organization: "Vignan's Lara Institute of Technology & Science",
    description: "This project, made in 7 days, is helpful for the organizers to gather the details of participants during the event.",
    technologies: ["Java", "MySQL", "JavaFX"],
    link: "#"
  },
  {
    title: "Smart Attendance System",
    organization: "Vignan's Lara Institute of Technology & Science",
    description: "This project, made in 9 months, automates the process of tracking attendance, reducing manual errors and saving time. It enhances accuracy by preventing the duplicate or proxy attendance.",
    technologies: ["Python", "OpenCV", "TensorFlow", "MySQL"],
    link: "#"
  },
  {
    title: "Health Monitoring System",
    organization: "Hackathon Project",
    description: "Developed a Health Monitoring System with team members that won 1st prize in a hackathon.",
    technologies: ["IoT", "Python", "MongoDB", "React"],
    link: "#"
  },
  {
    title: "Personal Blog Website",
    organization: "Self Project",
    description: "Developed a responsive blog website with content management features.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    link: "#"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-transition">
          <h2 className="section-heading">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                className="project-card overflow-hidden section-transition"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                  <div className="text-sm text-muted-foreground mb-3">{project.organization}</div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

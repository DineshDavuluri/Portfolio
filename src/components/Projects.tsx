/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from 'react';

const projects = [
  {
    title: "Student Data Entry System",
    organization: "Vignan's Lara Institute of Technology & Science",
    description: "This project, made in 7 days, is helpful for the organizers to gather the details of participants during the event.",
    technologies: ["Java", "PostgreSQL", "JavaFX"],
    link: "https://github.com/DineshDavuluri",
    image: "Pics/StudentDataEntry.jpeg"
  },
  {
    title: "Smart Attendance System",
    organization: "Vignan's Lara Institute of Technology & Science",
    description: "This project, made in 9 months, automates the process of tracking attendance, reducing manual errors and saving time. It enhances accuracy by preventing the duplicate or proxy attendance.",
    technologies: ["Java", "OpenCV", "TensorFlow", "PostgreSQL"],
    link: "https://github.com/DineshDavuluri",
    image: "Pics/FaceAttendance.jpeg"
  },
  {
    title: "Health Monitoring System",
    organization: "Hackathon Project",
    description: "Developed a Health Monitoring System with team members that won 1st prize in a hackathon.",
    technologies: ["IoT", "Python", "MongoDB", "React"],
    link: "https://github.com/DineshDavuluri",
    image: "Pics/IOTHealthMonitor.jpeg"
  },
  {
    title: "Personal Blog Website",
    organization: "Self Project",
    description: "Developed a responsive blog website with content management features.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    link: "https://github.com/DineshDavuluri",
    image: "Pics/MyBlog.jpeg"
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
    <section id="projects" className="py-16 bg-gradient-to-r from-indigo-50/30 to-purple-50/30 dark:from-indigo-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-transition">
          <h2 className="section-heading">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                className="project-card overflow-hidden section-transition group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500";
                    }}
                  />
                  <h3 className="absolute bottom-4 left-4 text-white font-medium z-20 text-lg">{project.title}</h3>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-3">{project.organization}</div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="text-primary hover:underline inline-flex items-center gap-1 text-sm font-medium transition-transform hover:translate-x-1"
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

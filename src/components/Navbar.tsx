
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-primary">
            Dinesh<span className="text-primary">.</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => scrollToSection('home')} 
              className={`nav-item cursor-pointer ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('about')} 
              className={`nav-item cursor-pointer ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('experience')} 
              className={`nav-item cursor-pointer ${activeSection === 'experience' ? 'active' : ''}`}
            >
              Experience
            </a>
            <a 
              onClick={() => scrollToSection('projects')} 
              className={`nav-item cursor-pointer ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>
            <a 
              onClick={() => scrollToSection('skills')} 
              className={`nav-item cursor-pointer ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </a>
            <a 
              onClick={() => scrollToSection('certifications')} 
              className={`nav-item cursor-pointer ${activeSection === 'certifications' ? 'active' : ''}`}
            >
              Certifications
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className={`nav-item cursor-pointer ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {!mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                onClick={() => scrollToSection('home')} 
                className={`nav-item cursor-pointer ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </a>
              <a 
                onClick={() => scrollToSection('about')} 
                className={`nav-item cursor-pointer ${activeSection === 'about' ? 'active' : ''}`}
              >
                About
              </a>
              <a 
                onClick={() => scrollToSection('experience')} 
                className={`nav-item cursor-pointer ${activeSection === 'experience' ? 'active' : ''}`}
              >
                Experience
              </a>
              <a 
                onClick={() => scrollToSection('projects')} 
                className={`nav-item cursor-pointer ${activeSection === 'projects' ? 'active' : ''}`}
              >
                Projects
              </a>
              <a 
                onClick={() => scrollToSection('skills')} 
                className={`nav-item cursor-pointer ${activeSection === 'skills' ? 'active' : ''}`}
              >
                Skills
              </a>
              <a 
                onClick={() => scrollToSection('certifications')} 
                className={`nav-item cursor-pointer ${activeSection === 'certifications' ? 'active' : ''}`}
              >
                Certifications
              </a>
              <a 
                onClick={() => scrollToSection('contact')} 
                className={`nav-item cursor-pointer ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

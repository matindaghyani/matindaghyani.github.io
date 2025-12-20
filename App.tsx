import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, AFFILIATIONS, PROJECTS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { AffiliationCard } from './components/AffiliationCard';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { decodeEmail } from './utils';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll spy to update header active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'research', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky header
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-academic-100 selection:text-academic-900 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif font-bold text-xl text-slate-900 cursor-pointer" onClick={() => scrollToSection('home')}>
              M. Daghyani
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Affiliations', 'Research'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'research' ? 'projects' : item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === (item.toLowerCase() === 'research' ? 'projects' : item.toLowerCase()) 
                    ? 'text-academic-600' 
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <a 
              href={`mailto:${decodeEmail(PERSONAL_INFO.email)}`}
              className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl overflow-hidden relative">
              <img 
                src="/assets/profile.jpg" 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                    // Fallback placeholder
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Matin+Daghyani&background=0c4a6e&color=fff&size=256";
                }}
              />
            </div>
          </motion.div>

          {/* Intro Text */}
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-academic-600 font-medium mb-6"
            >
              {PERSONAL_INFO.title}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 leading-relaxed max-w-2xl mb-8 text-lg text-justify"
            >
              {PERSONAL_INFO.bio.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < PERSONAL_INFO.bio.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-sm">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center px-5 py-2.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all hover:-translate-y-0.5 shadow-sm">
                <Linkedin className="w-5 h-5 mr-2 text-[#0077b5]" />
                LinkedIn
              </a>
              <a href={`mailto:${decodeEmail(PERSONAL_INFO.email)}`} className="flex items-center px-5 py-2.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all hover:-translate-y-0.5 shadow-sm">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section id="affiliations" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">Affiliations</h2>
                <div className="w-16 h-1 bg-academic-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AFFILIATIONS.map((aff, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <AffiliationCard affiliation={aff} />
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Projects & Publications Section */}
      <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">Selected Publications & Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                A collection of my work in Generative AI, Medical Imaging, and Computer Vision.
            </p>
          </motion.div>

          <div className="space-y-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-4">{PERSONAL_INFO.name}</h3>
            <p className="text-slate-500 mb-8">{PERSONAL_INFO.title} • {PERSONAL_INFO.institution}</p>
            
            <div className="flex justify-center space-x-6 mb-8">
                <a href={PERSONAL_INFO.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <Github className="w-6 h-6" />
                </a>
                <a href={PERSONAL_INFO.linkedin} className="text-slate-400 hover:text-blue-700 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="w-6 h-6" />
                </a>
            </div>
            
            <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Matin Daghyani. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
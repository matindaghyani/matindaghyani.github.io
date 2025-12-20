import React from 'react';
import { Project, ProjectType } from '../types';
import { Github, FileText, Calendar } from 'lucide-react';
import { Badge } from './Badge';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-12 flex flex-col lg:flex-row hover:shadow-md transition-shadow duration-300"
    >
      {/* Image Section */}
      <div className={`lg:w-2/5 relative overflow-hidden bg-slate-100 flex items-center justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="w-full h-64 lg:h-full relative group flex items-center justify-center p-4">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400?text=${encodeURIComponent(project.title.substring(0, 20))}`;
              }}
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Content Section */}
      <div className={`lg:w-3/5 p-8 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                project.type === ProjectType.PUBLICATION 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'bg-teal-100 text-teal-700'
            }`}>
                {project.type}
            </span>
            <div className="flex items-center text-slate-500 text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                {project.date}
            </div>
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 font-serif leading-tight">
            {project.title}
        </h3>

        {/* Affiliation Logos */}
        <div className="flex items-center mb-4 space-x-3">
            {project.affiliationLogos.map((logo, i) => (
                <div key={i} className="h-8 flex items-center justify-center bg-white border border-slate-100 rounded p-1 shadow-sm" title={project.affiliation}>
                  <img 
                    src={logo} 
                    alt="Affiliation logo" 
                    className="h-full w-auto object-contain" 
                  />
                </div>
            ))}
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">
            {project.summary}
        </p>

        <div className="flex flex-wrap mb-6">
            {project.skills.map(skill => (
                <Badge key={skill} text={skill} />
            ))}
        </div>

        <div className="flex items-center space-x-4 mt-auto">
            {project.paperUrl && (
                <a 
                    href={project.paperUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-slate-700 hover:text-academic-600 transition-colors"
                >
                    <FileText className="w-4 h-4 mr-2" />
                    {project.type === ProjectType.PUBLICATION ? 'Read Paper' : 'View PDF'}
                </a>
            )}
            {project.githubUrl && (
                <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-slate-700 hover:text-black transition-colors"
                >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                </a>
            )}
        </div>
      </div>
    </motion.div>
  );
};
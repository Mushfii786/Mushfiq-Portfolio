import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200">
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-200/50 text-sm font-medium shadow-sm">
          <div className="w-4 h-4 rounded bg-neutral-100 flex items-center justify-center">
             <span className="text-[10px] text-neutral-500">⌘</span>
          </div>
          {project.title}
        </div>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col gap-3 px-1">
        <p className="text-lg text-neutral-900 leading-relaxed">
          {project.description.split('\n\n').map((paragraph, index) => (
            <React.Fragment key={index}>
              {index === 0 ? <span className="text-xl font-medium block mb-2">{paragraph}</span> : <span className="text-neutral-500 text-[15px]">{paragraph}</span>}
            </React.Fragment>
          ))}
        </p>
        <div className="flex items-center text-[13px] text-neutral-400 font-medium">
          {project.role}, {project.year}
        </div>
      </div>
    </div>
  );
}

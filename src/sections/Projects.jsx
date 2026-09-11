import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectFilterCategories, projectsData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

export default function Projects({ onActionClick }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (project.category.toLowerCase() === activeFilter.toLowerCase()) return true;
    if (project.secondaryCategories && project.secondaryCategories.map(c => c.toLowerCase()).includes(activeFilter.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="PROJECTS"
          title="Systems that do real work"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 md:mb-12">
          {projectFilterCategories.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent ${
                  isActive
                    ? 'bg-editorial-accent text-white font-medium shadow-sm'
                    : 'bg-editorial-surface border border-editorial-border text-editorial-ink hover:border-editorial-accent/60'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onActionClick={onActionClick}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-editorial-surface border border-editorial-border rounded-2xl p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-editorial-muted">
              No projects in the "{activeFilter}" category yet. More builds in active development.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

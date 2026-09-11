import React from 'react';
import { skillCategories } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-editorial-bgAlt/50 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="TECHNICAL SKILLS"
          title="Tools I actually use"
          subtitle="(more can be added as my stack grows)"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.code}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

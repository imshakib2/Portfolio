/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TrendingUp, FileSpreadsheet, BarChart3, Database, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { skillCategories } from '../data';

// Map icon strings to Lucide components with accurate hex analytics coloring
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5 text-[#06B6D4]" />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className="w-5 h-5 text-[#10B981]" />;
    case 'BarChart3':
      return <BarChart3 className="w-5 h-5 text-[#F2C811]" />;
    case 'Database':
      return <Database className="w-5 h-5 text-[#06B6D4]" />;
    default:
      return <Database className="w-5 h-5 text-slate-400" />;
  }
};

const getCategoryColor = (iconName: string) => {
  switch (iconName) {
    case 'TrendingUp':
      return { bg: 'bg-[#06B6D4]/10 border-[#06B6D4]/30', text: 'text-[#06B6D4]', dot: 'bg-[#06B6D4]' };
    case 'FileSpreadsheet':
      return { bg: 'bg-[#10B981]/10 border-[#10B981]/30', text: 'text-[#10B981]', dot: 'bg-[#10B981]' };
    case 'BarChart3':
      return { bg: 'bg-[#F2C811]/10 border-[#F2C811]/30', text: 'text-[#F2C811]', dot: 'bg-[#F2C811]' };
    case 'Database':
      return { bg: 'bg-[#06B6D4]/10 border-[#06B6D4]/30', text: 'text-[#06B6D4]', dot: 'bg-[#06B6D4]' };
    default:
      return { bg: 'bg-slate-800/80 border-white/5', text: 'text-slate-300', dot: 'bg-slate-400' };
  }
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="py-20 bg-[#0F172A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#06B6D4] uppercase block">
            TECHNICAL COMPETENCY
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Core Data Analytics Skills
          </h2>
          <div className="w-12 h-1 bg-[#F2C811] mx-auto rounded-full mt-2"></div>
          <p className="text-[#CBD5E1] text-sm max-w-lg mx-auto pt-2">
            A focused skillset in data cleaning, mapping, dashboard design, and structured query writing, suitable for entry-level analyst opportunities.
          </p>
        </div>

        {/* Skill Category Cards - NO progress bars or percentages! */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="skills-categories-grid"
        >
          {skillCategories.map((categoryBlock) => {
            const colors = getCategoryColor(categoryBlock.iconName);
            return (
              <motion.div
                key={categoryBlock.category}
                variants={itemVariants}
                className="bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:border-white/15 transition-all duration-300 relative group"
                id={`skill-card-${categoryBlock.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {/* Visual marker light */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 opacity-20 group-hover:opacity-60 ${colors.dot}`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-6 border-b border-white/5 mb-6">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} border flex items-center justify-center shadow-lg shadow-black/20`}>
                      {getIcon(categoryBlock.iconName)}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[#F8FAFC] text-base">
                        {categoryBlock.category}
                      </h3>
                      <p className="text-[10px] font-mono text-slate-400 font-medium tracking-wider">
                        CORE STACK COMPONENT
                      </p>
                    </div>
                  </div>

                  {/* Badges/Tags Layout - Recruiter friendly */}
                  <div className="flex flex-wrap gap-2">
                    {categoryBlock.skills.map((skill) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      return (
                        <div
                          key={skillName}
                          className="group inline-flex items-center gap-1.5 bg-[#0F172A]/70 border border-white/5 text-[#CBD5E1] text-xs font-medium px-3 py-1.8 rounded-xl transition-all duration-200 hover:border-white/15 hover:text-white hover:bg-[#0F172A]"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} opacity-60 group-hover:opacity-100 transition-opacity`}></span>
                          <span>{skillName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Practical Impact note */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono font-medium">
                  <span className="text-[10px] text-slate-400/80">ACADEMIC & PERSONAL PROJECTS</span>
                  <div className="flex items-center gap-1 text-[#06B6D4]">
                    <Check className="w-3.5 h-3.5" />
                    <span>PRACTICAL APPLICATION</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tactical Recruit-Action Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1E293B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-[#F8FAFC] text-sm">
              Looking for a motivated entry-level team member?
            </h4>
            <p className="text-xs text-[#CBD5E1]/70">
              I am prepared with fundamental skills in organizing dataset queries, cleaning anomalies, and building clean, responsive dashboard screens.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-xs font-semibold uppercase tracking-wider bg-[#06B6D4] hover:bg-[#06B6D4]/90 text-slate-950 px-5 py-3 rounded-xl transition-all inline-block text-center whitespace-nowrap cursor-pointer shadow-md font-sans"
          >
            Get In Touch
          </button>
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, ExternalLink, ArrowRight, CheckCircle2, TrendingUp, BarChart2, FileSpreadsheet, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from '../data';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="py-20 bg-[#0F172A] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#06B6D4] uppercase block">
            PORTFOLIO OF INSIGHTS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Featured Analytics Projects
          </h2>
          <div className="w-12 h-1 bg-[#F2C811] mx-auto rounded-full mt-2"></div>
          <p className="text-[#CBD5E1] text-sm max-w-lg mx-auto pt-2">
            Selected projects demonstrating foundational data cleaning, query modeling, and interactive dashboard creation.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          id="projects-grid"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-[#1E293B] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] hover:border-white/15 transition-all duration-300 group relative"
              id={`project-card-${project.id}`}
            >
              {/* Highlight ribbon based on card classification */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-40 ${
                project.id === 'sales-analysis' ? 'bg-[#F2C811]' : project.id === 'customer-churn' ? 'bg-[#06B6D4]' : 'bg-[#10B981]'
              }`} />

              <div className="space-y-5">
                {/* Visual Header / Icons */}
                <div className="flex items-center justify-between">
                  {project.id === 'sales-analysis' ? (
                    <div className="w-10 h-10 rounded-lg bg-[#F2C811]/10 border border-[#F2C811]/30 flex items-center justify-center text-[#F2C811]">
                      <BarChart2 className="w-5 h-5 animate-pulse" />
                    </div>
                  ) : project.id === 'customer-churn' ? (
                    <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4]">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                  )}

                  {/* External Links */}
                  <div className="flex items-center gap-1.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-[#CBD5E1] hover:text-[#06B6D4] transition-colors bg-[#0F172A]/80 hover:bg-[#0F172A] rounded-lg border border-white/5"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.dashboardUrl && project.dashboardUrl !== '#' && (
                      <a
                        href={project.dashboardUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-[#06B6D4] hover:text-[#F8FAFC] transition-colors bg-[#06B6D4]/10 hover:bg-[#06B6D4]/20 rounded-lg border border-[#06B6D4]/25"
                        title="Live Interactive Dashboard"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="font-display font-bold text-[#F8FAFC] text-lg tracking-tight leading-snug group-hover:text-[#06B6D4] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400 font-semibold mt-1 uppercase tracking-wider">PRACTICAL PORTFOLIO ASSET</p>
                </div>

                {/* Brief description */}
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center text-[9px] font-mono font-bold uppercase tracking-wider bg-[#0F172A]/70 border border-white/5 text-[#CBD5E1] px-2 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <span className="text-[9px] font-mono font-semibold tracking-widest text-slate-400 uppercase block">
                    KEY BUSINESS ACHIEVEMENTS
                  </span>
                  <ul className="space-y-2 text-[#CBD5E1]">
                    {project.achievements.map((achievement, achievementIdx) => (
                      <li key={achievementIdx} className="flex items-start gap-2 text-xs leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer interaction tip */}
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-medium text-slate-400">
                {project.dashboardUrl && project.dashboardUrl !== '#' ? (
                  <a
                    href={project.dashboardUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#06B6D4] font-semibold group/link"
                  >
                    View Interactive Report
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <span className="text-slate-400 italic text-[11px]">Analytical case document</span>
                )}
                <span className="font-mono text-[9px]">DATA PORTFOLIO &bull; 0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

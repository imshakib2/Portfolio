/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, CheckCircle, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { experiences } from '../data';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="experience" className="py-20 bg-[#0F172A] border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#06B6D4] uppercase block">
            PRACTICAL KNOWLEDGE
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Project Experience
          </h2>
          <div className="w-12 h-1 bg-[#F2C811] mx-auto rounded-full mt-2"></div>
        </div>

        {/* Experience Content Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
          id="project-experience-block"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 bottom-0 left-0 w-1 rounded-l-2xl bg-[#06B6D4] opacity-80" />

              <div className="flex items-center gap-2.5 pb-4 border-b border-white/5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F172A]/80 border border-white/5 flex items-center justify-center text-[#06B6D4]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#F8FAFC] text-base md:text-lg">
                    {exp.company}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#06B6D4] uppercase mt-0.5">
                    {exp.role}
                  </p>
                </div>
              </div>

              {/* Achievements list */}
              <div className="space-y-3">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3 text-xs md:text-sm text-[#CBD5E1] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

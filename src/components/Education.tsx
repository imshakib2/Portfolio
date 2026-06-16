/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { education } from '../data';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section id="education" className="py-20 bg-[#0F172A] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#06B6D4] uppercase block">
            ACADEMIC PROFILE
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Education Timeline
          </h2>
          <div className="w-12 h-1 bg-[#F2C811] mx-auto rounded-full mt-2"></div>
        </div>

        {/* Education Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
          id="education-timeline-grid"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#1E293B] rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/10 transition-all duration-300 relative group"
              id={`edu-item-${idx}`}
            >
              {/* Highlight ribbon based on current degree status */}
              <div className={`absolute top-0 bottom-0 left-0 w-1 rounded-l-2xl transition-all duration-300 ${
                idx === 0 ? 'bg-[#06B6D4] opacity-80' : 'bg-[#CBD5E1]/40'
              }`} />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F172A]/80 border border-white/5 flex items-center justify-center text-[#06B6D4] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-[#F8FAFC] text-base md:text-lg">
                    {edu.degree}
                  </h3>
                  {edu.major && (
                    <p className="text-xs font-mono font-semibold text-[#06B6D4] uppercase">
                      Major: {edu.major}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-[#CBD5E1]">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#CBD5E1]/60 font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPA & Duration specs */}
              <div className="flex flex-col md:items-end justify-center shrink-0 border-t md:border-t-0 border-white/5 pt-4 md:pt-0 gap-2">
                <div className="inline-flex items-center gap-1.5 bg-[#0F172A]/80 border border-white/5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#CBD5E1]">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.period}</span>
                </div>
                {edu.gpa && (
                  <div className="inline-flex items-center gap-1.5 bg-[#06B6D4]/10 text-[#06B6D4] px-2.5 py-1 rounded-lg text-xs font-mono font-bold border border-[#06B6D4]/20">
                    <Award className="w-3.5 h-3.5" />
                    <span>GPA / CGPA: {edu.gpa}</span>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

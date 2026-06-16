/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Calendar, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { certifications } from '../data';

export default function Certifications() {
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
    <section id="certifications" className="py-20 bg-[#0F172A] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#06B6D4] uppercase block">
            CREDENTIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Professional Certifications
          </h2>
          <div className="w-12 h-1 bg-[#F2C811] mx-auto rounded-full mt-2"></div>
        </div>

        {/* Certification Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          id="certifications-grid"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#1E293B] rounded-2xl border border-white/5 p-6 hover:border-[#F2C811]/30 transition-all duration-300 relative group flex flex-col justify-between"
              id={`cert-item-${idx}`}
            >
              {/* Gold marker line indicating badge authenticity */}
              <div className="absolute top-0 bottom-0 left-0 w-1 rounded-l-2xl bg-[#F2C811] opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Badge logo container */}
                  <div className="w-12 h-12 rounded-xl bg-[#F2C811]/10 border border-[#F2C811]/30 flex items-center justify-center text-[#F2C811]">
                    <Award className="w-6 h-6" />
                  </div>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-mono bg-[#F2C811]/10 text-[#F2C811] hover:bg-[#F2C811]/25 border border-[#F2C811]/30 hover:border-[#F2C811]/50 px-2.5 py-1 rounded-md uppercase font-bold transition-all flex items-center gap-1 group/badge"
                      title="Verify Official Badge Link"
                    >
                      <span>VERIFY BADGE</span>
                      <span className="group-hover/badge:translate-x-0.5 transition-transform text-xs">&rsaquo;</span>
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20 px-2 py-0.5 rounded-md uppercase font-bold">
                      VERIFIED BADGE
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display font-bold text-[#F8FAFC] text-base leading-snug group-hover:text-[#F2C811] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#CBD5E1] mt-1.5">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Specs */}
              <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#CBD5E1]/60 font-medium">
                <div className="flex items-center gap-1.5 bg-[#0F172A]/70 px-2 py-1 rounded border border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{cert.issuedDate}</span>
                </div>
                {cert.duration && (
                  <div className="flex items-center gap-1.5 bg-[#0F172A]/70 px-2 py-1 rounded border border-white/5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.duration}</span>
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

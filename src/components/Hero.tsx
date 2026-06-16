/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, MapPin, ArrowDown, Send, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { profile } from '../data';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Data Analyst",
    "Data Science Student",
    "Power BI Explorer",
    "Excel Analytical Tinkerer",
    "Python Enthusiast"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0F172A] text-[#F8FAFC]"
    >
      {/* Background Neon Glow Circles & Dashboard Grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-[#06B6D4]/13 blur-[130px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#F2C811]/7 blur-[150px]" />
        
        {/* Simple network visualization style lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Main Hero Identity block */}
          <div className="space-y-6 text-center md:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E293B] border border-white/5"
              id="hero-badge"
            >
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></span>
              <span className="text-xs font-semibold text-[#CBD5E1] tracking-wider uppercase font-mono">
                Software Engineering Student &bull; Data Science Major
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-tight leading-none"
                id="hero-title"
              >
                {profile.name}
              </h1>

              {/* Animated Rotating Role text */}
              <div className="h-10 sm:h-12 flex items-center justify-center md:justify-start overflow-hidden pt-1" id="animated-roles-panel">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-lg sm:text-xl md:text-2xl font-mono font-bold text-[#06B6D4] flex items-center gap-2"
                  >
                    <span>&rsaquo;</span> {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Micro Location Details */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#CBD5E1]/80 font-mono"
            >
              <div className="flex items-center gap-1.5 bg-[#1E293B] px-3 py-1.5 rounded-lg border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#1E293B] px-3 py-1.5 rounded-lg border border-white/5">
                <Mail className="w-3.5 h-3.5 text-[#06B6D4]" />
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">{profile.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#1E293B] hover:bg-[#1E293B]/80 rounded-lg border border-white/5 text-[#CBD5E1]/80 hover:text-[#06B6D4] transition-all inline-flex"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://${profile.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#1E293B] hover:bg-[#1E293B]/80 rounded-lg border border-white/5 text-[#CBD5E1]/80 hover:text-white transition-all inline-flex"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* About Me content integration */}
          <motion.div
            variants={itemVariants}
            className="bg-[#1E293B] rounded-2xl border border-white/5 p-6 md:p-8 space-y-4 shadow-xl"
            id="hero-about-me"
          >
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <BookOpen className="w-4.5 h-4.5 text-[#F2C811]" />
              <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">ABOUT ME</h2>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-[#CBD5E1] text-justify font-sans">
              {profile.summary}
            </p>
          </motion.div>

          {/* Quick scroll action */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center pt-2"
          >
            <button
              onClick={() => scrollToSection('#education')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#06B6D4] hover:text-white transition-all group"
            >
              See Education & Skills
              <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

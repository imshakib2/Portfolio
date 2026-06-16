/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BarChart3, ArrowUp } from 'lucide-react';
import { profile } from '../data';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0B0F19] border-t border-white/5 text-slate-400 py-12" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand block */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1E293B] border border-white/10 flex items-center justify-center text-[#06B6D4] font-semibold">
              <BarChart3 className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="font-display font-bold text-[#F8FAFC] text-sm block">
                {profile.name}
              </span>
              <p className="text-[10px] text-[#06B6D4] font-mono uppercase tracking-wider font-semibold">
                {profile.headline}
              </p>
            </div>
          </div>

          {/* Quick legal/recruitment links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[#CBD5E1]">
            <a href="#about" className="hover:text-[#06B6D4] transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-[#06B6D4] transition-colors">
              Education
            </a>
            <a href="#skills" className="hover:text-[#06B6D4] transition-colors">
              Skills
            </a>
            <a href="#certifications" className="hover:text-[#06B6D4] transition-colors">
              Certifications
            </a>
            <a href="#projects" className="hover:text-[#06B6D4] transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#06B6D4] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#06B6D4] transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 bg-[#1E293B] hover:bg-[#1E293B]/80 hover:text-[#06B6D4] text-[#CBD5E1] rounded-xl transition-all border border-white/10 flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            id="back-to-top"
          >
            Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* System & Credit footer lines - zero slop, professional, clean */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-mono text-[10px]">
            &copy; {new Date().getFullYear()} {profile.brandName}. All Rights Reserved &bull; Turning Data into Decisions.
          </p>
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
            <span>ATS FRIENDLY COMPLIANT</span>
            <span>&bull;</span>
            <span>POWER BI &bull; EXCEL &bull; SQL &bull; PYTHON</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

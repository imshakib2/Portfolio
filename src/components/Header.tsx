/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { profile } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand: Shakis Hossen */}
          <a
            href="#root"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer"
            id="brand-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1E293B] border border-white/10 flex items-center justify-center text-[#06B6D4] transition-all duration-300 group-hover:scale-105 group-hover:border-[#06B6D4]/50 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <BarChart3 className="w-5 h-5 text-[#06B6D4]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-[#F8FAFC] leading-tight tracking-tight text-sm">
                {profile.name}
              </span>
              <span className="text-[10px] text-[#CBD5E1]/60 font-mono tracking-wider font-semibold uppercase flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6" id="desktop-menu">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] hover:text-[#06B6D4] transition-colors relative group py-1"
                id={`nav-${item.name.toLowerCase()}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#06B6D4] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-[#1E293B] hover:bg-[#06B6D4]/13 text-white hover:text-[#06B6D4] px-4 py-2 rounded-lg border border-white/10 hover:border-[#06B6D4]/30 transition-all shadow-sm"
              id="nav-cta"
            >
              Get In Touch
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#CBD5E1] hover:bg-[#1E293B] hover:text-[#06B6D4] transition-colors border border-transparent hover:border-white/5"
            aria-label="Toggle Menu"
            id="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-[#0F172A] border-b border-white/10 shadow-xl overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#CBD5E1] hover:bg-[#1E293B] hover:text-[#06B6D4] transition-colors"
                  id={`mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 px-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold text-white bg-[#06B6D4]/11 hover:bg-[#06B6D4]/20 border border-[#06B6D4]/30 py-3 rounded-xl hover:text-[#06B6D4] transition-colors"
                  id="mobile-nav-cta"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

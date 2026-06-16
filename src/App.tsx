/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans selection:bg-[#06B6D4]/30 selection:text-[#06B6D4] scroll-smooth antialiased">
      {/* Dynamic Floating Navigation */}
      <Header />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* Hero Section & About me */}
        <Hero />
        
        {/* Core Skills Simplified */}
        <Skills />

        {/* Education Timeline */}
        <Education />
        
        {/* Verified Credentials */}
        <Certifications />
        
        {/* Portfolio Projects */}
        <Projects />
        
        {/* Project Experience Timeline */}
        <Experience />
        
        {/* Contact form and channels */}
        <Contact />
      </main>

      {/* Structured Semantic Footer */}
      <Footer />
    </div>
  );
}

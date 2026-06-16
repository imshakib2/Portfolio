/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { profile } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-[#0F172A] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#06B6D4] uppercase block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Schedule a Chat
          </h2>
          <div className="w-12 h-1 bg-[#F2C811] mx-auto rounded-full mt-2"></div>
          <p className="text-[#CBD5E1] text-sm max-w-lg mx-auto pt-2">
            Looking for a dedicated entry-level team member, contract helper, or just want to establish a professional connection? Let&apos;s build a dialogue!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto" id="contact-container">
          
          {/* Left Column: Direct Credentials & Notes */}
          <div className="lg:col-span-5 space-y-6" id="contact-details">
            <div className="bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#06B6D4]"></div>

              <h3 className="font-display font-semibold text-[#F8FAFC] text-base flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#06B6D4]" />
                Direct Channels
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] mt-0.5 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase text-slate-400">BUSINESS EMAIL</span>
                    <a href={`mailto:${profile.email}`} className="block text-xs sm:text-xs font-mono text-[#CBD5E1] hover:text-[#06B6D4] transition-colors overflow-x-auto">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] mt-0.5 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase text-slate-400">DIRECT LINE</span>
                    <a href={`tel:${profile.phone}`} className="block text-xs sm:text-xs font-mono text-[#CBD5E1] hover:text-[#06B6D4] transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] mt-0.5 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase text-slate-400">LOCATION</span>
                    <p className="text-xs sm:text-xs font-sans text-[#CBD5E1]">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Anchors in Contact */}
              <div className="pt-6 border-t border-white/5 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400">PROFESSIONAL PROFILES</span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`https://${profile.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#CBD5E1] hover:text-[#06B6D4] transition-all bg-[#0F172A]/85 hover:bg-[#0F172A] px-3 py-2 rounded-xl border border-white/5"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#06B6D4]" />
                    LinkedIn
                  </a>
                  <a
                    href={`https://${profile.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#CBD5E1] hover:text-white transition-all bg-[#0F172A]/85 hover:bg-[#0F172A] px-3 py-2 rounded-xl border border-white/5"
                  >
                    <Github className="w-3.5 h-3.5 text-[#CBD5E1]" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Note block */}
            <div className="bg-[#1E293B] text-[#CBD5E1] p-6 rounded-2xl border border-white/5 space-y-2 relative">
              <span className="text-[9px] font-mono font-bold text-[#F2C811] uppercase tracking-widest block flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                ACADEMIC & RESEARCH ACCURACY
              </span>
              <p className="text-xs leading-relaxed text-[#CBD5E1]/90">
                &ldquo;All dataset analyses, Power BI dashboards, and query templates are structured with documented sources for complete academic and workspace verification.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7" id="contact-form-block">
            <div className="bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    id="contact-inquiry-form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label htmlFor="input-name" className="text-[9px] font-mono font-bold text-slate-400 uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="input-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#0F172A]/80 border border-white/5 hover:border-white/14 focus:border-[#06B6D4] text-[#F8FAFC] text-xs p-3 rounded-xl transition-all outline-none"
                          placeholder="Shakib's Recruiter"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label htmlFor="input-email" className="text-[9px] font-mono font-bold text-slate-400 uppercase">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="input-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#0F172A]/80 border border-white/5 hover:border-white/14 focus:border-[#06B6D4] text-[#F8FAFC] text-xs p-3 rounded-xl transition-all outline-none"
                          placeholder="recruiter@enterprise.com"
                        />
                      </div>
                    </div>

                    {/* Company input */}
                    <div className="space-y-1">
                      <label htmlFor="input-company" className="text-[9px] font-mono font-bold text-slate-400 uppercase">
                        Organization / Employer
                      </label>
                      <input
                        type="text"
                        id="input-company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#0F172A]/80 border border-white/5 hover:border-white/14 focus:border-[#06B6D4] text-[#F8FAFC] text-xs p-3 rounded-xl transition-all outline-none"
                        placeholder="Daffodil Int. University / Enterprise"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1">
                      <label htmlFor="input-message" className="text-[9px] font-mono font-bold text-slate-400 uppercase">
                        Message Details *
                      </label>
                      <textarea
                        id="input-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#0F172A]/80 border border-white/5 hover:border-white/14 focus:border-[#06B6D4] text-[#F8FAFC] text-xs p-3 rounded-xl transition-all outline-none resize-none"
                        placeholder="Detail your requirements, project help, or career opportunity..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#06B6D4] hover:bg-[#06B6D4]/95 text-slate-950 font-bold py-3.5 px-6 rounded-xl disabled:bg-slate-700 transition-all font-display text-xs tracking-wider uppercase cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-900/60 border-t-slate-900 rounded-full animate-spin"></div>
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 text-slate-950" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                    id="consultation-success-state"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/25 shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-[#F8FAFC] text-lg">
                        Message Sent
                      </h4>
                      <p className="text-[#CBD5E1]/80 text-xs max-w-md mx-auto">
                        Your message was transmitted successfully. Md. Shakib Hossen will review your note and respond back as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-[#06B6D4] hover:text-[#06B6D4]/80 bg-[#06B6D4]/10 border border-[#06B6D4]/30 px-4 py-2 rounded-xl transition-colors mt-2"
                    >
                      Draft Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

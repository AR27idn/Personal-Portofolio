import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface ContactSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ setRef }) => {
  return (
    <Section id="contact" title="Let’s Connect" setRef={setRef}>
      <motion.div
        className="text-slate-300 mb-6 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg leading-relaxed">
          I’m always open to new opportunities, collaborations, or just a good chat about tech.
          <br />
          Let’s talk!
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="mailto:arfyrafa123@gmail.com"
          className="flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-300 px-4 py-2 rounded-xl hover:bg-sky-500/20 transition"
        >
          <Mail className="w-5 h-5" /> Email Me
        </a>
        <a
          href="https://wa.me/6285721610319"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-300 px-4 py-2 rounded-xl hover:bg-green-500/20 transition"
        >
          <Phone className="w-5 h-5" /> WhatsApp
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-arfy-rafa-f/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-xl hover:bg-blue-500/20 transition"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
      </motion.div>
    </Section>
  );
};

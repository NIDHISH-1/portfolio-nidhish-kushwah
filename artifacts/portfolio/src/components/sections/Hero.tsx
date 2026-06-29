import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { ParticlesBackground } from '../ParticlesBackground';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Backend Developer",
    "AI Enthusiast",
    "Cybersecurity Explorer",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticlesBackground />
      
      {/* Decorative background elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {PORTFOLIO_DATA.personal.status.replace('🟢 ', '')}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium mb-2"
          >
            Hello, I'm
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter mb-4 text-foreground"
          >
            {PORTFOLIO_DATA.personal.name}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-10 md:h-14 mb-6"
          >
            <span className="text-2xl md:text-4xl font-bold clip-text-gradient">
              {titles[titleIndex]}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
              />
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            {PORTFOLIO_DATA.personal.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <MagneticButton 
              variant="primary" 
              onClick={() => scrollTo('#projects')}
              className="w-full sm:w-auto"
            >
              View Projects
              <ChevronRight className="w-5 h-5 ml-1" />
            </MagneticButton>
            <MagneticButton 
              variant="outline" 
              onClick={() => window.open(PORTFOLIO_DATA.personal.resumeUrl, '_blank')}
              className="w-full sm:w-auto"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
          >
            <span>📍 {PORTFOLIO_DATA.personal.location}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-primary transition-colors hover-target">
              ✉️ {PORTFOLIO_DATA.personal.email}
            </a>
          </motion.div>
        </div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="hidden lg:flex flex-1 justify-center relative"
        >
          {/* Avatar Monogram */}
          <div className="relative w-80 h-80 rounded-full glass border-2 border-primary/20 flex items-center justify-center shadow-2xl z-10 before:absolute before:inset-[-2px] before:rounded-full before:bg-gradient-to-tr before:from-primary before:to-secondary before:-z-10 before:animate-spin-slow p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden relative">
              {/* Subtle grid pattern inside */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-foreground) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              <span className="text-8xl font-black font-heading clip-text-gradient drop-shadow-lg z-10">NK</span>
            </div>
          </div>

          {/* Floating badge 1 */}
          <motion.div 
            animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">Py</div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Backend</p>
              <p className="text-sm font-bold">Developer</p>
            </div>
          </motion.div>

          {/* Floating badge 2 */}
          <motion.div 
            animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -right-10 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">AI</div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Enthusiast</p>
              <p className="text-sm font-bold">Explorer</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
      
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

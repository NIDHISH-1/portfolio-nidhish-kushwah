import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Trophy, Medal, Star } from 'lucide-react';

export function Hackathons() {
  return (
    <section id="hackathons" className="py-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            Hackathons & Achievements
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Competitive programming and building under pressure.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {PORTFOLIO_DATA.hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className={`glass-card p-1 rounded-3xl overflow-hidden relative ${
                hackathon.highlight ? 'bg-gradient-to-r from-primary/30 to-secondary/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/20 before:to-secondary/20 before:animate-pulse' : ''
              }`}
            >
              <div className="bg-card rounded-[22px] p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10 h-full">
                
                {/* Icon/Medal Area */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-inner ${
                    hackathon.highlight ? 'bg-gradient-to-br from-yellow-100 to-yellow-500 shadow-yellow-500/50' : 'bg-muted'
                  }`}>
                    {hackathon.position.includes('🥈') ? '🥈' : <Trophy className={`w-8 h-8 ${hackathon.highlight ? 'text-white' : 'text-primary'}`} />}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-bold font-heading">{hackathon.name}</h3>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
                      <Star className="w-3 h-3 text-primary" /> {hackathon.role}
                    </span>
                  </div>
                  
                  <p className="text-lg font-semibold text-primary mb-2">
                    {hackathon.position.replace('🥈 ', '')}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Project: </span>
                    {hackathon.project}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

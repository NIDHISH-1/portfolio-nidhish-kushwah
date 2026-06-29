import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { BookOpen, Video } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            Experience & Research
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {exp.type === 'Research' ? <BookOpen className="w-6 h-6" /> : <Video className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{exp.type}</span>
                  <h3 className="text-xl font-bold leading-tight">{exp.title}</h3>
                </div>
              </div>
              
              <p className="text-sm font-semibold text-foreground/80 mb-3">{exp.topic}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

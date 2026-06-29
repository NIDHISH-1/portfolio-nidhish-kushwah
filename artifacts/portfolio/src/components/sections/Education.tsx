import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            Education
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {PORTFOLIO_DATA.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for mobile */}
              <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-border" />
              
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-primary/10 text-primary">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground mt-4 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium text-foreground">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium border border-border/50"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

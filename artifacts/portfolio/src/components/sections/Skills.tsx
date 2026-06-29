import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            Technical Arsenal
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tools and technologies I use to build scalable, secure, and intelligent solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills], categoryIndex) => {
            // Handle Soft Skills array differently from object array
            const isSoftSkills = category === "Soft Skills";
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">
                    {categoryIndex + 1}
                  </span>
                  {category}
                </h3>
                
                {isSoftSkills ? (
                  <div className="flex flex-wrap gap-2">
                    {(skills as string[]).map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-5">
                    {(skills as {name: string, level: string, progress: number}[]).map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground font-mono">{skill.level}</span>
                        </div>
                        <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

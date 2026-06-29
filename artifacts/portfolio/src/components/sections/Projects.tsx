import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Github, ExternalLink, Activity } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI', 'Web', 'Cybersecurity'];
  
  const filteredProjects = filter === 'All' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-target ${
                filter === cat 
                  ? 'bg-foreground text-background shadow-lg scale-105' 
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group perspective"
              >
                <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-border/50 hover:border-primary/30 preserve-3d group-hover:rotate-x-2 group-hover:rotate-y-2">
                  
                  {/* Decorative header/banner */}
                  <div className="h-32 w-full relative overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0" />
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-foreground) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="absolute bottom-4 left-6 z-10 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-semibold text-foreground border border-border">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full backdrop-blur text-xs font-semibold border ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-500 border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
                      }`}>
                        {project.status === 'Completed' ? '✅ Completed' : '🚧 In Progress'}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col relative bg-card">
                    <h3 className="text-2xl font-bold font-heading mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                        <Activity className="w-3 h-3" /> Key Features
                      </h4>
                      <ul className="text-sm text-foreground/80 space-y-1.5">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-muted-foreground italic text-xs pl-3">
                            + {project.features.length - 3} more
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-accent text-accent-foreground">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors hover-target"
                        >
                          <Github className="w-4 h-4" /> Code
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors hover-target ml-auto"
                        >
                          Live Preview <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .rotate-x-2 { transform: rotateX(2deg); }
        .rotate-y-2 { transform: rotateY(2deg); }
      `}</style>
    </section>
  );
}


import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }
};

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-none">
              {PORTFOLIO_DATA.personal.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full glass border-primary/20 text-sm font-medium">📍 {PORTFOLIO_DATA.personal.location}</span>
              <span className="px-4 py-2 rounded-full glass border-primary/20 text-sm font-medium">🟢 Open to Internships</span>
              <span className="px-4 py-2 rounded-full glass border-primary/20 text-sm font-medium">💻 Freelancer</span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {PORTFOLIO_DATA.personal.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300"
                >
                  <h3 className="text-4xl md:text-5xl font-black font-heading clip-text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

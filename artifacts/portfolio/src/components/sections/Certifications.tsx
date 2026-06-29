import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Award, CheckCircle } from 'lucide-react';

export function Certifications() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            Certifications
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4 group hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 leading-tight">{cert.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{cert.issuer}</span>
                  <span className="mx-1">•</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

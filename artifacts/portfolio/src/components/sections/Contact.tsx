

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { MagneticButton } from '../MagneticButton';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data simulated send:", data);
    setIsSubmitted(true);
    reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            Let's Talk
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Currently open for technical internships and exciting project collaborations. Drop a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-center gap-8 border-t border-l border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Me At</h3>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-muted-foreground hover:text-primary transition-colors hover-target break-all">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-sm font-medium text-foreground/80 mb-4">Preferred Contact Method</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  <Mail className="w-4 h-4" /> Email Communication
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-card/95 backdrop-blur z-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                      className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold font-heading mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-6 relative z-10"
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Your Name</label>
                        <input 
                          {...register("name")}
                          className={`w-full bg-background border ${errors.name ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover-target`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-xs text-destructive ml-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Email Address</label>
                        <input 
                          {...register("email")}
                          className={`w-full bg-background border ${errors.email ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover-target`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-xs text-destructive ml-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Subject</label>
                      <input 
                        {...register("subject")}
                        className={`w-full bg-background border ${errors.subject ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover-target`}
                        placeholder="Internship Opportunity"
                      />
                      {errors.subject && <p className="text-xs text-destructive ml-1">{errors.subject.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Message</label>
                      <textarea 
                        {...register("message")}
                        rows={5}
                        className={`w-full bg-background border ${errors.message ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none hover-target`}
                        placeholder="Hi Nidhish, I'd like to discuss..."
                      />
                      {errors.message && <p className="text-xs text-destructive ml-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative inline-flex items-center justify-center overflow-hidden rounded-xl font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 disabled:opacity-70 disabled:cursor-not-allowed hover-target group"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? 'Sending...' : 'Send Message'} 
                        {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

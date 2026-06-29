import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/30">
              <motion.div 
                className="absolute inset-0 rounded-full border-t-2 border-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-2xl font-bold font-heading">NK</span>
            </div>
            
            <motion.div 
              className="flex flex-col items-center gap-2 overflow-hidden"
            >
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm tracking-[0.3em] text-muted-foreground uppercase"
              >
                Nidhish Kushwah
              </motion.span>
              <div className="h-[2px] w-0 bg-gradient-to-r from-primary to-secondary"
                style={{ animation: 'expand 1.5s ease-out forwards 0.5s' }}
              />
            </motion.div>
          </motion.div>
          
          <style>{`
            @keyframes expand {
              to { width: 100%; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

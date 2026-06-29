import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold font-heading clip-text-gradient mb-2 inline-block">
              NK.
            </div>
            <p className="text-muted-foreground text-sm font-medium">
              AI-Driven Innovation. Security-Focused Development.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover-target text-sm font-medium">GitHub</a>
            <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover-target text-sm font-medium">LinkedIn</a>
            <a href={PORTFOLIO_DATA.social.leetcode} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover-target text-sm font-medium">LeetCode</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover-target group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nidhish Kushwah. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}

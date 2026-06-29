import React, { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  asChild?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className = '', variant = 'primary', ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate distance from center (max movement constraint)
      const x = (clientX - centerX) * 0.2;
      const y = (clientY - centerY) * 0.2;

      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const baseClasses = "magnetic relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-4",
      ghost: "hover:bg-accent hover:text-accent-foreground px-4 py-2",
    };

    return (
      <motion.button
        ref={buttonRef}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        {...props}
      >
        <motion.span
          animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          className="relative z-10 flex items-center gap-2"
        >
          {children}
        </motion.span>
        
        {variant === 'primary' && (
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 hover:opacity-100" />
        )}
      </motion.button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

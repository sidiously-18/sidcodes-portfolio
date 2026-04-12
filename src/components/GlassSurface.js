import React from 'react';
import { cn } from '@/lib/utils';

const GlassSurface = ({
  children,
  className,
  variant = 'card',
  as: Component = 'div',
  hover = true,
  ...props
}) => {
  const variantStyles = {
    card: 'p-6',
    nav: 'px-4 py-3',
    chip: 'px-3 py-1.5'
  };

  return (
    <Component
      className={cn(
        'relative overflow-hidden rounded-[var(--radius)]',
        'border border-[color:var(--glass-border)]',
        'bg-[color:var(--glass-bg)]',
        'backdrop-blur-[var(--glass-blur)]',
        'shadow-[var(--glass-shadow)]',
        'noise-overlay',
        hover && 'gradient-hover glass-hover',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      {children}
    </Component>
  );
};

export default GlassSurface;

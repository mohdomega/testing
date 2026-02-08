'use client';

import React, { useState } from 'react';

import { cn } from '@/lib';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ content, children, className, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
    left: 'right-full top-1/2 -translate-y-1/2 mr-3',
    right: 'left-full top-1/2 -translate-y-1/2 ml-3',
  };

  const arrowClasses = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-b border-r border-white/10',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-t border-l border-white/10',
    left: 'right-[-4px] top-1/2 -translate-y-1/2 border-t border-r border-white/10',
    right: 'left-[-4px] top-1/2 -translate-y-1/2 border-b border-l border-white/10',
  };

  React.useLayoutEffect(() => {
    if (isVisible && contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      const padding = 16; // Minimum distance from screen edge
      let newShift = 0;

      // Check left boundary
      if (rect.left < padding) {
        newShift = padding - rect.left;
      }
      // Check right boundary
      else if (rect.right > window.innerWidth - padding) {
        newShift = window.innerWidth - padding - rect.right;
      }

      setShift(newShift);
    } else {
      setShift(0); // Reset shift when hidden
    }
  }, [isVisible]);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      // Add touch handlers for mobile support if needed, though hover often works on tap for some devices
      onTouchStart={() => setIsVisible(true)}
      onTouchEnd={() => setTimeout(() => setIsVisible(false), 2000)} // Small delay or handling logic
    >
      {children}
      {isVisible && (
        <div
          ref={contentRef}
          style={{
            marginLeft: `${shift}px`,
          }}
          className={cn(
            'absolute z-50 px-4 py-2 text-sm font-regular text-white',
            'gradient-vertical text-white',
            'rounded-xl shadow-xl',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            // Mobile adjustments: max-width and wrapping
            'whitespace-normal break-words text-center',
            'w-max max-w-[min(300px,calc(100vw-32px))]',
            positionClasses[position],
            'cloud-tooltip',
            className
          )}
        >
          {content}
          <div
            style={{
              marginLeft: `${-shift}px`, // Counter-shift the arrow to keep it centered on source
            }}
            className={cn('absolute w-3 h-3 gradient-vertical text-white rotate-135', arrowClasses[position])}
          />
        </div>
      )}
    </div>
  );
}

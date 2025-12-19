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
  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (<>
        {/* <div className={cn(
            'absolute right-[50px] top-50 z-50 w-[200px] h-[100px]',
             'bg-primary-dark ',
            // 'rounded-xl shadow-xl whitespace-nowrap',
            'rounded-xl shadow-xl',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            positionClasses[position],
             'cloud-tooltip',
            className
          )}>

        </div> */}
        <div
          className={cn(
            // 'absolute z-50 px-4 py-2.5 text-sm font-regular text-white',
            'absolute z-50 px-10 py-5 text-sm font-regular text-white',
            'gradient-vertical text-white',
            // 'bg-primary-dark',
            'rounded-xl shadow-xl whitespace-nowrap',
            // 'rounded-xl shadow-xl',
            'rounded-xl ',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            positionClasses[position],
            'cloud-tooltip',
            className
          )}

        >
          {content}
          {/* <div className={cn('absolute w-3 h-3 bg-black rotate-45', arrowClasses[position])} /> */}
          <div className={cn('absolute w-3 h-3 gradient-vertical text-white rotate-135', arrowClasses[position])} />
        </div>
      </>
      )}
    </div>
  );
}

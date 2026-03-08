'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { cn, useScrollLock } from '@/lib';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Sticky header — rendered above the scrollable body */
  header?: ReactNode;
  /** Sticky footer — rendered below the scrollable body */
  footer?: ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, header, footer, className }: ModalProps) {
  useScrollLock(isOpen);

  if (!isOpen) return null;

  const hasSlots = header || footer;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'relative w-full max-w-lg bg-white rounded-3xl shadow-xl animate-in fade-in zoom-in-95 duration-200',
          'flex flex-col max-h-[90dvh]',
          className
        )}
      >
        {/* Close button — always on top */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-neutral-500 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Sticky header */}
        {header && (
          <div className="shrink-0 px-6 pt-6 pb-4 pr-12 md:px-10 md:pt-10 md:pb-5 md:pr-14">{header}</div>
        )}

        {/* Scrollable body */}
        <div
          className={cn(
            'overflow-y-auto flex-1 min-h-0',
            hasSlots ? 'px-6 md:px-10' : 'p-6 pt-14 md:p-10 md:pt-16'
          )}
        >
          {children}
        </div>

        {/* Sticky footer */}
        {footer && <div className="shrink-0 px-6 pb-6 pt-4 md:px-10 md:pb-10 md:pt-5">{footer}</div>}
      </div>
    </div>,
    document.body
  );
}

'use client';

import { useEffect } from 'react';

import { cn } from '@/lib';

interface ToastProps {
  message: string;
  isShowing: boolean;
  onClose: () => void;
  type?: 'success' | 'error';
  duration?: number;
}

export default function Toast({
  message,
  isShowing,
  onClose,
  type = 'success',
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isShowing) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isShowing, duration, onClose]);

  if (!isShowing) return null;

  return (
    <div
      className={cn(
        'fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-300',
        type === 'success'
          ? 'bg-[#1e0a52] text-white border border-[#fcc33f]/30'
          : 'bg-red-600 text-white'
      )}
      style={{ animation: 'toast-slide-up 0.3s ease-out forwards' }}
    >
      <div className="flex items-center gap-3">
        {type === 'success' && (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fcc33f]/20 text-[#fcc33f]">
            ✓
          </div>
        )}
        <p className="font-medium whitespace-nowrap">{message}</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes toast-slide-up {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}} />
    </div>
  );
}

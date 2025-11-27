import { cn } from '@/lib';
import Image from 'next/image';
import HomeVideoImg1 from '../../../../public/images/video-image-1.png';

interface VideoProps {
  className?: string;
}

export default function Video({ className }: VideoProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute top-0 left-0 w-full -translate-y-1/2 px-30 max-lg:px-15 max-sm:px-6">
        {/* TODO: Video */}
        {/* <div className="h-105 rounded-3xl bg-neutral-300 max-lg:h-54" /> */}
        <div className="h-105 rounded-3xl bg-neutral-300 max-lg:h-54 relative overflow-hidden">
          <Image src={HomeVideoImg1} alt="video img 1" className="w-full h-full object-cover rounded-3x" />
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

import { cn } from '@/lib';

import HomeVideoImg1 from '../../../../public/images/video-image-1.png';
import HomeCaseStudyHeadingImage from '../../../../public/images/Home/Case Study Heading Photo.png';

interface VideoProps {
  className?: string;
}

export default function Video({ className }: VideoProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute top-0 left-0 w-full -translate-y-1/2 px-30 max-lg:px-15 max-sm:px-6">
        <div className="max-w-[1440px] w-full mx-auto">
          {/* TODO: Video */}
          {/* <div className="h-105 rounded-3xl bg-neutral-300 max-lg:h-54" /> */}
          <div className="h-105 rounded-3xl bg-neutral-300 max-lg:h-auto relative overflow-hidden">
            <Image
              src={HomeCaseStudyHeadingImage}
              alt="video img 1"
              className="w-full lg:h-full max-lg:h-auto object-fill rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

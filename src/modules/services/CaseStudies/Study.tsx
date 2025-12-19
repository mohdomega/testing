'use client';

import { useState } from 'react';

import Image from 'next/image';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import CaseStudyModal from '@/modules/shared/CaseStudyModal';

import ArrowUpRight from '/public/icons/arrow-top-right.svg';

interface StudyProps {
  title: string;
  image?: string | any;
  description: string;
  className?: string;
}

export default function Study({ title, description, image, className }: StudyProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Stack
        className={cn('gap-6 p-4 rounded-3xl bg-background h-full max-h-full overflow-hidden', className)}
      >
        <div className="w-full aspect-video rounded-2xl bg-neutral-300 relative overflow-hidden flex-shrink-0">
          <Image src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <Stack alignItems="flex-start" className="gap-4 flex-1 min-h-0">
          <Stack className="gap-2 flex-1 min-h-0">
            <Typography variant="title" className="font-medium max-lg:text-lg max-sm:text-md">
              {title}
            </Typography>
            <Typography variant="body2" className="text-secondary line-clamp-2">
              {description}
            </Typography>
          </Stack>
          <Button
            variant="text"
            endIcon={<ArrowUpRight className="transition-all 0.5s ease-in-out hover:size-7 size-5" />}
            className=" p-0 whitespace-nowrap max-sm:p-0 flex-shrink-0"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Learn More */}
          </Button>
        </Stack>
      </Stack>

      <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} studyTitle={title} />
    </>
  );
}

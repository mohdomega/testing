'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
// import CaseStudyModal from '@/modules/shared/CaseStudyModal'; // Removed modal

import ArrowUpRight from '/public/icons/arrow-top-right.svg';

interface StudyProps {
  id: string;
  title: string;
  image?: string | any;
  description: string;
  className?: string;
}

export default function Study({ id, title, description, image, className }: StudyProps) {
  // const [isModalOpen, setIsModalOpen] = useState(false); // Removed modal state

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
            component={Link}
            href={`/case-studies/${id}`}
            variant="text"
            endIcon={
              <ArrowUpRight className="transition-transform duration-500 ease-in-out size-5 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1" />
            }
            className="group p-0 whitespace-nowrap max-sm:p-0 flex-shrink-0"
          >
            {/* Learn More */}
          </Button>
        </Stack>
      </Stack>

      {/* <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} studyTitle={title} /> */}
    </>
  );
}

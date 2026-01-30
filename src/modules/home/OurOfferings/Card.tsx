'use client';

import { FC, SVGProps, useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import CaseStudyModal from '@/modules/shared/CaseStudyModal';

import ChevronRight from '/public/icons/chevron-right.svg';

interface CardProps {
  icon: FC<SVGProps<SVGElement>>;
  img: StaticImageData;
  title: string;
  subtitle: string;
  className?: string;
  path?: string | any;
}

export default function Card({ icon: Icon, img, title, subtitle, className, path }: CardProps) {
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);

  return (
    <Stack
      alignItems="flex-start"
      className={cn(
        'gap-6 relative p-6 rounded-3xl bg-white overflow-hidden justify-between max-lg:gap-4 max-lg:p-4',
        className
      )}
    >
      <div className="flex flex-col z-10 gap-6 max-lg:gap-4">
        <div className="flex items-center gap-3 z-10">
          <div className="p-6 rounded-full gradient-vertical max-lg:p-4">
            <Icon className="size-8 text-white max-lg:size-6" />
          </div>
          <Typography variant="h3" className="whitespace-nowrap text-2xl font-medium leading-[1]">
            {title}
          </Typography>
        </div>
        {/* <Stack alignItems="flex-start" className="gap-2 w-min relative z-10 max-lg:w-full"> */}
        <Stack alignItems="flex-start" className="gap-2 relative z-10 max-lg:w-full">
          <Typography variant="body2" className="text-secondary">
            {subtitle}
          </Typography>
        </Stack>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="w-full rounded-2xl bg-neutral-200 overflow-hidden max-lg:hidden">
          <Image src={img} alt={`${title}-img`} className="w-full h-60 object-cover" />
        </div>
        <Stack direction="row" justifyContent="space-between" alignItems="center" className="w-full">
          {/* <Button
            className="border border-black/10 max-lg:hidden"
            onClick={() => setIsCaseStudyModalOpen(true)}
          >
            Case Study
          </Button> */}
          <Button
            component={Link}
            href={path}
            variant="text"
            endIcon={<ChevronRight className="size-6" />}
            className="px-0 max-lg:p-0 max-sm:p-0"
          >
            Know more
          </Button>
        </Stack>
      </div>
      <Icon className="size-54 text-[#E9E7EE] absolute -top-12 -right-12 max-lg:size-25 max-lg:-top-3 max-lg:-right-3" />
      <CaseStudyModal
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
        studyTitle={title}
      />
    </Stack>
  );
}

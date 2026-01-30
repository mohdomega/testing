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
  path: string;
  subtitle: string;
  className?: string;
}

export default function Card({ icon: Icon, img, title, subtitle, className, path }: CardProps) {
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);

  return (
    <Stack
      alignItems="flex-start"
      className={cn(
        'gap-6 relative p-6 rounded-3xl bg-white overflow-hidden max-lg:gap-4 max-lg:p-4',
        className
      )}
    >
      <div className="p-6 rounded-full gradient-vertical max-lg:p-4">
        <Icon className="size-8 text-white max-sm:size-6" />
      </div>
      <Stack alignItems="flex-start" className="gap-2 max-w-[35ch] max-lg:max-w-full">
        <Typography variant="h3" className="whitespace-nowrap text-2xl font-medium leading-[1]">
          {title}
        </Typography>
        <Typography variant="body2" className="text-secondary text-balance max-lg:text-wrap">
          {subtitle}
        </Typography>
      </Stack>
      <div className="w-full rounded-2xl bg-neutral-200 overflow-hidden max-lg:hidden">
        <Image src={img} alt={`${title} img`} className="w-full h-60 object-cover" />
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
      <Icon className="size-54 text-[#E9E7EE] absolute -top-12 -right-12 max-lg:size-25 max-lg:-top-3 max-lg:-right-3" />
      <CaseStudyModal
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
        studyTitle={title}
      />
    </Stack>
  );
}

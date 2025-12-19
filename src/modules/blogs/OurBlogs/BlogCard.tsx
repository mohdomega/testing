import { FC } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';

interface BlogCardProps {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
  className?: string;
}

export default function BlogCard({ img, title, description, link, className }: BlogCardProps) {
  return (
    <Stack
      alignItems="flex-start"
      className={cn('gap-4 p-[24px] rounded-[24px] bg-white overflow-hidden h-full', className)}
    >
      <div className="w-full rounded-[16px] overflow-hidden aspect-[3/2]">
        <Image src={img} alt={`${title}-img`} className="w-full h-full object-cover" />
      </div>

      <Stack alignItems="flex-start" className="gap-[8px] flex-1">
        <Typography variant="h4" className="text-2xl font-medium">
          {title}
        </Typography>
        <Typography variant="body2" className="text-secondary line-clamp-3">
          {description}
        </Typography>
      </Stack>

      <Link
        href={link}
        className="h-[36px] flex items-center gap-2 text-md font-medium text-primary hover:gap-3 transition-all mt-auto"
      >
        Read More
        <ChevronRight className="size-[25px] " />
      </Link>
    </Stack>
  );
}

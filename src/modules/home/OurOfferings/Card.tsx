import { FC, SVGProps } from 'react';

import Image, { StaticImageData } from 'next/image';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

interface CardProps {
  icon: FC<SVGProps<SVGElement>>;
  img: StaticImageData;
  title: string;
  subtitle: string;
  className?: string;
}

export default function Card({ icon: Icon, img, title, subtitle, className }: CardProps) {
  return (
    <Stack
      alignItems="flex-start"
      className={cn(
        'gap-6 relative p-6 rounded-3xl bg-white overflow-hidden max-lg:gap-4 max-lg:p-4',
        className
      )}
    >
      <div className="p-6 rounded-full gradient-vertical max-lg:p-4">
        <Icon className="size-8 text-white max-lg:size-6" />
      </div>
      <Stack alignItems="flex-start" className="gap-2 w-min relative z-10 max-lg:w-full">
        <Typography variant="h3" className="whitespace-nowrap text-2xl font-medium leading-[1]">
          {title}
        </Typography>
        <Typography variant="body2" className="text-secondary">
          {subtitle}
        </Typography>
      </Stack>
      <div className="w-full rounded-2xl bg-neutral-200 overflow-hidden max-lg:hidden">
        <Image src={img} alt={`${title}-img`} className="w-full h-60 object-cover" />
      </div>
      <Icon className="size-54 text-[#E9E7EE] absolute -top-12 -right-12 max-lg:size-25 max-lg:-top-3 max-lg:-right-3" />
    </Stack>
  );
}

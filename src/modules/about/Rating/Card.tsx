import Stack from '@/components/Stack';
import Typography from '@/components/Typography';

import LightingFlash from '/public/icons/lighting-flash.svg';
import { cn } from '@/lib';
import Image from 'next/image';

interface CardProps {
  className?: string;
  img?: string | any;
}

export default function Card({ className, img }: CardProps) {
  return (
    <Stack
      alignItems="flex-start"
      className={cn(
        'flex-1 gap-16 aspect-square p-6 rounded-3xl bg-neutral-400 relative overflow-hidden',
        className
      )}
    >
      <Image src={img} alt="about image" fill className="object-cover  z-0" />
      <div className="p-6 bg-white rounded-full  z-10">
        <LightingFlash className="size-6 text-primary-dark" />
      </div>
      <Stack className="z-10 gap-2 text-white w-min">
        <Typography component="span" variant="h1" className="whitespace-nowrap">
          2018
        </Typography>
        <Stack className="gap-1">
          <Typography className="whitespace-nowrap">Founded</Typography>
          {/* <Typography className="text-white/60">Creating with purpose since day one</Typography> */}
          <Typography className="text-white">Creating with purpose since day one</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUpRight from '/public/icons/arrow-top-right.svg';
import Image from 'next/image';

interface StudyProps {
  title: string;
  image?: string | any;
  description: string;
  className?: string;
}

export default function Study({ title, description, image, className }: StudyProps) {
  return (
    <Stack className={cn('gap-6', className)}>
      <div className="w-full aspect-video bg-neutral-300 rounded-3xl relative overflow-hidden">
        <Image src={image} alt="service video img 1" className="w-full h-full object-cover" />
      </div>
      <Stack direction="row" className="gap-10">
        <Stack className="gap-2">
          <Typography variant="h5" className="font-medium">
            {title}
          </Typography>
          <Typography variant="body2" className="text-primary-dark/60">
            {description}
          </Typography>
        </Stack>
        <ArrowUpRight className="size-8 min-w-8 text-primary-dark" />
      </Stack>
    </Stack>
  );
}

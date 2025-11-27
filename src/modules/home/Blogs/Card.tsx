import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  className?: string;
  img?: string | any;
}

export default function Card({ className, img }: CardProps) {
  return (
    <Stack className={cn('gap-6 p-4 rounded-3xl bg-background', className)}>
      <div className="w-full aspect-video rounded-2xl bg-red-200 relative overflow-hidden">
        <Image src={img} alt="home video img 1" className="w-full h-full object-cover" />
      </div>
      <Stack alignItems="flex-start" className="gap-4">
        <Stack className="gap-2">
          <Typography variant="title" className="font-medium max-lg:text-lg max-sm:text-md">
            Unlocking the True Power of Salesforce
          </Typography>
          <Typography variant="body2" className="text-secondary">
            Many businesses only scratch the surface of Salesforce. Learn how tailored..
          </Typography>
        </Stack>
        <Button
          variant="text"
          endIcon={<ChevronRight className="size-4" />}
          className="p-0 whitespace-nowrap max-sm:p-0"
          component={Link} href="/blogs"
        >
          Learn More
        </Button>
      </Stack>
    </Stack>
  );
}

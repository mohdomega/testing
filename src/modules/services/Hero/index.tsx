import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import LightingFlash from '/public/icons/lighting-flash.svg';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <Stack
      component="section"
      direction="row"
      alignItems="flex-end"
      className={cn('gap-16 bg-[url("/images/bg-gradient.png")] bg-cover pt-45 px-10 pb-40', className)}
    >
      <Stack className="gap-3">
        <Stack direction="row" alignItems="center" className="gap-3 text-white">
          <div className="p-3 border border-white/10 rounded-full">
            <LightingFlash className="size-4 " />
          </div>
          <Typography variant="small" className="font-medium">
            Our Services
          </Typography>
        </Stack>
        <Typography variant="h1" className="text-white font-medium">
          Tailored Salesforce Services
        </Typography>
      </Stack>
      <Stack className="gap-8 max-w-124">
        <Typography className="text-white/60">
          Whether you&apos;re just getting started or scaling up, our services are built to adapt and deliver
          real results through Salesforce
        </Typography>
        <Stack direction="row" className="gap-3">
          <Button component={Link} href="/contact-us/schedule-meeting" color="accent">
            Book Free Consulting
          </Button>
          <Button
            component={Link}
            href="/offerings"
            variant="outlined"
            endIcon={<ChevronRight className="size-4 text-white" />}
          >
            Explore Services
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

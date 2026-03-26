import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import LightingFlash from '/public/icons/lighting-flash.svg';

interface HeroProps {
  title: string;
  description: string;
  className?: string;
}

export default function Hero({ title, description, className }: HeroProps) {
  return (
    <Stack
      component="section"
      direction="row"
      alignItems="flex-end"
      className={cn(' gap-16 bg-[url("/images/bg-gradient.png")] bg-cover pt-45 px-10 pb-40', className)}
    >
      <div className=" max-w-[1440px] w-full mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-16">
        <Stack className="gap-3 flex items-center md:items-start text-center md:text-left">
          <Stack direction="row" alignItems="center" className="gap-3 text-white">
            <div className="p-3 border border-white/10 rounded-full">
              <LightingFlash className="size-4 " />
            </div>
            <Typography variant="small" className="font-medium">
              Our Services
            </Typography>
          </Stack>
          <Typography variant="h1" className="text-white font-medium text-[28px] md:text-[48px] lg:text-[72px]">
            {title}
          </Typography>
        </Stack>
        <Stack className="flex flex-col items-center md:items-start gap-8 max-w-124">
          <Typography className="text-white/60 text-center md:text-left">{description}</Typography>
          <Stack direction="row" className="gap-3">
            <Button component={Link} href="/contact-us/schedule-meeting" color="accent">
              Book Free Consulting
            </Button>
            <Button
              component={Link}
              // href="/offerings"
              href="/services"
              variant="outlined"
              endIcon={<ChevronRight className="size-4 text-white" />}
            >
              Explore Services
            </Button>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

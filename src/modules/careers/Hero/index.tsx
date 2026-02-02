import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import LightingFlash from '/public/icons/lighting-flash.svg';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <Stack
      component="section"
      className={cn(
        'min-h-[478px] md:pt-45 pb-24 bg-[url("/images/bg-gradient.png")] bg-cover w-full',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto px-20 pt-45 pb-24 max-lg:px-15 max-sm:px-6 max-sm:pb-10">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          className="gap-16 max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:text-center"
        >
          <Stack className="gap-3 max-lg:items-center">
            <Stack direction="row" alignItems="center" className="gap-3 text-white">
              <div className="p-3 border border-white/10 rounded-full">
                <LightingFlash className="size-4 " />
              </div>
              <Typography variant="small" className="font-medium">
                Our Careers
              </Typography>
            </Stack>
            <Typography
              variant="h1"
              className="text-white font-medium max-w-150 max-lg:text-4xl max-sm:text-2xl"
            >
              Build Your Career With Us
            </Typography>
          </Stack>
          <Stack className="gap-8 max-w-124 max-lg:items-center">
            <Typography className="text-white/60">
              Whether you&apos;re taking the first step or seeking your next big move, we offer opportunities
              to grow, innovate, and make a real impact every day
            </Typography>
            <Stack direction="row" className="gap-3">
              {/* <Button component={Link} href="mailto:ruchit@techanzo.com" color="accent"> */}
              <Button component={Link} href="mailto:info@idrms.tech" color="accent">
                Email us now
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

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
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={cn(
        'min-h-[438px] gap-16 bg-[url("/images/bg-gradient.png")] bg-cover pt-45 px-6 md:px-10 lg:px-20 pb-24',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16">
        <Stack className="flex flex-col text-center items-center md:items-start md:justify-center gap-3">
          <Stack direction="row" alignItems="center" className="gap-3 text-white">
            <div className="p-3 border border-white/10 rounded-full">
              <LightingFlash className="size-4 " />
            </div>
            <Typography variant="small" className="font-medium">
              Need help?
            </Typography>
          </Stack>
          <Typography
            variant="h1"
            className="text-white font-medium max-w-150 text-[28px] md:text-[48px] lg:text-[72px] "
          >
            Contact us
          </Typography>
        </Stack>
        <Stack className="items-center md:items-start md:justify-center gap-8 max-w-105">
          <Typography className="text-center md:text-left text-white/60">
            We&apos;re here to help. Reach out with your questions, ideas, or collaboration opportunities —
            and we&apos;ll get back to you shortly
          </Typography>
          <Stack direction="row" className="gap-3">
            <Button component={Link} href="mailto:info@idrms.tech" color="accent">
              Email us now
            </Button>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

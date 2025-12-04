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
        'min-h-[438px] gap-16 bg-[url("/images/bg-gradient.png")] bg-cover pt-45 px-20 pb-24',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-row justify-between items-center gap-16">
        <Stack className="gap-3">
          <Stack direction="row" alignItems="center" className="gap-3 text-white">
            <div className="p-3 border border-white/10 rounded-full">
              <LightingFlash className="size-4 " />
            </div>
            <Typography variant="small" className="font-medium">
              Need help?
            </Typography>
          </Stack>
          <Typography variant="h1" className="text-white font-medium max-w-150">
            Contact us
          </Typography>
        </Stack>
        <Stack className="gap-8 max-w-105">
          <Typography className="text-white/60">
            We&apos;re here to help. Reach out with your questions, ideas, or collaboration opportunities —
            and we&apos;ll get back to you shortly
          </Typography>
          <Stack direction="row" className="gap-3">
            <Button color="accent">Email us now</Button>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

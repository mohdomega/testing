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
      className={cn(
        'min-h-[1040px] bg-[url("/images/bg-gradient.png")] bg-cover pt-42 max-lg:px-15 max-lg:pb-15 max-sm:px-6 max-sm:pb-10',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto px-20">
        <Stack alignItems="center" className="gap-10">
          <Stack alignItems="center" className="gap-4 max-w-162 text-center">
            <Stack direction="row" alignItems="center" className="gap-3 text-white">
              <div className="p-3 border border-white/10 rounded-full">
                <LightingFlash className="size-4 " />
              </div>
              <Typography variant="small" className="font-medium">
                Industries
              </Typography>
            </Stack>
            <Typography variant="h1" className="text-white font-medium max-lg:text-4xl max-sm:text-2xl">
              Tailored Solutions for Every Industry
            </Typography>
            <Typography variant="body2" className="max-w-124 text-white/60 font-medium">
              From healthcare to retail, our industry-specific solutions are built to solve your unique
              challenges—driving efficiency, innovation, and competitive advantage at scale
            </Typography>
          </Stack>
          <Stack direction="row" className="gap-3">
            <Button color="accent">Book Free Consulting</Button>
            <Button
              variant="outlined"
              endIcon={<ChevronRight className="size-4 text-white" />}
              className="max-sm:hidden"
            >
              Industries
            </Button>
          </Stack>
        </Stack>
      </div>
      {/* TODO: Carousel */}
    </Stack>
  );
}

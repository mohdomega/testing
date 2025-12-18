import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import LightingFlash from '/public/icons/lighting-flash.svg';

import Carousel from './Carousel';
import Link from 'next/link';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <Stack
      component="section"
      className={cn(
        'min-h-[900px] bg-[url("/images/bg-gradient.png")] bg-cover pt-42 pb-0 overflow-hidden relative max-lg:min-h-[800px] max-sm:min-h-[700px]',
        className
      )}
    >
      <div className="w-full flex flex-col h-full">
        <div className="max-w-[1440px] w-full mx-auto px-20 max-lg:px-15 max-sm:px-6">
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
              <Button component={Link} href="/contact-us/schedule-meeting" color="accent">
                Book Free Consulting
              </Button>
              <Button
                component={Link}
                // href="/offerings"
                href="/services"
                variant="outlined"
                endIcon={<ChevronRight className="size-4 text-white" />}
                className="max-sm:hidden"
              >
                {/* Industries */}
                Services
              </Button>
            </Stack>
          </Stack>
        </div>
        <div className="mt-0 w-full overflow-visible">
          <Carousel />
        </div>
      </div>
    </Stack>
  );
}

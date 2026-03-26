import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import AboutImg1 from '../../../../public/images/AboutImages/about-image-1.png';
import ChevronRight from '/public/icons/chevron-right.svg';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <Stack
      component="section"
      className={cn(
        'pt-0 min-h-[900px] w-full bg-[url("/images/bg-gradient.png")] bg-cover bg-center',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto px-0 pt-40 pb-10 max-lg:px-0 max-lg:pb-15 max-sm:px-6 max-sm:pb-4">
        <Stack className=" gap-82.5 max-lg:gap-12 max-sm:gap-20">
          <Stack alignItems="center" className="gap-10">
            <Stack alignItems="center" className="gap-4 max-w-250 text-center">
              <TitleChip dotClassName="bg-white" className="bg-white/10 text-white">
                About us
              </TitleChip>
              <Typography variant="h1" className="text-white font-semibold max-lg:text-4xl max-sm:text-2xl">
                Redefining Growth with Salesforce Expertise
              </Typography>
              <Typography variant="body2" className="max-w-124 text-white/60 font-medium max-sm:font-normal">
                We help your business thrive in an era of digital connections by providing effective CRM
                solutions.
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
              >
                Our Services
              </Button>
            </Stack>
          </Stack>
          <div className="relative w-full">
            <div className="absolute top-0 left-0 w-full -translate-y-1/2 px-30 max-lg:static max-lg:translate-0 max-lg:px-6 max-sm:px-0">
              {/* TODO: Video */}
              {/* <div className="h-125 rounded-3xl bg-neutral-300 max-lg:aspect-video max-lg:h-auto" /> */}
              <div className="h-125 rounded-3xl bg-neutral-300 max-lg:aspect-video max-lg:h-auto relative overflow-hidden">
                <video
                  src="/video/About US.MP4"
                  width="100%"
                  height="100%"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                >
                  <track kind="captions" />
                </video>
              </div>
            </div>
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

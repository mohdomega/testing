'use client';

import { useEffect } from 'react';

import Image from 'next/image';
import Script from 'next/script';

import CalendlyIframe from '@/components/Calendely/CalendlyIframe';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import LightingFlash from '/public/icons/lighting-flash.svg';
import LadyPointingRight from '/public/images/lady-pointing-right.png';

interface ContactProps {
  classname?: string;
}

export default function Contact({ classname }: ContactProps) {
  return (
    <Stack component="section" className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5', classname)}>
      <Stack
        direction="row"
        alignItems="center"
        className="gradient-vertical rounded-3xl *:flex-1 overflow-hidden"
      >
        <div className="h-77.5 max-md:hidden">
          <Image src={LadyPointingRight} alt="lady pointing right" />
        </div>
        <Stack className="gap-6 text-white p-6 justify-center max-sm:items-center max-sm:text-center">
          <Stack direction="row" alignItems="center" className="gap-3">
            <div className="p-3 border border-white/10 rounded-full">
              <LightingFlash className="size-4 " />
            </div>
            <Typography variant="small">Schedule a Meeting</Typography>
          </Stack>
          <Stack className="gap-2 max-w-120">
            <Typography variant="h5" className="font-medium">
              Every business is different and so is our approach
            </Typography>
            <Typography variant="body2" className="text-white/60">
              Let us understand your unique needs and provide a custom quote. At IDRMS, we tailor solutions
              that match your goals and budget precisely
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Calendly Embed */}
      <CalendlyIframe />
    </Stack>
  );
}

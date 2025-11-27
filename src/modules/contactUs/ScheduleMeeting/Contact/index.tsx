'use client';

import { useState } from 'react';

import Image from 'next/image';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import LightingFlash from '/public/icons/lighting-flash.svg';
import LadyPointingRight from '/public/images/lady-pointing-right.png';

const services = ['Sales Cloud', 'Manufactoring Cloud', 'Financial Services Cloud', 'Marketing Cloud'];

interface ContactProps {
  classname?: string;
}

export default function Contact({ classname }: ContactProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleSelect(index: number) {
    return () => {
      setCurrentIndex(index);
    };
  }

  return (
    <Stack component="section" className={cn('gap-15 px-20 py-17.5', classname)}>
      <Stack
        direction="row"
        alignItems="center"
        className="gradient-vertical rounded-3xl *:flex-1 overflow-hidden"
      >
        <div className="h-77.5">
          <Image src={LadyPointingRight} alt="lady pointing right" />
        </div>
        <Stack className="gap-6 text-white">
          <Stack direction="row" alignItems="center" className="gap-3">
            <div className="p-3 border border-white/10 rounded-full">
              <LightingFlash className="size-4 " />
            </div>
            <Typography variant="small">Get a Quote</Typography>
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
      <Stack>
        <Stack className="gap-4">
          <Typography variant="subtitle" className="font-medium">
            Services
          </Typography>
          <Stack direction="row" flexWrap="wrap" className="gap-4 max-w-120">
            {services.map((label, index) => (
              <Button
                key={label}
                variant={index === currentIndex ? 'contained' : 'outlined'}
                onClick={handleSelect(index)}
                className={index === currentIndex ? 'text-white' : 'text-primary-dark border-black/10'}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

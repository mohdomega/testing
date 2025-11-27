'use client';

import { useState } from 'react';

import Image from 'next/image';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';

import LightingFlash from '/public/icons/lighting-flash.svg';
import LadyPointingRight from '/public/images/lady-pointing-right.png';
import ContactForm from '@/modules/shared/ContactUs/ContactForm';
import { cn } from '@/lib';

const services = ['Sales Cloud', 'Manufactoring Cloud', 'Financial Services Cloud', 'Marketing Cloud'];
const delivery = ['30-35 days', '2-3 months', '3-6 months', 'More than 6 months', 'Continue project'];

interface ContactProps {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleSelect(index: number) {
    return () => {
      setCurrentIndex(index);
    };
  }

  const [currentIndex2, setCurrentIndex2] = useState(0);

  function handleSelect2(index: number) {
    return () => {
      setCurrentIndex2(index);
    };
  }

  return (
    <Stack component="section" className="gap-15 px-20 py-17.5">
      <Stack
        direction="row"
        alignItems="center"
        className={cn('gradient-vertical rounded-3xl *:flex-1 overflow-hidden', className)}
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
            <Typography variant="body2" className="text-white/60 font-light">
              Let us understand your unique needs and provide a custom quote. At IDRMS, we tailor solutions
              that match your goals and budget precisely
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" className="gap-10 *:flex-1">
        <Stack className="gap-10">
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
          <Stack className="gap-4">
            <Typography variant="subtitle" className="font-medium">
              Delivery Timeline
            </Typography>
            <Stack direction="row" flexWrap="wrap" className="gap-4 max-w-120">
              {delivery.map((label, index) => (
                <Button
                  key={label}
                  variant={index === currentIndex2 ? 'contained' : 'outlined'}
                  onClick={handleSelect2(index)}
                  className={index === currentIndex2 ? 'text-white' : 'text-primary-dark border-black/10'}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <ContactForm className="bg-background" />
      </Stack>
    </Stack>
  );
}

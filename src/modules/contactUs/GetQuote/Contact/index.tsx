'use client';

import { useState } from 'react';

import Image from 'next/image';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';

import LightingFlash from '/public/icons/lighting-flash.svg';
import LadyPointingRight from '/public/images/lady-pointing-right.png';
import QuoteRequestForm from '@/modules/shared/ContactUs/QuoteRequestForm';
import { cn } from '@/lib';

import Tooltip from '@/components/Tooltip';

const services = [
  { label: 'Sales Cloud', description: 'Manage your sales processes and customer relationships.' },
  { label: 'Manufactoring Cloud', description: 'Streamline manufacturing operations and supply chain.' },
  { label: 'Financial Services Cloud', description: 'Unified platform for wealth management and banking.' },
  { label: 'Marketing Cloud', description: 'Create personalized customer journeys and campaigns.' },
];

const delivery = [
  { label: '30-35 days', description: 'Quick turnaround for small to medium projects.' },
  { label: '2-3 months', description: 'Standard timeline for comprehensive solutions.' },
  { label: '3-6 months', description: 'For complex enterprise-grade implementations.' },
  { label: 'More than 6 months', description: 'Long-term partnership for large scale transformation.' },
  { label: 'Continue project', description: 'Ongoing support and development for existing projects.' },
];

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
    <Stack component="section" className="gap-15 px-6 md:px-10 lg:px-20 py-17.5">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
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
        <Stack
          direction="row"
          className="gap-10 max-[1100px]:flex-col max-[1100px]:w-full *:flex-1 max-[1100px]:*:flex-none max-[1100px]:*:w-full"
        >
          <Stack className="gap-10 max-[1100px]:w-full">
            <Stack className="gap-4">
              <Typography variant="subtitle" className="font-medium">
                Services
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                className="gap-4 max-w-120 max-[1100px]:max-w-full max-[1100px]:w-full"
              >
                {services.map((item, index) => (
                  <Tooltip key={item.label} content={item.description}>
                    <Button
                      variant={index === currentIndex ? 'contained' : 'outlined'}
                      onClick={handleSelect(index)}
                      className={index === currentIndex ? 'text-white' : 'text-primary-dark border-black/10'}
                    >
                      {item.label}
                    </Button>
                  </Tooltip>
                ))}
              </Stack>
            </Stack>
            <Stack className="gap-4">
              <Typography variant="subtitle" className="font-medium">
                Delivery Timeline
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                className="gap-4 max-w-120 max-[1100px]:max-w-full max-[1100px]:w-full"
              >
                {delivery.map((item, index) => (
                  <Tooltip key={item.label} content={item.description}>
                    <Button
                      variant={index === currentIndex2 ? 'contained' : 'outlined'}
                      onClick={handleSelect2(index)}
                      className={index === currentIndex2 ? 'text-white' : 'text-primary-dark border-black/10'}
                    >
                      {item.label}
                    </Button>
                  </Tooltip>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <div className="max-[1100px]:w-full">
            <QuoteRequestForm
              className="bg-background"
              selectedService={services[currentIndex]?.label || services[0].label}
              selectedDeliveryTime={delivery[currentIndex2]?.label || delivery[0].label}
              formType="quote"
            />
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

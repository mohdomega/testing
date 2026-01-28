'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import AboutImg6 from '../../../../public/images/AboutImages/about-image-6.png';

interface WhyChooseUsProps {
  className?: string;
}

const data = [
  'Your goals come first—we craft customized Salesforce strategies designed around your business needs.',
  'Our experts deliver scalable solutions by aligning current market trends with your business objectives.',
  'Our work speaks for itself! We have collaborated with multiple industries to deliver measurable impact and client satisfaction.',
  'Our commitment doesn’t end at delivery, we ensure ongoing support and maintenance to drive sustained growth.',
];

export default function WhyChooseUs({ className }: WhyChooseUsProps) {
  // TODO:
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleSelect(index: number) {
    return () => {
      setCurrentIndex(index);
    };
  }

  return (
    <Stack component="section" alignItems="center" className={cn('py-17.5 bg-background w-full', className)}>
      <div className="max-w-[1440px] w-full mx-auto px-20 py-17.5 max-lg:px-15 max-sm:px-6 max-sm:py-10 flex flex-col items-center gap-15">
        <Stack alignItems="center" className="gap-4">
          {/* <TitleChip>About us</TitleChip> */}
          <Typography variant="h2" className="text-gradient text-center">
            Why choose us
          </Typography>
        </Stack>
        <Stack className="gap-10 p-10 w-full bg-white rounded-3xl">
          <Stack
            direction="row"
            justifyContent="space-between"
            className="p-6 rounded-3xl shadow-[0px_8px_80px_0px_#0000000F] overflow-x-hidden"
          >
            <Stack
              direction="row"
              alignItems="center"
              onClick={handleSelect(0)}
              className="gap-2.5 relative px-8 py-4 px-4 py-3 sm:px-8 sm:py-4 rounded-full cursor-pointer flex-shrink-0"
            >
              <span
                className={cn('absolute inset-0 gradient-vertical rounded-full hidden', {
                  inline: currentIndex === 0,
                })}
              />
              <div className="p-1.75 bg-[#EFE9FF] rounded-full relative z-10">
                <div className="size-1.5 bg-primary-dark rounded-full" />
              </div>
              <Typography
                variant="body2"
                className={cn('text-primary-dark/60 font-medium relative z-10 whitespace-nowrap', {
                  'text-white': currentIndex === 0,
                })}
              >
                Client-First Approach
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              onClick={handleSelect(1)}
              className="gap-2.5 relative px-8 py-4 px-4 py-3 sm:px-8 sm:py-4 rounded-full cursor-pointer flex-shrink-0"
            >
              <span
                className={cn('absolute inset-0 gradient-vertical rounded-full hidden', {
                  inline: currentIndex === 1,
                })}
              />
              <div className="p-1.75 bg-[#EFE9FF] rounded-full relative z-10">
                <div className="size-1.5 bg-primary-dark rounded-full" />
              </div>
              <Typography
                variant="body2"
                className={cn('text-primary-dark/60 font-medium relative z-10 whitespace-nowrap', {
                  'text-white': currentIndex === 1,
                })}
              >
                Team of Experts
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              onClick={handleSelect(2)}
              className="gap-2.5 relative px-8 py-4 px-4 py-3 sm:px-8 sm:py-4 rounded-full cursor-pointer flex-shrink-0"
            >
              <span
                className={cn('absolute inset-0 gradient-vertical rounded-full hidden', {
                  inline: currentIndex === 2,
                })}
              />
              <div className="p-1.75 bg-[#EFE9FF] rounded-full relative z-10">
                <div className="size-1.5 bg-primary-dark rounded-full" />
              </div>
              <Typography
                variant="body2"
                className={cn('text-primary-dark/60 font-medium relative z-10 whitespace-nowrap', {
                  'text-white': currentIndex === 2,
                })}
              >
                Proven Track Record
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              onClick={handleSelect(3)}
              className="gap-2.5 relative px-8 py-4 px-4 py-3 sm:px-8 sm:py-4 rounded-full cursor-pointer flex-shrink-0"
            >
              <span
                className={cn('absolute inset-0 gradient-vertical rounded-full hidden', {
                  inline: currentIndex === 3,
                })}
              />
              <div className="p-1.75 bg-[#EFE9FF] rounded-full relative z-10">
                <div className="size-1.5 bg-primary-dark rounded-full" />
              </div>
              <Typography
                variant="body2"
                className={cn('text-primary-dark/60 font-medium relative z-10 whitespace-nowrap', {
                  'text-white': currentIndex === 3,
                })}
              >
                Constant Support
              </Typography>
            </Stack>
          </Stack>
          <div className="w-full">
            <Stack direction="row" alignItems="center" className="gap-16">
              <Stack alignItems="flex-start" className="flex-1 gap-6">
                <div className="grid place-content-center size-20 bg-accent rounded-full">
                  <Typography component="span" variant="title" className="text-black font-semibold">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </Typography>
                </div>
                <Typography className="text-3xl font-medium text-primary-dark">
                  {data[currentIndex]}
                </Typography>
              </Stack>
              <div className="relative overflow-hidden flex-1 aspect-[4/3] bg-neutral-300 rounded-3xl">
                <Image src={AboutImg6} alt="home video img 1" className="w-full h-full object-cover" />
              </div>
            </Stack>
          </div>
        </Stack>
        <Button component={Link} href="/contact-us">
          Connect with us
        </Button>
      </div>
    </Stack>
  );
}

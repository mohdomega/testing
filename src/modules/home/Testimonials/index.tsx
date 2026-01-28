'use client';

import { useState, useEffect } from 'react';

import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/Carousel';

import { testimonials } from './data';
import TestimonialCard from './TestimonialCard';

import RightArrowSvg from '/public/icons/testimonials/RightArrowSvg';
import LeftArrowSvg from '/public/icons/testimonials/LeftArrowSvg';

interface TestimonialsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Testimonials({ className }: TestimonialsProps) {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Stack component="section" className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5', className)}>
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <Stack className="gap-4 flex-1">
            <TitleChip>Testimonial</TitleChip>
            <Typography variant="h2" className="text-gradient m-0 p-0 ">
              Share Your Story Today!
            </Typography>
            <Typography variant="body" className="text-gray-600 max-w-2xl  m-0 p-0">
              Our partners say it best — discover how we&apos;ve helped ambitious brands scale smarter, move
              faster, and lead with impact.
            </Typography>
          </Stack>
          <div className="flex gap-8 lg:mt-12">
            <CustomCarouselArrows api={api} />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            opts={{ loop: false, align: 'start', slidesToScroll: 1 }}
            className="w-full"
          >
            <CarouselContent className="gap-0">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={`${testimonial.name}-${index}`}
                  className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </Stack>
  );
}

function CustomCarouselArrows({ api }: { api?: CarouselApi }) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => {
    if (api?.canScrollPrev()) {
      api.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (api?.canScrollNext()) {
      api.scrollNext();
    }
  };

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateState();
    api.on('select', updateState);
    api.on('reInit', updateState);

    return () => {
      api.off('select', updateState);
      api.off('reInit', updateState);
    };
  }, [api]);

  // Determine button styles based on scroll state
  const leftButtonActive = canScrollPrev;
  const rightButtonActive = canScrollNext;

  return (
    <>
      <button
        onClick={scrollPrev}
        className={cn(
          'w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all',
          leftButtonActive ? '' : 'bg-white border border-gray-200'
        )}
        style={
          leftButtonActive
            ? {
                background: 'radial-gradient(circle, #8246FF 0%, #6015FF 100%)',
              }
            : undefined
        }
        aria-label="Previous"
      >
        {/* <ArrowLeft className={cn('w-6 h-6', leftButtonActive ? 'text-white' : 'text-black')} /> */}
        <LeftArrowSvg className={cn('w-6 h-6', leftButtonActive ? 'text-white' : 'text-black')} />
      </button>
      <button
        onClick={scrollNext}
        className={cn(
          'w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all',
          rightButtonActive ? '' : 'bg-white border border-gray-100'
        )}
        style={
          rightButtonActive
            ? {
                background: 'radial-gradient(circle, #8246FF 0%, #6015FF 100%)',
              }
            : undefined
        }
        aria-label="Next"
      >
        {/* <ArrowRight className={cn('w-6 h-6', rightButtonActive ? 'text-white ' : 'text-primary-dark')} /> */}
        <RightArrowSvg className={cn('w-6 h-6', rightButtonActive ? 'text-white ' : 'text-primary-dark')} />
      </button>
    </>
  );
}

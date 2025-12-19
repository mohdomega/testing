'use client';

import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/Carousel';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import { caseStudies } from './data';
import Study from './Study';

import ArrowLeft from '/public/icons/servicePageCraousalIcons/arrow left.svg';
import ArrowRight from '/public/icons/servicePageCraousalIcons/arrow right.svg';

interface CaseStudiesProps {
  className?: string;
}

export default function CaseStudies({ className }: CaseStudiesProps) {
  // Repeat case studies 3 times for carousel
  const repeatedCaseStudies = [...caseStudies, ...caseStudies, ...caseStudies];

  return (
    <Stack
      component="section"
      alignItems="center"
      className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center gap-15">
        <Stack alignItems="center" className="gap-4">
          <TitleChip>Case Studies</TitleChip>
          <Typography variant="h2" className="text-gradient">
            Case Studies
          </Typography>
        </Stack>
        <Stack alignItems="center" className="gap-12 w-full">
          <div className="relative w-full">
            <Carousel opts={{ loop: true, align: 'start', slidesToScroll: 1 }} className="w-full">
              <CarouselContent className="gap-0 h-full">
                {repeatedCaseStudies.map(({ image, title, description }, index) => (
                  <CarouselItem key={`${title}-${index}`} className="basis-auto h-full flex">
                    <div className="h-full pr-10 max-lg:pr-5 flex">
                      <Study
                        className="bg-white h-full flex flex-col max-w-[280px] min-h-[404px]"
                        title={title}
                        description={description}
                        image={image}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="max-lg:hidden absolute right-0 top-[-140px] flex justify-center items-center gap-4 mt-[20px]">
                <CustomCarouselArrows />
              </div>
            </Carousel>
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

function CustomCarouselArrows() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div className="flex flex-row gap-8">
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          'w-[60px] h-[60px] rounded-full bg-white border border-black/10 flex items-center justify-center transition-opacity hover:opacity-80',
          !canScrollPrev && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Previous"
      >
        <span className="flex items-center justify-center w-full h-full">
          <ArrowLeft className="w-[24px] h-[24px] text-primary-dark m-auto" />
        </span>
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          'w-[60px] h-[60px] rounded-full bg-white border border-black/10 flex items-center justify-center transition-opacity hover:opacity-80',
          !canScrollNext && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Next"
      >
        <span className="flex items-center justify-center w-full h-full">
          <ArrowRight className="w-[24px] h-[24px] text-primary-dark m-auto" />
        </span>
      </button>
    </div>
  );
}

// import Image from 'next/image';

// import Stack from '@/components/Stack';
// import TitleChip from '@/components/TitleChip';
// import Typography from '@/components/Typography';
// import { cn } from '@/lib';

// import { process } from './data';
// import Step from './Step';

// import ProcessFlowLine from '/public/images/process-flow.png';

// interface OurProcessProps {
//   className?: string;
// }

// export default function OurProcess({ className }: OurProcessProps) {
//   return (
//     <Stack
//       component="section"
//       className={cn('gap-15 px-20 py-12 max-lg:p-15 max-sm:gap-10 max-sm:p-10', className)}
//     >
//       <Stack alignItems="center" className="gap-1">
//         {/* <TitleChip>Our visionaries</TitleChip> */}
//         <Typography variant="h2" className="text-gradient">
//           Our Process
//         </Typography>
//       </Stack>
//       <div
//         className="m-auto grid grid-cols-4 items-center w-full max-w-[1440px] relative justify-center max-sm:flex max-sm:flex-col max-sm:gap-8"
//       >
//         <Image
//           src={ProcessFlowLine}
//           alt="process flow line"
//           className="m-auto max-w-[1440px] w-full absolute top-1/2 left-0 -translate-y-1/2 -z-10 max-sm:hidden"
//         />
//         {process.map((props, index) => (
//           <Step
//             key={props.title}
//             isReverse={index % 2 === 0}
//             step={String(index + 1).padStart(2, '0')}
//             {...props}
//           />
//         ))}
//       {/* </Stack> */}
//       </div>
//     </Stack>
//   );
// }





// Our Process

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/Carousel';

import { process } from './data';
import Step from './Step';

import LeftArrowSvg from '/public/icons/testimonials/LeftArrowSvg';
import RightArrowSvg from '/public/icons/testimonials/RightArrowSvg';

interface OurProcessProps {
  className?: string;
}

export default function OurProcess({ className }: OurProcessProps) {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Stack
      component="section"
      className={cn('gap-15 px-6 md:px-10 lg:px-20 py-12 max-lg:p-15 max-sm:gap-10 max-sm:p-10', className)}
    >
      <Stack alignItems="center" className="gap-1">
        {/* <TitleChip>Our visionaries</TitleChip> */}
        <Typography variant="h2" className="text-gradient">
          Our Process
        </Typography>
      </Stack>

      <div className="relative w-full max-w-[1440px] mx-auto group">
        {/* Carousel Arrows - Side Positioned */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-40  -ml-10 sm:-ml-4 lg:-ml-4 max-lg:left-2">
          <CustomCarouselArrow direction="prev" api={api} />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-40 -mr-10 sm:-mr-4 lg:-mr-4 max-lg:right-2">
          <CustomCarouselArrow direction="next" api={api} />
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: false, align: 'start', slidesToScroll: 1 }}
          className="w-full mt-8"
        >
          <CarouselContent className="-ml-0">
            {process.map(({ icon, ...props }, index) => (
              <CarouselItem key={props.title} className="pl-0 basis-full md:basis-1/2 lg:basis-1/4">
                <Step
                  step={String(index + 1).padStart(2, '0')}
                  {...props}
                  isLast={index === process.length - 1}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Stack>
  );
}

function CustomCarouselArrow({ direction, api }: { direction: 'prev' | 'next'; api?: CarouselApi }) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setDisabled(direction === 'prev' ? !api.canScrollPrev() : !api.canScrollNext());
    };

    updateState();
    api.on('select', updateState);
    api.on('reInit', updateState);
    api.on('scroll', updateState); // Scroll event might be too frequent, select is better.

    return () => {
      api.off('select', updateState);
      api.off('reInit', updateState);
      api.off('scroll', updateState);
    };
  }, [api, direction]);

  const handleClick = () => {
    if (direction === 'prev') api?.scrollPrev();
    else api?.scrollNext();
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        'w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
        // Active style (gradient) could be applied if enabled, matching functionality
        !disabled ? 'bg-[radial-gradient(circle,#8246FF_0%,#6015FF_100%)]' : ''
      )}
    >
      {direction === 'prev' ? (
        <LeftArrowSvg className={cn('w-5 h-5', !disabled ? 'text-white' : 'text-black')} />
      ) : (
        <RightArrowSvg className={cn('w-5 h-5', !disabled ? 'text-white' : 'text-black')} />
      )}
    </button>
  );
}

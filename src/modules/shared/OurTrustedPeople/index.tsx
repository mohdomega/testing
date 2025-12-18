'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/Carousel';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import AutoScroll from 'embla-carousel-auto-scroll';

interface OurTrustedPeopleProps {
  className?: string;
}

export default function OurTrustedPeople({ className }: OurTrustedPeopleProps) {
  return (
    <Stack
      component="section"
      alignItems="center"
      className={cn('gap-10 py-17.5 max-lg:py-15 max-lg:p-10', className)}
    >
      {/* <TitleChip>Our Trusted People</TitleChip> */}
      <TitleChip>Trusted By</TitleChip>
      <Stack className="gap-7.5">
        <Carousel
          plugins={[AutoScroll({ direction: 'backward', stopOnInteraction: false, stopOnMouseEnter: true })]}
          opts={{ loop: true, duration: 55 }}
        >
          <CarouselContent className="gap-20 max-w-screen">
            <CarouselItem className="basis-auto ml-20">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate End
                </Typography>
              </Stack>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <Carousel
          plugins={[AutoScroll({ direction: 'forward', stopOnInteraction: false, stopOnMouseEnter: true })]}
          opts={{ loop: true, duration: 60 }}
        >
          <CarouselContent className="gap-20 max-w-screen">
            <CarouselItem className="basis-auto ml-20">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  100%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  200%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate
                </Typography>
              </Stack>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Stack alignItems="center" className="gap-2">
                <Typography component="span" variant="h3" className="font-medium">
                  300%
                </Typography>
                <Typography component="span" variant="title" className="font-medium">
                  Success Rate End
                </Typography>
              </Stack>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </Stack>
    </Stack>
  );
}

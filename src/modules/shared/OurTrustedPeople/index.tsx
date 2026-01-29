'use client';

import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem } from '@/components/Carousel';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import { cn } from '@/lib';
import AutoScroll from 'embla-carousel-auto-scroll';

import AmericanBotanicals from '/public/images/HomePageClients/American Botanicals.png';
import Ekinkare from '/public/images/HomePageClients/Ekinkare.png';
import GameADzone from '/public/images/HomePageClients/GameADzone.png';
import Ideacrest from '/public/images/HomePageClients/Ideacrest.png';
import Kim from '/public/images/HomePageClients/Kim.png';
import N from '/public/images/HomePageClients/N.png';
import Noble from '/public/images/HomePageClients/Noble.png';
import Oasis from '/public/images/HomePageClients/Oasis.png';
import OsevenExports from '/public/images/HomePageClients/Oseven Exports.png';
import Rudminds from '/public/images/HomePageClients/Rudminds.png';
import SaintGobin from '/public/images/HomePageClients/Saint Gobin.png';
import Typography from '@/components/Typography';

interface OurTrustedPeopleProps {
  className?: string;
}

const CLIENT_LOGOS = [
  { id: 1, src: AmericanBotanicals, alt: 'American Botanicals' },
  { id: 2, src: Ekinkare, alt: 'Ekinkare' },
  { id: 3, src: GameADzone, alt: 'GameADzone' },
  { id: 4, src: Ideacrest, alt: 'Ideacrest' },
  { id: 5, src: Kim, alt: 'Kim' },
  { id: 6, src: N, alt: 'N' },
  { id: 7, src: Noble, alt: 'Noble' },
  { id: 8, src: Oasis, alt: 'Oasis' },
  { id: 9, src: OsevenExports, alt: 'Oseven Exports' },
  { id: 10, src: Rudminds, alt: 'Rudminds' },
  { id: 11, src: SaintGobin, alt: 'Saint Gobin' },
];

export default function OurTrustedPeople({ className }: OurTrustedPeopleProps) {
  return (
    <Stack
      component="section"
      alignItems="center"
      className={cn('gap-10 py-17.5 max-lg:py-15 max-lg:p-10', className)}
    >
      <TitleChip>Trusted By</TitleChip>
      <Stack className="gap-7.5 w-full">
        <Carousel
          plugins={[AutoScroll({ direction: 'backward', stopOnInteraction: false, stopOnMouseEnter: true })]}
          opts={{ loop: true, duration: 55 }}
          className="w-full"
        >
          <CarouselContent className="-ml-20">
            {CLIENT_LOGOS.map((logo) => (
              <CarouselItem key={logo.id} className="basis-auto h-20 flex items-center justify-center pl-20">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  // className="h-full w-auto object-contain max-h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  className="h-full w-auto object-contain max-h-16 transition-all duration-300"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* <Carousel
          plugins={[AutoScroll({ direction: 'forward', stopOnInteraction: false, stopOnMouseEnter: true })]}
          opts={{ loop: true, duration: 60 }}
          className="w-full"
        >
          <CarouselContent className="gap-20 w-full justify-between items-center">
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
        </Carousel> */}

        <div className="px-[24px] flex items-center justify-between gap-20">
          <Stack alignItems="center" className="gap-2">
            <Typography component="span" variant="h3" className="font-medium">
              100%
            </Typography>
            <Typography component="span" variant="title" className="font-medium">
              Success Rate
            </Typography>
          </Stack>
          <Stack alignItems="center" className="gap-2">
            <Typography component="span" variant="h3" className="font-medium">
              100%
            </Typography>
            <Typography component="span" variant="title" className="font-medium">
              Success Rate
            </Typography>
          </Stack>
          <Stack alignItems="center" className="gap-2">
            <Typography component="span" variant="h3" className="font-medium">
              100%
            </Typography>
            <Typography component="span" variant="title" className="font-medium">
              Success Rate
            </Typography>
          </Stack>
          <Stack alignItems="center" className="gap-2">
            <Typography component="span" variant="h3" className="font-medium">
              100%
            </Typography>
            <Typography component="span" variant="title" className="font-medium">
              Success Rate
            </Typography>
          </Stack>
          <Stack alignItems="center" className="gap-2">
            <Typography component="span" variant="h3" className="font-medium">
              100%
            </Typography>
            <Typography component="span" variant="title" className="font-medium">
              Success Rate
            </Typography>
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
}

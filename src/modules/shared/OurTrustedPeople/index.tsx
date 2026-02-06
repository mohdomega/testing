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
  // { id: 1, src: AmericanBotanicals, alt: 'American Botanicals' },
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
      className={cn('gap-10 py-12 max-lg:py-15 max-lg:p-10', className)}
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
              <CarouselItem
                key={logo.id}
                className="basis-auto h-20 flex items-center justify-center pl-20 max-md:pl-10 max-sm:pl-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  quality={100}
                  // className="h-full w-auto object-contain max-h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  className="h-full w-auto object-contain max-h-16 max-sm:max-h-8 max-sm:max-w-[80px] transition-all duration-300"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Stack>
    </Stack>
  );
}

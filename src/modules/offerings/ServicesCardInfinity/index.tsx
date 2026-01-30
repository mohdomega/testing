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
import SalesRupeeSvg from '/public/icons/servicePageCraousalIcons/SalesRupeeSvg';
import ServiceSvg from '/public/icons/servicePageCraousalIcons/ServiceSvg';
import MarketingSvg from '/public/icons/servicePageCraousalIcons/MarketingSvg';
import EinsteinSvg from '/public/icons/servicePageCraousalIcons/EinsteinSvg';
import HeartCloudSvg from '/public/icons/servicePageCraousalIcons/HeartCloudSvg';
import DataCloudSvg from '/public/icons/servicePageCraousalIcons/DataCloudSvg';
import CPQSvg from '/public/icons/servicePageCraousalIcons/CPQSvg';
import IndustriesSvg from '/public/icons/servicePageCraousalIcons/IndustriesSvg';
import AppexchangeSvg from '/public/icons/servicePageCraousalIcons/AppexchangeSvg';
import CommerseSvg from '/public/icons/servicePageCraousalIcons/CommerseSvg';

interface OurTrustedPeopleProps {
  className?: string;
}

const CLIENT_LOGOS = [
  { id: 1, icon: <SalesRupeeSvg />, title: 'Sales' },
  { id: 2, icon: <ServiceSvg />, title: 'Service' },
  { id: 3, icon: <MarketingSvg />, title: 'Marketing' },
  { id: 4, icon: <EinsteinSvg />, title: 'Einstein' },
  { id: 5, icon: <HeartCloudSvg />, title: 'Experience Cloud' },
  { id: 6, icon: <DataCloudSvg />, title: 'Data Cloud' },
  { id: 7, icon: <CPQSvg />, title: 'CPQ' },
  { id: 8, icon: <IndustriesSvg />, title: 'Industries' },
  { id: 9, icon: <AppexchangeSvg />, title: 'Appexchange' },
  { id: 10, icon: <CommerseSvg />, title: 'Commerce' },
];

export default function OurOfferingInfinityCard({ className }: OurTrustedPeopleProps) {
  return (
    <Stack
      component="section"
      alignItems="center"
      className={cn('gap-10 py-17.5 max-lg:py-15 max-lg:p-10', className)}
    >
      <Stack className="gap-7.5 w-full">
        <Carousel
          plugins={[AutoScroll({ direction: 'backward', stopOnInteraction: false, stopOnMouseEnter: true })]}
          opts={{ loop: true, duration: 55 }}
          className="w-full"
        >
          <CarouselContent className="-ml-20">
            {CLIENT_LOGOS.map((logo) => (
              <CarouselItem key={logo.id} className="basis-auto h-20 flex items-center justify-center pl-20">
                <div className="flex items-center justify-center gap-3 rounded-2xl bg-white px-[30px] py-[15px] shadow-[0_0_10px_2px_rgba(0,0,0,0.1)]">
                  <div>{logo?.icon}</div>
                  <Typography variant="h3" className="whitespace-nowrap text-md font-semibold leading-[1]">
                    {logo?.title}
                  </Typography>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Stack>
    </Stack>
  );
}

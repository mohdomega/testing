'use client';

import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/Carousel';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ServiceImg1 from '../../../../../public/images/ServiceImages/service-image-1.png';
import ARVRDevice from '/public/icons/servicePageCraousalIcons/ar-vr-device.svg';
import ArrowLeft from '/public/icons/servicePageCraousalIcons/arrow left.svg';
import ArrowRight from '/public/icons/servicePageCraousalIcons/arrow right.svg';
import CloudIcon from '/public/icons/servicePageCraousalIcons/cloud (1).svg';
import Clustering from '/public/icons/servicePageCraousalIcons/clustering.svg';
import LeadGeneration from '/public/icons/servicePageCraousalIcons/lead-generation.svg';
import Payroll from '/public/icons/servicePageCraousalIcons/payroll.svg';

interface OurServicesProps {
  title: string;
  description: string;
  className?: string;
}

const serviceItems = [
  { icon: LeadGeneration, label: 'Lead Scoring' },
  { icon: ARVRDevice, label: 'AR/VR Integration' },
  { icon: Clustering, label: 'Cluster Analysis' },
  { icon: CloudIcon, label: 'CI/CD Pipeline Setup' },
  { icon: Payroll, label: 'HR & Payroll' },
  { icon: LeadGeneration, label: 'Lead Scoring' },
  { icon: ARVRDevice, label: 'AR/VR Integration' },
  { icon: Clustering, label: 'Cluster Analysis' },
  { icon: CloudIcon, label: 'CI/CD Pipeline Setup' },
  { icon: Payroll, label: 'HR & Payroll' },
];

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

export default function OurServices({ title, description, className }: OurServicesProps) {
  return (
    <Stack
      component="section"
      direction="row"
      alignItems="center"
      className={cn('bg-background gap-16 px-6 md:px-10 lg:px-20 py-17.5', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-row items-center gap-16 max-lg:flex-col">
          <Stack alignItems="flex-start" className="flex-1 gap-8">
            <Stack className="gap-4">
              <TitleChip>Our Services</TitleChip>
              <Typography variant="h2" className="text-gradient">
                {title}
              </Typography>
              <Typography className="text-balance">{description}</Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" className="gap-4">
              <Typography
                variant="body2"
                className="px-6 py-3 text-primary-dark/60 font-medium border border-primary-dark/30 rounded-full whitespace-nowrap"
              >
                Consultation Service
              </Typography>
              <Typography
                variant="body2"
                className="px-6 py-3 text-primary-dark/60 font-medium border border-primary-dark/30 rounded-full whitespace-nowrap"
              >
                Implementation Service
              </Typography>
              <Typography
                variant="body2"
                className="px-6 py-3 text-primary-dark/60 font-medium border border-primary-dark/30 rounded-full whitespace-nowrap"
              >
                Support & Maintenance
              </Typography>
              <Typography
                variant="body2"
                className="px-6 py-3 text-primary-dark/60 font-medium border border-primary-dark/30 rounded-full whitespace-nowrap"
              >
                Staff Augmentation
              </Typography>
            </Stack>
          </Stack>
          <div className="flex-1 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden">
            <Image src={ServiceImg1} alt="service image" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Carousel Section */}
        <div className=" relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none max-lg:w-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none max-lg:w-10" />
          <Carousel opts={{ ...{ loop: false, align: 'start', slidesToScroll: 1 } }} className="w-full ">
            <CarouselContent className=" ml-0">
              {serviceItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <CarouselItem key={index} className="pl-0 basis-auto">
                    <div className=" flex relative h-full gap-0">
                      <Stack className=" gap-3 px-[0px] max-lg:px-[0px]" alignItems="center">
                        <div className="min-h-[100px] min-w-[100px] w-auto h-full  rounded-full border-2 border-black/10 flex items-center justify-center">
                          <Icon className="w-[48px] h-[48px] text-primary-dark max-lg:size-8" />
                        </div>
                        <Typography
                          variant="body2"
                          className="text-center font-medium text-primary-dark whitespace-nowrap"
                          style={{
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '38px',
                            letterSpacing: '0%',
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Stack>
                      <div className="my-[35px] mx-[60px] w-[1px] bg-black/10 " />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <CustomCarouselArrows />
            </div>
          </Carousel>
        </div>
      </div>
    </Stack>
  );
}

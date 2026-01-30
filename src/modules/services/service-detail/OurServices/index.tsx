'use client';
import { usePathname } from 'next/navigation';
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
  {
    icon: LeadGeneration,
    label: 'Sales Cloud',
    description:
      'Sales Cloud streamlines your entire sales process by automating tasks, managing leads, and providing real-time insights to drive better decisions.',
  },
  {
    icon: Payroll,
    label: 'Service Cloud',
    description:
      'Service Cloud helps you deliver outstanding customer support by automating workflows, providing 24/7 service across multiple channels.',
  },
  {
    icon: Clustering,
    label: 'Marketing Cloud',
    description:
      'Marketing Cloud empowers businesses to deliver personalized, data-driven marketing across every channel, from email and social media.',
  },
  {
    icon: CloudIcon,
    label: 'Commerce Cloud',
    description:
      'Commerce Cloud empowers your e-commerce business with a flexible, scalable platform designed to create personalized shopping experiences.',
  },
  {
    icon: ARVRDevice,
    label: 'Experience Cloud',
    description:
      'Experience Cloud enables you to create personalized digital experiences through branded portals, websites, and communities and more.',
  },
  {
    icon: Payroll,
    label: 'Financial Service Cloud',
    description:
      'Financial Services Cloud empowers financial institutions to enhance client relationships and streamline operations through a platform.',
  },
  {
    icon: LeadGeneration,
    label: 'Manufacturing Cloud',
    description:
      'Manufacturing Cloud is a specialized software solution tailored to meet the unique needs of all types manufacturing organizations.',
  },
  {
    icon: CloudIcon,
    label: 'Field Service Lightning',
    description:
      'Field Service Lightning (FSL) is a product offered by Salesforce that provides more advanced field service management capabilities.',
  },
  {
    icon: Payroll,
    label: 'CPQ',
    description:
      'CPQ Cloud refers to a Configure, Price, Quote (CPQ) solution delivered via the cloud. CPQ solutions streamline the sales process.',
  },
  {
    icon: Clustering,
    label: 'Pardot',
    description:
      'Pardot is a B2B marketing automation platform offered by Salesforce, designed to help businesses generate and nurture leads.',
  },
  {
    icon: ARVRDevice,
    label: 'Heroku',
    description:
      'Heroku is a platform-as-a-service (PaaS) offering that enables developers to build, run, and manage applications entirely in the cloud.',
  },
  {
    icon: LeadGeneration,
    label: 'Mulesoft',
    description:
      'Mulesoft is a platform specializing in integration and API management, enabling businesses to connect applications & data.',
  },
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
  const pathname = usePathname();
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
        {pathname.includes('salesforce-implementation') && (
          <div className="relative w-full">
            <Carousel opts={{ loop: false, align: 'start', slidesToScroll: 1 }} className="w-full">
              <CarouselContent className="-ml-6">
                {serviceItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-[32px] p-8 h-full border border-black/10 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-row items-center gap-4">
                          <div className="w-fit h-fit p-2 rounded-2xl bg-primary-light/10 flex items-center justify-center text-primary-dark">
                            <Icon className="w-12 h-12" />
                          </div>
                          <Typography variant="h5" className="font-semibold text-primary-dark text-[22px]">
                            {item.label}
                          </Typography>
                        </div>
                        <Typography variant="body2" className="text-neutral-600 leading-relaxed text-left">
                          {item.description}
                        </Typography>
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
        )}

        {pathname.includes('data-analytics-and-ai') && (
          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceItems.slice(0, 3).map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-[32px] p-8 h-full border border-black/10 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-row items-center gap-4">
                      <div className="w-fit h-fit p-2 rounded-2xl bg-primary-light/10 flex items-center justify-center text-primary-dark">
                        <Icon className="w-12 h-12" />
                      </div>
                      <Typography variant="h5" className="font-semibold text-primary-dark text-[22px]">
                        {item.label}
                      </Typography>
                    </div>
                    <Typography variant="body2" className="text-neutral-600 leading-relaxed text-left">
                      {item.description}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Stack>
  );
}

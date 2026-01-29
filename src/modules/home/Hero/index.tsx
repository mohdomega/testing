import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Rating from './Rating';

// import HomeVideoImg1 from '../../../../public/images/home-video-image-1.png';
import HomeVideoImg1 from '../../../../public/images/home-video-img-new-1.jpg';
import AWSLogo from '/public/icons/aws.svg';
import MicrosoftLogo from '/public/icons/microsoft.svg';
import SalesforceLogo from '/public/icons/salesforce.svg';
import SlackLogo from '/public/icons/slack.svg';
import SniffLogo from '/public/icons/sniff.svg';
import ChevronRight from '/public/icons/chevron-right.svg';
import LightingFlash from '/public/icons/lighting-flash.svg';

import Slack from '/public/images/Home/Slack.png';
import AWS from '/public/images/Home/AWS.png';
import Mulesoft from '/public/images/Home/Mulesoft.png';
import Spiff from '/public/images/Home/Spiff.png';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <Stack
      justifyContent="center"
      className={cn(
        // 'min-h-screen bg-[url("/images/bg-gradient.png")] bg-cover pt-32 px-20 pb-20 max-lg:px-15 max-sm:px-6 w-full',
        'min-h-[850px] bg-[url("/images/bg-gradient.png")] bg-cover pt-32 px-20 pb-20 max-lg:px-15 max-sm:px-6 w-full',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-2 gap-12 max-lg:grid-cols-1">
        <Stack className="gap-10 max-sm:gap-6">
          <Stack className="gap-3 max-sm:items-center max-sm:text-center">
            <Stack direction="row" alignItems="center" className="gap-3">
              <div className="p-3 border border-white/10 rounded-full">
                <LightingFlash className="size-4 text-white" />
              </div>
              <Typography variant="small" className="text-white/60">
                Grow faster with <span className="text-white">smart CRM</span>
              </Typography>
            </Stack>
            <Stack className="gap-4 text-balance font-medium">
              <Typography variant="h1" className="text-white max-lg:text-4xl max-sm:text-2xl">
                Transform Your Customer Experience With Salesforce
              </Typography>
              <Typography className="text-white/60 max-sm:font-normal">
                Digitalize your business with smart salesforce technologies and stimulate your growth rate.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" className="gap-3 max-sm:justify-center">
            <Button component={Link} href="/contact-us/schedule-meeting" color="accent">
              Book Free Consulting
            </Button>
            <Button
              component={Link}
              // href="/offerings"
              href="/services"
              variant="outlined"
              endIcon={<ChevronRight className="size-4 text-white" />}
            >
              Explore Services
            </Button>
          </Stack>
        </Stack>

        {/* TODO: Video */}
        {/* <div className="rounded-3xl bg-neutral-300/50 max-lg:aspect-video" /> */}
        <div className="rounded-3xl max-lg:aspect-video relative overflow-hidden">
          <Image src={HomeVideoImg1} alt="home video img 1" className="w-full h-full object-cover" />
        </div>

        <Rating className="max-lg:hidden" />

        <Stack direction="row" className="" alignItems="center" justifyContent="space-between">
          {/* <SlackLogo className="size-26" /> */}
          {/* <MicrosoftLogo className="size-26" /> */}
          {/* <AWSLogo className="size-26" /> */}
          {/* <SalesforceLogo className="size-20 border border-red-500" /> */}
          {/* <SniffLogo className="size-26" /> */}
          {/* <Image src={Slack} alt="slack" className="" /> */}
          <div className="w-[100px] h-[53px] relative overflow-hidden flex items-center justify-center">
            <SalesforceLogo className="w-auto h-full max-w-full object-contain" />
          </div>
          <div className="w-[100px] h-[53px] relative overflow-hidden">
            <Image src={Slack} alt="slack" className="w-full h-full object-contain" />
          </div>
          <div className="w-[100px] h-[53px] relative overflow-hidden">
            <Image src={AWS} alt="aws" className="w-full h-full object-contain" />
          </div>
          <div className="w-[100px] h-[53px] relative overflow-hidden">
            <Image src={Mulesoft} alt="mulesoft" className="w-full h-full object-contain" />
          </div>
          <div className="w-[100px] h-[53px] relative overflow-hidden">
            <Image src={Spiff} alt="spiff" className="w-full h-full object-contain" />
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

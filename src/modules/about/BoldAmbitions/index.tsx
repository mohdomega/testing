'use client';

import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import Image from 'next/image';
import AboutImg5 from '../../../../public/images/AboutImages/about-img2.png';

interface BoldAmbitionsProps {
  className?: string;
}

export default function BoldAmbitions({ className }: BoldAmbitionsProps) {
  return (
    <Stack component="section" className={cn('py-17.5 bg-background w-full max-sm:py-10', className)}>
      <div className="max-w-[1440px] w-full mx-auto px-20 py-17.5 max-lg:px-15 max-sm:px-6 max-sm:py-10">
        <Stack direction="row" alignItems="center" className="gap-1 max-lg:flex-col">
          <Stack alignItems="flex-start" className=" flex-1 gap-8 max-lg:items-center max-lg:text-center">
            <Stack className=" gap-4 max-w-145 max-lg:items-center">
              <TitleChip>Bold Ambitions</TitleChip>
              <Typography variant="h2" className="text-gradient">
                Our Vision & Mission
              </Typography>
              <Typography>
                At IDRMS, we aim to bridge the challenges that businesses face in their day-to-day operations
                and data management through smart Salesforce solutions across borders. We envision becoming
                trusted partners in your organization that offer innovative, scalable, and effective cloud
                services in all the segments of your business.
              </Typography>
            </Stack>
            <Button component={Link} href="/contact-us">
              Connect with us
            </Button>
          </Stack>
          <div className=" relative overflow-hidden flex-1 w-full aspect-square rounded-3xl bg-[#F2F0F7] max-lg:aspect-[4/3]">
            <Image src={AboutImg5} alt="home video img 1" className="w-full h-full object-cover" />
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

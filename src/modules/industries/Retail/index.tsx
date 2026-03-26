import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUp from '/public/icons/arrow-up.svg';
import Bill from '/public/icons/bill.svg';
import IndustryImg8 from '/public/images/IndustryImages/industry-image-8.png';

interface HealthcareProps {
  className?: string;
}

export default function Retail({ className }: HealthcareProps) {
  return (
    <Stack
      id="retail"
      component="section"
      className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5 bg-white group even:bg-background', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
        <div className="grid grid-cols-2 items-center gap-10 max-lg:grid-cols-1">
          <Stack alignItems="flex-start" className="flex-1 gap-8">
            <Stack className="gap-4">
              <TitleChip>Retail</TitleChip>
              <Typography variant="h2" className="text-gradient text-xl sm:text-2xl md:text-4xl">
                How Salesforce Personalization Increased Retail Conversions by 20%
              </Typography>
              <Typography className="text-primary-dark/60 font-medium text-justify">
                We help omnichannel retail brands overcome fragmented customer data and generic marketing
                campaigns. Our solutions deliver consistent, personalized experiences across digital and
                in-store touchpoints, driving higher engagement, conversions, and repeat purchases.
              </Typography>
            </Stack>
          </Stack>
          <div className="flex-1 justify-self-end max-w-125 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden max-lg:w-full max-lg:max-w-full max-lg:justify-self-center">
            <Image src={IndustryImg8} alt="health care image" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* TODO */}
        <div className="grid grid-cols-[6fr_4fr] gap-15 items-start max-lg:grid-cols-1">
          <Stack className="gap-8 p-0 sm:p-8 rounded-3xl border border-black/15 border-dashed ">
            {/* Chip */}
            <div className="mt-6 sm:mt-0 px-3 py-1.5 ml-0 sm:-ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
              <Typography>Our Benefits</Typography>
            </div>
            <div className="grid grid-cols-2 gap-0.25 bg-primary-dark/15 *:bg-white group-even:*:bg-background">
              <Stack className="gap-2 p-4 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    45%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  increase in email open rates
                </Typography>
              </Stack>
              <Stack className="gap-2 p-2 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    20%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  boost in conversions
                </Typography>
              </Stack>
              <Stack className="gap-2 p-2 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    25%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  increase in repeat purchases
                </Typography>
              </Stack>
              <Stack className="gap-2 p-2 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2"></Stack>
              </Stack>
            </div>
          </Stack>
          <Stack className="gap-8 p-8 rounded-3xl border border-black/15 border-dashed">
            {/* Chip */}
            <div className="px-3 py-1.5 -ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
              <Typography>Core Challenges</Typography>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Siloed customer data
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Low engagement from generic campaigns
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Limited insight into customer behavior
                </Typography>
              </Stack>
            </div>
          </Stack>
        </div>
        <Button component={Link} href="/blogs/retail-case-study" className="w-fit self-center">
          Read More
        </Button>
      </div>
    </Stack>
  );
}

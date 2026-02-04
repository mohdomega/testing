import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUp from '/public/icons/arrow-up.svg';
import Bill from '/public/icons/bill.svg';
import IndustryImg6 from '/public/images/IndustryImages/industry-image-6.png';

interface CXTechnologyProps {
  className?: string;
}

export default function CXTechnology({ className }: CXTechnologyProps) {
  return (
    <Stack
      id="cxTechnology"
      component="section"
      className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5 bg-white group even:bg-background', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
        <div className="grid grid-cols-2 items-center gap-10 max-lg:grid-cols-1">
          <Stack alignItems="flex-start" className="flex-1 gap-8">
            <Stack className="gap-4">
              <TitleChip>CX Technology</TitleChip>
              <Typography variant="h2" className="text-gradient text-xl sm:text-2xl md:text-4xl">
                How a CX Services Firm Improved CSAT by 25% Using Salesforce Einstein AI
              </Typography>
              <Typography className="text-primary-dark/60 font-medium text-justify">
                We help growing CX services organizations handling thousands of customer interactions daily
                build scalable platforms to unify customer data, reduce response times, and unlock predictive
                insights across sales and service teams.
              </Typography>
            </Stack>
          </Stack>
          <div className="flex-1 justify-self-end max-w-125 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden max-lg:w-full max-lg:max-w-full max-lg:justify-self-center">
            <Image src={IndustryImg6} alt="CX Technology image" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-[6fr_4fr] gap-15 items-start max-lg:grid-cols-1">
          <Stack className="gap-8 p-0 sm:p-8 rounded-3xl border border-black/15 border-dashed ">
            <div className="mt-6 sm:mt-0 px-3 py-1.5 ml-0 sm:-ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
              <Typography>Our Benefits</Typography>
            </div>
            <div className="grid grid-cols-2 gap-0.25 bg-primary-dark/15 *:bg-white group-even:*:bg-background">
              <Stack className="gap-2 p-4 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    30%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  reduction in average handling time
                </Typography>
              </Stack>
              <Stack className="gap-2 p-4 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    40%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  increase in qualified lead conversions
                </Typography>
              </Stack>
              <Stack className="gap-2 p-4 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    25%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  improvement in CSAT scores
                </Typography>
              </Stack>
              <Stack className="gap-2 p-4 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    20%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  increase in upselling success
                </Typography>
              </Stack>
            </div>
          </Stack>
          <Stack className="gap-8 p-8 rounded-3xl border border-black/15 border-dashed">
            <div className="px-3 py-1.5 -ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
              <Typography>Core Challenges</Typography>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Fragmented customer interactions across channels
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  High average call handling time impacting CSAT
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Missed leads due to delayed follow-ups
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  No predictive insight into customer intent or sentiment
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Manual processes limiting upsell and cross-sell opportunities
                </Typography>
              </Stack>
            </div>
          </Stack>
        </div>
        <Button component={Link} href="/blogs/cx-technology-case-study" className="w-fit self-center">
          Read More
        </Button>
      </div>
    </Stack>
  );
}

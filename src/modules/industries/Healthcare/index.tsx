import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUp from '/public/icons/arrow-up.svg';
import Bill from '/public/icons/bill.svg';
import IndustryImg6 from '/public/images/IndustryImages/Healthcare.png';

interface HealthcareProps {
  className?: string;
}

export default function Healthcare({ className }: HealthcareProps) {
  return (
    <Stack
      id="healthcare"
      component="section"
      className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5 bg-white group even:bg-background', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
        <div className="grid grid-cols-2 items-center gap-10">
          <Stack alignItems="flex-start" className="flex-1 gap-8">
            <Stack className="gap-4">
              <TitleChip>Healthcare</TitleChip>
              <Typography variant="h2" className="text-gradient">
                How a Multi-Specialty Healthcare Network Improved Patient Engagement by 35% Using Salesforce
              </Typography>
              <Typography className="text-primary-dark/60 font-medium">
                A rapidly growing multi-specialty healthcare network managing patient interactions across
                departments, locations, and channels. We help unify patient engagement, service requests,
                and follow-ups with a connected digital platform to improve care coordination, operational
                efficiency, and patient satisfaction—without increasing administrative burden on staff.
              </Typography>
            </Stack>
          </Stack>
          <div className="flex-1 justify-self-end max-w-125 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden">
            <Image src={IndustryImg6} alt="health care image" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* TODO */}
        <div className="grid grid-cols-[6fr_4fr] gap-15 items-start max-lg:grid-cols-1">
          <Stack className="gap-8 p-8 rounded-3xl border border-black/15 border-dashed">
            {/* Chip */}
            <div className="px-3 py-1.5 -ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
              <Typography>Our Benefits</Typography>
            </div>
            <div className="grid grid-cols-2 gap-0.25 bg-primary-dark/15 *:bg-white group-even:*:bg-background">
              <Stack className="gap-2 p-12">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    25%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  reduction in appointment no-shows
                </Typography>
              </Stack>
              <Stack className="gap-2 p-12">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    30%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  faster service response times
                </Typography>
              </Stack>
              <Stack className="gap-2 p-12">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    40%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  improvement in case resolution
                </Typography>
              </Stack>
              <Stack className="gap-2 p-12">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    35%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                {/* <Typography variant="body2" className="font-medium text-primary-dark/60"> */}
                increase in patient engagement
                {/* </Typography> */}
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
                  Patient data scattered across sales, service, and marketing systems
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Manual intake and follow-up processes causing appointment no-shows
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Slow service response times impacting patient experience
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  No predictive insight into patient engagement or service demand
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Limited visibility into end-to-end patient journeys
                </Typography>
              </Stack>
            </div>
          </Stack>
        </div>
        <Button component={Link} href="/blogs/healthcare-case-study" className="w-fit self-center">
          Read More
        </Button>
      </div>
    </Stack>
  );
}

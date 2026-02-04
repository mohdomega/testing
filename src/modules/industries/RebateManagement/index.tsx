import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUp from '/public/icons/arrow-up.svg';
import Bill from '/public/icons/bill.svg';
// import IndustryImg6 from '/public/images/industry/Communication.png';
import IndustryImg6 from '/public/images/industry/Logistics.png';

interface RebateManagementProps {
  className?: string;
}

export default function RebateManagement({ className }: RebateManagementProps) {
  return (
    <Stack
      id="logistics"
      component="section"
      className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5 bg-white group even:bg-background', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
        <div className="grid grid-cols-2 items-center gap-10 max-lg:grid-cols-1">
          <Stack alignItems="flex-start" className="flex-1 gap-8">
            <Stack className="gap-4">
              {/* <TitleChip>Rebate Management</TitleChip> */}
              <TitleChip>Logistics</TitleChip>
              <Typography variant="h2" className="text-gradient text-xl sm:text-2xl md:text-4xl">
                How Salesforce Automation Reduced Rebate Errors by 30% for a Global Distributor Network
              </Typography>
              <Typography className="text-primary-dark/60 font-medium text-justify">
                We help global distributor-driven organizations running multiple rebate programs across
                regions and partners. Our solutions replace manual tracking and complex calculations with
                transparent, scalable rebate management systems that improve partner trust and operational
                efficiency.
              </Typography>
            </Stack>
          </Stack>
          <div className="flex-1 justify-self-end max-w-125 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden max-lg:w-full max-lg:max-w-full max-lg:justify-self-center">
            <Image src={IndustryImg6} alt="Rebate Management image" className="w-full h-full object-cover" />
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
                  reduction in rebate calculation errors
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
                  faster rebate payments
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
                  increase in rebate program effectiveness
                </Typography>
              </Stack>
              <Stack className="gap-2 p-4 sm:p-12 items-center justify-center text-center">
                <Stack direction="row" alignItems="center" className="gap-2">
                  <Typography component="span" variant="h3" className="font-semibold">
                    100%
                  </Typography>
                  <ArrowUp className="size-10 text-accent" />
                </Stack>
                <Typography variant="body2" className="font-medium text-primary-dark/60">
                  improved partner trust and satisfaction
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
                  Manual rebate calculations prone to errors
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Limited real-time visibility for partners
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Delayed approvals and payout cycles
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  High administrative effort to manage programs
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" className="gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <Typography variant="body2" className="font-medium">
                  Poor reporting on rebate effectiveness
                </Typography>
              </Stack>
            </div>
          </Stack>
        </div>
        <Button component={Link} href="/blogs/rebate-management-case-study" className="w-fit self-center">
          Read More
        </Button>
      </div>
    </Stack>
  );
}

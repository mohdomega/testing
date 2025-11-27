import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUp from '/public/icons/arrow-up.svg';
import Bill from '/public/icons/bill.svg';
import IndustryImg12 from '/public/images/IndustryImages/industry-image-12.png';
import Image from 'next/image';

interface HealthcareProps {
  className?: string;
}

export default function Logistics({ className }: HealthcareProps) {
  return (
    <Stack
      component="section"
      className={cn('gap-15 px-20 py-17.5 bg-white group even:bg-background', className)}
    >
      <div className="grid grid-cols-2 items-center gap-10">
        <Stack alignItems="flex-start" className="flex-1 gap-8">
          <Stack className="gap-4">
            <TitleChip>Logistics</TitleChip>
            <Typography variant="h2" className="text-gradient">
              Smarter Solutions for Logistics
            </Typography>
            <Typography className="text-primary-dark/60 font-medium">
             We provide logistics providers with smart tools for route optimization, tracking, and inventory flow. Gain full visibility, reduce delivery time, and improve customer satisfaction across the supply chain
            </Typography>
          </Stack>
        </Stack>
        <div className="flex-1 justify-self-end max-w-125 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden">
          <Image src={IndustryImg12} alt="health care image" className="w-full h-full object-cover" />
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
                  40%
                </Typography>
                <ArrowUp className="size-10 text-accent" />
              </Stack>
              <Typography variant="body2" className="font-medium text-primary-dark/60">
                quicker approvals
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
                quicker approvals
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
                quicker approvals
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
                quicker approvals
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
                quicker approvals
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
                quicker approvals
              </Typography>
            </Stack>
          </div>
        </Stack>
        <Stack className="gap-8 p-8 rounded-3xl border border-black/15 border-dashed">
          {/* Chip */}
          <div className="px-3 py-1.5 -ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
            <Typography>Our Solutions</Typography>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-lg:grid-cols-3 max-sm:grid-cols-2">
            <Stack className="gap-4">
              <div className="gradient-vertical p-6 rounded-full w-fit">
                <Bill className="size-8" />
              </div>
              <Typography variant="body2" className="font-medium">
                Core Banking Platforms
              </Typography>
            </Stack>
            <Stack className="gap-4">
              <div className="gradient-vertical p-6 rounded-full w-fit">
                <Bill className="size-8" />
              </div>
              <Typography variant="body2" className="font-medium">
                Core Banking Platforms
              </Typography>
            </Stack>
            <Stack className="gap-4">
              <div className="gradient-vertical p-6 rounded-full w-fit">
                <Bill className="size-8" />
              </div>
              <Typography variant="body2" className="font-medium">
                Core Banking Platforms
              </Typography>
            </Stack>
            <Stack className="gap-4">
              <div className="gradient-vertical p-6 rounded-full w-fit">
                <Bill className="size-8" />
              </div>
              <Typography variant="body2" className="font-medium">
                Core Banking Platforms
              </Typography>
            </Stack>
            <Stack className="gap-4">
              <div className="gradient-vertical p-6 rounded-full w-fit">
                <Bill className="size-8" />
              </div>
              <Typography variant="body2" className="font-medium">
                Core Banking Platforms
              </Typography>
            </Stack>
            <Stack className="gap-4">
              <div className="gradient-vertical p-6 rounded-full w-fit">
                <Bill className="size-8" />
              </div>
              <Typography variant="body2" className="font-medium">
                Core Banking Platforms
              </Typography>
            </Stack>
          </div>
        </Stack>
      </div>
      <Button component={Link} href="/contact-us" className="w-fit self-center">
        Connect with us
      </Button>
    </Stack>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUp from '/public/icons/arrow-up.svg';
import Bill from '/public/icons/bill.svg';
import IndustryImg11 from '/public/images/IndustryImages/industry-image-11.png';

interface HealthcareProps {
  className?: string;
}

export default function MediaAndPublication({ className }: HealthcareProps) {
  return (
    <Stack
      id="mediaAndPublication"
      component="section"
      className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5 bg-white group even:bg-background', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
        <div className="grid grid-cols-2 items-center gap-10">
          <Stack alignItems="flex-start" className="flex-1 gap-8">
            <Stack className="gap-4">
              <TitleChip>Media</TitleChip>
              <Typography variant="h2" className="text-gradient">
                Smarter Solutions for Media
              </Typography>
              <Typography className="text-primary-dark/60 font-medium">
                We help media teams manage content, publishing, and audience insights through powerful digital
                tools. Accelerate creation, boost reach, and track impact—all in one place
              </Typography>
            </Stack>
          </Stack>
          <div className="flex-1 justify-self-end max-w-125 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden">
            <Image src={IndustryImg11} alt="health care image" className="w-full h-full object-cover" />
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
        <Button component={Link} href="/blogs/media-case-study" className="w-fit self-center">
          Read More
        </Button>
      </div>
    </Stack>
  );
}

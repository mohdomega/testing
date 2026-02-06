import Image from 'next/image';

import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import { process } from './data';
import Step from './Step';

import ProcessFlowLine from '/public/images/process-flow.png';

interface OurProcessProps {
  className?: string;
}

export default function OurProcess({ className }: OurProcessProps) {
  return (
    <Stack
      component="section"
      className={cn('gap-15 px-20 py-12 max-lg:p-15 max-sm:gap-10 max-sm:p-10', className)}
    >
      <Stack alignItems="center" className="gap-1">
        {/* <TitleChip>Our visionaries</TitleChip> */}
        <Typography variant="h2" className="text-gradient">
          Our Process
        </Typography>
      </Stack>
      <div
        className="m-auto grid grid-cols-4 items-center w-full max-w-[1440px] relative justify-center max-sm:flex max-sm:flex-col max-sm:gap-8"
      >
        <Image
          src={ProcessFlowLine}
          alt="process flow line"
          className="m-auto max-w-[1440px] w-full absolute top-1/2 left-0 -translate-y-1/2 -z-10 max-sm:hidden"
        />
        {process.map((props, index) => (
          <Step
            key={props.title}
            isReverse={index % 2 === 0}
            step={String(index + 1).padStart(2, '0')}
            {...props}
          />
        ))}
      {/* </Stack> */}
      </div>
    </Stack>
  );
}

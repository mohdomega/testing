import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import PersonReading from '/public/images/blaze-new-trails-img.png';

interface BlazeNewTrailsProps {
  className?: string;
}

export default function BlazeNewTrails({ className }: BlazeNewTrailsProps) {
  return (
    <section className={cn('px-20 py-12 bg-background max-lg:p-0', className)}>
      <div className="max-w-[1440px] w-full mx-auto">
        <Stack direction="row" className=" gap-0 rounded-3xl gradient-vertical max-lg:rounded-none">
          <Stack
            alignItems="flex-start"
            className=' w-[100%] lg:w-[55%] gap-10 p-15 pr-0 max-lg:items-center max-lg:text-center max-sm:gap-6 max-lg:p-15'
          >
            <Typography className="text-[56px] font-medium text-white leading-20 max-lg:text-4xl max-sm:text-xl max-sm:leading-[1.4]">
              {/* Blaze new trails with Salesforce experts */}
              {/* Blaze New Trails with Salesforce Experts */}
              Consult Our Salesforce Experts & Gain Clarity on Your Vision
            </Typography>
            <Button
              component={Link}
              // href="/offerings"
              href="/contact-us"
              color="accent"
              endIcon={<ChevronRight className="size-4" />}
            >
              {/* Lets go */}
              Let’s Connect!
            </Button>
          </Stack>
          <Stack justifyContent="flex-end" className="w-[45%] max-lg:hidden">
            <Image src={PersonReading} alt="person reading document" />
          </Stack>
        </Stack>
      </div>
    </section>
  );
}

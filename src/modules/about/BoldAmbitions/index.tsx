import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import Image from 'next/image';
// import AboutImg5 from '../../../../public/images/AboutImages/about-img2.png';
import AboutImg5 from '../../../../public/images/AboutImages/about-image6.jpg';

interface BoldAmbitionsProps {
  className?: string;
}

export default function BoldAmbitions({ className }: BoldAmbitionsProps) {
  return (
    <Stack component="section" className={cn('py-2 bg-background w-full max-sm:py-3', className)}>
      <div className="max-w-[1440px] w-full mx-auto px-31 py-[50px] max-lg:px-15 max-sm:px-6 max-sm:py-10">
        <Stack
          direction="row"
          alignItems="center"
          className="gap-[100px] max-lg:gap-[50px] max-sm:gap-[24px] max-lg:flex-col"
        >
          <Stack alignItems="flex-start" className="flex-1 gap-8 max-lg:items-center max-lg:text-center">
            <Stack className=" gap-4 max-w-145 max-lg:items-center">
              <TitleChip>Vision</TitleChip>
              <Typography variant="h2" className="text-gradient">
                Our Vision
              </Typography>
              <Typography>
                Our vision is to become the foremost Salesforce partner, renowned for our unparalleled ability
                to leverage the power of customer data to craft innovative, tailor-made solutions that
                accelerate business growth and elevate client experiences, cementing our place at the
                forefront of the industry.
              </Typography>
            </Stack>
            {/* <Button component={Link} href="/contact-us">
              Connect with us
            </Button> */}
          </Stack>
          <div className="max-w-[400px] max-h-[616px] relative overflow-hidden flex-1 w-full aspect-square rounded-3xl bg-[#F2F0F7] max-lg:aspect-[4/3]">
            <Image src={AboutImg5} alt="home video img 1" className="w-full h-full object-cover" />
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

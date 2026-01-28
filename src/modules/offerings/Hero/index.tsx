import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import Img1 from '/public/images/offering-hero-img-1.png';
import Img2 from '/public/images/offering-hero-img-2.png';
import Img3 from '/public/images/offering-hero-img-3.jpg';
import Img4 from '/public/images/offering-hero-img-4.png';
import Img5 from '/public/images/offering-hero-img-5.jpg';
import Img6 from '/public/images/offering-hero-img-6.png';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <Stack
      component="section"
      justifyContent="center"
      className={cn(
        'min-h-[920px] relative bg-[url("/images/bg-gradient.png")] bg-cover max-lg:min-h-auto max-lg:p-15 max-sm:px-6 max-sm:py-40 max-lg:py-50',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto">
        <Stack alignItems="center" className="gap-10">
          <Stack alignItems="center" className="gap-4 max-w-200 text-center">
            <TitleChip dotClassName="bg-white" className='bg-white/10 text-white'>Offerings</TitleChip>
            <Typography
              variant="h1"
              className="text-white font-medium text-balance max-lg:text-4xl max-sm:text-2xl"
            >
              {/* Smart Salesforce Solutions, Built for You */}
              Smarter Salesforce Solutions, Tailored to Your Business
            </Typography>
            <Typography variant="body2" className="text-white/60 font-medium text-balance max-sm:font-normal">
              {/* Unlock the full potential of Salesforce with tailored services designed to fit your business needs
              — from smooth implementation to ongoing optimization */}
              Unlock the full potential of Salesforce with customized solutions built around your business —
              from seamless implementation to continuous optimization.
            </Typography>
          </Stack>
          <Stack direction="row" className="gap-3">
            <Button component={Link} href="/contact-us/schedule-meeting" color="accent">
              Book Free Consulting
            </Button>
            <Button
              component={Link}
              // href="/offerings"
              href="/industries"
              variant="outlined"
              endIcon={<ChevronRight className="size-4 text-white" />}
            >
              Explore Industries
            </Button>
          </Stack>
        </Stack>
      </div>

      <div className=" max-w-[1440px] w-full mx-auto absolute inset-0 pt-32 pointer-events-none max-lg:hidden">
        <div className="relative h-full *:pointer-events-auto">
          <Image
            src={Img1}
            alt=""
            className="absolute top-1/20 left-1/6 -rotate-12 size-30 border-8 border-white/20 rounded-2xl object-cover backdrop-blur-xl"
          />
          <Image
            src={Img2}
            alt=""
            className="absolute top-1/20 right-1/6 rotate-12 size-30 border-8 border-white/20 rounded-2xl object-cover backdrop-blur-xl"
          />
          <Image
            src={Img3}
            alt=""
            className="absolute top-1/2 left-1/16 -translate-y-1/2 size-30 border-8 border-white/20 rounded-full object-cover backdrop-blur-xl"
          />
          <Image
            src={Img4}
            alt=""
            className="absolute top-1/2 right-1/16 -translate-y-1/2 size-30 border-8 border-white/20 rounded-full object-cover backdrop-blur-xl"
          />
          <Image
            src={Img5}
            alt=""
            className="absolute top-3/4 left-1/5 rotate-12 -translate-y-1/4 size-30 border-8 border-white/20 rounded-2xl object-cover backdrop-blur-xl"
          />
          <Image
            src={Img6}
            alt=""
            className="absolute top-3/4 right-1/5 -rotate-12 -translate-y-1/4 size-30 border-8 border-white/20 rounded-2xl object-cover backdrop-blur-xl"
          />
        </div>
      </div>
    </Stack>
  );
}

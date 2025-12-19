import Image from 'next/image';
import Link from 'next/link';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import LightingFlash from '/public/icons/lighting-flash.svg';
import FeaturedImg from '/public/images/BlogImages/blogs-img1.png';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className={cn(
        'min-h-[809px] bg-[url("/images/bg-gradient.png")] bg-cover pt-32 px-20 pb-20 max-lg:px-15 max-sm:px-6 w-full',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-[60px] items-center px-30 max-lg:p-15 max-sm:px-6">
        {/* Header Text */}
        <Stack alignItems="center" className="gap-[12px] text-center">
          <Stack direction="row" alignItems="center" className="gap-2 text-white/60">
            <LightingFlash className="size-4" />
            <Typography variant="small">Smart CRM Insights</Typography>
          </Stack>
          <Typography variant="h1" className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-medium">
            The IDRMS Journal
          </Typography>
        </Stack>

        {/* Featured Blog Content */}
        <div className="w-full grid grid-cols-2 gap-[60px] items-center max-lg:grid-cols-1">
          <div className="rounded-3xl overflow-hidden aspect-video relative w-full">
            <Image src={FeaturedImg} alt="Featured Blog" className="object-cover w-full h-full" />
          </div>
          <Stack className="gap-[12px] text-white items-start">
            <Typography variant="h2" className="text-2xl font-medium leading-tight">
              Unlocking the True Power of Sales
            </Typography>
            <Typography className="text-white/70 text-md w-lg  max-lg:w-full">
              Expert tips and proven methods to boost sales, strengthen relationships, and accelerate business
              success...
            </Typography>
            <Link
              // href="#"
              // href={`/blogs/${blog.slug}`}
              href={`/blogs/unlocking-the-true-power-of-salesforce`}
              className="flex items-center gap-2 text-white hover:gap-3 transition-all mt-[12px]"
            >
              Read More <ChevronRight className="size-4" />
            </Link>
          </Stack>
        </div>
      </div>
    </Stack>
  );
}

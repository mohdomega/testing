import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import Image from 'next/image';

import Img1 from '/public/images/AboutImages/1.png';
import Img2 from '/public/images/AboutImages/2.png';
import Img3 from '/public/images/AboutImages/3.png';
import Img4 from '/public/images/AboutImages/4.png';
import Img5 from '/public/images/AboutImages/about-image-1.png';
import Img6 from '/public/images/AboutImages/about-image-2.png';

interface EmpoweringProps {
  className?: string;
}

// const chips = ['Strategic Vision', 'Seamless Implementation', 'Ongoing Support', 'People-First Approch'];
const chips = [
  'Global Reach',
  'Client-Centric Approach',
  'Certified Salesforce Experts',
  'Proven Track Record',
];

export default function Empowering({ className }: EmpoweringProps) {
  return (
    // <div className={cn('relative pb-52.5 max-lg:pb-27', className)}>
    <div className={cn('relative ', className)}>
      <Stack
        component="section"
        alignItems="center"
        className="gap-8 py-17.5 max-lg:p-15 max-sm:px-6 max-sm:py-10"
      >
        <Stack alignItems="center" className="gap-4">
          <TitleChip>About us</TitleChip>
          <Stack className="gap-4 text-center max-w-166">
            <Typography variant="h2" className="text-gradient">
              Empowering Your Salesforce Journey
            </Typography>
            <Typography variant="body2" className="font-medium text-secondary">
              {/* IDRMS Technologies is your trusted Salesforce partner, committed to driving real transformation.
              We specialize in delivering tailored solutions that align with your goals—making your growth
              smarter, faster, and simpler */}
              At IDRMS Technologies, we bring your business vision to life with customized and effective
              Salesforce solutions. With deep experience across multiple industries, our team provides ongoing
              support tailored to your unique needs. After an initial consultation, we craft a strong strategy
              and execution plan designed to deliver tangible results. Our mission is simple — to help
              businesses grow smarter, faster, and more efficiently.
            </Typography>
          </Stack>
        </Stack>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 max-sm:grid-cols-1 max-sm:grid-rows-4">
          {chips.map((label) => (
            <Stack
              key={label}
              direction="row"
              alignItems="center"
              className="gap-2.5 px-4 py-2.5 rounded-full border border-dashed border-secondary/40 max-sm:py-2"
            >
              <div className="p-1.75 rounded-full bg-[#EFE9FF]">
                <div className="size-1.5 rounded-full bg-primary-light" />
              </div>
              <Typography variant="body2" className="font-medium text-secondary max-sm:text-base">
                {label}
              </Typography>
            </Stack>
          ))}
        </div>
        <Button component={Link} href="/about" color="gradient">
          Read More
        </Button>
      </Stack>

      <div className="max-w-[1440px] w-full mx-auto absolute inset-0 pointer-events-none max-lg:hidden">
        {/* <div className="h-[85%] relative  *:pointer-events-auto"> */}
        <div className="h-[110%] relative  *:pointer-events-auto">
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
    </div>
  );
}

import Image from 'next/image';

import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import StatCard from './StatCard';

import BillIcon from '/public/icons/bill.svg';
import CalenderIcon from '/public/icons/calendar.svg';
import DirectSendBoxIcon from '/public/icons/directbox-send.svg';
import CareerImg1 from '/public/images/CareerImages/career-image-1.jpg';
import CareerImg2 from '/public/images/CareerImages/career-image-2.jpg';
import CareerImg3 from '/public/images/CareerImages/career-image-3.JPG';
import CareerImg4 from '/public/images/CareerImages/career-image-4.jpg';
import CareerImg5 from '/public/images/CareerImages/career-image-5.jpg';
import CareerImg6 from '/public/images/CareerImages/career-image-6.jpg';
import CareerImg7 from '/public/images/CareerImages/career-image-7.jpg';
import CareerImg8 from '/public/images/CareerImages/career-image-8.JPG';
import CareerImg9 from '/public/images/CareerImages/career-image-9.jpg';
import CareerImg10 from '/public/images/CareerImages/career-image-10.jpg';

const CAREER_IMAGES = [
  { src: CareerImg1, className: 'col-start-1 col-end-2 row-start-2 row-end-4' },
  { src: CareerImg2, className: 'col-start-1 col-end-2 row-start-4 row-end-10' },
  { src: CareerImg7, className: 'col-start-1 col-end-2 row-start-10 row-end-12' },
  { src: CareerImg4, className: 'col-start-2 col-end-4 row-start-1 row-end-7' },
  { src: CareerImg5, className: 'col-start-2 col-end-4 row-start-7 row-end-9' },
  { src: CareerImg8, className: 'col-start-2 col-end-3 row-start-9 row-end-13' },
  { src: CareerImg9, className: 'col-start-3 col-end-4 row-start-9 row-end-13' },
  { src: CareerImg3, className: 'col-start-4 col-end-5 row-start-2 row-end-6' },
  { src: CareerImg6, className: 'col-start-4 col-end-5 row-start-6 row-end-8' },
  { src: CareerImg10, className: 'col-start-4 col-end-5 row-start-8 row-end-12' },
];

interface WorkCultureProps {
  className?: string;
}

export default function WorkCulture({ className }: WorkCultureProps) {
  return (
    <Stack
      id="work-culture"
      component="section"
      className={cn('py-12 bg-background w-full max-sm:py-10', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto px-20 py-1 max-lg:px-15 max-sm:px-6 max-sm:py-2">
        <Stack className="gap-15">
          <Stack className="gap-1 max-lg:items-center max-lg:text-center">
            <TitleChip>Work Culture</TitleChip>
            <div className="grid grid-cols-2 items-center gap-20 **:text-balance font-medium max-lg:grid-cols-1 max-lg:gap-6">
              <Typography variant="h2" className="text-gradient">
                {/* Team That Works Wonders */}A culture where people thrive, ideas lead, and innovation
                grows—together.
              </Typography>
              <Typography className="text-primary-dark/60 text-balance">
                {/* Our team represents us on every level and works with complete dedication to deliver the best
                results. We are a global, mission-driven team committed to providing effective Salesforce
                solutions to our clients. */}
                Our culture is fueled by a passionate pursuit of creativity, innovation, and open
                communication. We believe in empowering our team to grow alongside the company, fostering a
                family-like environment where hard work and play are in perfect harmony. It&apos;s not just a
                job - it&apos;s a chance to thrive, create, and make a positive impact on the world.
              </Typography>
            </div>
          </Stack>
          {/* Desktop/Tablet Grid (Complex Layout) */}
          <div className="hidden lg:grid grid-cols-4 grid-rows-12 gap-[40px] max-lg:gap-5">
            {CAREER_IMAGES.map((img, index) => (
              <div
                key={index}
                className={cn(
                  'relative overflow-hidden rounded-3xl bg-primary-dark/60 min-h-40',
                  img.className
                )}
              >
                <Image
                  src={img.src}
                  alt={`career image ${index + 1}`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>

          {/* Mobile Grid (Simple Layout) */}
          <div className="grid lg:hidden grid-cols-2 gap-4 max-sm:grid-cols-1">
            {CAREER_IMAGES.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl bg-primary-dark/60 aspect-[4/3]"
              >
                <Image
                  src={img.src}
                  alt={`career image ${index + 1}`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager" // Ensure they load on mobile
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-6 max-lg:text-center">
            <Typography variant="h2" className="text-[72px] text-gradient text-balance w-fit">
              We Build This On a Culture
            </Typography>
            <Stack className="gap-5 font-medium text-primary-dark/60">
              <Typography variant="body2">
                We are an all-inclusive team and we thrive on dynamic work cultures. We believe that our work
                culture is the foundation of a great team and for us, collaboration is the key to success. Our
                teams connect with each other to brain-storm, discuss, and find solutions to any issues one
                might be facing. Welcoming multiple perspectives helps us gain momentum and makes work more
                fun!
              </Typography>
              <Typography variant="body2">
                In today’s era, it is extremely important to retain talent and offer recognition each employee
                deserves. Our work environment makes sure that no one feels under-valued or left out. Whether
                you are a new face or an old acquaintance, we got your back - always.
              </Typography>
            </Stack>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <StatCard icon={BillIcon} value="50+ Experts" description="Driving IDRMS forward" />
            <StatCard
              icon={DirectSendBoxIcon}
              value="3+ Countries"
              description="Our team proudly works from"
            />
            <StatCard icon={CalenderIcon} value="30+ Clients" description="We actively collaborate with " />
          </div> */}
        </Stack>
      </div>
    </Stack>
  );
}

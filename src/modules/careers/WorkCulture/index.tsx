import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import StatCard from './StatCard';

import BillIcon from '/public/icons/bill.svg';
import CalenderIcon from '/public/icons/calendar.svg';
import DirectSendBoxIcon from '/public/icons/directbox-send.svg';
import CareerImg1 from '/public/images/CareerImages/career-image-1.png';
import CareerImg2 from '/public/images/CareerImages/career-image-2.png';
import CareerImg3 from '/public/images/CareerImages/career-image-3.png';
import CareerImg4 from '/public/images/CareerImages/career-image-4.png';
import CareerImg5 from '/public/images/CareerImages/career-image-5.png';
import CareerImg6 from '/public/images/CareerImages/career-image-6.png';
import CareerImg7 from '/public/images/CareerImages/career-image-7.png';
import CareerImg8 from '/public/images/CareerImages/career-image-8.png';
import CareerImg9 from '/public/images/CareerImages/career-image-9.png';
import CareerImg10 from '/public/images/CareerImages/career-image-10.png';
import Image from 'next/image';

interface WorkCultureProps {
  className?: string;
}

export default function WorkCulture({ className }: WorkCultureProps) {
  return (
    <Stack
      component="section"
      className={cn('gap-15 px-15 py-17.5 bg-background max-lg:p-15 max-sm:px-6 max-sm:py-10', className)}
    >
      <Stack className="gap-1 max-lg:items-center max-lg:text-center">
        <TitleChip>Work Culture</TitleChip>
        <div className="grid grid-cols-2 items-center gap-20 **:text-balance font-medium max-lg:grid-cols-1 max-lg:gap-6">
          <Typography variant="h2" className="text-gradient">
            Team That Works Wonders
          </Typography>
          <Typography className="text-primary-dark/60 text-balance">
            Our team represents us on every level and works with complete dedication to deliver the best
            results. We are a global, mission-driven team committed to providing effective Salesforce
            solutions to our clients.
          </Typography>
        </div>
      </Stack>
      <div className="grid grid-cols-4 grid-rows-12 gap-10 *:min-h-40 *:bg-primary-dark/60 *:rounded-3xl max-lg:gap-5">
        <div className="col-start-1 col-end-2 row-start-2 row-end-4 relative overflow-hidden">
          <Image src={CareerImg1} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-10 relative overflow-hidden">
          <Image src={CareerImg4} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-1 col-end-2 row-start-10 row-end-12 relative overflow-hidden">
          <Image src={CareerImg7} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-2 col-end-4 row-start-1 row-end-7 relative overflow-hidden">
          <Image src={CareerImg2} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-2 col-end-4 row-start-7 row-end-9 relative overflow-hidden">
          <Image src={CareerImg5} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-2 col-end-3 row-start-9 row-end-13 relative overflow-hidden">
          <Image src={CareerImg8} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-3 col-end-4 row-start-9 row-end-13 relative overflow-hidden">
          <Image src={CareerImg9} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-6 relative overflow-hidden">
          <Image src={CareerImg3} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-4 col-end-5 row-start-6 row-end-8 relative overflow-hidden">
          <Image src={CareerImg6} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-4 col-end-5 row-start-8 row-end-12 relative overflow-hidden">
          <Image src={CareerImg10} alt="home video img 1" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-6 max-lg:text-center">
        <Typography variant="h2" className="text-gradient text-balance w-fit">
          We Build This On a Culture
        </Typography>
        <Stack className="gap-5 font-medium text-primary-dark/60">
          <Typography variant="body2">
            We are an all-inclusive team and we thrive on dynamic work cultures. We believe that our work
            culture is the foundation of a great team and for us, collaboration is the key to success. Our
            teams connect with each other to brain-storm, discuss, and find solutions to any issues one might
            be facing. Welcoming multiple perspectives helps us gain momentum and makes work more fun!
          </Typography>
          <Typography variant="body2">
            In today’s era, it is extremely important to retain talent and offer recognition each employee
            deserves. Our work environment makes sure that no one feels under-valued or left out. Whether you
            are a new face or an old acquaintance, we got your back - always.
          </Typography>
        </Stack>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <StatCard icon={BillIcon} value="120+" description="Experts driving IDRMS forward" />
        <StatCard icon={DirectSendBoxIcon} value="15+" description="Countries our team proudly works from" />
        <StatCard icon={CalenderIcon} value="30+" description="Clients we actively collaborate with " />
      </div>
    </Stack>
  );
}

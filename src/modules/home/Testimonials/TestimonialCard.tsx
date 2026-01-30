import Image from 'next/image';

import Typography from '@/components/Typography';
import { cn } from '@/lib';

import DoubleQuotes from '/public/icons/testimonials/double quetes.svg';

interface TestimonialCardProps {
  name: string;
  location: string;
  company: string;
  companyLogo: any;
  avatar: any;
  quote: string;
  className?: string;
}

export default function TestimonialCard({
  name,
  location,
  company,
  companyLogo,
  avatar,
  quote,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'relative bg-[#F7F7F7] rounded-2xl p-6 flex flex-col justify-between gap-12 w-full overflow-hidden h-full',
        className
      )}
    >
      {/* Company Logo - Top Right Corner with inverted border radius */}
      <div className="absolute top-0 right-0 w-[140px] h-16 bg-white rounded-bl-[24px] rounded-tr-2xl flex items-center justify-center z-10 overflow-hidden p-2">
        <Image src={companyLogo} alt={company} className="object-contain w-full h-full" />
      </div>

      {/* Card rounded corners overlay to show inverted radius effect where logo ends */}
      {/* <div className="absolute top-[0px] shadow-tr-2xl-white right-[140px] w-16 h-16 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-0 right-[0px] w-8 h-8 bg-[#F7F7F7] rounded-tr-2xl" />
        <div className="absolute top-0 left-0 w-8 h-8 bg-red-800 rounded-bl-[24px]" />
      </div> */}

      <div>
        {/* Avatar */}
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
          <Image src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Quote Icon and Text */}
        <div className="mt-12 flex flex-col gap-6">
          <DoubleQuotes className="w-[26px] h-[24px]" />
          <Typography variant="body" className="text-[24px] font-normal leading-relaxed text-[#131313]">
            {quote}
          </Typography>
        </div>
      </div>

      {/* Name and Location */}
      <div className="flex flex-col gap-1">
        <Typography variant="title" className="text-[18px] text-[#131313] font-semibold">
          {name}
        </Typography>
        <Typography variant="body2" className="text-[16px] text-[#5A5A59] font-normal">
          {location}
        </Typography>
      </div>
    </div>
  );
}

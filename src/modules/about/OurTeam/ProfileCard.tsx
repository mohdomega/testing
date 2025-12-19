import Image from 'next/image';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

interface ProfileCardProps {
  className?: string;
  img: any;
  name: string;
  role: string;
  tagline: string;
  justifyBetween?: boolean;
}
export default function ProfileCard({
  justifyBetween,
  className,
  img,
  name,
  tagline,
  role,
}: ProfileCardProps) {
  return (
    <Stack
      justifyContent="flex-end"
      className={cn(
        'w-full min-h-[240px] p-3 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#646FC626] relative overflow-hidden group',
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={img}
        alt="team image"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <Stack
        className={cn(
          'gap-3 sm:gap-4 p-4 sm:p-6 border border-white rounded-xl sm:rounded-[20px] backdrop-blur-[20px] z-10 w-full flex-shrink-0 mb-1',
          justifyBetween && 'flex lg:flex-row flex-col lg:items-center lg:justify-between sm:gap-2'
        )}
      >
        <Stack className="gap-0.5 sm:gap-1">
          <Typography
            variant="subtitle"
            className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight"
          >
            {name}
          </Typography>
          <Typography className="text-white/80 text-[10px] sm:text-xs md:text-sm leading-tight">
            {tagline}
          </Typography>
        </Stack>
        <Typography className="text-[#FCC33F] font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
          - {role}
        </Typography>
      </Stack>
    </Stack>
  );
}

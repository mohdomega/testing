import Stack from '@/components/Stack';
import Typography from '@/components/Typography';

import { cn } from '@/lib';
import Image from 'next/image';

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
        'w-full min-h-[280px] sm:min-h-[320px] aspect-[17/25] p-3 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#646FC626] relative overflow-hidden',
        className
      )}
    >
      {/* Background Image */}
      <Image src={img} alt="team image" fill className="object-cover" />
      <Stack
        className={cn(
          'gap-3 sm:gap-6 p-3 sm:p-6 border border-white rounded-xl sm:rounded-[20px] backdrop-blur-[20px] z-10',
          justifyBetween && 'flex sm:flex-row flex-col sm:items-center sm:justify-between'
        )}
      >
        <Stack className="gap-1">
          <Typography variant="subtitle" className="text-white font-semibold text-sm sm:text-base">
            {name}
          </Typography>
          <Typography className="text-white/80 text-xs sm:text-sm">{tagline}</Typography>
        </Stack>
        <Typography className="text-[#FCC33F] font-bold text-sm sm:text-base">- {role}</Typography>
      </Stack>
    </Stack>
  );
}

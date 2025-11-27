import Stack from '@/components/Stack';
import Typography from '@/components/Typography';

import { cn } from '@/lib';
import Image from 'next/image';

interface ProfileCardProps {
  classname?: string;
  img: any;
  name: string;
  role: string;
  tagline: string;
  justifyBetween?: boolean;
}
export default function ProfileCard({
  justifyBetween,
  classname,
  img,
  name,
  tagline,
  role,
}: ProfileCardProps) {
  return (
    <Stack
      justifyContent="flex-end"
      // className="p-6 aspect-[4/5] rounded-3xl bg-[#646FC626] overflow-hidden"
      className={cn(
        // ' w-fit aspect-[17/25] p-6 rounded-3xl bg-[#646FC626] relative overflow-hidden',
        ' w-full h-full aspect-[17/25] p-6 rounded-3xl bg-[#646FC626] relative overflow-hidden',
        classname
      )}
    >
      {/* Background Image */}
      <Image src={img} alt="team image" fill className="object-cover" />
      <Stack
        // className="gap-6 p-6 border border-white rounded-[20px] backdrop-blur-[20px]"
        // className="gap-6 min-w-73 p-6 border border-white rounded-[20px] backdrop-blur-[20px]"

        className={cn(
          'gap-6 min-w-73 p-6 border border-white rounded-[20px] backdrop-blur-[20px]',
          justifyBetween && 'flex flex-row items-center justify-between',
          classname
        )}
      >
        <Stack className="gap-1">
          <Typography variant="subtitle" className="text-white font-semibold">
            {/* Liam Carter */}
            {name}
          </Typography>
          <Typography className="text-white/80">
            {/* Streamlines operations */}
            {tagline}
          </Typography>
        </Stack>
        <Typography className="text-[#FCC33F] font-bold">
          {/* - Founder */}- {role}
        </Typography>
      </Stack>
    </Stack>
  );
}

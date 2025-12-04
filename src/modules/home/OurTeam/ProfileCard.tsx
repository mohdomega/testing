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
}

export default function ProfileCard({ classname, img, name, tagline, role }: ProfileCardProps) {
  return (
    <Stack
      justifyContent="flex-end"
      className={cn(
        'w-full aspect-[17/25] p-6 rounded-3xl bg-[#646FC626] relative overflow-hidden',
        classname
      )}
    >
      {/* Background Image */}
      <Image src={img} alt="team image" fill className="object-cover" />

      <Stack className="gap-6 w-full min-w-73 max-xl:min-w-0 p-6 border border-white rounded-[20px] backdrop-blur-[20px]">
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
        <Typography className="text-white font-bold">
          {/* - Founder */}- {role}
        </Typography>
      </Stack>
    </Stack>
  );
}

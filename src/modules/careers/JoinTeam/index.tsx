import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Job from './Job';

interface JoinTeamProps {
  className?: string;
}

export default function JoinTeam({ className }: JoinTeamProps) {
  return (
    <Stack component="section" className={cn('gap-15 px-20 py-17.5', className)}>
      <Stack className="gap-4 font-medium max-lg:items-center max-lg:text-center">
        <TitleChip>Careers</TitleChip>
        <Typography variant="h2">Join our creative team</Typography>
        <Typography variant="body2" className="text-balance text-primary-dark/60">
          We are expanding everyday! We look forward to working with great minds and welcoming new
          perspectives into our team. Grasp new concepts, push your boundaries, and reach new heights in your
          career with IDRMS.
        </Typography>
      </Stack>
      <div className="grid grid-cols-2 gap-10 max-lg:gap-4">
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </Stack>
  );
}

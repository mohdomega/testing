import { FC, SVGProps } from 'react';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

interface StatCardProps {
  icon: FC<SVGProps<SVGElement>>;
  value: string;
  description: string;
  className?: string;
}

export default function StatCard({ icon: Icon, value, description, className }: StatCardProps) {
  return (
    <Stack alignItems="flex-start" className={cn('gap-8 p-6 rounded-3xl bg-white', className)}>
      <div className="gradient-vertical p-6 rounded-full">
        <Icon className="size-8" />
      </div>
      <Stack className="gap-2 font-medium">
        <Typography variant="h3">{value}</Typography>
        <Typography variant="body2" className="text-primary-dark/60">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

interface TitleChipProps {
  children: string;
  className?: string;
  dotClassName?: string;
}

export default function TitleChip({ dotClassName, children, className }: TitleChipProps) {
  // TODO: Curved inside
  return (
    // <Stack direction="row" alignItems="center" className="gap-6 w-fit px-3 py-5 bg-accent rounded-full">
    <Stack
      direction="row"
      alignItems="center"
      className={cn('gap-6 w-fit px-3 py-5 bg-primary-dark/5 rounded-full', className)}
    >
      <div className="size-3" />
      <Typography variant="small" className="font-medium">
        {children}
      </Typography>
      <div className={cn('size-3 bg-primary-dark rounded-3xl', dotClassName)} />
    </Stack>
  );
}

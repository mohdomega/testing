import Stack from '@/components/Stack';
import Typography from '@/components/Typography';

interface TitleChipProps {
  children: string;
}

export default function TitleChip({ children }: TitleChipProps) {
  // TODO: Curved inside
  return (
    // <Stack direction="row" alignItems="center" className="gap-6 w-fit px-3 py-5 bg-accent rounded-full">
    <Stack direction="row" alignItems="center" className="gap-6 w-fit px-3 py-5 bg-primary-dark/5 rounded-full">
      <div className="size-3" />
      <Typography variant="small" className="font-medium">
        {children}
      </Typography>
      <div className="size-3 bg-primary-dark rounded-3xl" />
    </Stack>
  );
}

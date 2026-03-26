import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';

export default function Page() {
  return (
    <Stack className="p-4 gap-4">
      <Typography variant="h2">Color</Typography>
      <Stack direction="row" className="gap-2 *:size-20">
        <div className="bg-primary-light" />
        <div className="bg-primary-dark" />
        <div className="bg-accent" />
        <div className="bg-secondary" />
        <div className="bg-background" />
        <div className="bg-white" />
        <div className="bg-black" />
      </Stack>

      <Typography>Title Chip</Typography>
      <TitleChip>Our visionaries</TitleChip>
    </Stack>
  );
}

import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import ContactForm from '@/modules/shared/ContactUs/ContactForm';

interface GetInTouchProps {
  className?: string;
}

export default function GetInTouch({ className }: GetInTouchProps) {
  return (
    <Stack component="section" alignItems="center" className={cn('gap-15 px-20 py-17.5', className)}>
      <Stack className="gap-2 max-w-175 text-center">
        <Stack alignItems="center" className="gap-1">
          <TitleChip>Contact us</TitleChip>
          <Typography variant="h2" className="text-gradient">
            Get in Touch with Us
          </Typography>
        </Stack>
        <Typography variant="body2" className="text-secondary font-medium">
          Reach out to our team for support, partnerships, or any inquiries. We’ll get back to you shortly
          with the help you need.
        </Typography>
      </Stack>
      <Stack direction="row" className="gap-15 w-full *:flex-1">
        <div>{/* TODO: Add image */}</div>
        <ContactForm className="bg-background" />
      </Stack>
    </Stack>
  );
}

import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ContactForm from './ContactForm';
import Map from './Map';

interface ContactUsProps {
  className?: string;
}

export default function ContactUs({ className }: ContactUsProps) {
  return (
    <Stack
      alignItems="center"
      component="section"
      className={cn('gap-13 px-20 py-17.5 bg-background max-lg:px-18 max-sm:px-6 max-sm:py-10', className)}
    >
      <Stack className="gap-2 max-w-116 text-center">
        <Stack alignItems="center" className="gap-1">
          <TitleChip>Need help?</TitleChip>
          <Typography variant="h2" className="text-gradient">
            Contact us
          </Typography>
        </Stack>
        <Typography variant="body2" className="text-secondary font-medium">
          Reach out to us with questions, ideas, or support needs — our team is ready to assist you
        </Typography>
      </Stack>
      <Stack direction="row" className="gap-10 w-full">
        <Map className="flex-1 max-lg:hidden" />
        <ContactForm className="flex-1" />
      </Stack>
    </Stack>
  );
}

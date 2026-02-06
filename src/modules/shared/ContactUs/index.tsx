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
      className={cn('py-12 bg-background w-full max-sm:py-10', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto px-20 py-2 max-lg:px-15 max-sm:px-6 max-sm:py-2 flex flex-col items-center gap-13">
        <Stack className="gap-2 max-w-116 text-center">
          <Stack alignItems="center" className="gap-1">
            <TitleChip>Need help?</TitleChip>
            <Typography variant="h2" className="text-gradient">
              Contact Us
            </Typography>
          </Stack>
          <Typography variant="body2" className="text-secondary font-medium">
            {/* Reach out to us with questions, ideas, or support needs — our team is ready to assist you */}
            Get an expert opinion on your ideas and vision. Our team will be ready with a strong, effective solution to eliminate your challenges.
          </Typography>
        </Stack>
        <Stack direction="row" className="gap-10 w-full">
          <Map className="flex-1 max-lg:hidden" />
          <ContactForm className="flex-1" />
        </Stack>
      </div>
    </Stack>
  );
}

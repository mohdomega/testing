import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';

interface EngageWithUsProps {
  className?: string;
}

export default function EngageWithUs({ className }: EngageWithUsProps) {
  return (
    <Stack component="section" direction="row" className={cn('gap-10 px-20 py-17.5 *:flex-1', className)}>
      <Stack className="gap-12 p-6 rounded-3xl bg-background">
        <div className="size-42"></div>
        <Stack alignItems="center" className="gap-6">
          <Stack className="gap-2 text-center">
            <Typography variant="h5" className="font-medium">
              Get a Quote
            </Typography>
            <Typography variant="body2" className="text-primary-dark/60">
              Tell us your requirements and get a tailored quote in no time
            </Typography>
          </Stack>
          <Button component={Link} href="/contact-us/get-quote" endIcon={<ChevronRight className="size-4" />}>
            Chat with us
          </Button>
        </Stack>
      </Stack>
      <Stack className="gap-12 p-6 rounded-3xl bg-background">
        <div className="size-42"></div>
        <Stack alignItems="center" className="gap-6">
          <Stack className="gap-2 text-center">
            <Typography variant="h5" className="font-medium">
              Submit a Request
            </Typography>
            <Typography variant="body2" className="text-primary-dark/60">
              Need something specific? Share your needs, and we’ll handle the rest
            </Typography>
          </Stack>
          <Button
            component={Link}
            href="/contact-us/submit-request"
            endIcon={<ChevronRight className="size-4" />}
          >
            Chat with us
          </Button>
        </Stack>
      </Stack>
      <Stack className="gap-12 p-6 rounded-3xl bg-background">
        <div className="size-42"></div>
        <Stack alignItems="center" className="gap-6">
          <Stack className="gap-2 text-center">
            <Typography variant="h5" className="font-medium">
              Schedule a Meeting
            </Typography>
            <Typography variant="body2" className="text-primary-dark/60">
              Book a quick call with our team to discuss how we can help{' '}
            </Typography>
          </Stack>
          <Button
            component={Link}
            href="/contact-us/schedule-meeting"
            endIcon={<ChevronRight className="size-4" />}
          >
            Chat with us
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

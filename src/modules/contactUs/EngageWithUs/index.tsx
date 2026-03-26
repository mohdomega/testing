'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import GetQuote from '/public/images/ContactImages/get-a-quote-contact-img1.png';
import ScheduleMeeting from '/public/images/ContactImages/scheduled-a-meeting-contact-img3.png';
import SubmitRequest from '/public/images/ContactImages/Submit-a-request-contact-img2.png';

interface EngageWithUsProps {
  className?: string;
}

export default function EngageWithUs({ className }: EngageWithUsProps) {
  const pathname = usePathname();
  const isSubmitRequest = pathname?.includes('/submit-request');
  const isScheduleMeeting = pathname?.includes('/schedule-meeting');

  return (
    <Stack component="section" className={cn('bg-[#F2F0F7] gap-10 px-20 py-17.5 max-sm:px-6', className)}>
      <div className="max-w-[1440px] w-full mx-auto flex flex-wrap justify-center gap-10">
        {/* <Stack className="gap-[19px] p-0 rounded-[24px] bg-white flex-1 min-w-[300px] max-w-[450px]">
          <div className="w-full h-full relative overflow-hidden ">
            <Image src={GetQuote} alt="Get a Quote" className="w-full h-full object-cover" />
          </div>
          <Stack alignItems="center" className="p-[38px] pt-0 gap-6">
            <Stack className="gap-2 text-center">
              <Typography variant="h5" className="font-medium">
                Get a Quote
              </Typography>
              <Typography variant="body2" className="text-primary-dark/60">
                Tell us your requirements and get a tailored quote in no time
              </Typography>
            </Stack>
            <Button
              component={Link}
              href="/contact-us/get-quote"
              endIcon={<ChevronRight className="size-4" />}
            >
              Chat with us
            </Button>
          </Stack>
        </Stack> */}
        {!isSubmitRequest && (
          <Stack className="gap-[19px] p-0 rounded-[24px] bg-white flex-1 min-w-[300px] max-w-[450px]">
            <div className="w-full h-full relative overflow-hidden ">
              <Image src={SubmitRequest} alt="Get a Quote" className="w-full h-full object-cover" />
            </div>
            <Stack alignItems="center" className="p-[38px] pt-0 gap-6">
              <Stack className="gap-2 text-center">
                <Typography variant="h5" className="font-medium">
                  Submit a Request
                </Typography>
                <Typography variant="body2" className="text-primary-dark/60">
                  Need something specific? Share your needs, and we&apos;ll handle the rest
                </Typography>
              </Stack>
              <Button
                component={Link}
                href="/contact-us/submit-request"
                endIcon={<ChevronRight className="size-4" />}
              >
                Request
              </Button>
            </Stack>
          </Stack>
        )}
        {!isScheduleMeeting && (
          <Stack className="gap-[19px] p-0 rounded-[24px] bg-white flex-1 min-w-[300px] max-w-[450px]">
            <div className="w-full h-full relative overflow-hidden ">
              <Image src={ScheduleMeeting} alt="Get a Quote" className="w-full h-full object-cover" />
            </div>
            <Stack alignItems="center" className="p-[38px] pt-0 gap-6">
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
                Schedule
              </Button>
            </Stack>
          </Stack>
        )}
      </div>
    </Stack>
  );
}

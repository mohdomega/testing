import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import ContactForm from '@/modules/shared/ContactUs/ContactForm';

import Integration from '/public/icons/integration.svg';
import Mentor from '/public/icons/mentor.svg';
import Support from '/public/icons/support.svg';
// import GetInTouchImg1 from '/public/images/get-in-touch-img1.png';
import GetInTouchImg from '/public/images/GetInTouchContactUS.png';

interface GetInTouchProps {
  className?: string;
}

export default function GetInTouch({ className }: GetInTouchProps) {
  return (
    <Stack
      component="section"
      alignItems="center"
      className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5', className)}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center gap-15">
        <Stack className="gap-2 max-w-175 text-center">
          <Stack alignItems="center" className="gap-1">
            <TitleChip>Contact us</TitleChip>
            <Typography variant="h2" className="text-gradient">
              Get in Touch with Us
            </Typography>
          </Stack>
          <Typography variant="body2" className="text-secondary font-medium">
            Reach out to our team for support, partnerships, or any inquiries. We&apos;ll get back to you
            shortly with the help you need.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          className="gap-15 w-full max-[1050px]:flex-col max-[1050px]:items-center *:flex-1 max-[1050px]:*:flex-none"
        >
          <div className="rounded-3xl relative overflow-hidden max-w-[496px] max-h-[498px] w-full aspect-square flex items-center justify-center max-[1050px]:mx-auto max-[1050px]:hidden">
            {/* Use more reliable spacing for absolute positions */}
            <div className="absolute top-0 left-[30px] p-6 flex justify-center items-center rounded-full w-[90px] h-[90px] bg-[#F2F0F7] z-10">
              <Integration className="w-[27px] h-[27px] text-primary-dark max-lg:w-6 max-lg:h-6" />
            </div>
            <div className="absolute top-0 right-[17px] p-6 flex justify-center items-center rounded-full w-[120px] h-[120px] bg-[#F2F0F7] z-10">
              <Mentor className="w-[40px] h-[40px] text-primary-dark max-lg:w-6 max-lg:h-6" />
            </div>
            <div className="absolute right-0 bottom-5 p-6 flex justify-center items-center rounded-full w-[90px] h-[90px] bg-[#F2F0F7] z-10">
              <Support className="w-[27px] h-[27px] text-primary-dark max-lg:w-6 max-lg:h-6" />
            </div>
            {/* Image should sit behind icons, be centered and cover container */}
            <Image
              src={GetInTouchImg}
              alt="contact img 1"
              className="rounded-full absolute object-cover w-[400px] h-[400px] left-0 bottom-0"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="max-[1050px]:w-full flex flex-col items-center">
            <ContactForm className="bg-background w-full" />
            {/* <div className="mt-10 w-full flex justify-center items-center">
              <Button
                component={Link}
                href="/contact-us/schedule-meeting"
                className="w-fit max-sm:self-center max-sm:px-6"
              >
                Schedule a Meeting
              </Button>
            </div> */}
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import ContactForm from '@/modules/shared/ContactUs/ContactForm';
import Image from 'next/image';
import GetInTouchImg1 from '/public/images/get-in-touch-img1.png';
import Integration from '/public/icons/integration.svg';
import Mentor from '/public/icons/mentor.svg';
import Support from '/public/icons/support.svg';

interface GetInTouchProps {
  className?: string;
}

export default function GetInTouch({ className }: GetInTouchProps) {
  return (
    <Stack component="section" alignItems="center" className={cn('gap-15 px-20 py-17.5', className)}>
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
          className="gap-15 w-full max-[1050px]:flex-col max-[1050px]:items-center *:flex-1 max-[1050px]:*:flex-none"
        >
          <div className="rounded-3xl relative overflow-hidden max-w-[496px] w-full aspect-square flex items-center justify-center max-[1050px]:mx-auto">
            {/* Use more reliable spacing for absolute positions */}
            <div className="absolute top-4 left-8 p-6 flex justify-center items-center rounded-full w-[90px] h-[90px] bg-[#F2F0F7] z-10">
              <Integration className="w-8 h-8 text-primary-dark max-lg:w-6 max-lg:h-6" />
            </div>
            <div className="absolute top-4 right-8 p-6 flex justify-center items-center rounded-full w-[120px] h-[120px] bg-[#F2F0F7] z-10">
              <Mentor className="w-8 h-8 text-primary-dark max-lg:w-6 max-lg:h-6" />
            </div>
            <div className="absolute right-4 bottom-8 p-6 flex justify-center items-center rounded-full w-[90px] h-[90px] bg-[#F2F0F7] z-10">
              <Support className="w-8 h-8 text-primary-dark max-lg:w-6 max-lg:h-6" />
            </div>
            {/* Image should sit behind icons, be centered and cover container */}
            <Image
              src={GetInTouchImg1}
              alt="contact img 1"
              className="rounded-full absolute object-cover w-[400px] h-[400px] left-0 bottom-0"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="max-[1050px]:w-full">
            <ContactForm className="bg-background" />
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

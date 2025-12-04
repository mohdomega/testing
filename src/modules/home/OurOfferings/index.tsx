import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Card from './Card';

import Integration from '/public/icons/integration.svg';
import Mentor from '/public/icons/mentor.svg';
import Support from '/public/icons/support.svg';
import Team from '/public/icons/team.svg';
import Img1 from '/public/images/our-offering-img-1.png';
import Img2 from '/public/images/our-offering-img-2.png';
import Img3 from '/public/images/our-offering-img-3.png';
import Img4 from '/public/images/our-offering-img-4.png';

interface OurOfferingsProps {
  className?: string;
}

export default function OurOfferings({ className }: OurOfferingsProps) {
  return (
    <Stack
      component="section"
      alignItems="center"
      className={cn('bg-background  w-full', className)}
    >
      <div className="max-w-[1440px] w-full flex flex-col gap-[60px] px-20 py-17.5 mx-auto max-lg:p-15 max-sm:gap-10 max-sm:px-6 max-sm:py-10">
        <Stack alignItems="center" className="gap-[16px]">
          <TitleChip>Our Offerings</TitleChip>
          <Typography variant="h2" className="text-gradient text-center max-w-216">
            {/* Your salesforce simplicity secret weapon */}
            Your Partner in Making Salesforce Simple
          </Typography>
        </Stack>
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-10 max-lg:gap-5 max-sm:grid-cols-1 max-sm:gap-4">
          <Card
            icon={Mentor}
            img={Img1}
            title="Consultation services"
            subtitle="End-to-end strategy aligned with Salesforce best practices"
          />
          <Card
            icon={Integration}
            img={Img2}
            title="Implementation services"
            subtitle="Boost Salesforce ROI with seamless integration and clean data"
          />
          <Card
            icon={Support}
            img={Img3}
            title="Support & Maintenance"
            subtitle="Tailored support using latest tools to optimize Salesforce"
          />
          <Card
            icon={Team}
            img={Img4}
            title="Staff Augmentation"
            subtitle="Scalable Salesforce talent to fast-track your goals"
          />
        </div>
        <Stack alignItems="center">
          <Button component={Link} href="/offerings" color="gradient">
            View all
          </Button>
        </Stack>
      </div>
    </Stack>
  );
}

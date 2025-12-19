"use client";
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
    <Stack component="section" alignItems="center" className={cn('bg-background  w-full', className)}>
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
            title="Consultation Services"
            path="/services/crm"
            // subtitle="End-to-end strategy aligned with Salesforce best practices"
            subtitle="It starts with crafting the right plan. To devise a strong strategy, our salesforce consultants work closely with your team to understand your business, its process, growth dimensions, and the pain points. We study and assess the current situation of your business and design tailored strategies that align with your goals. We comprehend challenges, propose resolutions, and plan effective execution."
          />
          <Card
            icon={Integration}
            img={Img2}
            title="Implementation & Integration"
            path="/services/data-analytics-ai"
            // subtitle="Boost Salesforce ROI with seamless integration and clean data"
            subtitle="End-to-end integration and implementation of a salesforce project requires expertise in multiple cloud based services. Our team of experts seamlessly integrates your business data in order to digitalize day-to-day operations, making it easy and convenient to maintain sales records and consumer information. From marketing to commerce to customer care and everything in between, we got you covered!"
          />
          <Card
            icon={Support}
            img={Img3}
            title="Support & Maintenance"
            path="/services/cloud-strategy"
            // subtitle="Tailored support using latest tools to optimize Salesforce"
            subtitle="Support and Maintenance are crucial to Salesforce services. To keep systems up and running without any glitch or errors, it is important to schedule regular maintenance. We provide customized support that fits well into your CRM structure. Whether it is user training, issue resolution, optimizing on-going systems, or performance tuning, we will revert with the perfect solution!"
          />
          <Card
            icon={Team}
            img={Img4}
            title="Staff Augmentation"
            path="/services/staff-augmentation"
            // subtitle="Scalable Salesforce talent to fast-track your goals"
            subtitle="Need an expert on the team urgently? Scale your team efficiently with no long-term hiring commitments. Admins, developers, marketers, consultants- hire the best talent to accelerate your growth. Our staff-augmentation services facilitate quick hiring of certified, experienced candidates that are flexible and reliable. You can always rely on our pool of talent for your hiring requirements."
          />
        </div>
        <Stack alignItems="center">
          {/* <Button component={Link} href="/offerings" color="gradient"> */}
          <Button component={Link} href="/services" color="gradient">
            View all
          </Button>
        </Stack>
      </div>
    </Stack>
  );
}

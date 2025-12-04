import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Card from './Card';
import { offerings } from './data';

import Img1 from '/public/images/our-offering-img-1.png';
import Link from 'next/link';

interface OurOfferingsProps {
  className?: string;
}

export default function OurOfferings({ className }: OurOfferingsProps) {
  return (
    <Stack
      component="section"
      alignItems="center"
      className={cn(
        'gap-15 px-20 py-17.5 bg-background max-lg:p-15 max-sm:gap-10 max-sm:px-6 max-sm:py-10',
        className
      )}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center gap-15 max-sm:gap-10">
        <Stack alignItems="center" className="gap-4">
          <TitleChip>Our Offerings</TitleChip>
          <Typography variant="h2" className="text-gradient text-center max-w-216">
            {/* Your salesforce simplicity secret weapon */}
            Your Partner in Making Salesforce Simple
          </Typography>
        </Stack>
        <div className="w-full grid grid-cols-2 gap-10 max-sm:grid-cols-1 max-lg:gap-x-4 max-lg:gap-y-6">
          {offerings.map(({ icon, image, title, subtitle, path }) => (
            <Card key={title} icon={icon} img={Img1} title={title} subtitle={subtitle} path={path} />
          ))}
        </div>
        {/* <Button component={Link} href="/services" color="gradient">
          View all
        </Button> */}
      </div>
    </Stack>
  );
}

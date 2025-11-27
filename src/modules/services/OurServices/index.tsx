import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import Image from 'next/image';
import ServiceImg1 from '../../../../public/images/ServiceImages/service-image-1.png';

interface OurServicesProps {
  className?: string;
}

export default function OurServices({}: OurServicesProps) {
  return (
    <Stack component="section" direction="row" alignItems="center" className="gap-16 px-20 py-17.5">
      <Stack alignItems="flex-start" className="flex-1 gap-8">
        <Stack className="gap-4">
          <TitleChip>Our Services</TitleChip>
          <Typography variant="h2" className="text-gradient">
            We help you get the most from Salesforce
          </Typography>
          <Typography className="text-balance">
            From implementation to optimization, we make Salesforce easier, faster, and more aligned with your
            business goals
          </Typography>
        </Stack>
        <Stack direction="row" flexWrap="wrap" className="gap-4">
          <Typography
            variant="body2"
            className="px-6 py-3 text-primary-dark/60 font-medium border border-primary-dark/30 rounded-full whitespace-nowrap"
          >
            Consultation Service
          </Typography>
          <Typography
            variant="body2"
            className="px-6 py-3 text-primary-dark/60 font-medium border border-primary-dark/30 rounded-full whitespace-nowrap"
          >
            Implementation Service
          </Typography>
          <Typography
            variant="body2"
            className="px-6 py-3 text-primary-dark/60 font-medium border border-primary-dark/30 rounded-full whitespace-nowrap"
          >
            Support & Maintenance
          </Typography>
          <Typography
            variant="body2"
            className="px-6 py-3 text-primary-dark/60 font-medium border border-primary-dark/30 rounded-full whitespace-nowrap"
          >
            Staff Augmentation
          </Typography>
        </Stack>
      </Stack>
      <div className="flex-1 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden">
        <Image src={ServiceImg1} alt="home video img 1" className="w-full h-full object-cover" />
      </div>
    </Stack>
  );
}

import Image from 'next/image';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ProfileIcon1 from '/public/images/profile-icon-1.png';
import ProfileIcon2 from '/public/images/profile-icon-2.png';
import ProfileIcon3 from '/public/images/profile-icon-3.png';
import SalesforceRidgePartnerLogo from '/public/images/Home/Salesforce RIdge Partner Logo.jpeg';

interface RatingProps {
  className?: string;
}

export default function Rating({ className }: RatingProps) {
  return (
    <Stack direction="row" alignItems="center" className={cn('gap-6', className)}>
      <Stack direction="row">
        <div className="size-15 border-3 border-white bg-[#C7EBFC] rounded-full overflow-hidden">
          <Image src={ProfileIcon1} alt="animated profile icon" className="scale-125 -translate-y-1" />
        </div>
        <div className="size-15 -ml-4 border-3 border-white bg-[#D9D8D9] rounded-full overflow-hidden">
          <Image src={ProfileIcon2} alt="animated profile icon" className="scale-125 -translate-y-1" />
        </div>
        <div className="size-15 -ml-4 border-3 border-white bg-[#DAD1FB] rounded-full overflow-hidden">
          <Image src={ProfileIcon3} alt="animated profile icon" className="scale-125 -translate-y-1" />
        </div>
      </Stack>
      <Stack className="gap-1.5 ">
        <Stack
          direction="row"
          alignItems="center"
          divider={<div className="w-0.25 h-4 bg-white" />}
          className="gap-2 text-white font-medium"
        >
          <Typography variant="body2">4.9</Typography>
          <Typography variant="body2">50k+ users</Typography>
        </Stack>
        <Typography className="text-white/60">30+ Projects delivered</Typography>
      </Stack>

      <div className="rounded-md w-[65px] h-[65px] relative overflow-hidden">
        <Image src={SalesforceRidgePartnerLogo} alt="SalesforceRidgePartnerLogo" className="w-full h-full object-cover" />
      </div>
    </Stack>
  );
}

// import Stack from '@/components/Stack';
// import Typography from '@/components/Typography';
// import { cn } from '@/lib';

// import Cloud from '/public/icons/cloud.svg';
// import ERP from '/public/icons/erp.svg';
// import Game from '/public/icons/game.svg';
// import Integration from '/public/icons/integration.svg';
// import MagicPen from '/public/icons/magicpen.svg';
// import Mentor from '/public/icons/mentor.svg';
// import HealthCare from '/public/icons/healthcare.svg';
// import Finance from '/public/icons/financial.svg';
// import Energy from '/public/icons/energy.svg';
// import Media from '/public/icons/media.svg';
// import Retail from '/public/icons/retail.svg';
// import Mobile from '/public/icons/mobile.svg';
// import Support from '/public/icons/support.svg';
// import Link from 'next/link';

// interface OurServicesProps {
//   className?: string;
// }

// export default function OurIndustries({ className }: OurServicesProps) {
//   return (
//     <section className={cn('grid grid-cols-4 border border-black/15 max-sm:grid-cols-2', className)}>
//       <Stack
//         component={Link}
//         href="/services"
//         justifyContent="center"
//         alignItems="center"
//         className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
//       >
//         <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
//           <Mentor className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           CRM
//         </Typography>
//       </Stack>
//       <Stack
//         component={Link}
//         href="/services"
//         justifyContent="center"
//         alignItems="center"
//         className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
//       >
//         <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
//           <Integration className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Data Analytics & Al
//         </Typography>
//       </Stack>
//       <Stack
//         component={Link}
//         href="/services"
//         justifyContent="center"
//         alignItems="center"
//         className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
//       >
//         <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
//           <Support className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Staff Augmentation
//         </Typography>
//       </Stack>
//       <Stack
//         component={Link}
//         href="/services"
//         justifyContent="center"
//         alignItems="center"
//         className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
//       >
//         <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
//           <Cloud className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Cloud Strategy
//         </Typography>
//       </Stack>
//       <Stack
//         component={Link}
//         href="/services"
//         justifyContent="center"
//         alignItems="center"
//         className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
//       >
//         <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
//           <ERP className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           ERP
//         </Typography>
//       </Stack>
//       <Stack
//         component={Link}
//         href="/services"
//         justifyContent="center"
//         alignItems="center"
//         className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
//       >
//         <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
//           <Mobile className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           App Development
//         </Typography>
//       </Stack>
//       <Stack
//         component={Link}
//         href="/services"
//         justifyContent="center"
//         alignItems="center"
//         className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
//       >
//         <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
//           <Game className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Game Development
//         </Typography>
//       </Stack>
//       <Stack
//         component={Link}
//         href="/services"
//         justifyContent="center"
//         alignItems="center"
//         className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
//       >
//         <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
//           <MagicPen className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           UI/UX
//         </Typography>
//       </Stack>
//     </section>
//   );
// }

import Link from 'next/link';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Building from '/public/icons/building.svg';
import Cloud from '/public/icons/cloud.svg';
import Energy from '/public/icons/energy.svg';
import ERP from '/public/icons/erp.svg';
import Finance from '/public/icons/financial.svg';
import Game from '/public/icons/game.svg';
import HealthCare from '/public/icons/healthcare.svg';
import Integration from '/public/icons/integration.svg';
import Logistic from '/public/icons/logistics.svg';
import MagicPen from '/public/icons/magicpen.svg';
import Manufacturing from '/public/icons/manufacturing.svg';
import Media from '/public/icons/media.svg';
import Mentor from '/public/icons/mentor.svg';
import Mobile from '/public/icons/mobile.svg';
import Retail from '/public/icons/retail.svg';

interface OurServicesProps {
  className?: string;
}

export default function OurIndustries({ className }: OurServicesProps) {
  return (
    <section className={cn('w-full', className)}>
      {/* <div className="max-w-[1440px] w-full mx-auto"> */}
      <div className=" w-full mx-auto">
        <div className="grid grid-cols-4 border border-black/15 max-sm:grid-cols-2">
          <Stack
            component={Link}
            href="#healthcare"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <HealthCare className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Healthcare
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="#financialServices"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Finance className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Financial Services
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="#retail"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Retail className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Retail
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="#realEstate"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Building className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Real Estate
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="#manufacturing"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Manufacturing className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Manufacturing
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="#mediaAndPublication"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Media className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Media & Publication
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="#logistics"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Logistic className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Logistics
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="#energy"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Energy className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Energy
            </Typography>
          </Stack>
        </div>
      </div>
    </section>
  );
}

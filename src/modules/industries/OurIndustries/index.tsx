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
      <div className="w-full mx-auto">
        {/* Desktop Grid */}
        <div className="grid grid-cols-4 max-lg:grid-cols-2 border border-black/15 max-sm:hidden">
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
            href="#nonProfit"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Building className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              NGO
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
            href="#hospitality"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <Media className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Hospitality
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
            href="#cxTechnology"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-full border-2 border-black/15 max-lg:p-4">
              <HealthCare className="size-8 text-primary-dark max-lg:size-6" />
            </div>
            <Typography variant="title" className="font-medium">
              Customer Experience
            </Typography>
          </Stack>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="sm:hidden sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-4 p-4 min-w-max">
            <Link
              href="#healthcare"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-primary group hover:text-white transition-all min-w-[140px] aspect-square border border-gray-100 shadow-sm"
            >
              <HealthCare className="size-8 text-primary-dark group-hover:text-white transition-colors" />
              <span className="font-medium text-center">Healthcare</span>
            </Link>
            <Link
              href="#financialServices"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-primary group hover:text-white transition-all min-w-[140px] aspect-square border border-gray-100 shadow-sm"
            >
              <Finance className="size-8 text-primary-dark group-hover:text-white transition-colors" />
              <span className="font-medium text-center">Finance</span>
            </Link>
            <Link
              href="#retail"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-primary group hover:text-white transition-all min-w-[140px] aspect-square border border-gray-100 shadow-sm"
            >
              <Retail className="size-8 text-primary-dark group-hover:text-white transition-colors" />
              <span className="font-medium text-center">Retail</span>
            </Link>
            <Link
              href="#nonProfit"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-primary group hover:text-white transition-all min-w-[140px] aspect-square border border-gray-100 shadow-sm"
            >
              <Building className="size-8 text-primary-dark group-hover:text-white transition-colors" />
              <span className="font-medium text-center">NGO</span>
            </Link>
            <Link
              href="#manufacturing"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-primary group hover:text-white transition-all min-w-[140px] aspect-square border border-gray-100 shadow-sm"
            >
              <Manufacturing className="size-8 text-primary-dark group-hover:text-white transition-colors" />
              <span className="font-medium text-center">Manufacturing</span>
            </Link>
            <Link
              href="#hospitality"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-primary group hover:text-white transition-all min-w-[140px] aspect-square border border-gray-100 shadow-sm"
            >
              <Media className="size-8 text-primary-dark group-hover:text-white transition-colors" />
              <span className="font-medium text-center">Hospitality</span>
            </Link>
            <Link
              href="#logistics"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-primary group hover:text-white transition-all min-w-[140px] aspect-square border border-gray-100 shadow-sm"
            >
              <Logistic className="size-8 text-primary-dark group-hover:text-white transition-colors" />
              <span className="font-medium text-center">Logistics</span>
            </Link>
            <Link
              href="#cxTechnology"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-primary group hover:text-white transition-all min-w-[140px] aspect-square border border-gray-100 shadow-sm"
            >
              <HealthCare className="size-8 text-primary-dark group-hover:text-white transition-colors" />
              <span className="font-medium text-center">CX</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

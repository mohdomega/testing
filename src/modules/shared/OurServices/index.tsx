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
// import Building from '/public/icons/building.svg';
// import Logistic from '/public/icons/logistics.svg';
// import Manufacturing from '/public/icons/manufacturing.svg';
// import Link from 'next/link';

// interface OurServicesProps {
//   className?: string;
// }

// export default function OurServices({ className }: OurServicesProps) {
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
//           <HealthCare className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Healthcare
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
//           <Finance className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Financial Services
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
//           <Retail className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Retail
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
//           <Building className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Real Estate
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
//           <Manufacturing className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Manufacturing
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
//           <Media className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Media & Publication
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
//           <Logistic className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Logistics
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
//           <Energy className="size-8 text-primary-dark max-lg:size-6" />
//         </div>
//         <Typography variant="title" className="font-medium">
//           Energy
//         </Typography>
//       </Stack>
//     </section>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import SalesforceImplementationLogo from '/public/images/serviceLogos/Salesforce Implementation.png';
import DataAnalyticsLogo from '/public/images/serviceLogos/Data Analytics & AI.png';
import ManagedServicesLogo from '/public/images/serviceLogos/Salesforce Managed Services.png';
import DigitalTransformationLogo from '/public/images/serviceLogos/Digital Transformation Consultation.png';
import IntegrationServicesLogo from '/public/images/serviceLogos/Integration Services.png';
import CustomAppLogo from '/public/images/serviceLogos/Custom App Development.png';
import DataMigrationLogo from '/public/images/serviceLogos/Data Migration.png';
import SlackLogo from '/public/images/serviceLogos/Slack ImplementationMigration.png';

interface OurServicesProps {
  className?: string;
}

export default function OurServices({ className }: OurServicesProps) {
  return (
    <section className={cn('w-full', className)}>
      {/* <div className="max-w-[1440px] w-full mx-auto"> */}
      <div className="w-full mx-auto">
        <div className="grid grid-cols-4 border border-black/15 max-sm:grid-cols-2">
          <Stack
            component={Link}
            href="/services/salesforce-implementation"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-2xl border-2 border-black/15 max-lg:p-4">
              <Image src={SalesforceImplementationLogo} alt="Salesforce Implementation" className="size-20 max-lg:size-16 object-cover" />
            </div>
            <Typography variant="title" className="font-medium text-center">
              Salesforce Implementation
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="/services/data-analytics-and-ai"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-2xl border-2 border-black/15 max-lg:p-4">
              <Image src={DataAnalyticsLogo} alt="Data Analytics & AI" className="size-20 max-lg:size-16 object-cover" />
            </div>
            <Typography variant="title" className="font-medium text-center">
              Data Analytics & AI
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="/services/salesforce-managed-services"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-2xl border-2 border-black/15 max-lg:p-4">
              <Image src={ManagedServicesLogo} alt="Salesforce Managed Services" className="size-20 max-lg:size-16 object-cover" />
            </div>
            <Typography variant="title" className="font-medium text-center">
              Salesforce Managed Services
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="/services/digital-transformation-consultation"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
            style={{ padding: '48px 10px' }}
          >
            <div className="p-6 rounded-2xl border-2 border-black/15 max-lg:p-4">
              <Image src={DigitalTransformationLogo} alt="Digital Transformation" className="size-20 max-lg:size-16 object-cover" />
            </div>
            <Typography variant="title" className="font-medium text-center">
              Digital Transformation Consultation
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="/services/integration-services"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-2xl border-2 border-black/15 max-lg:p-4">
              <Image src={IntegrationServicesLogo} alt="Integration Services" className="size-20 max-lg:size-16 object-cover" />
            </div>
            <Typography variant="title" className="font-medium text-center">
              Integration Services
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="/services/custom-app-development"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-2xl border-2 border-black/15 max-lg:p-4">
              <Image src={CustomAppLogo} alt="Custom App Development" className="size-20 max-lg:size-16 object-cover" />
            </div>
            <Typography variant="title" className="font-medium text-center">
              Custom App Development
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="/services/data-migration"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
          >
            <div className="p-6 rounded-2xl border-2 border-black/15 max-lg:p-4">
              <Image src={DataMigrationLogo} alt="Data Migration" className="size-20 max-lg:size-16 object-cover" />
            </div>
            <Typography variant="title" className="font-medium text-center">
              Data Migration
            </Typography>
          </Stack>
          <Stack
            component={Link}
            href="/services/slack-implementation-migration"
            justifyContent="center"
            alignItems="center"
            className="gap-4 border border-black/15 py-12 hover:bg-[#ebe6f8] transition-colors duration-300"
            style={{ padding: '48px 10px' }}
          >
            <div className="p-6 rounded-2xl border-2 border-black/15 max-lg:p-4">
              <Image src={SlackLogo} alt="Slack Implementation" className="size-20 max-lg:size-16 object-cover" />
            </div>
            <Typography variant="title" className="font-medium text-center">
              Slack Implementation/Migration
            </Typography>
          </Stack>
        </div>
      </div>
    </section>
  );
}

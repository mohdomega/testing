import Cloud from '/public/icons/cloud.svg';
import ERP from '/public/icons/erp.svg';
import Game from '/public/icons/game.svg';
import Integration from '/public/icons/integration.svg';
import MagicPen from '/public/icons/magicpen.svg';
import Mentor from '/public/icons/mentor.svg';
import Mobile from '/public/icons/mobile.svg';
import Support from '/public/icons/support.svg';

import OfferingImg1 from '/public/images/our-offering-img-1.png';
import OfferingImg2 from '/public/images/our-offering-img-2.png';
import OfferingImg3 from '/public/images/our-offering-img-3.png';
import OfferingImg4 from '/public/images/our-offering-img-4.png';
import ServiceImg5 from '/public/images/ServiceImages/5.png';
import ServiceImg6 from '/public/images/ServiceImages/6.png';
import ServiceImg7 from '/public/images/ServiceImages/7.png';
import ServiceImg8 from '/public/images/ServiceImages/8.png';

export const offerings = [
  {
    icon: Mentor,
    path: '/services/salesforce-implementation',
    image: OfferingImg1,
    title: 'Salesforce Implementation',
    subtitle: 'End-to-end implementation aligned with best practices for maximum ROI.',
  },
  {
    icon: Integration,
    path: '/services/data-analytics-and-ai',
    image: ServiceImg5,
    title: 'Data Analytics & AI',
    subtitle: 'Boost ROI with seamless integration and clean, actionable data insights.',
  },
  {
    icon: Support,
    path: '/services/salesforce-managed-services',
    image: OfferingImg3,
    title: 'Salesforce Managed Services',
    subtitle: 'Expert support and maintenance to ensure your Salesforce runs smoothly.',
  },
  {
    icon: Cloud,
    path: '/services/digital-transformation-consultation',
    image: OfferingImg2,
    title: 'Digital Transformation Consultation',
    subtitle: 'Navigate your digital journey with tailored strategies for growth.',
  },
  {
    icon: ERP,
    path: '/services/integration-services',
    image: OfferingImg4,
    title: 'Integration Services',
    subtitle: 'Streamline operations with seamless system and data integration.',
  },
  {
    icon: Mobile,
    path: '/services/custom-app-development',
    image: ServiceImg6,
    title: 'Custom App Development',
    subtitle: 'Scalable, custom-built applications designed for your specific needs.',
  },
  {
    icon: Game,
    path: '/services/data-migration',
    image: ServiceImg7,
    title: 'Data Migration',
    subtitle: 'Secure, zero-loss data transfer to modernize your infrastructure.',
  },
  {
    icon: MagicPen,
    path: '/services/slack-implementation-migration',
    image: ServiceImg8,
    title: 'Slack Implementation/Migration',
    subtitle: 'Enhance collaboration with expert Slack setup and migration.',
  },
];

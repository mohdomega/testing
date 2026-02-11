import ServiceImg2 from '../../../../public/images/ServiceImages/CX Transformation.png';
import ServiceImg3 from '../../../../public/images/ServiceImages/Manufacturing.png';
import ServiceImg4 from '../../../../public/images/ServiceImages/Healthcare.png';
import ServiceImg5 from '../../../../public/images/ServiceImages/Rebate.png';
import ServiceImg6 from '../../../../public/images/ServiceImages/Non Profit.png';
import ServiceImg7 from '../../../../public/images/ServiceImages/Financial.png';
import ServiceImg8 from '../../../../public/images/ServiceImages/Hospitality.png';
import ServiceImg9 from '../../../../public/images/ServiceImages/Mulesoft.png';

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: any;
  meta: {
    title: string;
    description: string;
  };
  testimonial: string;
  fullContent: {
    industry?: string;
    businessContext: string;
    challenges: string[];
    solution: {
      approach: string;
      components: string[];
    };
    results: string[];
    whyIdrms?: string[];
    whyItWorked?: string[];
    cta: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'customer-service-cx-transformation',
    title: 'Customer Service & CX Transformation',
    image: ServiceImg2,
    description:
      'Improve CSAT, reduce handling time, and increase conversions with AI-driven Salesforce Service Cloud solutions by IDRMS.',
    meta: {
      title: 'Salesforce AI-Powered Customer Service Transformation | IDRMS',
      description:
        'Improve CSAT, reduce handling time, and increase conversions with AI-driven Salesforce Service Cloud solutions by IDRMS.',
    },
    testimonial:
      '“IDRMS helped us transform our customer service operations with Salesforce AI, resulting in faster resolutions, higher customer satisfaction, and improved lead conversions.”',
    fullContent: {
      industry: 'CX Technology & Consulting',
      businessContext:
        'A growing CX services organization handling thousands of customer interactions daily needed a scalable platform to unify customer data, reduce response times, and unlock predictive insights across sales and service teams.',
      challenges: [
        'Fragmented customer interactions across channels',
        'High average call handling time impacting CSAT',
        'Missed leads due to delayed follow-ups',
        'No predictive insight into customer intent or sentiment',
        'Manual processes limiting upsell and cross-sell opportunities',
      ],
      solution: {
        approach:
          'IDRMS designed and delivered an AI-powered Salesforce Service Cloud architecture focused on speed, intelligence, and personalization.',
        components: [
          'Service Cloud for omnichannel case management and SLA tracking',
          'Agentforce to automate website lead capture and route leads intelligently',
          'Einstein AI to predict lead and opportunity conversion likelihood, analyze customer sentiment in real time, and recommend next-best actions for agents',
          'Marketing Cloud to trigger automated, behavior-based engagement',
          'Einstein Activity Capture for a 360° customer interaction timeline',
        ],
      },
      results: [
        '30% reduction in average handling time',
        '40% increase in qualified lead conversions',
        '25% improvement in CSAT scores',
        '20% increase in upselling success',
      ],
      whyIdrms: [
        'Deep expertise in Salesforce AI & Service Automation',
        'Customer-centric solution design',
        'Proven delivery model with rapid time-to-value',
      ],
      cta: 'Schedule a Salesforce Consultation with IDRMS',
    },
  },
  {
    id: 'manufacturing-sales-forecasting-transformation',
    title: 'Manufacturing Sales & Forecasting Transformation',
    image: ServiceImg3,
    description:
      'Drive faster sales cycles, accurate forecasting, and connected manufacturing operations with Salesforce Manufacturing Cloud.',
    meta: {
      title: 'Salesforce Manufacturing Cloud & CPQ Solutions | IDRMS',
      description:
        'Drive faster sales cycles, accurate forecasting, and connected manufacturing operations with Salesforce Manufacturing Cloud.',
    },
    testimonial:
      '“IDRMS delivered a connected Salesforce platform that transformed our sales forecasting and production planning with measurable revenue impact.”',
    fullContent: {
      industry: 'Manufacturing & Industrial Equipment',
      businessContext:
        'A global manufacturer with complex product configurations and distributor-led sales needed better alignment between sales forecasting, production planning, and customer service.',
      challenges: [
        'Manual and slow sales processes',
        'Disconnected service and support systems',
        'Complex CPQ requirements',
        'No real-time visibility into demand and revenue forecasts',
        'Inefficient production planning due to inaccurate data',
      ],
      solution: {
        approach:
          'IDRMS architected a connected Salesforce Manufacturing Cloud ecosystem that unified sales, service, and operations.',
        components: [
          'Sales Cloud + CPQ for automated, error-free quoting',
          'Manufacturing Cloud to track sales agreements, forecast demand accurately, and align production and revenue planning',
          'Service Cloud for faster issue resolution and self-service',
          'Marketing Cloud for targeted distributor and partner engagement',
          'Einstein Analytics to deliver predictive insights into demand trends and pipeline risks',
        ],
      },
      results: [
        '40% reduction in sales cycle duration',
        '30% increase in overall revenue',
        '50% improvement in service response times',
        '25% increase in customer engagement',
        '20% improvement in demand and production planning accuracy',
      ],
      whyIdrms: [
        'Strong manufacturing domain expertise',
        'Advanced Salesforce CPQ & Manufacturing Cloud knowledge',
        'Proven track record in delivering scalable, AI-driven solutions',
      ],
      cta: 'Book a Strategy Session with IDRMS',
    },
  },
  {
    id: 'healthcare-patient-engagement-service-modernization',
    title: 'HEALTHCARE – PATIENT ENGAGEMENT & SERVICE MODERNIZATION',
    image: ServiceImg4,
    description:
      'Enable connected patient experiences and faster care delivery with Salesforce Healthcare and Service Cloud solutions.',
    meta: {
      title: 'Salesforce Healthcare CRM & Patient Engagement Solutions | IDRMS',
      description:
        'Enable connected patient experiences and faster care delivery with Salesforce Healthcare and Service Cloud solutions.',
    },
    testimonial:
      '“With IDRMS and Salesforce, we significantly improved patient engagement, reduced no-shows, and accelerated service response across our healthcare network.”',
    fullContent: {
      businessContext:
        'A rapidly growing multi-specialty healthcare network was managing patient interactions across departments, locations, and channels. While clinical systems existed, patient engagement, service requests, and follow-ups were fragmented, resulting in missed appointments, delayed responses, and inconsistent patient experiences. Leadership needed a connected digital platform to improve care coordination, operational efficiency, and patient satisfaction—without increasing administrative burden on staff.',
      challenges: [
        'Patient data scattered across sales, service, and marketing systems',
        'Manual intake and follow-up processes causing appointment no-shows',
        'Slow service response times impacting patient experience',
        'No predictive insight into patient engagement or service demand',
        'Limited visibility into end-to-end patient journeys',
      ],
      solution: {
        approach:
          'IDRMS designed a patient-centric Salesforce architecture that unified engagement, service, and analytics into a single operating model.',
        components: [
          'Sales Cloud to centralize patient and referral profiles, enabling a single source of truth',
          'Service Cloud to manage patient inquiries, care requests, and follow-ups with SLA-driven workflows',
          'Marketing Cloud to automate appointment reminders, care updates, and personalized health campaigns',
          'Einstein AI to analyze engagement patterns, predict no-show risks, and prioritize outreach',
        ],
      },
      results: [
        '25% reduction in appointment no-shows',
        '30% faster service response times',
        '40% improvement in case resolution efficiency',
        '35% increase in overall patient engagement',
      ],
      whyItWorked: [
        'Unified patient data across engagement and service',
        'AI-driven prioritization instead of manual follow-ups',
        'Scalable architecture aligned with healthcare growth',
      ],
      cta: 'Schedule a Healthcare CRM Strategy Session with IDRMS',
    },
  },
  {
    id: 'rebate-management-channel-partner-automation',
    title: 'REBATE MANAGEMENT – CHANNEL & PARTNER AUTOMATION',
    image: ServiceImg5,
    description:
      'Automate rebate programs, improve accuracy, and accelerate partner payments using Salesforce-powered rebate management solutions.',
    meta: {
      title: 'Salesforce Rebate Management Automation for Global Partners | IDRMS',
      description:
        'Automate rebate programs, improve accuracy, and accelerate partner payments using Salesforce-powered rebate management solutions.',
    },
    testimonial:
      '“IDRMS automated our rebate programs end-to-end, reducing errors and significantly improving partner satisfaction.”',
    fullContent: {
      businessContext:
        'A global distributor-driven organization was running multiple rebate programs across regions and partners. Rebates were critical to channel success—but manual tracking, complex calculations, and delayed approvals were eroding partner trust and operational efficiency. Leadership needed a transparent, scalable rebate management system that could handle complexity without increasing operational overhead.',
      challenges: [
        'Manual rebate calculations prone to errors',
        'Limited real-time visibility for partners',
        'Delayed approvals and payout cycles',
        'High administrative effort to manage programs',
        'Poor reporting on rebate effectiveness',
      ],
      solution: {
        approach:
          'IDRMS implemented a Salesforce-based rebate automation framework designed for scale and accuracy.',
        components: [
          'Automated rebate program configuration with rule-based logic',
          'Real-time tracking dashboards for internal teams and partners',
          'Partner self-service portals for rebate status and earnings visibility',
          'Streamlined approval workflows to accelerate payout cycles',
        ],
      },
      results: [
        '30% reduction in rebate calculation errors',
        '25% faster rebate payments',
        'Improved partner trust and satisfaction',
        '20% increase in overall rebate program effectiveness',
      ],
      whyItWorked: [
        'Automation replaced manual dependency',
        'Real-time visibility improved partner confidence',
        'Scalable rules engine handled program complexity',
      ],
      cta: 'Talk to IDRMS Channel Automation Experts',
    },
  },
  {
    id: 'non-profit-ngo-donor-program-management',
    title: 'NON-PROFIT (NGO) – DONOR & PROGRAM MANAGEMENT',
    image: ServiceImg6,
    description:
      'Increase donor retention, improve transparency, and scale impact using Salesforce Nonprofit Cloud solutions.',
    meta: {
      title: 'Salesforce Nonprofit Cloud for Donor & Program Management | IDRMS',
      description:
        'Increase donor retention, improve transparency, and scale impact using Salesforce Nonprofit Cloud solutions.',
    },
    testimonial:
      '“IDRMS enabled us to build stronger donor relationships and deliver transparent impact reporting using Salesforce.”',
    fullContent: {
      businessContext:
        'A large non-profit organization managing multiple programs and campaigns struggled to maintain long-term donor relationships. While fundraising efforts were strong, donor data, volunteer information, and impact reporting were siloed, limiting personalization and transparency. The organization needed a platform that could connect donors, programs, and outcomes—and clearly demonstrate impact to stakeholders.',
      challenges: [
        'Disconnected donor and campaign data',
        'Generic outreach that failed to build long-term engagement',
        'Limited visibility into program impact',
        'Manual reporting for stakeholders and funders',
      ],
      solution: {
        approach:
          'IDRMS implemented a Salesforce Nonprofit Cloud ecosystem focused on engagement, transparency, and scalability.',
        components: [
          'Centralized donor, volunteer, and beneficiary data',
          'Marketing Cloud–powered personalized donor journeys',
          'Program Management Module (PMM) to track services and outcomes',
          'Einstein Analytics dashboards for real-time fundraising and impact reporting',
        ],
      },
      results: [
        '60% increase in donor retention',
        '35% growth in recurring donations',
        '50% improvement in volunteer engagement',
        'Transparent, real-time reporting for stakeholders',
      ],
      whyItWorked: [
        'Unified view of donors and programs',
        'Personalized engagement instead of one-size-fits-all outreach',
        'Data-backed storytelling for impact reporting',
      ],
      cta: 'Speak to IDRMS Nonprofit Cloud Specialists',
    },
  },
  {
    id: 'financial-services-crm-compliance-enablement',
    title: 'FINANCIAL SERVICES – CRM & COMPLIANCE ENABLEMENT',
    image: ServiceImg7,
    description:
      'Deliver personalized financial experiences while ensuring compliance with Salesforce Financial Services Cloud.',
    meta: {
      title: 'Salesforce Financial Services Cloud Implementation | IDRMS',
      description:
        'Deliver personalized financial experiences while ensuring compliance with Salesforce Financial Services Cloud.',
    },
    testimonial:
      '“IDRMS helped us unify customer data, accelerate responses, and unlock cross-sell opportunities with Salesforce.”',
    fullContent: {
      businessContext:
        'A financial services institution offering multiple products struggled with disconnected customer data, slow inquiry handling, and strict compliance requirements. Relationship managers lacked a complete view of customers, limiting personalization and cross-sell opportunities. Leadership required a secure, compliant CRM that could support data-driven advisory models at scale.',
      challenges: [
        'Customer data spread across product systems',
        'Manual sales and service processes',
        'Slow response times impacting client trust',
        'Complex compliance and reporting requirements',
      ],
      solution: {
        approach:
          'IDRMS deployed Salesforce Financial Services Cloud as the foundation for connected customer engagement.',
        components: [
          'Unified financial customer profiles across products',
          'Automated sales and service workflows',
          'AI-driven insights to identify cross-sell and upsell opportunities',
          'Built-in compliance tracking and reporting',
        ],
      },
      results: [
        '25% increase in cross-selling success',
        '40% faster inquiry response times',
        '30% improvement in marketing ROI',
        'Improved compliance visibility and audit readiness',
      ],
      whyItWorked: [
        'Single source of truth for customer data',
        'AI-guided advisory workflows',
        'Secure, compliance-ready architecture',
      ],
      cta: 'Book a Financial Services CRM Consultation with IDRMS',
    },
  },
  {
    id: 'hospitality-travel-guest-experience-loyalty',
    title: 'HOSPITALITY & TRAVEL – GUEST EXPERIENCE & LOYALTY',
    image: ServiceImg8,
    description:
      'Personalize guest journeys, improve loyalty engagement, and streamline operations with Salesforce for hospitality.',
    meta: {
      title: 'Salesforce Hospitality CRM & Loyalty Personalization | IDRMS',
      description:
        'Personalize guest journeys, improve loyalty engagement, and streamline operations with Salesforce for hospitality.',
    },
    testimonial:
      '“IDRMS transformed our guest experience with personalized Salesforce-driven loyalty and service operations.”',
    fullContent: {
      businessContext:
        'A global hospitality brand operating across multiple booking channels struggled to deliver personalized guest experiences. Guest data was fragmented, limiting loyalty engagement and service consistency. The brand needed a 360° guest view to personalize interactions before, during, and after each stay.',
      challenges: [
        'Disconnected guest profiles across systems',
        'Generic loyalty campaigns',
        'Limited operational visibility for service teams',
      ],
      solution: {
        approach: 'IDRMS implemented a connected Salesforce hospitality platform:',
        components: [
          'Unified guest profiles using Sales Cloud',
          'Centralized service management with Service Cloud',
          'Personalized loyalty journeys via Marketing Cloud',
          'Real-time guest insights through Einstein Analytics',
          'Operational optimization using Field Service Lightning',
        ],
      },
      results: [
        '30% increase in guest satisfaction scores',
        '40% growth in loyalty program engagement',
      ],
      whyItWorked: [
        'Single guest view across the journey',
        'Personalized engagement at scale',
        'Data-driven service operations',
      ],
      cta: 'Engage IDRMS Hospitality CRM Experts',
    },
  },
  {
    id: 'retail-omnichannel-personalization',
    title: 'RETAIL – OMNICHANNEL PERSONALIZATION',
    image: ServiceImg5,
    description:
      'Deliver personalized retail experiences and boost conversions using Salesforce Marketing Cloud and Customer 360.',
    meta: {
      title: 'Salesforce Retail CRM & Omnichannel Marketing Solutions | IDRMS',
      description:
        'Deliver personalized retail experiences and boost conversions using Salesforce Marketing Cloud and Customer 360.',
    },
    testimonial:
      '“IDRMS helped us create personalized, omnichannel retail journeys that drove higher engagement and repeat purchases.”',
    fullContent: {
      businessContext:
        'An omnichannel retail brand faced declining engagement due to fragmented customer data and generic marketing campaigns. Leadership wanted to deliver consistent, personalized experiences across digital and in-store touchpoints.',
      challenges: [
        'Siloed customer data',
        'Low engagement from generic campaigns',
        'Limited insight into customer behavior',
      ],
      solution: {
        approach: 'IDRMS built a Salesforce-powered retail personalization engine:',
        components: [
          'Customer 360 for unified shopper data',
          'Marketing Cloud for omnichannel journeys',
          'AI-driven segmentation using Einstein',
          'Real-time engagement optimization',
        ],
      },
      results: [
        '45% increase in email open rates',
        '20% boost in conversions',
        '25% increase in repeat purchases',
      ],
      whyItWorked: [
        'Unified data replaced guesswork',
        'AI-driven targeting improved relevance',
        'Consistent experiences across channels',
      ],
      cta: 'Schedule a Retail CRM Strategy Call with IDRMS',
    },
  },
  {
    id: 'mulesoft-salesforce-integration-automation',
    title: 'MULESOFT – SALESFORCE INTEGRATION AUTOMATION',
    image: ServiceImg9,
    description:
      'Automate data flows, reduce manual effort, and improve accuracy with MuleSoft-powered Salesforce integrations.',
    meta: {
      title: 'MuleSoft & Salesforce Integration Services | IDRMS',
      description:
        'Automate data flows, reduce manual effort, and improve accuracy with MuleSoft-powered Salesforce integrations.',
    },
    testimonial:
      '“IDRMS automated our Salesforce integrations using MuleSoft, significantly reducing manual work and improving data accuracy.”',
    fullContent: {
      businessContext:
        'An enterprise Salesforce user relied on external forms for data capture. Manual ingestion and complex record matching slowed operations and introduced data inconsistencies.',
      challenges: [
        'Manual data entry',
        'Complex matching logic',
        'Slow processing and retrieval',
      ],
      solution: {
        approach: 'IDRMS implemented a MuleSoft-based integration architecture:',
        components: [
          'Automated form-to-Salesforce ingestion',
          'Conditional, multi-stage matching logic',
          'Sequential fallback searches for accuracy',
        ],
      },
      results: [
        '40% reduction in manual processing effort',
        'Improved data accuracy',
        'Faster operational decision-making',
      ],
      whyItWorked: [
        'Automation eliminated manual bottlenecks',
        'Intelligent matching improved reliability',
        'Scalable integration architecture',
      ],
      cta: 'Consult IDRMS MuleSoft Specialists',
    },
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}

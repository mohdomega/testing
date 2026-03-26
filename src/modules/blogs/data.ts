import { StaticImageData } from 'next/image';

import AuthorImg from '../../../public/images/BlogImages/blog-author-img1.png';
import BlogImg1 from '../../../public/images/BlogImages/blogs-img1.png';
import BlogImg2 from '../../../public/images/BlogImages/blogs-img2.png';
import BlogImg3 from '../../../public/images/BlogImages/blogs-img3.jpg';
import BlogImg4 from '../../../public/images/BlogImages/blogs-img4.png';
import BlogImg5 from '../../../public/images/BlogImages/blogs-img5.jpg';
import HomeBlogImg1 from '../../../public/images/BlogImages/home-blogs-img-1.png';
import HomeBlogImg2 from '../../../public/images/BlogImages/home-blogs-img-2.png';
import HomeBlogImg3 from '../../../public/images/BlogImages/home-blogs-img-3.png';
import HomeBlogImg4 from '../../../public/images/BlogImages/home-blogs-img-4.png';

import Img1 from '../../../public/images/BlogImages/CSAT Score.png';
import Img2 from '../../../public/images/BlogImages/Data Migration.png';
import Img3 from '../../../public/images/BlogImages/Manufacturing Sales.png';
import Img4 from '../../../public/images/BlogImages/Marketing vs Pardot.png';
import Img5 from '../../../public/images/BlogImages/Sales Strategy.png';
import Img6 from '../../../public/images/BlogImages/Security COmpliance.png';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  heroImage: StaticImageData;
  contentImage: StaticImageData;
  author: {
    name: string;
    image: StaticImageData;
  };
  date: string;
  readTime: string;
  content: {
    sections: Array<{
      title: string;
      paragraphs: any[];
    }>;
  };
  tags: string[];
  cardImage: StaticImageData;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'migrate-data-legacy-systems-salesforce',
    title: 'How to Migrate Data from Legacy Systems to Salesforce',
    description:
      'Learn how to migrate data from legacy systems to Salesforce with clean data integration, governance, and best practices that improve CRM adoption and reporting accuracy.',
    heroImage: BlogImg1,
    contentImage: BlogImg3,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 30, 2026',
    readTime: '6 min Read',
    content: {
      sections: [
        {
          title: 'Why Salesforce Data Migration Is a Business-Critical Initiative',
          paragraphs: [
            'Migrating data from legacy systems to Salesforce is one of the most critical phases of any Salesforce implementation. Legacy CRM platforms, spreadsheets, and on-premise databases often contain inconsistent, duplicate, or outdated records. Without a structured Salesforce data migration strategy, organizations risk poor user adoption, unreliable reporting, and flawed decision-making.',
            'Industry studies indicate that companies with poor CRM data quality lose up to 20–30% of revenue opportunities due to inaccurate forecasting and customer insights. A clean Salesforce data migration directly impacts sales productivity, service efficiency, and leadership visibility.',
          ],
        },
        {
          title: 'Step 1: Assess and Prepare Legacy Data Sources',
          paragraphs: [
            'A successful Salesforce data migration begins with a detailed assessment of existing systems. This includes identifying all data sources, understanding ownership, and evaluating data relevance. Not all legacy data deserves to be migrated. Businesses that archive or eliminate redundant data before migration reduce post-go-live issues by nearly 40%.',
            'This phase typically involves',
            {
              list: [
                'Data audits and profiling',
                'Identifying duplicates and obsolete records',
                'Defining data ownership and governance rules',
              ]
            },
          ],
        },
        {
          title: 'Step 2: Data Cleansing, Mapping, and Validation',
          paragraphs: [
            'Clean data is the foundation of a successful Salesforce CRM implementation. During this phase, data is standardized, validated, and mapped to Salesforce objects such as Leads, Accounts, Contacts, and Opportunities. Salesforce validation rules and duplicate management tools help ensure long-term data quality.',
            'Organizations that invest in data cleansing before migration experience 25–35% higher Salesforce adoption rates.',
          ],
        },
        {
          title: 'Step 3: Migrate, Test, and Govern',
          paragraphs: [
            'Data migration should be executed in controlled phases, followed by rigorous testing. Post-migration governance—including dashboards, audits, and validation rules—ensures Salesforce remains a trusted system of record.',
            'End Goal: Deliver a clean, scalable Salesforce foundation that improves reporting accuracy, user adoption, and business decision-making.',
          ],
        },
      ],
    },
    tags: ['Data Migration', 'Salesforce', 'Legacy Systems'],
    // cardImage: HomeBlogImg1,
    cardImage: Img2,
  },
  {
    slug: 'top-5-salesforce-automation-strategies',
    title: 'Top 5 Salesforce Automation Strategies for Sales Teams',
    description:
      'Discover the top Salesforce automation strategies that help sales teams close deals faster, improve forecasting accuracy, and maximize ROI using Sales Cloud.',
    heroImage: BlogImg2,
    contentImage: BlogImg4,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 30, 2026',
    readTime: '5 min Read',
    content: {
      sections: [
        {
          title: 'Why Salesforce Automation Is Essential for Sales Growth',
          paragraphs: [
            'Sales teams often spend more time on administrative tasks than on selling. Salesforce automation enables organizations to eliminate manual effort, improve consistency, and accelerate deal velocity. Research shows that sales teams using CRM automation spend up to 35% more time selling.',
            'Salesforce Sales Cloud offers powerful automation tools that streamline the entire sales lifecycle—from lead capture to deal closure.',
          ],
        },
        {
          title: 'Top Salesforce Automation Strategies That Deliver ROI',
          paragraphs: [
            'Key automation strategies include:',
            {
              list: [
                'Automated Lead Assignment & Routing to reduce response time',
                'Opportunity Stage Automation for consistent pipeline management',
                'Guided Selling with Salesforce Paths',
                'Approval Automation for Discounts & Quotes',
                'AI-Powered Forecasting using Einstein Analytics',
              ]
            },
            'Organizations implementing these strategies see 20–40% faster sales cycles and improved win rates.',
          ],
        },
        {
          title: 'Measuring Automation Success in Salesforce',
          paragraphs: [
            'Automation should always align with business objectives. Over-automation can harm adoption, while targeted automation drives measurable ROI.',
            'End Goal: Enable sales leaders to implement Salesforce automation strategies that increase pipeline velocity, forecast accuracy, and revenue predictability.',
          ],
        },
      ],
    },
    tags: ['Salesforce', 'Automation', 'Sales Cloud'],
    // cardImage: HomeBlogImg2,
    cardImage: Img5,
  },
  {
    slug: 'salesforce-security-compliance-best-practices',
    title: 'Salesforce Security and Compliance: Best Practices',
    description:
      'As organizations expand their Salesforce footprint, security becomes critical. Learn best practices for governance, access control, and compliance to protect your data.',
    heroImage: BlogImg3,
    contentImage: BlogImg5,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 30, 2026',
    readTime: '7 min Read',
    content: {
      sections: [
        {
          title: 'Why Salesforce Security and Compliance Matter More Than Ever',
          paragraphs: [
            'Salesforce has evolved from a CRM into a mission-critical enterprise platform that stores sensitive customer, financial, and operational data. As organizations expand their Salesforce footprint across Sales Cloud, Service Cloud, Marketing Cloud, and integrations, the risk surface increases significantly.',
            'In regulated industries such as BFSI, healthcare, manufacturing, and SaaS, a single misconfigured permission or unsecured integration can lead to compliance violations, data breaches, and reputational damage. Industry reports show that organizations with weak CRM governance experience 2-3x higher security incidents compared to those with defined access and compliance frameworks.',
          ],
        },
        {
          title: 'Common Salesforce Security Risks Organizations Overlook',
          paragraphs: [
            'Many Salesforce security issues are not caused by platform limitations but by poor governance and configuration. Common risks include:',
            {
              list: [
                'Over-permissioned users and shared login access',
                'Lack of field-level security on sensitive data',
                'Unmonitored integrations and API access',
                'Inconsistent role hierarchy design',
                'No audit trail or event monitoring',
              ]
            },
            'These gaps often emerge as Salesforce environments scale rapidly without a long-term governance strategy.',
          ],
        },
        {
          title: 'Salesforce Security Best Practices Every Organization Should Implement',
          paragraphs: [
            'A strong Salesforce security posture starts with role-based access control and least-privilege principles. This ensures users only see and modify data relevant to their role. Field-level security, record-level sharing rules, and permission set governance prevent accidental data exposure.',
            'Additional best practices include:',
            {
              list: [
                'Enforcing Multi-Factor Authentication (MFA)',
                'Encrypting sensitive data at rest and in transit',
                'Using Salesforce Shield for audit trails and event monitoring',
                'Conducting regular Salesforce Health Checks',
              ]
            },
            'Organizations that adopt these practices reduce compliance risks by up to 45-50% within the first year.',
          ],
        },
        {
          title: 'Building a Scalable Salesforce Governance Framework',
          paragraphs: [
            'Security is not a one-time setup, it’s an ongoing discipline. A Salesforce governance framework defines ownership, change management processes, release controls, and compliance checkpoints. This is especially critical when multiple teams or partners access the same Salesforce org.',
            'Companies with formal Salesforce governance models experience:',
            {
              list: [
                'Faster audits',
                'Fewer production incidents',
                'Higher user trust and adoption',
              ]
            },
            'End Goal: Enable organizations to scale Salesforce securely while maintaining compliance, data integrity, and operational confidence.',
          ],
        },
      ],
    },
    tags: ['Security', 'Compliance', 'Salesforce', 'Governance'],
    // cardImage: HomeBlogImg3,
    cardImage: Img6,
  },
  {
    slug: 'marketing-cloud-vs-pardot',
    title: 'Marketing Cloud vs. Pardot: Choosing the Right Solution',
    description:
      'Compare Salesforce Marketing Cloud and Pardot to choose the right marketing automation platform for your business model and customer engagement strategy.',
    heroImage: BlogImg4,
    contentImage: BlogImg2,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 30, 2026',
    readTime: '6 min Read',
    content: {
      sections: [
        {
          title: 'Understanding Salesforce Marketing Automation Platforms',
          paragraphs: [
            'Salesforce offers two powerful marketing automation platforms: Marketing Cloud and Pardot (Marketing Cloud Account Engagement). While both belong to the Salesforce ecosystem, they are designed for fundamentally different marketing strategies.',
            'Choosing the wrong platform can limit personalization, inflate costs, and reduce campaign effectiveness.',
          ],
        },
        {
          title: 'Salesforce Marketing Cloud: Best for B2C and High-Volume Engagement',
          paragraphs: [
            'Marketing Cloud is built for large-scale, multi-channel customer engagement. It supports email, SMS, push notifications, advertising, and real-time journey orchestration. Enterprises using Marketing Cloud often manage millions of customer interactions across channels.',
            'Organizations using Marketing Cloud report up to 25–30% higher engagement rates when journeys are properly designed.',
          ],
        },
        {
          title: 'Pardot: Built for B2B Lead Nurturing',
          paragraphs: [
            'Pardot is designed for B2B organizations focused on lead scoring, grading, and sales alignment. It integrates deeply with Sales Cloud, enabling marketing and sales teams to work from a unified pipeline.',
            'B2B organizations using Pardot see 20–25% improvement in lead conversion rates due to better qualification and nurturing.',
          ],
        },
        {
          title: 'How to Choose the Right Platform',
          paragraphs: [
            'The right choice depends on your go-to-market model, data volume, and sales process complexity.',
            'End Goal: Help marketers select the Salesforce marketing automation platform that aligns with their business model and growth strategy.',
          ],
        },
      ],
    },
    tags: ['Marketing Cloud', 'Pardot', 'Salesforce', 'Automation'],
    // cardImage: HomeBlogImg4,
    cardImage: Img4,
  },
  // Case Study Blog Posts
  {
    slug: 'manufacturing-case-study',
    title: 'How a Global Manufacturer Achieved 30% Revenue Growth Using Salesforce Manufacturing Cloud',
    description:
      'A global manufacturer faced manual sales processes, complex CPQ requirements, and disconnected systems. Learn how Salesforce Manufacturing Cloud transformed their operations.',
    heroImage: BlogImg2,
    contentImage: BlogImg3,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '7 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'A global manufacturer with complex product configurations and distributor-led sales faced challenges with manual processes, disconnected systems, and limited visibility into demand and revenue forecasts.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Manual and slow sales processes',
            '• Disconnected service and support systems',
            '• Complex CPQ requirements',
            '• No real-time visibility into demand and revenue forecasts',
            '• Inefficient production planning due to inaccurate data',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS architected a connected Salesforce Manufacturing Cloud ecosystem that unified sales, service, and operations.',
            'Solution highlights: Sales Cloud + CPQ for automated, accurate quoting, Manufacturing Cloud for demand forecasting and account-based agreements, Service Cloud for unified support across channels, and Einstein Analytics for real-time visibility into sales performance.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 30% increase in revenue',
            '• 25% faster sales cycles',
            '• 20% improvement in forecast accuracy',
            '• 15% improvement in production planning',
          ],
        },
      ],
    },
    tags: ['Manufacturing', 'Case Study', 'Salesforce', 'CPQ'],
    // cardImage: BlogImg2,
    cardImage: Img3,
  },
  {
    slug: 'cx-technology-case-study',
    title: 'How a CX Services Firm Improved CSAT by 25% Using Salesforce Einstein AI',
    description:
      'A growing CX services organization handling thousands of customer interactions daily needed a scalable platform to unify customer data, reduce response times, and unlock predictive insights across sales and service teams.',
    heroImage: BlogImg1,
    contentImage: BlogImg3,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '8 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'A growing CX services organization handling thousands of customer interactions daily needed a scalable platform to unify customer data, reduce response times, and unlock predictive insights across sales and service teams.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Fragmented customer interactions across channels',
            '• High average call handling time impacting CSAT',
            '• Missed leads due to delayed follow-ups',
            '• No predictive insight into customer intent or sentiment',
            '• Manual processes limiting upsell and cross-sell opportunities',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS designed and delivered an AI-powered Salesforce Service Cloud architecture focused on speed, intelligence, and personalization.',
            'Key components included: Service Cloud for omnichannel case management and SLA tracking, Agentforce to automate website lead capture and route leads intelligently, Einstein AI to predict lead conversion likelihood, analyze customer sentiment in real time, and recommend next-best actions for agents.',
            'Marketing Cloud was integrated to trigger automated, behavior-based engagement, and Einstein Activity Capture provided a 360° customer interaction timeline.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 30% reduction in average handling time',
            '• 40% increase in qualified lead conversions',
            '• 25% improvement in CSAT scores',
            '• 20% increase in upselling success',
          ],
        },
      ],
    },
    tags: ['CX Technology', 'Case Study', 'Salesforce', 'Einstein AI'],
    // cardImage: BlogImg1,
    cardImage: Img1,
  },
  {
    slug: 'unlocking-the-true-power-of-sales',
    title: 'Unlocking the True Power of Sales: Why Your CRM is More Than Just a Database',
    description:
      'Many organizations view their CRM as a simple record-keeping tool. Discover how to transform Salesforce into a strategic asset that drives revenue and sales productivity.',
    heroImage: BlogImg4,
    contentImage: BlogImg2,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '6 min Read',
    content: {
      sections: [
        {
          title: 'The CRM Paradigm Shift',
          paragraphs: [
            'For years, sales teams have treated CRMs as a "necessary evil"—a place to dump data for management reports. However, the true power of Salesforce lies in its ability to act as a growth engine rather than a static database.',
          ],
        },
        {
          title: 'Common Sales Bottlenecks',
          paragraphs: [
            '• Manual data entry consuming significant sales rep time',
            '• Fragmented lead follow-up processes leading to missed opportunities',
            '• Lack of real-time pipeline visibility for leadership',
            '• Inaccurate revenue forecasting based on stale data',
          ],
        },
        {
          title: 'The IDRMS Strategic Framework',
          paragraphs: [
            'We focus on three pillars: Automation, Intelligence, and Adoption. By automating routine tasks and leveraging AI for lead prioritization, we turn Salesforce into a tool that empowers reps.',
            'Key features like Sales Cloud Path, Einstein Lead Scoring, and automated activity capture ensure that sales teams focus on closing deals instead of administrative overhead.',
          ],
        },
        {
          title: 'The Impact of a High-Performing CRM',
          paragraphs: [
            '• 25% increase in sales productivity',
            '• 15% improvement in win rates',
            '• 30% reduction in sales cycle length',
            '• 100% real-time visibility into the sales pipeline',
          ],
        },
      ],
    },
    tags: ['Sales Cloud', 'CRM Strategy', 'Salesforce', 'Productivity'],
    cardImage: Img2,
  },

  {
    slug: 'healthcare-case-study',
    title: 'How a Multi-Specialty Healthcare Network Improved Patient Engagement by 35% Using Salesforce',
    description:
      'A rapidly growing multi-specialty healthcare network managing patient interactions across departments, locations, and channels transformed their patient engagement using Salesforce.',
    heroImage: BlogImg3,
    contentImage: BlogImg5,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '8 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'A rapidly growing multi-specialty healthcare network was managing patient interactions across departments, locations, and channels. While clinical systems existed, patient engagement, communication, and service coordination were fragmented.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Patient data scattered across sales, service, and marketing systems',
            '• Manual intake and follow-up processes causing appointment no-shows',
            '• Slow service response times impacting patient experience',
            '• No predictive insight into patient engagement or service demand',
            '• Limited visibility into end-to-end patient journeys',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS designed a patient-centric Salesforce architecture that unified engagement, service, and analytics into a single operating model.',
            'The solution included: Health Cloud for 360° patient profiles, Service Cloud for streamlined issue resolution, Marketing Cloud for personalized outreach and reminders, and Einstein Analytics for predictive patient behavior insights.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 35% improvement in patient engagement',
            '• 40% reduction in appointment no-shows',
            '• 25% faster service response times',
            '• Unified patient journey visibility across departments',
          ],
        },
      ],
    },
    tags: ['Healthcare', 'Case Study', 'Salesforce', 'Health Cloud'],
    cardImage: BlogImg3,
  },
  {
    slug: 'rebate-management-case-study',
    title: 'How Salesforce Automation Reduced Rebate Errors by 30% for a Global Distributor Network',
    description:
      'A global distributor-driven organization running multiple rebate programs across regions and partners transformed their rebate management with Salesforce automation.',
    heroImage: BlogImg4,
    contentImage: BlogImg3,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '7 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'A global distributor-driven organization was running multiple rebate programs across regions and partners. Rebates were critical to channel success—but manual tracking, complex calculations, and delayed payments created friction.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Manual rebate calculations prone to errors',
            '• Limited real-time visibility for partners',
            '• Delayed approvals and payout cycles',
            '• High administrative effort to manage programs',
            '• Poor reporting on rebate effectiveness',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS implemented a Salesforce-based rebate automation framework designed for scale and accuracy.',
            'Key components: Custom rebate calculation engine, Partner portal for real-time visibility, Automated approval workflows, and Analytics dashboards for program performance.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 30% reduction in rebate calculation errors',
            '• 25% faster rebate payments',
            '• 20% increase in rebate program effectiveness',
            '• 100% improved partner trust and satisfaction',
          ],
        },
      ],
    },
    tags: ['Rebate Management', 'Case Study', 'Salesforce', 'Automation'],
    cardImage: BlogImg4,
  },
  {
    slug: 'nonprofit-case-study',
    title: 'How a Non-Profit Increased Donor Retention by 60% Using Salesforce Nonprofit Cloud',
    description:
      'A large non-profit organization managing multiple programs and campaigns transformed donor relationships using Salesforce Nonprofit Cloud.',
    heroImage: BlogImg5,
    contentImage: BlogImg3,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '7 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'A large non-profit organization managing multiple programs and campaigns struggled to maintain long-term donor relationships. While fundraising efforts were strong, donor data, impact visibility, and personalized engagement were fragmented.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Disconnected donor and campaign data',
            '• Generic outreach that failed to build long-term engagement',
            '• Limited visibility into program impact',
            '• Manual reporting for stakeholders and funders',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS implemented a Salesforce Nonprofit Cloud ecosystem focused on engagement, transparency, and scalability.',
            'The solution included: Nonprofit Cloud for donor and program management, Marketing Cloud for personalized donor journeys, Program Management for impact tracking, and Einstein Analytics for automated reporting.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 60% improvement in donor retention',
            '• 45% increase in repeat donations',
            '• 100% visibility into program impact',
            '• Automated stakeholder and funder reporting',
          ],
        },
      ],
    },
    tags: ['Non-Profit', 'Case Study', 'Salesforce', 'Nonprofit Cloud'],
    cardImage: BlogImg5,
  },
  {
    slug: 'financial-services-case-study',
    title: 'How Salesforce Enabled Smarter Cross-Selling and Faster Response in Financial Services',
    description:
      'A financial services institution offering multiple products transformed their customer engagement and compliance with Salesforce Financial Services Cloud.',
    heroImage: BlogImg1,
    contentImage: BlogImg3,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '7 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'A financial services institution offering multiple products struggled with disconnected customer data, slow inquiry handling, and strict compliance requirements.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Customer data spread across product systems',
            '• Manual sales and service processes',
            '• Slow response times impacting client trust',
            '• Complex compliance and reporting requirements',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS deployed Salesforce Financial Services Cloud as the foundation for connected customer engagement.',
            'The solution included: Financial Services Cloud for unified client profiles, Sales Cloud for opportunity management, Service Cloud for faster inquiry resolution, and Compliance tracking and automated reporting.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 35% increase in cross-selling success',
            '• 40% faster response times',
            '• 100% compliance with regulatory requirements',
            '• Unified client view across all products',
          ],
        },
      ],
    },
    tags: ['Financial Services', 'Case Study', 'Salesforce', 'FSC'],
    cardImage: BlogImg1,
  },
  {
    slug: 'hospitality-case-study',
    title: 'How Salesforce Increased Loyalty Engagement by 40% for a Global Hospitality Brand',
    description:
      'A global hospitality brand operating across multiple booking channels transformed guest experiences with Salesforce.',
    heroImage: BlogImg2,
    contentImage: BlogImg3,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '6 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'A global hospitality brand operating across multiple booking channels struggled to deliver personalized guest experiences. Guest data was fragmented, limiting loyalty engagement and service personalization.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Disconnected guest profiles across systems',
            '• Generic loyalty campaigns',
            '• Limited operational visibility for service teams',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS implemented a connected Salesforce hospitality platform.',
            'Key components: Customer 360 for unified guest profiles, Marketing Cloud for personalized loyalty campaigns, Service Cloud for guest service excellence, and Field Service for on-property operations.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 30% increase in guest satisfaction scores',
            '• 40% growth in loyalty program engagement',
            '• Personalized guest experiences at every touchpoint',
          ],
        },
      ],
    },
    tags: ['Hospitality', 'Case Study', 'Salesforce', 'Loyalty'],
    cardImage: BlogImg2,
  },
  {
    slug: 'retail-case-study',
    title: 'How Salesforce Personalization Increased Retail Conversions by 20%',
    description:
      'An omnichannel retail brand faced declining engagement due to fragmented customer data and generic marketing campaigns. Learn how they transformed with Salesforce.',
    heroImage: BlogImg3,
    contentImage: BlogImg5,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '6 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'An omnichannel retail brand faced declining engagement due to fragmented customer data and generic marketing campaigns. Leadership needed a solution for personalized customer journeys.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Siloed customer data',
            '• Low engagement from generic campaigns',
            '• Limited insight into customer behavior',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS built a Salesforce-powered retail personalization engine.',
            'Key components: Customer 360 for unified shopper data, Marketing Cloud for omnichannel journeys, AI-driven segmentation using Einstein, and Commerce Cloud integration for seamless shopping experiences.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 20% increase in retail conversions',
            '• 25% improvement in customer engagement',
            '• 30% increase in repeat purchases',
            '• Personalized experiences across all channels',
          ],
        },
      ],
    },
    tags: ['Retail', 'Case Study', 'Salesforce', 'Personalization'],
    cardImage: BlogImg3,
  },
  {
    slug: 'mulesoft-case-study',
    title: 'How MuleSoft Reduced Manual Processing by 40% Through Intelligent Integration',
    description:
      'An enterprise Salesforce user relied on external forms for data capture. Manual ingestion and complex record matching slowed operations and introduced data inconsistencies.',
    heroImage: BlogImg4,
    contentImage: BlogImg3,
    author: {
      name: 'IDRMS Team',
      image: AuthorImg,
    },
    date: 'January 28, 2026',
    readTime: '6 min Read',
    content: {
      sections: [
        {
          title: 'Business Context',
          paragraphs: [
            'An enterprise Salesforce user relied on external forms for data capture. Manual ingestion and complex record matching slowed operations and introduced data inconsistencies.',
          ],
        },
        {
          title: 'Core Challenges',
          paragraphs: [
            '• Manual data entry',
            '• Complex matching logic',
            '• Slow processing and retrieval',
          ],
        },
        {
          title: 'IDRMS Solution Approach',
          paragraphs: [
            'IDRMS implemented a MuleSoft-based integration architecture.',
            'Key components: Automated form-to-Salesforce ingestion, Intelligent record matching logic, Real-time data synchronization, and API-led connectivity for future integrations.',
          ],
        },
        {
          title: 'Measurable Results',
          paragraphs: [
            '• 40% reduction in manual processing effort',
            '• 100% improved data accuracy',
            '• 100% faster operational decision-making',
            '• Scalable integration architecture for future needs',
          ],
        },
      ],
    },
    tags: ['MuleSoft', 'Case Study', 'Integration', 'Automation'],
    cardImage: BlogImg4,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

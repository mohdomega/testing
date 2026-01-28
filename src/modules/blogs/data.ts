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
      paragraphs: string[];
    }>;
  };
  tags: string[];
  cardImage: StaticImageData;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'unlocking-the-true-power-of-salesforce',
    title: 'Unlocking the True Power of Salesforce',
    description:
      'Many businesses only scratch the surface of Salesforce. Learn how tailored solutions, smart integrations, and expert guidance can unlock its full potential for growth, efficiency, and better customer experiences.',
    heroImage: BlogImg1,
    contentImage: BlogImg3,
    author: {
      name: 'Alexander Nelson',
      image: AuthorImg,
    },
    date: 'April 17, 2024',
    readTime: '5 min Read',
    content: {
      sections: [
        {
          title: 'Beyond the Basics',
          paragraphs: [
            "Salesforce is more than just a customer relationship management platform; it's a powerful business engine. While many teams rely on its out-of-the-box features, these only scratch the surface. To truly harness Salesforce's potential, businesses must move beyond standard pipelines and dashboards and start viewing it as a customizable operating system for growth.",
            "Whether you're in sales, service, or marketing, Salesforce has tools that adapt to your workflow, not the other way around.",
          ],
        },
        {
          title: 'Customization That Fits You',
          paragraphs: [
            'One of the biggest strengths of Salesforce is its ability to mold itself around your business needs. With tools like custom objects, fields, and page layouts, your CRM becomes a true reflection of your processes. Instead of forcing your team to adapt to a generic setup, you can build personalized experiences that increase productivity.',
            'From lead management flows to approval structures, customization ensures that every click serves a purpose.',
          ],
        },
        {
          title: 'Automate the Repetitive',
          paragraphs: [
            "Manual data entry wastes time and increases the risk of error. That's where Salesforce automation comes in. Features like Process Builder, Flow, and Einstein Automate let you streamline tasks such as sending follow-up emails, updating records, or assigning leads.",
            'By automating repetitive work, your team can focus on high-value activities like nurturing relationships and closing deals—without losing track of what needs to be done.',
          ],
        },
      ],
    },
    tags: ['Business', 'Salesforce'],
    cardImage: HomeBlogImg1,
  },
  {
    slug: 'boosts-your-sales-with-automation',
    title: 'Boosts your Sales with Automation',
    description:
      "Generic solutions don't work for everyone. Discover how custom Salesforce automation can transform your sales process, reduce manual work, and accelerate revenue growth.",
    heroImage: BlogImg2,
    contentImage: BlogImg3,
    author: {
      name: 'Sarah Johnson',
      image: AuthorImg,
    },
    date: 'April 15, 2024',
    readTime: '6 min Read',
    content: {
      sections: [
        {
          title: 'The Power of Automation',
          paragraphs: [
            "Sales automation isn't just about saving time—it's about creating a more efficient, predictable sales process. When you automate repetitive tasks like lead scoring, follow-up emails, and data entry, your sales team can focus on what they do best: building relationships and closing deals.",
            'With Salesforce automation tools, you can create workflows that trigger actions based on specific criteria, ensuring nothing falls through the cracks.',
          ],
        },
        {
          title: 'Custom Workflows for Your Business',
          paragraphs: [
            "Every business has unique sales processes. Generic automation won't cut it. That's why custom Salesforce workflows are essential. By tailoring automation to your specific needs, you can ensure that every lead is properly nurtured, every opportunity is tracked, and every customer interaction is meaningful.",
            'From automated lead assignment to intelligent opportunity routing, custom workflows ensure your sales process runs smoothly.',
          ],
        },
        {
          title: 'Measuring Success',
          paragraphs: [
            'The best automation is measurable. With Salesforce dashboards and reports, you can track how automation impacts your sales metrics. Monitor conversion rates, response times, and revenue growth to see the real impact of your automated processes.',
            'Data-driven insights help you refine your automation strategy and continuously improve your sales performance.',
          ],
        },
      ],
    },
    tags: ['Sales', 'Automation'],
    cardImage: BlogImg2,
  },
  {
    slug: 'clean-crm-data-always-gives-results',
    title: 'Clean CRM Data Always gives Results',
    description:
      "Salesforce isn't just a CRM—it's a decision-making engine. Find out how real-time data insights and clean data management can drive better business decisions and improve customer relationships.",
    heroImage: BlogImg3,
    contentImage: BlogImg5,
    author: {
      name: 'Michael Chen',
      image: AuthorImg,
    },
    date: 'April 12, 2024',
    readTime: '7 min Read',
    content: {
      sections: [
        {
          title: 'The Foundation of Good Decisions',
          paragraphs: [
            'Clean, accurate data is the foundation of effective CRM usage. When your Salesforce data is well-maintained, you can trust the insights it provides. Dirty data leads to poor decisions, missed opportunities, and frustrated teams.',
            'Regular data hygiene practices ensure that your CRM remains a reliable source of truth for your entire organization.',
          ],
        },
        {
          title: 'Data Quality Best Practices',
          paragraphs: [
            'Maintaining clean CRM data requires a systematic approach. Implement validation rules, duplicate detection, and regular data audits. Train your team on data entry standards and create processes that prevent bad data from entering your system in the first place.',
            'Automated data cleansing tools can help identify and fix common data quality issues, saving time and ensuring consistency.',
          ],
        },
        {
          title: 'Real-Time Insights',
          paragraphs: [
            'With clean data, Salesforce becomes a powerful analytics platform. Real-time dashboards and reports give you instant visibility into your business performance. Make data-driven decisions quickly and confidently.',
            'Clean data enables AI and machine learning features to work effectively, providing predictive insights that help you stay ahead of the competition.',
          ],
        },
      ],
    },
    tags: ['Data Management', 'CRM'],
    cardImage: BlogImg3,
  },
  {
    slug: 'unlock-true-potential-with-integrations',
    title: 'Unlock True Potential With Integrations',
    description:
      "Salesforce isn't just a CRM—it's a decision-making engine. Find out how real-time integrations with your existing tools can unlock new capabilities and streamline your entire business workflow.",
    heroImage: BlogImg4,
    contentImage: BlogImg3,
    author: {
      name: 'Emily Rodriguez',
      image: AuthorImg,
    },
    date: 'April 10, 2024',
    readTime: '8 min Read',
    content: {
      sections: [
        {
          title: 'Breaking Down Silos',
          paragraphs: [
            "Modern businesses use multiple tools and platforms. When these systems don't communicate, you end up with data silos, duplicate work, and missed opportunities. Salesforce integrations break down these barriers, creating a unified view of your business.",
            'By connecting Salesforce with your marketing tools, accounting software, and other business applications, you create a seamless workflow that improves efficiency and accuracy.',
          ],
        },
        {
          title: 'Popular Integration Patterns',
          paragraphs: [
            'There are many ways to integrate Salesforce with other systems. API integrations allow real-time data synchronization. Webhook integrations trigger actions based on events. And pre-built connectors make it easy to connect with popular tools like Slack, Gmail, and Microsoft Office.',
            'The right integration pattern depends on your specific needs, but the goal is always the same: create a connected ecosystem that works for your business.',
          ],
        },
        {
          title: 'Maximizing Integration Value',
          paragraphs: [
            "Successful integrations go beyond simple data sync. They enable new workflows, automate processes, and provide insights that wouldn't be possible with disconnected systems. Think about how integrations can transform your business processes, not just connect your tools.",
            'Regular monitoring and optimization ensure your integrations continue to deliver value as your business evolves.',
          ],
        },
      ],
    },
    tags: ['Integrations', 'Salesforce'],
    cardImage: BlogImg4,
  },
  {
    slug: 'customization-that-fits-you',
    title: 'Customization That Fits You',
    description:
      "Salesforce isn't just a CRM—it's a decision-making engine. Find out how real-time customization can adapt Salesforce to your unique business processes and create a CRM that truly fits your needs.",
    heroImage: BlogImg5,
    contentImage: BlogImg3,
    author: {
      name: 'David Kim',
      image: AuthorImg,
    },
    date: 'April 8, 2024',
    readTime: '6 min Read',
    content: {
      sections: [
        {
          title: 'Tailored to Your Workflow',
          paragraphs: [
            'Every business is unique, and your CRM should reflect that. Salesforce customization allows you to create a system that matches your exact workflow, terminology, and business processes. No more forcing your team to adapt to a generic system.',
            'From custom fields and objects to personalized page layouts, customization ensures that Salesforce works the way your team works.',
          ],
        },
        {
          title: 'Custom Objects and Fields',
          paragraphs: [
            "Salesforce's flexibility starts with custom objects and fields. Create data structures that match your business model. Track information that's specific to your industry. Build relationships between records that reflect how your business actually operates.",
            "Custom fields allow you to capture and track data that's meaningful to your business, ensuring that your CRM contains all the information you need to make informed decisions.",
          ],
        },
        {
          title: 'User Experience Matters',
          paragraphs: [
            "Customization isn't just about data structure—it's also about user experience. Create page layouts that show the most important information first. Build custom buttons and actions that streamline common tasks. Design a Salesforce interface that your team will actually want to use.",
            "When your CRM is tailored to your team's needs, adoption increases, productivity improves, and you get better results from your Salesforce investment.",
          ],
        },
      ],
    },
    tags: ['Customization', 'Salesforce'],
    cardImage: BlogImg5,
  },
  // Case Study Blog Posts
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
    cardImage: BlogImg1,
  },
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
    cardImage: BlogImg2,
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

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
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

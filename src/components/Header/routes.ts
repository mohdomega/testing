export const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Industries',
    path: '/industries',
    children: [
      { name: 'Healthcare', path: '/industries#healthcare' },
      { name: 'Financial Services', path: '/industries#financialServices' },
      { name: 'Retail', path: '/industries#retail' },
      // { name: 'Real Estate', path: '/industries#realEstate' },
      { name: 'Manufacturing', path: '/industries#manufacturing' },
      { name: 'CX Technology', path: '/industries#cxTechnology' },
      { name: 'Logistics', path: '/industries#logistics' },
      { name: 'Non Profit', path: '/industries#nonProfit' },
      { name: 'Hospitality', path: '/industries#hospitality' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    // path: '/offerings',
    children: [
      { name: 'Salesforce Implementation', path: '/services/salesforce-implementation' },
      { name: 'Digital Transformation Consultation', path: '/services/digital-transformation-consultation' },
      { name: 'Salesforce Managed Services', path: '/services/salesforce-managed-services' },
      { name: 'Integration Services', path: '/services/integration-services' },
      { name: 'Data Analytics & AI', path: '/services/data-analytics-and-ai' },
      { name: 'Custom App Development', path: '/services/custom-app-development' },
      { name: 'Data Migration', path: '/services/data-migration' },
      { name: 'Slack Implementation/Migration', path: '/services/slack-implementation-migration' },
    ],
  },
  {
    name: 'Blogs',
    path: '/blogs',
  },
  {
    name: 'About',
    path: '/about',
    children: [
      { name: 'About IDRMS', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Work Culture', path: '/careers#work-culture' },
    ],
  },
  // {
  //   name: 'Offerings',
  //   path: '/offerings',
  // },
];

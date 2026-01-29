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
      { name: 'Real Estate', path: '/industries#realEstate' },
      { name: 'Manufacturing', path: '/industries#manufacturing' },
      { name: 'Media & Publication', path: '/industries#mediaAndPublication' },
      { name: 'Logistics', path: '/industries#logistics' },
      { name: 'Energy', path: '/industries#energy' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    // path: '/offerings',
    children: [
      { name: 'Salesforce Implementation', path: '/services/crm' },
      { name: 'Digital Transformation Consultation', path: '/services/cloud-strategy' },
      { name: 'Salesforce Managed Services', path: '/services/staff-augmentation' },
      { name: 'Integration Services', path: '/services/erp' },
      { name: 'Data Analytics AI', path: '/services/data-analytics-ai' },
      { name: 'Custom App Development', path: '/services/app-development' },
      { name: 'Data Migration', path: '/services/game-development' },
      { name: 'Slack Implementation/Migration', path: '/services/ui-ux' },
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
    ],
  },
  // {
  //   name: 'Offerings',
  //   path: '/offerings',
  // },
];

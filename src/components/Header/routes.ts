export const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
    children: [
      { name: 'Careers', path: '/careers' },
      { name: 'About IDRMS', path: '/about' },
    ],
  },
  {
    name: 'Offerings',
    path: '/offerings',
  },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'CRM', path: '/services/crm' },
      { name: 'Data Analytics & AI', path: '/services/data-analytics-ai' },
      { name: 'Staff Augmentation', path: '/services/staff-augmentation' },
      { name: 'Cloud Strategy', path: '/services/cloud-strategy' },
      { name: 'ERP', path: '/services/erp' },
      { name: 'App Development', path: '/services/app-development' },
      { name: 'Game Development', path: '/services/game-development' },
      { name: 'UI/UX', path: '/services/ui-ux' },
    ],
  },
  {
    name: 'Industries',
    path: '/industries',
  },
  {
    name: 'Blogs',
    path: '/blogs',
  },
];

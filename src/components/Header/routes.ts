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
      { name: 'Consulting', path: '/contact-us/schedule-meeting' },
      { name: 'Explore Services', path: '/offerings' },
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

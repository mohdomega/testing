'use client';

import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import OurBlogs from './OurBlogs';
import HeroBlogsComponent from '../home/Blogs/index';
import Hero from './Hero';

export default function Blogs() {
  return (
    <div>
      <Hero />
      <OurBlogs />
      <HeroBlogsComponent />
      <ContactUs />
      <BlazeNewTrails className="bg-white" />
    </div>
  );
}

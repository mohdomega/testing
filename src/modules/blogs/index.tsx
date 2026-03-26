import HeroBlogsComponent from '../home/Blogs/index';
import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import Hero from './Hero';
import OurBlogs from './OurBlogs';

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

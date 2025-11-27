import Blogs from '../home/Blogs';
import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import CaseStudies from './CaseStudies';
import Hero from './Hero';
import OurServices from './OurServices';

export default function Services() {
  return (
    <div>
      <Hero />
      <OurServices />
      <CaseStudies />
      <Blogs />
      <BlazeNewTrails className="max-lg:hidden" />
      <ContactUs />
    </div>
  );
}

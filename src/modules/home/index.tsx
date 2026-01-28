import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import OurTrustedPeople from '../shared/OurTrustedPeople';
import Blogs from './Blogs';
import CaseStudy from './CaseStudy';
import Empowering from './Empowering';
import Video from './Empowering/Video';
import Hero from './Hero';
import OurOfferings from './OurOfferings';
import OurProcess from './OurProcess';
import OurTeam from './OurTeam';
import Testimonials from './Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <OurTrustedPeople />
      <OurOfferings />
      <Testimonials />
      <Empowering />
      <Video />
      <CaseStudy />
      <BlazeNewTrails className="max-lg:hidden" />
      <OurProcess />
      {/* <OurTeam /> */}
      <Blogs />
      <ContactUs />
    </div>
  );
}

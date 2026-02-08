import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import OurKPIs from '../shared/OurKPIs';
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
      <Empowering />
      <OurKPIs />
      <OurOfferings />
      <OurTrustedPeople />
      <Testimonials />
      {/* spaccer */}
      <div className=" h-[50px] sm:h-[80px] md:h-[120px] lg:h-[150px]" />
      <Video />
      <CaseStudy />
      <OurProcess />
      <Blogs />
      <BlazeNewTrails className="max-lg:hidden" />
      {/* <OurTeam /> */}
      <ContactUs />
    </div>
  );
}

import OurIndustries from '../industries/OurIndustries';
import CaseStudies from '../services/CaseStudies';
import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import OurServices from '../shared/OurServices';
import Hero from './Hero';
import OurOfferings from './OurOfferings';
import OurOfferingInfinityCard from './ServicesCardInfinity';

export default function Offerings() {
  return (
    <div>
      <Hero />
      <OurServices />
      {/* <OurIndustries /> */}
      <OurOfferingInfinityCard/>
      <OurOfferings />
      <CaseStudies />
      <BlazeNewTrails />
      <ContactUs />
    </div>
  );
}

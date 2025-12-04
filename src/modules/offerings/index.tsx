import OurIndustries from '../industries/OurIndustries';
import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import OurServices from '../shared/OurServices';
import Hero from './Hero';
import OurOfferings from './OurOfferings';

export default function Offerings() {
  return (
    <div>
      <Hero />
      <OurServices />
      {/* <OurIndustries /> */}
      <OurOfferings />
      <BlazeNewTrails />
      <ContactUs />
    </div>
  );
}

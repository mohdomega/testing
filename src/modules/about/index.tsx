import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import OurTrustedPeople from '../shared/OurTrustedPeople';
import BoldAmbitions from './BoldAmbitions';
import Hero from './Hero';
import OurTeam from './OurTeam';
import Rating from './Rating';
import WhyChooseUs from './WhyChooseUs';

export default function About() {
  return (
    <div>
      <Hero />
      <OurTrustedPeople className="pt-80" />
      <Rating />
      <BoldAmbitions />
      <WhyChooseUs />
      <OurTeam />
      <ContactUs />
      <BlazeNewTrails className="bg-white" />
    </div>
  );
}

import WorkCulture from '../careers/WorkCulture';
import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import OurKPIs from '../shared/OurKPIs';
import OurTrustedPeople from '../shared/OurTrustedPeople';
import BoldAmbitions from './BoldAmbitions';
import OurMission from './BoldAmbitions/OurMission';
import Hero from './Hero';
import OurTeam from './OurTeam';
import Rating from './Rating';
import WhyChooseUs from './WhyChooseUs';

export default function About() {
  return (
    <div>
      <Hero />
      <OurTrustedPeople className="pt-80" />
       <OurKPIs />
      {/* <Rating /> */}
      <BoldAmbitions />
      <OurMission/>
      <WhyChooseUs />
       <WorkCulture />
      <OurTeam />
      <ContactUs />
      <BlazeNewTrails className="bg-white" />
    </div>
  );
}

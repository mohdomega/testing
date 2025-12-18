import Blogs from '../../home/Blogs';
import BlazeNewTrails from '../../shared/BlazeNewTrails';
import ContactUs from '../../shared/ContactUs';
import CaseStudies from '../CaseStudies';
import Hero from './Hero';
import OurServices from './OurServices';

interface ServicePageProps {
  title: string;
  heroDescription: string;
  serviceTitle: string;
  serviceDescription: string;
}

export default function ServicePage({
  title,
  heroDescription,
  serviceTitle,
  serviceDescription,
}: ServicePageProps) {
  return (
    <div>
      <Hero title={title} description={heroDescription} />
      <OurServices title={serviceTitle} description={serviceDescription} />
      <CaseStudies />
      {/* <Blogs /> */}
      <BlazeNewTrails />
      <ContactUs />
    </div>
  );
}

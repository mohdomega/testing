import OurServices from '../shared/OurServices';
import Energy from './Energy';
import FinancialServices from './FinancialService';
import Healthcare from './Healthcare';
import Hero from './Hero';
import Logistics from './Logistics';
import Manufacturing from './Manufacturing';
import MediaAndPublication from './MediaAndPublication';
import RealEstate from './RealEstate';
import Retail from './Retail';

export default function Industries() {
  return (
    <div>
      <Hero />
      <OurServices />
      <Healthcare />
      <FinancialServices />
      <Retail />
      <RealEstate />
      <Manufacturing />
      <MediaAndPublication />
      <Logistics />
      <Energy />
    </div>
  );
}

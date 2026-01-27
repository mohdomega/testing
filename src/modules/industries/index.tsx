import OurServices from '../shared/OurServices';
import CXTechnology from './CXTechnology';
import Energy from './Energy';
import FinancialServices from './FinancialService';
import Healthcare from './Healthcare';
import Hero from './Hero';
import Hospitality from './Hospitality';
import Logistics from './Logistics';
import Manufacturing from './Manufacturing';
import MediaAndPublication from './MediaAndPublication';
import MuleSoft from './MuleSoft';
import NonProfit from './NonProfit';
import OurIndustries from './OurIndustries';
import RealEstate from './RealEstate';
import RebateManagement from './RebateManagement';
import Retail from './Retail';

export default function Industries() {
  return (
    <div>
      <Hero />
      <OurIndustries />
      <Healthcare />
      <FinancialServices />
      <Retail />
      {/* <RealEstate /> */}
      <Manufacturing />
      {/* <MediaAndPublication /> */}
      {/* <Logistics /> */}
      {/* <Energy /> */}
      <CXTechnology />
      <RebateManagement />
      <NonProfit />
      <Hospitality />
      <MuleSoft />
    </div>
  );
}

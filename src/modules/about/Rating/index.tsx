import Stack from '@/components/Stack';

import Card from './Card';

import AboutImg2 from '../../../../public/images/AboutImages/about-image-2.png';
import AboutImg3 from '../../../../public/images/AboutImages/about-image-3.png';
import AboutImg4 from '../../../../public/images/AboutImages/about-image-4.png';

export default function Rating() {
  return (
    <Stack component="section" className="w-full py-17.5 max-sm:py-10">
      <div className="max-w-[1440px] w-full mx-auto px-20 py-17.5 max-lg:px-15 max-sm:px-6 max-sm:py-10">
        <Stack direction="row" className="gap-10 max-sm:flex-col max-sm:gap-4">
          <Card img={AboutImg2} />
          <Card img={AboutImg4} />
          <Card img={AboutImg3} />
        </Stack>
      </div>
    </Stack>
  );
}

'use client';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { getCaseStudyById } from '../data';
import CaseStudyContent from './CaseStudyContent';

interface CaseStudyDetailsProps {
  id: string;
}

export default function CaseStudyDetails({ id }: CaseStudyDetailsProps) {
  const study = getCaseStudyById(id);

  if (!study) {
    return (
      <Stack className="w-full bg-white min-h-[60vh] justify-center items-center">
        <div className="max-w-[1440px] w-full mx-auto px-6 text-center">
          <Typography variant="h2" className="mb-4 text-primary-dark">
            Case Study Not Found
          </Typography>
          <Typography className="text-secondary">
            The case study you are looking for does not exist.
          </Typography>
        </div>
      </Stack>
    );
  }

  return (
    <Stack className="w-full bg-white">
      <div className="mt-[140px] sm:mt-[180px]">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] w-full mx-auto">
          <CaseStudyContent study={study} />
        </div>
      </div>
    </Stack>
  );
}

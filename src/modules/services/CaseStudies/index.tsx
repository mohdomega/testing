import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import { caseStudies } from './data';
import Study from './Study';

interface CaseStudiesProps {
  className?: string;
}

export default function CaseStudies({ className }: CaseStudiesProps) {
  return (
    <Stack component="section" alignItems="center" className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5', className)}>
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center gap-15">
        <Typography variant="h2">Case Studies</Typography>
        <div className="grid grid-cols-2 gap-15 w-full">
          {caseStudies.map(({ image, title, description }) => (
            <Study key={title} title={title} description={description} image={image} />
          ))}
        </div>
      </div>
    </Stack>
  );
}

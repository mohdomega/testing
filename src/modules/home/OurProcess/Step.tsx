import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Mentor from '/public/icons/mentor.svg';

interface StepProps {
  isReverse?: boolean;
  step: string;
  title: string;
  description: string;
  className?: string;
}

export default function Step({ isReverse, step, title, description, className }: StepProps) {
  return (
    <div
      className={cn(
        // 'border border-red-700  grid grid-cols-1 grid-rows-2 justify-center gap-6 text-center max-w-56 max-sm:grid-rows-1 odd:self-end',
        ' grid grid-cols-1 grid-rows-2 justify-center gap-6 text-center max-w-70 max-sm:grid-rows-1 odd:self-end',
        className
      )}
    >
      {isReverse ? (
        <>
          <Stack className="flex-1 gap-4 max-sm:gap-2">
            <Typography variant="body" className="text-3xl font-semibold text-gradient max-sm:text-2xl">
              {step}
            </Typography>
            <Stack className="gap-2">
              <Typography variant="title" className="whitespace-nowrap font-medium max-sm:text-md">
                {title}
              </Typography>
              <Typography variant="body2" className="text-secondary">
                {description}
              </Typography>
            </Stack>
          </Stack>
          <div className="place-self-center p-6 gradient-vertical rounded-full max-sm:hidden">
            <Mentor className="size-8 text-white" />
          </div>
        </>
      ) : (
        <>
          <div className="place-self-center p-6 gradient-vertical rounded-full max-sm:hidden">
            <Mentor className="size-8 text-white" />
          </div>
          <Stack className="flex-1 gap-4 max-sm:gap-2">
            <Typography variant="body" className="text-3xl font-semibold text-gradient max-sm:text-2xl">
              {step}
            </Typography>
            <Stack className="gap-2">
              <Typography variant="title" className="whitespace-nowrap font-medium max-sm:text-md">
                {title}
              </Typography>
              <Typography variant="body2" className="text-secondary">
                {description}
              </Typography>
            </Stack>
          </Stack>
        </>
      )}
    </div>
  );
}

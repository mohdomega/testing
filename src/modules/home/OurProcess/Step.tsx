import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

interface StepProps {
  isReverse?: boolean;
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export default function Step({ isReverse, step, title, description, icon: Icon, className }: StepProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center gap-6 text-center max-w-70 w-full',
        className
      )}
    >
      {/* Icon - Positioned Absolutely relative to center line */}
      <div
        className={cn(
          'absolute top-1/2 right-10 -translate-x-1/2 -translate-y-1/2 z-10 p-6 gradient-vertical rounded-full max-sm:hidden transition-transform duration-300',
          isReverse ? 'translate-y-[calc(-50%+6.5vw)]' : '-translate-y-[calc(50%+6.5vw)]'
        )}
      >
        <Icon className={cn('text-white', isReverse ? '' : 'size-8')} />
      </div>

      {isReverse ? (
        // Text Top (Icon is at Bottom)
        <Stack className="flex-1 gap-4 max-sm:gap-2 mb-[16vw] max-sm:mb-0">
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
      ) : (
        // Text Bottom (Icon is at Top)
        <Stack className="flex-1 gap-4 max-sm:gap-2 mt-[16vw] max-sm:mt-0">
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
      )}
    </div>
  );
}

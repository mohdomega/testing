// import Stack from '@/components/Stack';
// import Typography from '@/components/Typography';
// import { cn } from '@/lib';

// interface StepProps {
//   isReverse?: boolean;
//   step: string;
//   title: string;
//   description: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   className?: string;
// }

// export default function Step({ isReverse, step, title, description, icon: Icon, className }: StepProps) {
//   return (
//     <div
//       className={cn(
//         'relative flex flex-col items-center justify-center gap-6 text-center max-w-70 w-full',
//         className
//       )}
//     >
//       {/* Icon - Positioned Absolutely relative to center line */}
//         <div
//         className={cn(
//           'absolute top-1/2 right-10 -translate-x-1/2 -translate-y-1/2 z-10 p-6 gradient-vertical rounded-full max-sm:hidden transition-transform duration-300',
//           isReverse ? 'translate-y-[calc(-50%+6.5vw)]' : '-translate-y-[calc(50%+6.5vw)]'
//         )}
//       >
//         <Icon className={cn('text-white', isReverse ? '' : 'size-8')} />
//       </div>

//       {isReverse ? (
//         // Text Top (Icon is at Bottom)
//         <Stack className="flex-1 gap-4 max-sm:gap-2 mb-[16vw] max-sm:mb-0">
//           <Typography variant="body" className="text-3xl font-semibold text-gradient max-sm:text-2xl">
//             {step}
//           </Typography>
//           <Stack className="gap-2">
//             <Typography variant="title" className="whitespace-nowrap font-medium max-sm:text-md">
//           {title}
//         </Typography>
//             <Typography variant="body2" className="text-secondary">
//               {description}
//             </Typography>
//           </Stack>
//         </Stack>
//       ) : (
//         // Text Bottom (Icon is at Top)
//         <Stack className="flex-1 gap-4 max-sm:gap-2 mt-[16vw] max-sm:mt-0">
//           <Typography variant="body" className="text-3xl font-semibold text-gradient max-sm:text-2xl">
//             {step}
//           </Typography>
//           <Stack className="gap-2">
//             <Typography variant="title" className="whitespace-nowrap font-medium max-sm:text-md">
//               {title}
//             </Typography>
//             <Typography variant="body2" className="text-secondary">
//           {description}
//         </Typography>
//       </Stack>
//         </Stack>
//       )}
//     </div>
//   );
// }






import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

interface StepProps {
  step: string;
  title: string;
  description: string;
  color?: string;
  className?: string;
  isLast?: boolean;
}

export default function Step({ step, title, description, color = '#FF4D4D', className, isLast }: StepProps) {
  return (
    <div className={cn('relative flex flex-col items-center text-center w-full', className)}>
      {/* Dotted Line Connector */}
      {!isLast && (
        <div
          className="absolute top-[40px] left-1/2 w-full h-[2px] border-t-2 border-dashed border-gray-300 -z-10 max-sm:hidden"
          style={{ left: '50%', width: '100%' }}
        />
      )}

      {/* Circle Number */}
      <div className="relative mb-6">
        <div className="relative z-10 w-[80px] h-[80px] flex items-center justify-center">
          {/* Number */}
          <Typography variant="h3" className="font-bold relative z-20">
            {step}
          </Typography>

          {/* Semi-Circle Background (Bottom Half) */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-full -z-10"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>

      {/* Content */}
      <Stack className="gap-2 max-w-[200px] mx-auto">
        <Typography variant="h6" className="font-bold">
          {title}
        </Typography>
        <Typography variant="body2" className="text-secondary text-sm">
          {description}
        </Typography>
      </Stack>
    </div>
  );
}

import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import React from 'react';

const OurKPIs = ({ className }: { className?: string }) => {
  return (
    <Stack
      component="section"
      alignItems="center"
      className={cn('gap-10 py-17.5 max-lg:py-15 max-lg:p-10', className)}
    >
      {/* <TitleChip>Our KPIs</TitleChip> */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          <Stack
            alignItems="center"
            className="gap-3 p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Typography component="span" variant="h2" className="font-bold text-gradient">
              30+
            </Typography>
            <Typography
              component="span"
              variant="body2"
              className="font-medium text-center text-primary-dark/70"
            >
              Salesforce Projects Delivered
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            className="gap-3 p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Typography component="span" variant="h2" className="font-bold text-gradient">
              100+
            </Typography>
            <Typography
              component="span"
              variant="body2"
              className="font-medium text-center text-primary-dark/70"
            >
              {/* Salesforce Certifications */}
              Certifications
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            className="gap-3 p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Typography component="span" variant="h2" className="font-bold text-gradient">
              35%
            </Typography>
            <Typography
              component="span"
              variant="body2"
              className="font-medium text-center text-primary-dark/70"
            >
              Faster Time to Value
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            className="gap-3 p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Typography component="span" variant="h2" className="font-bold text-gradient">
              95%
            </Typography>
            <Typography
              component="span"
              variant="body2"
              className="font-medium text-center text-primary-dark/70"
            >
              Client Retention
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            className="gap-3 p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Typography component="span" variant="h2" className="font-bold text-gradient">
              50+
            </Typography>
            <Typography
              component="span"
              variant="body2"
              className="font-medium text-center text-primary-dark/70"
            >
              Years of Combined Leadership Experience
            </Typography>
          </Stack>
        </div>
      </div>{' '}
    </Stack>
  );
};

export default OurKPIs;

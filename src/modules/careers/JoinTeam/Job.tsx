'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ApplyNowModal from './ApplyNowModal';
import DownloadJDModal from './DownloadJDModal';

import ChevronRight from '/public/icons/chevron-right.svg';
import ClockIcon from '/public/icons/days-clock.svg';
import LocationIcon from '/public/icons/location.svg';

interface JobProps {
  className?: string;
  jobTitle?: string;
  jobCategory?: string;
  jobType?: string;
  experience?: string;
  jdPdfPath?: string;
}

export default function Job({
  className,
  jobTitle = 'Marketing Intern',
  jobCategory = 'Marketing',
  jobType = 'Full time',
  experience = '0-6 months',
  jdPdfPath,
}: JobProps) {
  const [isJDModalOpen, setIsJDModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  return (
    <Stack className={cn('gap-6 max-sm:gap-4 p-6 max-sm:p-4 bg-background rounded-3xl', className)}>
      <Stack className="gap-4 max-sm:gap-3">
        <Stack justifyContent="space-between" className="flex flex-col sm:flex-row gap-2 max-sm:gap-2">
          <div className="flex gap-2 flex-wrap">
            <div className="px-4 py-2 max-sm:px-3 max-sm:py-1.5 rounded-full bg-white font-medium">
              <Typography variant="small" className="max-sm:text-xs">
                {jobCategory}
              </Typography>
            </div>
            <div className="px-4 py-2 max-sm:px-3 max-sm:py-1.5 rounded-full bg-white font-medium">
              <Typography variant="small" className="max-sm:text-xs">
                {jobType}
              </Typography>
            </div>
          </div>
          <Stack
            direction="row"
            alignItems="center"
            className="gap-2 text-primary-dark/60 font-medium max-sm:text-sm"
          >
            <ClockIcon className="size-4 max-sm:size-3" />
            <Typography variant="body2" className="max-sm:text-xs">
              2 days ago
            </Typography>
          </Stack>
        </Stack>
        <Stack className="gap-2 max-sm:gap-1.5">
          <Typography variant="h5" className="font-medium max-sm:text-lg">
            {jobTitle}
          </Typography>
          <Typography variant="body2" className="text-primary-dark/60 max-sm:text-sm">
            {experience}
          </Typography>
        </Stack>
      </Stack>

      <div className=" flex justify-end">
        <Stack
          direction="row"
          alignItems="center"
          className=" gap-2 w-fit max-sm:w-full max-sm:justify-center px-8 py-4 max-sm:px-4 max-sm:py-3 rounded-full border border-dashed border-primary-dark/60"
        >
          <LocationIcon className="size-4 max-sm:size-3" />
          <Typography className="font-medium max-sm:text-sm">Bengaluru, India</Typography>
        </Stack>
      </div>

      <Stack
        direction="row"
        justifyContent="space-between"
        className="gap-4 max-lg:flex-col-reverse max-sm:gap-3"
      >
        <Stack
          direction="row"
          className=" w-full gap-2 max-sm:gap-2 max-sm:w-full max-sm:flex-col"
        >
          <Button
            endIcon={<ChevronRight className="size-4 max-sm:size-3" />}
            onClick={() => setIsApplyModalOpen(true)}
            className="flex-1 max-sm:w-full max-sm:justify-center"
          >
            Apply Now
          </Button>
          <Button
            variant="contained"
            className="whitespace-nowrap flex-1 max-sm:w-full max-sm:justify-center"
            onClick={() => setIsJDModalOpen(true)}
          >
            Download JD
          </Button>
        </Stack>
        {/* <Stack
          direction="row"
          alignItems="center"
          className="gap-2 w-fit max-sm:w-full max-sm:justify-center px-8 py-4 max-sm:px-4 max-sm:py-3 rounded-full border border-dashed border-primary-dark/60"
        >
          <LocationIcon className="size-4 max-sm:size-3" />
          <Typography className="font-medium max-sm:text-sm">Bengaluru, India</Typography>
        </Stack> */}
      </Stack>

      <DownloadJDModal
        isOpen={isJDModalOpen}
        onClose={() => setIsJDModalOpen(false)}
        jobTitle={jobTitle}
        jobCategory={jobCategory}
        jobType={jobType}
      />
      <ApplyNowModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        jobTitle={jobTitle}
        jobCategory={jobCategory}
        jobType={jobType}
      />
    </Stack>
  );
}

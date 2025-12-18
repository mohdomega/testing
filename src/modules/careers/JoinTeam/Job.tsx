'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ChevronRight from '/public/icons/chevron-right.svg';
import ClockIcon from '/public/icons/days-clock.svg';
import LocationIcon from '/public/icons/location.svg';

import DownloadJDModal from './DownloadJDModal';

interface JobProps {
  className?: string;
  jobTitle?: string;
  jobCategory?: string;
  jobType?: string;
}

export default function Job({
  className,
  jobTitle = 'Marketing Intern',
  jobCategory = 'Marketing',
  jobType = 'Full time',
}: JobProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Stack className={cn('gap-8 p-6 bg-background rounded-3xl', className)}>
      <Stack className="gap-4">
        <Stack justifyContent="space-between" className="flex flex-col md:flex-row gap-2">
          <div className="flex gap-2">
            <div className="px-4 py-2 rounded-full bg-white font-medium">
              <Typography variant="small">{jobCategory}</Typography>
            </div>
            <div className="px-4 py-2 rounded-full bg-white font-medium">
              <Typography variant="small">{jobType}</Typography>
            </div>
          </div>
          <Stack direction="row" alignItems="center" className="gap-2 text-primary-dark/60 font-medium">
            <ClockIcon className="size-4" />
            <Typography variant="body2">2 days ago</Typography>
          </Stack>
        </Stack>
        <Stack className="gap-2">
          <Typography variant="h5" className="font-medium">
            {jobTitle}
          </Typography>
          <Typography variant="body2" className="text-primary-dark/60">
            0-6 months
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" className="gap-4 max-lg:flex-col-reverse">
        <Stack direction="row" className="gap-2">
          <Button endIcon={<ChevronRight className="size-4" />}>Apply</Button>
          <Button variant="contained" className="whitespace-nowrap" onClick={() => setIsModalOpen(true)}>
            Download JD
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          className="gap-2 w-fit px-8 py-4 rounded-full border border-dashed border-primary-dark/60"
        >
          <LocationIcon className="size-4" />
          <Typography className="font-medium">Bengaluru, India</Typography>
        </Stack>
      </Stack>

      <DownloadJDModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={jobTitle}
        jobCategory={jobCategory}
        jobType={jobType}
      />
    </Stack>
  );
}

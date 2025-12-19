'use client';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Job from './Job';
import { JOBS_DATA } from './jobsData';

interface JoinTeamProps {
  className?: string;
}

export default function JoinTeam({ className }: JoinTeamProps) {
  const scrollToJoinUs = () => {
    const joinUsSection = document.getElementById('join-us-section');
    if (joinUsSection) {
      joinUsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <Stack component="section" className={cn('py-17.5 w-full', className)}>
        <div className="max-w-[1440px] w-full mx-auto px-20 py-17.5 max-lg:px-15 max-sm:px-6 max-sm:py-10">
          <Stack className="gap-15">
            <Stack className="gap-4 font-medium max-lg:items-center max-lg:text-center">
              <TitleChip>Careers</TitleChip>
              <Typography variant="h2">Join our creative team</Typography>
              <Typography variant="body2" className="text-balance text-primary-dark/60">
                We are expanding everyday! We look forward to working with great minds and welcoming new
                perspectives into our team. Grasp new concepts, push your boundaries, and reach new heights in
                your career with IDRMS.
              </Typography>
            </Stack>

            {JOBS_DATA.length > 0 ? (
              <>
                <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-6 max-sm:gap-4">
                  {JOBS_DATA.map((job, index) => (
                    <Job
                      key={index}
                      jobTitle={job.jobTitle}
                      jobCategory={job.jobCategory}
                      jobType={job.jobType}
                      experience={job.experience}
                      jdPdfPath={job.jdPdfPath}
                    />
                  ))}
                </div>
                <Stack alignItems="center" className="pt-8 max-sm:pt-6">
                  <Button
                    variant="contained"
                    onClick={scrollToJoinUs}
                    className="px-8 py-4 text-lg font-medium max-sm:px-6 max-sm:py-3 max-sm:text-base w-full max-sm:w-full sm:w-auto"
                  >
                    Join Us
                  </Button>
                </Stack>
              </>
            ) : (
              <Stack
                alignItems="center"
                className="gap-6 py-16 px-8 max-lg:py-12 max-lg:px-6 max-sm:py-8 max-sm:px-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl border border-primary/20"
              >
                <Typography variant="h4" className="font-medium text-center text-primary-dark max-sm:text-xl">
                  No Open Positions at the Moment
                </Typography>
                <Typography
                  variant="body"
                  className="text-center text-primary-dark/70 max-w-2xl leading-relaxed max-sm:text-sm"
                >
                  We&apos;re always looking for talented individuals to join the IDRMS family! While we
                  don&apos;t have any open positions right now, we encourage you to stay connected with us.
                  Check back regularly or reach out through our &quot;Join Us&quot; form below to express your
                  interest. At IDRMS, we believe in building a team of passionate professionals who are
                  committed to innovation and excellence. Your future with us might just be around the corner!
                </Typography>
                <Button
                  variant="contained"
                  onClick={scrollToJoinUs}
                  className="px-8 py-4 text-lg font-medium mt-4 max-sm:px-6 max-sm:py-3 max-sm:text-base w-full max-sm:w-full sm:w-auto"
                >
                  Join Us
                </Button>
              </Stack>
            )}
          </Stack>
        </div>
      </Stack>
    </>
  );
}

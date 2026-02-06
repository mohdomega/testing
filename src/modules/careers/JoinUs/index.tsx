'use client';
import { useActionState, useEffect, useRef } from 'react';

import Image from 'next/image';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import { joinUs } from './action';

import CareerImg11 from '/public/images/CareerImages/career-image-11.jpg';

interface ContactUsProps {
  className?: string;
  id?: string;
}

export default function JoinUs({ className, id }: ContactUsProps) {
  const [state, action, isPending] = useActionState(joinUs, undefined);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (state?.success) {
      ref.current.reset();
    }
  }, [state?.success]);

  return (
    <Stack component="section" id={id} className={cn('py-12 bg-white w-full max-sm:py-10', className)}>
      <div className="max-w-[1440px] w-full mx-auto px-20 py-8 max-lg:px-15 max-sm:px-6 max-sm:py-6 flex flex-col items-center gap-13">
        <Stack className="gap-2 max-w-116 text-center">
          <Stack alignItems="center" className="gap-1">
            <TitleChip>Begin your journey</TitleChip>
            <Typography variant="h2" className="text-gradient">
              Join Us
            </Typography>
          </Stack>
          <Typography variant="body2" className="text-secondary font-medium">
            Join passionate minds and be part of the IDRMS journey
          </Typography>
        </Stack>
        <Stack direction="row" className="gap-10 w-full">
          <div className="flex-1 rounded-3xl max-lg:aspect-video relative overflow-hidden flex-1 max-lg:hidden">
            <Image src={CareerImg11} alt="career img 11" className="w-full h-full object-cover" />
          </div>
          <Stack
            ref={ref}
            component="form"
            action={action}
            className={cn('flex-1 gap-4 p-8 rounded-3xl bg-[#f2f0f7] max-lg:p-6 max-sm:p-4', className)}
          >
            <Stack direction="row" alignItems="flex-start" className="gap-4 max-sm:flex-col">
              <TextField
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                placeholder="Enter name"
                error={Boolean(state?.errors && 'firstName' in state.errors && state.errors.firstName)}
                helperText={state?.errors && 'firstName' in state.errors ? state.errors.firstName : undefined}
                className="min-w-0" // Fix for flex issue
              />
              <TextField
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                placeholder="Enter name"
                error={Boolean(state?.errors && 'lastName' in state.errors && state.errors.lastName)}
                helperText={state?.errors && 'lastName' in state.errors ? state.errors.lastName : undefined}
                className="min-w-0"
              />
            </Stack>
            <TextField
              type="email"
              name="email"
              id="email"
              label="Email"
              placeholder="Enter your email"
              error={Boolean(state?.errors && 'email' in state.errors && state.errors.email)}
              helperText={state?.errors && 'email' in state.errors ? state.errors.email : undefined}
            />
            <TextField
              component="textarea"
              name="whyIdrm"
              id="whyIdrm"
              label="Why IDRMS?"
              rows={7}
              placeholder="Write your message here..."
              error={Boolean(state?.errors && 'whyIdrm' in state.errors && state.errors.whyIdrm)}
              helperText={state?.errors && 'whyIdrm' in state.errors ? state.errors.whyIdrm : undefined}
            />
            <Stack className="gap-2">
              <Typography component="label" htmlFor="resume" variant="subtitle" className="font-medium">
                Attach Resume
              </Typography>
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf,.jpg,.jpeg,.png"
                className="px-4 py-3 text-md border border-black/10 rounded-xl text-secondary focus-visible:outline-secondary max-sm:text-sm w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary hover:file:bg-primary/90 cursor-pointer"
              />
              <Typography variant="small" className="text-primary-dark/60">
                Accepted formats: PDF, JPG, PNG (Max size: 5MB)
              </Typography>
              {state?.errors && 'resume' in state.errors && state.errors.resume && (
                <Typography variant="small" className="text-red-600">
                  {Array.isArray(state.errors.resume) ? state.errors.resume[0] : state.errors.resume}
                </Typography>
              )}
            </Stack>
            {state?.success && (
              <Typography className="text-green-600 font-medium bg-green-50 px-4 py-3 rounded-lg">
                ✓ Thank you for your interest! We&apos;ll reach out to you soon.
              </Typography>
            )}
            {state?.error && (
              <Typography className="text-red-600 font-medium bg-red-50 px-4 py-3 rounded-lg">
                ✗ {state.error}
              </Typography>
            )}
            <Button type="submit" className="w-fit max-sm:self-center max-sm:px-6" isLoading={isPending}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

'use client';
import { useActionState, useEffect, useRef } from 'react';
import Image from 'next/image';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import CareerImg11 from '/public/images/CareerImages/career-image-11.png';

import { joinUs } from './action';

interface ContactUsProps {
  className?: string;
}

export default function JoinUs({ className }: ContactUsProps) {
  const [state, action, isPending] = useActionState(joinUs, undefined);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (state?.success) {
      ref.current.reset();
    }
  }, [state?.success]);

  return (
    <Stack component="section" className={cn('py-17.5 bg-white w-full max-sm:py-10', className)}>
      <div className="max-w-[1440px] w-full mx-auto px-20 py-17.5 max-lg:px-15 max-sm:px-6 max-sm:py-10 flex flex-col items-center gap-13">
        <Stack className="gap-2 max-w-116 text-center">
          <Stack alignItems="center" className="gap-1">
            <TitleChip>Begin your journey</TitleChip>
            <Typography variant="h2" className="text-gradient">
              Join US
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
                error={Boolean(state?.errors?.firstName)}
                helperText={state?.errors?.firstName}
                className="min-w-0" // Fix for flex issue
              />
              <TextField
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                placeholder="Enter name"
                error={Boolean(state?.errors?.lastName)}
                helperText={state?.errors?.lastName}
                className="min-w-0"
              />
            </Stack>
            <TextField
              type="email"
              name="email"
              id="email"
              label="Email"
              placeholder="Enter your email"
              error={Boolean(state?.errors?.email)}
              helperText={state?.errors?.email}
            />
            <TextField
              component="textarea"
              name="whyIdrm"
              id="whyIdrm"
              label="Why IDRMS?"
              rows={7}
              placeholder="Write your message here..."
              error={Boolean(state?.errors?.whyIdrm)}
              helperText={state?.errors?.whyIdrm}
            />
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

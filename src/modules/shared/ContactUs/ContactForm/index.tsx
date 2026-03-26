'use client';

import { useActionState, useEffect, useRef } from 'react';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import { contactUs } from './action';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [state, action, isPending] = useActionState(contactUs, undefined);

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (state?.success) {
      ref.current.reset();
    }
  }, [state?.success]);

  return (
    <Stack
      ref={ref}
      component="form"
      action={action}
      className={cn(
        'gap-4 p-8 rounded-3xl bg-white max-lg:p-6 max-sm:p-4 w-full max-w-full overflow-hidden',
        className
      )}
    >
      <Stack direction="row" alignItems="flex-start" className="gap-4 max-sm:flex-col min-w-0">
        <TextField
          type="text"
          name="firstName"
          id="firstName"
          label="First Name"
          placeholder="Enter name"
          error={Boolean(state?.errors?.firstName)}
          helperText={state?.errors?.firstName}
          className="min-w-0 flex-1 max-sm:flex-none"
        />
        <TextField
          type="text"
          name="lastName"
          id="lastName"
          label="Last Name"
          placeholder="Enter name"
          error={Boolean(state?.errors?.lastName)}
          helperText={state?.errors?.lastName}
          className="min-w-0 flex-1 max-sm:flex-none"
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
        className="min-w-0 w-full"
      />
      <TextField
        component="textarea"
        name="message"
        id="message"
        label="Your Message"
        rows={7}
        placeholder="Write your message here..."
        error={Boolean(state?.errors?.message)}
        helperText={state?.errors?.message}
        className="min-w-0 w-full"
      />
      {state?.success && (
        <Typography className="text-green-600 font-medium bg-green-50 px-4 py-3 rounded-lg">
          ✓ Thank you for contacting us! We&apos;ll reach out to you soon.
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
  );
}

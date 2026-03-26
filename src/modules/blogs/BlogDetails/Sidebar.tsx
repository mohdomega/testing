import { startTransition, useActionState, useEffect, useRef, useState } from 'react';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';

import { subscribeNewsletter } from './action';
import { validateNewsletter } from './validation';

export default function Sidebar() {
  const [state, action, isPending] = useActionState(subscribeNewsletter, undefined);
  const [clientErrors, setClientErrors] = useState<Record<string, string[]> | undefined>(undefined);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (state?.success) {
      ref.current.reset();
      setClientErrors(undefined);
    }
  }, [state?.success]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    const validated = validateNewsletter.safeParse({ email });
    if (!validated.success) {
      setClientErrors(validated.error.flatten().fieldErrors);
      return;
    }

    setClientErrors(undefined);
    startTransition(() => {
      action(formData);
    });
  };

  const errors = clientErrors || state?.errors;

  return (
    <Stack className="gap-8 h-fit sticky top-24">
      <div className="p-6 bg-background rounded-[24px] flex flex-col gap-6">
        <Stack className="gap-3">
          <Typography variant="h4" className="text-2xl font-medium text-primary-dark">
            Don&apos;t miss our daily updates
          </Typography>
          <Typography variant="body2" className="text-secondary text-md font-regular">
            Stay updated with the latest news, expert insights, and practical tips—delivered daily to keep you
            informed and ahead.
          </Typography>
        </Stack>

        <Stack component="form" onSubmit={handleSubmit} ref={ref} className="gap-6">
          <Stack className="gap-2">
            <TextField
              type="email"
              name="email"
              id="email"
              label="Email"
              required
              placeholder="Enter your email"
              error={Boolean(errors?.email)}
              helperText={errors?.email}
              className="min-w-0 w-full"
            />
          </Stack>
          {state?.success && (
            <Typography className="text-green-600 font-medium bg-green-50 px-4 py-3 rounded-lg text-sm">
              ✓ Subscribed successfully!
            </Typography>
          )}
          {state?.error && (
            <Typography className="text-red-600 font-medium bg-red-50 px-4 py-3 rounded-lg text-sm">
              ✗ {state.error}
            </Typography>
          )}
          <Button
            type="submit"
            className="w-fit py-4 px-10"
            color="gradient"
            isLoading={isPending}
            disabled={isPending}
          >
            Subscribe
          </Button>
        </Stack>
      </div>
    </Stack>
  );
}

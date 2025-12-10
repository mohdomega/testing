import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';

export default function Sidebar() {
  //   const [state, action, isPending] = useActionState(contactUs, undefined);
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

        <Stack className="gap-6">
          <Stack className="gap-2">
            <TextField
              type="email"
              name="email"
              id="email"
              label="Email"
              placeholder="Enter your email"
              //   error={Boolean(state?.errors?.email)}
              //   helperText={state?.errors?.email}
              className="min-w-0 w-full"
            />
          </Stack>
          <Button className="w-full justify-center max-w-[140px] py-4 px-8" color="gradient">
            Subscribe
          </Button>
        </Stack>
      </div>
    </Stack>
  );
}

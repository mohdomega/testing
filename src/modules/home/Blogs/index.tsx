import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import HomeBlogImg1 from '../../../../public/images/BlogImages/home-blogs-img-1.png';
import HomeBlogImg2 from '../../../../public/images/BlogImages/home-blogs-img-2.png';
import HomeBlogImg3 from '../../../../public/images/BlogImages/home-blogs-img-3.png';
import HomeBlogImg4 from '../../../../public/images/BlogImages/home-blogs-img-4.png';

import Card from './Card';
import Link from 'next/link';

interface BlogsProps {
  className?: string;
}

export default function Blogs({ className }: BlogsProps) {
  return (
    <Stack
      className={cn('gap-15 px-24 py-17.5 max-lg:px-18 max-sm:px-6 max-sm:py-10 max-sm:gap-10', className)}
    >
      <Stack alignItems="center" className="gap-4">
        <TitleChip>Latest Post</TitleChip>
        <Typography variant="h2" className="text-gradient">
          Our Blogs
        </Typography>
      </Stack>
      <Stack alignItems="center" className="gap-12">
        <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <Card img={HomeBlogImg1} />
          <Card img={HomeBlogImg2} />
          <Card img={HomeBlogImg3} />
          <Card img={HomeBlogImg4} />
        </div>
        <Button component={Link} href="/blogs" color="gradient">
          View all
        </Button>
      </Stack>
    </Stack>
  );
}

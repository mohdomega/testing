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
    <Stack className={cn('w-full py-17.5 max-sm:py-10', className)}>
      <div className="max-w-[1440px] w-full mx-auto px-20 py-17.5 max-lg:px-15 max-sm:px-6 max-sm:py-10 flex flex-col items-center gap-15 max-sm:gap-10">
        <Stack alignItems="center" className="gap-4">
          <TitleChip>Latest Post</TitleChip>
          <Typography variant="h2" className="text-gradient">
            Our Blogs
          </Typography>
        </Stack>
        <Stack alignItems="center" className="gap-12">
          <div className="w-full grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <Card img={HomeBlogImg1} />
            <Card img={HomeBlogImg2} />
            <Card img={HomeBlogImg3} />
            <Card img={HomeBlogImg4} />
          </div>
          <Button component={Link} href="/blogs" color="gradient">
            View all
          </Button>
        </Stack>
      </div>
    </Stack>
  );
}

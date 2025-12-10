import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import { blogPosts } from '../data';

import BlogCard from './BlogCard';

interface OurBlogsProps {
  className?: string;
}

export default function OurBlogs({ className }: OurBlogsProps) {
  // Get last 4 blog posts (excluding the first one which is already featured)
  const displayBlogs = blogPosts.slice(1, 5);

  return (
    <Stack component="section" alignItems="center" className={cn('bg-background w-full', className)}>
      <div className=" max-w-[1440px] w-full flex flex-col gap-[60px] px-20 py-17.5 mx-auto max-lg:p-15 max-sm:gap-10 max-sm:px-6 max-sm:py-10">
        <Stack alignItems="center" className="gap-[16px]">
          <TitleChip>IDRMS Insights</TitleChip>
          <Typography variant="h2" className="text-gradient text-center max-w-195 text-6xl">
            Your Hub for Salesforce Insights
          </Typography>
        </Stack>
        <div className="w-full grid grid-cols-2 gap-10 max-lg:gap-5 max-sm:grid-cols-1 max-sm:gap-4">
          {displayBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              img={blog.cardImage}
              title={blog.title}
              description={blog.description}
              link={`/blogs/${blog.slug}`}
            />
          ))}
        </div>
        <Stack alignItems="center">
          <Button component={Link} href="/blogs" color="gradient">
            View all
          </Button>
        </Stack>
      </div>
    </Stack>
  );
}

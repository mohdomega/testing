'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import { blogPosts } from '@/modules/blogs/data';

import Card from './Card';
import Link from 'next/link';

interface BlogsProps {
  className?: string;
}

export default function Blogs({ className }: BlogsProps) {
  const pathname = usePathname();
  const isBlogsPage = pathname === '/blogs';

  // Get first 4 blog posts for home page
  const featuredBlogs = [...blogPosts, ...blogPosts, ...blogPosts].slice(0, 12);
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? featuredBlogs : featuredBlogs.slice(0, 4);

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
            {visibleBlogs.map((blog, index) => (
              <Card key={`${blog.slug}-${index}`} blog={blog} />
            ))}
          </div>
          {isBlogsPage ? (
            <Button color="gradient" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'See Less' : 'See More'}
            </Button>
          ) : (
            <Button component={Link} href="/blogs" color="gradient">
              View All
            </Button>
          )}
        </Stack>
      </div>
    </Stack>
  );
}

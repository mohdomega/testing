import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import { BlogPost } from '@/modules/blogs/data';

import ChevronRight from '/public/icons/chevron-right.svg';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  className?: string;
  blog: BlogPost;
}

export default function Card({ className, blog }: CardProps) {
  return (
    <Stack className={cn('gap-6 p-4 rounded-3xl bg-background h-full max-h-full overflow-hidden', className)}>
      <div className="w-full aspect-video rounded-2xl bg-red-200 relative overflow-hidden flex-shrink-0">
        <Image src={blog.cardImage} alt={blog.title} className="w-full h-full object-cover" />
      </div>
      <Stack alignItems="flex-start" className="gap-4 flex-1 min-h-0">
        <Stack className="gap-2 flex-1 min-h-0">
          <Typography variant="title" className="font-medium max-lg:text-lg max-sm:text-md">
            {blog.title}
          </Typography>
          <Typography variant="body2" className="text-secondary line-clamp-2">
            {blog.description.substring(0, 80)}..
          </Typography>
        </Stack>
        <Button
          variant="text"
          endIcon={<ChevronRight className="size-4" />}
          className="p-0 whitespace-nowrap max-sm:p-0 flex-shrink-0"
          component={Link}
          href={`/blogs/${blog.slug}`}
        >
          Learn More
        </Button>
      </Stack>
    </Stack>
  );
}

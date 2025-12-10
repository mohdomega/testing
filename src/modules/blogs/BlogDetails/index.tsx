import Stack from '@/components/Stack';
import { getBlogBySlug } from '../data';
import BlogContent from './BlogContent';
import RecommendedBlogs from './RecommendedBlogs';

interface BlogDetailsProps {
  slug: string;
}

export default function BlogDetails({ slug }: BlogDetailsProps) {
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <Stack className="w-full bg-white">
        <div className="max-w-[1440px] w-full mx-auto px-20 py-50 max-lg:px-6 max-sm:px-4">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-secondary">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </div>
      </Stack>
    );
  }

  return (
    <Stack className="w-full bg-white">
      <div className=" mt-[200px]">
        <div className="px-20 py-0 max-lg:px-6 max-sm:px-4 max-w-[1440px] w-full mx-auto grid grid-cols-[1fr] gap-20 max-xl:gap-10 max-lg:grid-cols-1">
          <BlogContent blog={blog} />
        </div>
        <RecommendedBlogs />
      </div>
    </Stack>
  );
}

import BlogDetails from '@/modules/blogs/BlogDetails';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <BlogDetails slug={slug} />;
}

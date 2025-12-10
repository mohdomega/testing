import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="w-full bg-white min-h-screen flex justify-center items-center">
      <div className="max-w-[1440px] w-full mx-auto px-20 py-50 max-lg:px-6 max-sm:px-4">
        <div className="text-center py-20 flex flex-col gap-4 items-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
      </div>
    </div>
  );
}

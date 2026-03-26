import CaseStudyDetails from '@/modules/services/CaseStudies/CaseStudyDetails';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <CaseStudyDetails id={id} />;
}

import ServicePage from '@/modules/services/service-detail';

export default function Page() {
  return (
    <ServicePage
      title="Data Migration"
      heroDescription="Securely transfer your critical data with our expert data migration services. We ensure zero data loss, minimal downtime, and complete integrity as you move to new platforms."
      serviceTitle="Moving Your Data to Salesforce Carefully, Cleanly, and Without Disruption"
      // serviceDescription="From planning to execution, we make data migration easier, safer, and more aligned with your business goals. We ensure your data is ready for action in your new environment."
      serviceDescription="We help you move data into Salesforce carefully and cleanly, ensuring accuracy, continuity, and trust from day one."
      serviceTags={[
        'Salesforce Data Migration',
        'Legacy System Modernization',
        'Clean Data Integration',
        'Secure Data Validation',
      ]}
    />
  );
}

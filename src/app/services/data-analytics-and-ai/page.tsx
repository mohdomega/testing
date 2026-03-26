import ServicePage from '@/modules/services/service-detail';

export default function Page() {
  return (
    <ServicePage
      title="Data Analytics & AI"
      heroDescription="Unlock the power of your data with advanced analytics and AI-driven insights. We help you make smarter decisions, predict trends, and automate processes to boost your Salesforce ROI and business performance."
      serviceTitle="Turning Salesforce Data into Insights Leaders Can Act On"
      // serviceDescription="From data integration to AI implementation, we make analytics easier, faster, and more aligned with your business goals. Our solutions help you transform raw data into actionable insights that drive strategic decisions."
      serviceDescription="We turn Salesforce data into clear insights that help leaders make faster, more confident decisions."
      serviceTags={[
        'Salesforce Analytics & Insights',
        'Data-Driven Decision Making',
        'AI-Powered Business Intelligence',
        'Reporting & Performance Dashboards',
      ]}
    />
  );
}

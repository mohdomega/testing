import ServicePage from '@/modules/services/service-detail';

export default function Page() {
  return (
    <ServicePage
      title="Salesforce Implementation"
      heroDescription="Transform your business with our comprehensive Salesforce Implementation solutions. We deliver end-to-end strategies aligned with best practices to help you manage, engage, and grow your customer base effectively."
      serviceTitle="Designing Salesforce Around How Your Business Actually Works"
      // serviceDescription="From initial setup to full-scale deployment, we make Salesforce implementation easier, faster, and more aligned with your business goals."
      serviceDescription="We design and implement Salesforce around how your teams actually work—so adoption is natural and results come faster."
      serviceTags={[
        'Salesforce CRM Implementation',
        'Sales Cloud & Service Cloud',
        'Scalable Salesforce Solutions',
        'Certified Salesforce Experts',
      ]}
    />
  );
}

import ServicePage from '@/modules/services/service-detail';

export default function Page() {
  return (
    <ServicePage
      title="Digital Transformation Consultation"
      heroDescription="Navigate your digital journey with expert consultation. We help you design and execute digital transformation strategies that improve performance, reduce costs, and scale with your business needs."
      serviceTitle="We help you get the most from Digital Transformation"
      // serviceDescription="From strategy to execution, we make digital transformation easier, faster, and more aligned with your business goals, leveraging technology to drive innovation."
      serviceDescription="We help you step back, rethink your processes, and design a Salesforce strategy that supports real business change—not just new technology."
      serviceTags={[
        'Digital Transformation Strategy',
        'Salesforce Consulting Services',
        'Business Process Optimization',
        'Technology Roadmap & Advisory',
      ]}
    />
  );
}

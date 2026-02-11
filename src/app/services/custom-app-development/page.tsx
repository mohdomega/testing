import ServicePage from '@/modules/services/service-detail';

export default function Page() {
  return (
    <ServicePage
      title="Custom App Development"
      heroDescription="Launch faster and smarter with our custom app development solutions. We build scalable, user-friendly applications tailored to your specific business needs, from concept to deployment."
      serviceTitle="Building Custom Salesforce Solutions When Standard Features Fall Short"
      // serviceDescription="From mobile to web applications, we make custom app development easier, faster, and more aligned with your vision. Our solutions help you engage users and drive business growth."
      serviceDescription="We build custom Salesforce applications when standard features aren’t enough—always tailored to your unique business needs."
      serviceTags={[
        'Salesforce Custom App Development',
        'Lightning & Apex Solutions',
        'Tailored Business Applications',
        'Scalable Platform Extensions',
      ]}
    />
  );
}

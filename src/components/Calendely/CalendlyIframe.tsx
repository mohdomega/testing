export default function CalendlyIframe() {
  return (
    <div style={{ height: '700px' }}>
      <iframe
        src="https://calendly.com/YOUR_USERNAME" // change link for calender
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

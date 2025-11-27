import { cn } from '@/lib';

interface MapProps {
  className?: string;
}

export default function Map({ className }: MapProps) {
  return (
    <div className={cn('rounded-3xl overflow-hidden', className)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8426574493224!2d77.6002597!3d12.917832399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152b053870ef%3A0x6919f82e39140ef3!2sIDRMS%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1754334332127!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </div>
  );
}

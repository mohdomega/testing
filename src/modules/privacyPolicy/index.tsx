import Stack from '@/components/Stack';
import Typography from '@/components/Typography';

import LightingFlash from '/public/icons/lighting-flash.svg';

export default function PrivacyPolicy() {
  return (
    <Stack component="section" className="bg-white py-[200px] px-20 max-lg:px-15 max-sm:px-6">
      <div className="max-w-[900px] w-full mx-auto">
        {/* Main Title */}
        <Stack className="">
          <Stack direction="row" alignItems="center" justifyContent="center" className="gap-3 mb-6">
            <div className="p-3 border border-primary-dark/10 rounded-full bg-primary-dark/10">
              <LightingFlash className="size-4 text-primary-dark" />
            </div>
            <Typography variant="small" className="font-medium text-primary-dark">
              Need help?
            </Typography>
          </Stack>
          <Typography variant="h1" className="text-primary-dark text-center mb-16 font-medium">
            Privacy policy
          </Typography>
        </Stack>

        {/* Overview Section */}
        <Stack className="gap-4 mb-12">
          <Typography variant="h4" className="text-primary-dark font-semibold">
            Overview
          </Typography>
          <Typography variant="body2" className="text-primary-dark/70 leading-relaxed">
            This Privacy Policy outlines how IDRMS collects, uses, and protects your personal information
            across our web and mobile applications. We are committed to maintaining the confidentiality and
            security of your data and ensuring transparency about how it is handled.
          </Typography>
        </Stack>

        {/* Data Collection and Usage Section */}
        <Stack className="gap-4 mb-12">
          <Typography variant="h4" className="text-primary-dark font-semibold">
            Data Collection and Usage
          </Typography>
          <Typography variant="body2" className="text-primary-dark/70 leading-relaxed">
            At IDRMS, we prioritize your privacy. We do not collect, store, or access any personally
            identifiable information unless it is explicitly provided by you through forms or communication.
            Any configuration data or user-generated content within the IDRMS platform is securely stored and
            managed under strict access controls. Your data is used solely for the intended operational
            purposes and remains entirely within your control.
          </Typography>
        </Stack>

        {/* Third-Party Services Section */}
        <Stack className="gap-4 mb-12">
          <Typography variant="h4" className="text-primary-dark font-semibold">
            Third-Party Services
          </Typography>
          <Typography variant="body2" className="text-primary-dark/70 leading-relaxed mb-4">
            To continuously improve our platform, we integrate with reputable third-party analytics and
            debugging tools. These services collect anonymous technical and usage data that help us enhance
            user experience and platform reliability:
          </Typography>

          <ul className="list-disc pl-8 space-y-4">
            <li>
              <Typography variant="body2" className="text-primary-dark/70 leading-relaxed">
                <span className="font-semibold text-primary-dark">UXCam:</span> This tool helps us understand
                how users interact with our application by tracking screen visits, gestures, taps, scrolls,
                and general device information (such as model, OS version, etc.). All data collected is
                anonymized and used only to identify usability improvements. UXCam does not collect any
                personal information or track activity outside the IDRMS application.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" className="text-primary-dark/70 leading-relaxed">
                <span className="font-semibold text-primary-dark">BugLife:</span> We use BugLife to collect
                feedback and debug information. It may request screen recordings if you encounter an issue. If
                personal details are visible in such recordings, they are only used for resolving that
                specific issue. BugLife ensures this information is not reused or shared outside the debugging
                context.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" className="text-primary-dark/70 leading-relaxed">
                <span className="font-semibold text-primary-dark">Mixpanel:</span> For analyzing product usage
                trends, we use Mixpanel, which collects data like screen flows, button clicks, and device
                types. This helps us optimize features and user journeys. Like other services, Mixpanel does
                not collect personally identifiable data or track you outside the platform.
              </Typography>
            </li>
          </ul>

          <Typography variant="body2" className="text-primary-dark/70 leading-relaxed mt-4">
            All services mentioned adhere to strict privacy standards and are selected for their compliance
            with global data protection regulations.
          </Typography>
        </Stack>

        {/* Contact Us Section */}
        <Stack className="gap-4">
          <Typography variant="h4" className="text-primary-dark font-semibold">
            Contact Us
          </Typography>
          <Typography variant="body2" className="text-primary-dark/70 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is
            handled, please don&apos;t hesitate to reach out to us at{' '}
            <a href="mailto:contact@idrms.io" className="text-primary-dark font-medium hover:underline">
              contact@idrms.io
            </a>
            . Our team is available to assist you and ensure your privacy concerns are addressed promptly.
          </Typography>
        </Stack>
      </div>
    </Stack>
  );
}

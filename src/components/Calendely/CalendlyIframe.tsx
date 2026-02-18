'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function CalendlyIframe() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/dipen-ishani-idrms/30min"
        style={{ minWidth: '320px', height: '700px' }}
        data-resize="true"
      />
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
    </>
  );
}

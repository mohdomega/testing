import { headers } from 'next/headers';
import About from '@/modules/about';

export default async function Page() {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country');
  
  // Comprehensive list of North American country codes (ISO 3166-1 alpha-2)
  const northAmericaCountries = [
    'US', 'CA', 'MX', // Major North America
    'AG', 'BS', 'BB', 'BZ', 'CR', 'CU', 'DM', 'DO', 'SV', 'GD', 'GT', 'HT', 'HN', 'JM', 'KN', 'LC', 'VC', 'TT', // Central America & Caribbean
    'PR', 'VI', 'VG', 'AI', 'AW', 'BM', 'BQ', 'KY', 'CW', 'GL', 'GP', 'MQ', 'MS', 'PM', 'SX', 'TC' // Territories
  ];
  
  const isNA = country ? northAmericaCountries.includes(country.toUpperCase()) : undefined;

  return <About isNA={isNA} />;
}

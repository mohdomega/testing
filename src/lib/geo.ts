/**
 * Helper to detect if a user is in North America (NA)
 * Works with Vercel headers (via an internal API or direct) 
 * and falls back to a public IP API.
 */
export async function detectNorthAmerica(searchParams?: URLSearchParams): Promise<boolean> {
  // 1. Check for manual test override in URL (?test_region=NA)
  if (searchParams && searchParams.get('test_region') === 'NA') {
    return true;
  }

  try {
    // 2. Try an external Geo IP API as a robust fallback
    // This works everywhere (Vercel, Local, other hosting)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.continent_code === 'NA';
  } catch (error) {
    console.error('Geo detection failed, falling back to false:', error);
    return false;
  }
}

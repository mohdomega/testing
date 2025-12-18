/**
 * Job Description PDF Mapping
 *
 * This file maps job titles to their corresponding PDF files.
 * Add new job titles and their PDF paths here as you add more JDs.
 *
 * PDF files should be placed in: public/jds/
 *
 * Example:
 * - Job Title: "Marketing Intern"
 * - PDF File: public/jds/marketing-intern.pdf
 * - Mapping: "Marketing Intern" -> "/jds/marketing-intern.pdf"
 */

export const JD_PDF_MAPPING: Record<string, string> = {
  // Add your job titles and their PDF paths here
  // Make sure the PDF file exists in public/jds/ folder
  'Marketing Intern': '/jds/default-jd.pdf', // Update this when you have specific PDF
  'Sales Cloud Developer': '/jds/default-jd.pdf',
  'Full Stack Developer': '/jds/default-jd.pdf',
  'UI/UX Designer': '/jds/default-jd.pdf',
  // Add more mappings as needed
};

/**
 * Get PDF path for a job title
 * @param jobTitle - The job title
 * @returns PDF path or default PDF path
 */
export function getJDPath(jobTitle: string): string {
  // Normalize job title (remove extra spaces)
  const normalizedTitle = jobTitle.trim();

  // Check if we have a mapping for this job title
  if (JD_PDF_MAPPING[normalizedTitle]) {
    return JD_PDF_MAPPING[normalizedTitle];
  }

  // Fallback: Generate path from job title
  // Converts "Marketing Intern" -> "marketing-intern.pdf"
  const slug = normalizedTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  // Return generated path (will fallback to default in DownloadJDModal if file doesn't exist)
  return `/jds/${slug}.pdf`;
}

/**
 * Default PDF path (used when no specific mapping exists)
 */
export const DEFAULT_JD_PATH = '/jds/default-jd.pdf';

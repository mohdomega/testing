# Job Description PDFs

This folder contains all Job Description (JD) PDF files.

## How to Add PDFs

1. **Place your PDF files in this folder** (`public/jds/`)

2. **Name your PDF files** using one of these methods:

   - **Option 1**: Use the exact job title (case-sensitive)

     - Example: `Marketing Intern.pdf` → Job Title: "Marketing Intern"

   - **Option 2**: Use slug format (recommended)
     - Example: `marketing-intern.pdf` → Job Title: "Marketing Intern"
     - Convert job title to lowercase, replace spaces with hyphens
     - Example: "Sales Cloud Developer" → `sales-cloud-developer.pdf`

3. **Update the mapping** in `src/modules/careers/JoinTeam/jdMapping.ts`:
   ```typescript
   export const JD_PDF_MAPPING: Record<string, string> = {
     'Marketing Intern': '/jds/marketing-intern.pdf',
     'Your New Job Title': '/jds/your-new-job-title.pdf',
     // Add more mappings here
   };
   ```

## Current PDF Files

- `default-jd.pdf` - Default PDF used when no specific mapping exists
- Add your job-specific PDFs here

## File Naming Convention

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Keep file names short and descriptive
- Example: `marketing-intern.pdf`, `sales-cloud-developer.pdf`

## Notes

- PDF files in the `public` folder are accessible via URL
- Example: `/jds/marketing-intern.pdf` is accessible at `https://yourdomain.com/jds/marketing-intern.pdf`
- Make sure PDF file names match the mapping in `jdMapping.ts`

/**
 * Jobs Data
 *
 * This file contains the job openings data.
 * Each job should have a corresponding PDF in public/jds/ folder.
 */

export interface JobData {
  jobTitle: string;
  jobCategory: string;
  jobType: string;
  experience: string;
  jdPdfPath: string;
}

export const JOBS_DATA: JobData[] = [
  {
    jobTitle: 'MuleSoft Developer',
    jobCategory: 'Development',
    jobType: 'Full time',
    experience: '2-5 years',
    jdPdfPath: '/jds/mulesoft-developer-jd.pdf',
  },
  {
    jobTitle: 'Salesforce Consultant',
    jobCategory: 'Consulting',
    jobType: 'Full time',
    experience: '3-6 years',
    jdPdfPath: '/jds/salesforce-consultant-jd.pdf',
  },
  {
    jobTitle: 'Salesforce Developer Consultant (SPIFF)',
    jobCategory: 'Development',
    jobType: 'Full time',
    experience: '4-7 years',
    jdPdfPath: '/jds/salesforce-developer-consultant-spiff-jd.pdf',
  },
  {
    jobTitle: 'Salesforce Developer',
    jobCategory: 'Development',
    jobType: 'Full time',
    experience: '2-5 years',
    jdPdfPath: '/jds/salesforce-developer-jd.pdf',
  },
  {
    jobTitle: 'Salesforce QA',
    jobCategory: 'Quality Assurance',
    jobType: 'Full time',
    experience: '2-4 years',
    jdPdfPath: '/jds/salesforce-qa-jd.pdf',
  },
  {
    jobTitle: 'Senior Developer / Tech Lead',
    jobCategory: 'Development',
    jobType: 'Full time',
    experience: '5-8 years',
    jdPdfPath: '/jds/senior-developer-tech-lead-jd.pdf',
  },
];

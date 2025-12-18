'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';

import { downloadJD } from './action';

interface DownloadJDModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobCategory?: string;
  jobType?: string;
}

export default function DownloadJDModal({
  isOpen,
  onClose,
  jobTitle,
  jobCategory,
  jobType,
}: DownloadJDModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;

      if (!name || !email || !phone) {
        setError('Please fill in all required fields.');
        setLoading(false);
        return;
      }

      const result = await downloadJD({
        name,
        email,
        phone,
        jobTitle,
        jobCategory: jobCategory || '',
        jobType: jobType || '',
      });

      if (result.success) {
        // Download PDF using fetch (more reliable)
        const downloadPdf = async (pdfUrl: string) => {
          const response = await fetch(pdfUrl);
          if (!response.ok) {
            throw new Error('PDF file not found');
          }
          return response.blob();
        };

        try {
          let blob: Blob;
          const pdfUrl = result.downloadUrl || '/jds/default-jd.pdf';

          try {
            // Try to download the specific PDF
            blob = await downloadPdf(pdfUrl);
          } catch (error) {
            // If specific PDF not found, try default PDF
            console.warn(`PDF not found at ${pdfUrl}, trying default PDF...`);
            blob = await downloadPdf('/jds/default-jd.pdf');
          }

          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${jobTitle.replace(/\s+/g, '-')}-JD.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);

          // Close modal after a short delay
          setTimeout(() => {
            onClose();
            // Reset form
            e.currentTarget.reset();
          }, 1000);
        } catch (downloadError) {
          console.error('PDF download error:', downloadError);
          setError('Failed to download PDF. Please contact support.');
          setLoading(false);
        }
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error downloading JD:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Stack className="gap-6">
        <Stack className="gap-2">
          <Typography variant="h4" className="font-medium text-primary-dark">
            Download Job Description
          </Typography>
          <Typography variant="body2" className="text-primary-dark/60">
            Please provide your details to download the JD for <strong>{jobTitle}</strong>
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <TextField
            name="name"
            id="name"
            label="Full Name"
            placeholder="Enter your full name"
            required
            className="w-full"
          />
          <TextField
            name="email"
            id="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            required
            className="w-full"
          />
          <TextField
            name="phone"
            id="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
            required
            className="w-full"
          />

          {error && (
            <Typography className="text-red-600 font-medium bg-red-50 px-4 py-3 rounded-lg">
              ✗ {error}
            </Typography>
          )}

          <Stack direction="row" className="gap-3 mt-2">
            <Button
              type="button"
              variant="outlined"
              onClick={onClose}
              className="flex-1 bg-red-500 text-white"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" className="flex-1" isLoading={loading}>
              Download JD
            </Button>
          </Stack>
        </form>
      </Stack>
    </Modal>
  );
}

'use client';

import { useState, useRef } from 'react';

import { sendCaseStudyDownloadEmail } from '@/actions/case-study';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  studyTitle: string;
}

export default function CaseStudyModal({ isOpen, onClose, studyTitle }: CaseStudyModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;

      if (!name || !email) {
        setError('Please fill in all required fields.');
        setLoading(false);
        return;
      }

      const result = await sendCaseStudyDownloadEmail({
        name,
        email,
        studyTitle,
      });

      if (result.success) {
        setSuccess(true);
        // Download PDF
        const downloadPdf = async () => {
          try {
            // Try to download the case study PDF
            const pdfUrl = `/case-studies/${studyTitle.toLowerCase().replace(/\s+/g, '-')}.pdf`;
            let response = await fetch(pdfUrl);

            if (!response.ok) {
              // If specific PDF not found, try default case study PDF
              response = await fetch('/case-studies/default-case-study.pdf');

              if (!response.ok) {
                // If case-studies folder doesn't exist, use default JD as fallback
                response = await fetch('/jds/default-jd.pdf');

                if (!response.ok) {
                  console.warn('PDF file not found, but email was sent successfully');
                  return; // Exit gracefully without throwing error
                }
              }
            }

            // Download the PDF
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${studyTitle.replace(/\s+/g, '-')}-Case-Study.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          } catch (downloadError) {
            console.error('PDF download error:', downloadError);
            // Don't show error to user as email was sent successfully
            // Just log it for debugging
          }
        };

        await downloadPdf();

        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 2000);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting case study form:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setError(null);
      setSuccess(false);
      if (formRef.current) {
        formRef.current.reset();
      }
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Stack className="gap-6">
        <Stack className="gap-2">
          <Typography variant="h4" className="font-medium text-primary-dark">
            Download Case Study
          </Typography>
          <Typography variant="body2" className="text-primary-dark/60">
            Please fill in your details to download <strong>{studyTitle}</strong>.
          </Typography>
        </Stack>

        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
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

          {error && (
            <Typography className="text-red-600 font-medium bg-red-50 px-4 py-3 rounded-lg">
              ✗ {error}
            </Typography>
          )}

          {success && (
            <Typography className="text-green-600 font-medium bg-green-50 px-4 py-3 rounded-lg">
              ✓ Thank you! Your download is starting...
            </Typography>
          )}

          <Stack direction="row" className="gap-3 mt-2">
            <Button
              type="button"
              variant="outlined"
              onClick={handleClose}
              className="flex-1"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" className="flex-1" isLoading={loading}>
              Download Now
            </Button>
          </Stack>
        </form>
      </Stack>
    </Modal>
  );
}

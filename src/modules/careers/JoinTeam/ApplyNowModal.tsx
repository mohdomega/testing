'use client';

import { useState, useRef } from 'react';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';

import { applyNow } from './applyAction';

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobCategory?: string;
  jobType?: string;
}

export default function ApplyNowModal({
  isOpen,
  onClose,
  jobTitle,
  jobCategory,
  jobType,
}: ApplyNowModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
      const phone = formData.get('phone') as string;
      const resume = formData.get('resume') as File;

      if (!name || !email || !phone) {
        setError('Please fill in all required fields.');
        setLoading(false);
        return;
      }

      if (!resume || resume.size === 0) {
        setError('Please upload your resume.');
        setLoading(false);
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(resume.type)) {
        setError('Please upload a PDF or image file (JPG, PNG) for your resume.');
        setLoading(false);
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (resume.size > maxSize) {
        setError('Resume file size should be less than 5MB.');
        setLoading(false);
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append('name', name);
      formDataToSend.append('email', email);
      formDataToSend.append('phone', phone);
      formDataToSend.append('resume', resume);
      formDataToSend.append('jobTitle', jobTitle);
      formDataToSend.append('jobCategory', jobCategory || '');
      formDataToSend.append('jobType', jobType || '');

      const result = await applyNow(formDataToSend);

      if (result.success) {
        setSuccess(true);
        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
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
      console.error('Error submitting application:', err);
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
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Stack className="gap-6">
        <Stack className="gap-2">
          <Typography variant="h4" className="font-medium text-primary-dark">
            Apply Now
          </Typography>
          <Typography variant="body2" className="text-primary-dark/60">
            Please fill in your details to apply for <strong>{jobTitle}</strong>
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
          <TextField
            name="phone"
            id="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
            required
            className="w-full"
          />

          <Stack className="gap-2">
            <Typography component="label" htmlFor="resume" variant="subtitle" className="font-medium">
              Resume <span className="text-red-500">*</span>
            </Typography>
            <input
              ref={fileInputRef}
              type="file"
              name="resume"
              id="resume"
              accept=".pdf,.jpg,.jpeg,.png"
              required
              className="px-4 py-3 text-md border border-black/10 rounded-xl text-secondary focus-visible:outline-secondary max-sm:text-sm w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary  hover:file:bg-primary/90 cursor-pointer"
            />
            <Typography variant="small" className="text-primary-dark/60">
              Accepted formats: PDF, JPG, PNG (Max size: 5MB)
            </Typography>
          </Stack>

          {error && (
            <Typography className="text-red-600 font-medium bg-red-50 px-4 py-3 rounded-lg">
              ✗ {error}
            </Typography>
          )}

          {success && (
            <Typography className="text-green-600 font-medium bg-green-50 px-4 py-3 rounded-lg">
              ✓ Application submitted successfully! We&apos;ll get back to you soon.
            </Typography>
          )}

          <Stack direction="row" className="gap-3 mt-2">
            <Button
              type="button"
              variant="outlined"
              onClick={handleClose}
              className="flex-1 bg-red-500 text-white"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" className="flex-1" isLoading={loading}>
              Submit Application
            </Button>
          </Stack>
        </form>
      </Stack>
    </Modal>
  );
}

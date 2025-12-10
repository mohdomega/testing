'use client';

import { useState } from 'react';
import Image from 'next/image';

import { sendCaseStudyDownloadEmail } from '@/actions/case-study';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Stack from '@/components/Stack';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUpRight from '/public/icons/arrow-top-right.svg';

interface StudyProps {
  title: string;
  image?: string | any;
  description: string;
  className?: string;
}

export default function Study({ title, description, image, className }: StudyProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;

      if (!name || !email) {
        alert('Please fill in all required fields.');
        setLoading(false);
        return;
      }

      const res = await sendCaseStudyDownloadEmail({
        name,
        email,
        studyTitle: title,
      });

      setLoading(false);

      if (res.success) {
        setEmailSent(true);
        // Simulate download or redirect here if needed
        setTimeout(() => {
          setIsModalOpen(false);
          setEmailSent(false); // Reset for next time
        }, 2000);
      } else {
        alert(res.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      <Stack className={cn('gap-6', className)}>
        <div className="w-full aspect-video bg-neutral-300 rounded-3xl relative overflow-hidden">
          <Image src={image} alt="service video img 1" className="w-full h-full object-cover" />
        </div>
        <Stack direction="row" className="gap-10">
          <Stack className="gap-2">
            <Typography variant="h5" className="font-medium">
              {title}
            </Typography>
            <Typography variant="body2" className="text-primary-dark/60">
              {description}
            </Typography>
          </Stack>
          <button onClick={() => setIsModalOpen(true)} className="group">
            <ArrowUpRight className="size-8 min-w-8 text-primary-dark cursor-pointer transition-transform group-hover:scale-110" />
          </button>
        </Stack>
      </Stack>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Stack className="gap-6 text-center items-center">
          <Typography variant="h3" className="text-primary-dark">
            Download Case Study
          </Typography>
          <Typography variant="body" className="text-neutral-600">
            Please fill in your details to download <strong>{title}</strong>.
          </Typography>

          {!emailSent ? (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <TextField name="name" id="name" placeholder="Your Name" required className="w-full" />
              <TextField
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full"
              />
              <Button type="submit" color="gradient" className="w-full mt-2" disabled={loading}>
                {loading ? 'Processing...' : 'Download Now'}
              </Button>
            </form>
          ) : (
            <div className="py-8 text-green-600 font-medium">Thank you! Your download is starting...</div>
          )}
        </Stack>
      </Modal>
    </>
  );
}

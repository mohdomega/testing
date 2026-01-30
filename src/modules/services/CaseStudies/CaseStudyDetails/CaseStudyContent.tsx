'use client';

import Link from 'next/link';
import Image from 'next/image';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { cn } from '@/lib';

import { CaseStudy } from '../data';
import DoubleQuotes from '/public/icons/testimonials/double quetes.svg';

interface CaseStudyContentProps {
  study: CaseStudy;
}

export default function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <Stack className="gap-10 sm:gap-20 pb-20">
      {/* Header */}
      <Stack className="gap-8 sm:gap-[60px]">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          className="gap-10 flex max-[1150px]:flex-col justify-between items-center"
        >
          <div className="flex flex-col gap-4 max-w-3xl">
            {study.fullContent.industry && (
              <span className="px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-primary-dark w-fit">
                {study.fullContent.industry}
              </span>
            )}
            <Typography
              variant="h1"
              className="text-4xl sm:text-6xl font-medium leading-tight text-primary-dark"
            >
              {study.title}
            </Typography>
          </div>
          <Typography className="text-secondary max-w-md text-md max-[1150px]:max-w-full w-full">
            {study.description}
          </Typography>
        </Stack>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-neutral-100">
          <Image src={study.image} alt={study.title} className="w-full h-full object-cover" />
        </div>
      </Stack>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 lg:gap-20">
        {/* Left Column: Content */}
        <Stack className="gap-12">
          {/* Business Context */}
          <section>
            <Typography variant="h3" className="text-2xl font-medium text-primary-dark mb-4">
              Business Context
            </Typography>
            <Typography className="text-md text-secondary leading-relaxed">
              {study.fullContent.businessContext}
            </Typography>
          </section>

          {/* Challenges */}
          <section>
            <Typography variant="h3" className="text-2xl font-medium text-primary-dark mb-4">
              Core Challenges
            </Typography>
            <ul className="list-disc pl-5 space-y-2">
              {study.fullContent.challenges.map((challenge, index) => (
                <li key={index}>
                  <Typography className="text-md text-secondary">{challenge}</Typography>
                </li>
              ))}
            </ul>
          </section>

          {/* Solution */}
          <section className="p-8 bg-neutral-50 rounded-3xl">
            <Typography variant="h3" className="text-2xl font-medium text-primary-dark mb-4">
              IDRMS Solution Approach
            </Typography>
            <Typography className="text-md text-secondary leading-relaxed mb-6">
              {study.fullContent.solution.approach}
            </Typography>
            <ul className="list-disc pl-5 space-y-2">
              {study.fullContent.solution.components.map((component, index) => (
                <li key={index}>
                  <Typography className="text-md text-secondary">{component}</Typography>
                </li>
              ))}
            </ul>
          </section>

          {/* Results */}
          <section>
            <Typography variant="h3" className="text-2xl font-medium text-primary-dark mb-4">
              Measurable Results
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.fullContent.results.map((result, index) => (
                <div key={index} className="p-4 rounded-xl border border-black/10 bg-white">
                  <Typography className="text-md font-medium text-primary-dark">{result}</Typography>
                </div>
              ))}
            </div>
          </section>

          {/* Why IDRMS / Why It Worked */}
          {(study.fullContent.whyIdrms || study.fullContent.whyItWorked) && (
            <section>
              <Typography variant="h3" className="text-2xl font-medium text-primary-dark mb-4">
                {study.fullContent.whyIdrms ? 'Why IDRMS' : 'Why It Worked'}
              </Typography>
              <ul className="list-disc pl-5 space-y-2">
                {(study.fullContent.whyIdrms || study.fullContent.whyItWorked)?.map((item, index) => (
                  <li key={index}>
                    <Typography className="text-md text-secondary">{item}</Typography>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </Stack>

        {/* Right Column: Sidebar / Testimonial / CTA */}
        <Stack className="gap-10 h-fit sticky top-24">
          {/* Testimonial Card */}
          <div className="bg-[#F2F0F7] text-primary-dark p-8 rounded-3xl relative overflow-hidden">
            <DoubleQuotes className="text-white/20 w-12 h-12 mb-6" />
            <Typography className="text-lg font-medium italic leading-relaxed mb-6 opacity-90 relative z-10">
              {study.testimonial}
            </Typography>
            <div className="w-20 h-1 bg-white/30 rounded-full" />
          </div>

          {/* CTA Box */}
          <div className="bg-[#F2F0F7] p-8 rounded-3xl text-center">
            <Typography variant="h4" className="text-xl font-bold text-primary-dark mb-6">
              Ready to transform your business?
            </Typography>
            <Button component={Link} href="/contact-us" className="w-full justify-center">
              {study.fullContent.cta}
            </Button>
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

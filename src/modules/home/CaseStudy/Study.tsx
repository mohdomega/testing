'use client';

import { ReactNode, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import CaseStudyModal from '@/modules/shared/CaseStudyModal';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useMediaQuery } from 'usehooks-ts';

import HomeVideoImg1 from '../../../../public/images/home-case-study-image-4.png';
interface StudyProps {
  step: number;
  title: string;
  description: string;
  highlightedFeatures: ReactNode;
  className?: string;
  image?: string | any;
  blogSlug?: string;
}

export default function Study({
  image,
  step,
  title,
  description,
  highlightedFeatures,
  className,
  blogSlug,
}: StudyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'center'] });

  const transformedScrollYProgress = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const y = useSpring(transformedScrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const isNonDesktop = useMediaQuery('(max-width:1023px)');

  const isOdd = step % 2 !== 0;

  return (
    <div
      ref={ref}
      className={cn(
        'relative col-span-3 grid grid-cols-subgrid grid-rows-1 group max-lg:col-span-2',
        className
      )}
    >
      {!isNonDesktop &&
        (isOdd ? (
          <Stack alignItems="flex-start" className="gap-6 text-white">
            <Stack className="gap-1.5 font-medium">
              <Typography variant="h3" className="max-sm:text-xl">
                {title}
              </Typography>
              <Typography variant="body2" className="text-white/60 max-sm:font-normal">
                {description}
              </Typography>
            </Stack>
            {highlightedFeatures}
            {blogSlug ? (
              <Button component={Link} href={`/blogs/${blogSlug}`} color="primary">
                View Case Study
              </Button>
            ) : (
              <Button color="primary" onClick={() => setIsModalOpen(true)}>
                View Case Study
              </Button>
            )}
          </Stack>
        ) : (
          <div className="bg-white/10 p-5 rounded-3xl">
            {/* <div className="bg-neutral-300 h-full rounded-2xl"></div> */}
            <div className=" h-full rounded-2xl relative overflow-hidden">
              <Image src={image} alt="video img 1" className="w-full h-full object-cover rounded-3x" />
            </div>
          </div>
        ))}
      <Stack alignItems="center" className="gap-2">
        <Stack
          justifyContent="center"
          alignItems="center"
          className="size-12 aspect-square rounded-full font-medium bg-white max-sm:size-10"
        >
          <Typography variant="title">{String(step).padStart(2, '0')}</Typography>
        </Stack>
        <div className="relative w-6 h-full max-sm:w-4">
          <div className="absolute w-full h-[calc(100%+4.5rem)] rounded-full bg-white/10 overflow-hidden group-last:h-full max-sm:h-[calc(100%+2rem)]">
            <motion.div initial={{ y: '-100%' }} style={{ y }} className="bg-white h-full rounded-full" />
          </div>
        </div>
      </Stack>
      {isNonDesktop ? (
        <Stack alignItems="flex-start" className="gap-6 text-white">
          <Stack className="gap-1.5 font-medium">
            <Typography variant="h3" className="max-sm:text-xl">
              {title}
            </Typography>
            <Typography variant="body2" className="text-white/60 max-sm:font-normal">
              {description}
            </Typography>
          </Stack>
          {highlightedFeatures}
          {blogSlug ? (
            <Button component={Link} href={`/blogs/${blogSlug}`} color="primary">
              View Case Study
            </Button>
          ) : (
            <Button onClick={() => setIsModalOpen(true)} color="primary">
              View Case Study
            </Button>
          )}
        </Stack>
      ) : isOdd ? (
        <div className="bg-white/10 p-5 rounded-3xl">
          {/* <div className="bg-neutral-300 h-full rounded-2xl"></div> */}
          <div className="h-full rounded-2xl relative overflow-hidden">
            <Image src={image} alt="video img 1" className="w-full h-full object-cover rounded-3x" />
          </div>
        </div>
      ) : (
        <Stack alignItems="flex-start" className="gap-6 text-white">
          <Stack className="gap-1.5 font-medium">
            <Typography variant="h3" className="max-sm:text-xl">
              {title}
            </Typography>
            <Typography variant="body2" className="text-white/60 max-sm:font-normal">
              {description}
            </Typography>
          </Stack>
          {highlightedFeatures}
          {blogSlug ? (
            <Button component={Link} href={`/blogs/${blogSlug}`} color="primary">
              View Case Study
            </Button>
          ) : (
            <Button onClick={() => setIsModalOpen(true)} color="primary">
              View Case Study
            </Button>
          )}
        </Stack>
      )}
      <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} studyTitle={title} />
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Calendar from '/public/images/BlogImages/Calendar.svg';
// import Facebook from '/public/images/BlogImages/facebook.svg';
import Facebook from '/public/icons/blogsDetailsIcons/Facebook';
// import Instagram from '/public/images/BlogImages/instagram-fill.svg';
import Instagram from '/public/icons/blogsDetailsIcons/Instagram';
// import Linkedin from '/public/images/BlogImages/linkedin.svg';
import Linkedin from '/public/icons/blogsDetailsIcons/LinkedIn';
// import Twitter from '/public/images/BlogImages/twitter.svg';
import Share from '/public/images/BlogImages/share alt.svg';

import TimeCircle from '/public/images/BlogImages/time-circle.svg';
import Sidebar from './Sidebar';
import Twitter from '/public/icons/blogsDetailsIcons/Twitter';
import { BlogPost } from '../data';

interface BlogContentProps {
  blog: BlogPost;
}

export default function BlogContent({ blog }: BlogContentProps) {
  const [isTwitterHover, setIsTwitterHover] = useState(false);
  const [isFacebookHover, setIsFacebookHover] = useState(false);
  const [isInstagramHover, setIsInstagramHover] = useState(false);
  const [isLinkedinHover, setIsLinkedinHover] = useState(false);
  return (
    <Stack className="gap-10">
      {/* Header */}
      <Stack className="gap-[60px]">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          className="gap-10 flex max-[1150px]:flex-col justify-between items-center"
        >
          <Typography variant="h1" className="text-6xl font-medium leading-tight ">
            {blog.title}
          </Typography>
          <Typography className="text-secondary max-w-md text-md max-[1150px]:max-w-full w-full">
            {blog.description}
          </Typography>
        </Stack>

        {/* Hero Image & Author */}
        <div className=" relative w-full aspect-video rounded-3xl overflow-hidden">
          <Image src={blog.heroImage} alt="Blog Hero" className="w-full h-full object-cover" />

          {/* Author Card */}
          <div className=" absolute bottom-6 left-6 bg-white p-4 rounded-[20px] flex items-center gap-6 max-sm:bottom-4 max-sm:left-4 max-sm:p-3 max-w-[362px] w-full min-h-[92px] ">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-yellow-500">
              <Image src={blog.author.image} alt="Author" className="w-full h-full object-cover" />
            </div>
            <div>
              <Typography variant="h6" className="font-medium text-xl">
                {blog.author.name}
              </Typography>
              <Typography variant="small" className="text-secondary text-md flex items-center gap-2">
                <TimeCircle />
                {blog.readTime}
              </Typography>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 px-8 py-4 bg-background rounded-full w-fit">
          <Calendar />
          <Typography variant="small" className="font-medium text-primary-dark text-[16px]">
            {blog.date}
          </Typography>
        </div>
      </Stack>

      {/* Content */}
      <Stack className="text-secondary leading-relaxed grid grid-cols-[1fr_400px] gap-20 max-xl:gap-10 max-lg:grid-cols-1">
        <Stack className="gap-6">
          {blog.content.sections.map((section, index) => (
            <Stack key={index}>
              <Typography variant="h3" className="text-2xl font-medium text-primary-dark">
                {section.title}
              </Typography>
              {section.paragraphs.map((paragraph, pIndex) => (
                <div key={pIndex}>
                  {pIndex > 0 && <br />}
                  <Typography
                    className={
                      pIndex === 0
                        ? 'mt-3 text-md font-regular text-secondary'
                        : 'text-md font-regular text-secondary'
                    }
                  >
                    {paragraph}
                  </Typography>
                </div>
              ))}
              {index === 1 && (
                <div className="max-w-[768px] h-[305px] w-full aspect-[2/1] rounded-3xl overflow-hidden mt-6">
                  <Image src={blog.contentImage} alt="Content Image" className="w-full h-full object-cover" />
                </div>
              )}
            </Stack>
          ))}

          {/* Footer / Tags / Share */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className=" mt-4 max-sm:flex-col max-sm:gap-6 max-sm:items-start"
          >
            <div className="flex gap-3">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-[13px] rounded-full border border-black/10 text-md font-regular text-primary-dark"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Typography
                variant="small"
                className="font-regular text-primary-dark text-md flex items-center gap-[10px]"
              >
                <Share />
                Share
              </Typography>
              <div className="flex gap-[8px]">
                <Link
                  href="#"
                  onMouseEnter={() => setIsTwitterHover(true)}
                  onMouseLeave={() => setIsTwitterHover(false)}
                  className="flex items-center justify-center rounded-full w-[50px] h-[50px] border border-[#DCDCDC] text-primary-dark hover:bg-primary-dark hover:text-white group"
                >
                  {isTwitterHover ? <Twitter BgFill="white" stroke="#1E0A52" /> : <Twitter />}
                </Link>
                <Link
                  href="#"
                  onMouseEnter={() => setIsFacebookHover(true)}
                  onMouseLeave={() => setIsFacebookHover(false)}
                  className="flex items-center justify-center rounded-full w-[50px] h-[50px] border border-[#DCDCDC] text-primary-dark hover:bg-primary-dark hover:text-white"
                >
                  {isFacebookHover ? <Facebook BgFill="white" /> : <Facebook />}
                </Link>
                <Link
                  href="#"
                  onMouseEnter={() => setIsInstagramHover(true)}
                  onMouseLeave={() => setIsInstagramHover(false)}
                  className="flex items-center justify-center rounded-full w-[50px] h-[50px] border border-[#DCDCDC] text-primary-dark hover:bg-primary-dark hover:text-white"
                >
                  {isInstagramHover ? <Instagram BgFill="white" rectFill="#1E0A52" /> : <Instagram />}
                </Link>
                <Link
                  href="#"
                  onMouseEnter={() => setIsLinkedinHover(true)}
                  onMouseLeave={() => setIsLinkedinHover(false)}
                  className="flex items-center justify-center rounded-full w-[50px] h-[50px] border border-[#DCDCDC] text-primary-dark hover:bg-primary-dark hover:text-white"
                >
                  {isLinkedinHover ? <Linkedin BgFill="white" rectFill="#1E0A52" /> : <Linkedin />}
                </Link>
              </div>
            </div>
          </Stack>
        </Stack>

        <Sidebar />
      </Stack>
    </Stack>
  );
}

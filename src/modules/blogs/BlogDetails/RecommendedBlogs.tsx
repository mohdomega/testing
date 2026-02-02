'use client';

import Link from 'next/link';

import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/Carousel';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import Card from '@/modules/home/Blogs/Card';

import { blogPosts } from '../data';

import ArrowLeft from '/public/icons/servicePageCraousalIcons/arrow left.svg';
import ArrowRight from '/public/icons/servicePageCraousalIcons/arrow right.svg';

export default function RecommendedBlogs() {
  // const featuredBlogs = blogPosts.slice(0, 5);
  const featuredBlogs = [...blogPosts, ...blogPosts];

  return (
    <Stack className="bg-background mt-20 p-4 md:p-15 lg:p-20">
      <div className="max-w-[1440px] w-full mb-20  mx-auto">
        <Stack className="gap-1 mb-[60px]">
          <TitleChip>Latest Post</TitleChip>
          <Typography variant="h2" className="text-gradient text-6xl">
            Recommended Blogs
          </Typography>
        </Stack>

        <Stack alignItems="center" className="gap-12">
          {/* Carousel Section */}
          <div className="relative w-full h-[404px] ">
            {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none max-lg:w-10" /> */}
            {/* <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none max-lg:w-10" /> */}
            <Carousel opts={{ loop: true, align: 'start', slidesToScroll: 1 }} className=" w-full h-full">
              {/* <CarouselContent className="gap-[38px] h-full items-stretch "> */}
              <CarouselContent className="flex items-stretch gap-0">
                {featuredBlogs.map((blog, index) => (
                  <CarouselItem key={index} className="basis-auto flex">
                    <div className="pr-10 max-lg:pr-5 flex h-full">
                      <Card
                        className="bg-white flex flex-col max-w-[280px] min-h-[404px] h-full"
                        key={blog.slug}
                        blog={blog}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CustomCarouselArrows />
            </Carousel>
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

function CustomCarouselArrows() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <>
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          'w-[60px] h-[60px] rounded-full bg-white border border-black/10 flex items-center justify-center transition-opacity hover:opacity-80 absolute left-[-80px] top-1/2 -translate-y-1/2 z-20 max-lg:hidden',
          !canScrollPrev && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Previous"
      >
        <span className="flex items-center justify-center w-full h-full">
          <ArrowLeft className="w-[24px] h-[24px] text-primary-dark m-auto" />
        </span>
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          'w-[60px] h-[60px] rounded-full bg-white border border-black/10 flex items-center justify-center transition-opacity hover:opacity-80 absolute right-[-80px] top-1/2 -translate-y-1/2 z-20 max-lg:hidden',
          !canScrollNext && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Next"
      >
        <span className="flex items-center justify-center w-full h-full">
          <ArrowRight className="w-[24px] h-[24px] text-primary-dark m-auto" />
        </span>
      </button>
    </>
  );
}

'use client';

import Link from 'next/link';
import { cn } from '@/lib';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';

import { blogPosts } from '../data';
import Card from '@/modules/home/Blogs/Card';
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/Carousel';
import ArrowLeft from '/public/icons/servicePageCraousalIcons/arrow left.svg';
import ArrowRight from '/public/icons/servicePageCraousalIcons/arrow right.svg';

export default function RecommendedBlogs() {
  // const featuredBlogs = blogPosts.slice(0, 5);
  const featuredBlogs = [...blogPosts, ...blogPosts];

  return (
    <Stack className="bg-background mt-20 p-4 md:p-10 lg:p-20">
      <div className="max-w-[1440px] w-full  mx-auto">
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
              <CarouselContent className="gap-[0px] h-full ">
                {featuredBlogs.map((blog, index) => {
                  return (
                    <CarouselItem key={index} className="basis-auto h-full flex">
                      <div className="h-full pr-10 max-lg:pr-5 flex">
                        <Card
                          className="bg-white h-full flex flex-col max-w-[280px] min-h-[404px]"
                          key={blog.slug}
                          blog={blog}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="max-lg:hidden absolute right-0 top-[-140px] flex justify-center items-center gap-4 mt-[20px]">
                <CustomCarouselArrows />
              </div>
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
    <div className="flex flex-row gap-8">
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          'w-[60px] h-[60px] rounded-full bg-white border border-black/10 flex items-center justify-center transition-opacity hover:opacity-80',
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
          'w-[60px] h-[60px] rounded-full bg-white border border-black/10 flex items-center justify-center transition-opacity hover:opacity-80',
          !canScrollNext && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Next"
      >
        <span className="flex items-center justify-center w-full h-full">
          <ArrowRight className="w-[24px] h-[24px] text-primary-dark m-auto" />
        </span>
      </button>
    </div>
  );
}

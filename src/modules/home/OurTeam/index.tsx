import Link from 'next/link';

import Button from '@/components/Button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/Carousel';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';
import TeamImg1 from '../../../../public/images/TeamImages/team-image-1.png';
import TeamImg2 from '../../../../public/images/TeamImages/team-image-2.png';
import TeamImg3 from '../../../../public/images/TeamImages/team-image-3.png';
import TeamImg4 from '../../../../public/images/TeamImages/team-image-4.png';
import TeamImg5 from '../../../../public/images/TeamImages/team-image-5.png';

import ProfileCard from './ProfileCard';

interface OurTeamProps {
  className?: string;
}

export default function OurTeam({ className }: OurTeamProps) {
  return (
    <Stack component="section" alignItems="center" className={cn('gap-12 py-17.5 bg-background ', className)}>
      <Stack alignItems="center" className="gap-4 ">
        <TitleChip>Our visionaries</TitleChip>
        <Typography variant="h2" className="text-gradient">
          Meet the Team
        </Typography>
      </Stack>
      {/* Carousel */}
      {/* <Stack direction="row" className="gap-10"> */}
      <div className="w-full">
        <Carousel opts={{ align: 'center', loop: true }}>
          <CarouselContent className="flex ">
            <CarouselItem className="flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard
                img={TeamImg3}
                name="Liam Carter"
                tagline="Streamlines operations"
                role="Founder"
              />
            </CarouselItem>
            <CarouselItem className="flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard
                img={TeamImg2}
                name="Stephanie Moore"
                tagline="Crafts intuitive designs"
                role="Design Head"
              />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard
                img={TeamImg1}
                name="Mateo Rossi"
                tagline="Builds smart logistics tech"
                role="CTO"
              />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard img={TeamImg4} name="Ethan Brooks" tagline="Innovates processes" role="CMO" />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard
                img={TeamImg5}
                name="Jennifer Rossi"
                tagline="Crafts intuitive designs"
                role="CFO"
              />
            </CarouselItem>

            <CarouselItem className="flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard
                img={TeamImg3}
                name="Liam Carter"
                tagline="Streamlines operations"
                role="Founder"
              />
            </CarouselItem>
            <CarouselItem className="flex-none w-[340px]  mr-[40px] shrink-0">
              <ProfileCard
                img={TeamImg2}
                name="Stephanie Moore"
                tagline="Crafts intuitive designs"
                role="Design Head"
              />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard
                img={TeamImg1}
                name="Mateo Rossi"
                tagline="Builds smart logistics tech"
                role="CTO"
              />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px]  mr-[40px] shrink-0">
              <ProfileCard img={TeamImg4} name="Ethan Brooks" tagline="Innovates processes" role="CMO" />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px]  mr-[40px] shrink-0">
              <ProfileCard
                img={TeamImg5}
                name="Jennifer Rossi"
                tagline="Crafts intuitive designs"
                role="CFO"
              />
            </CarouselItem>

            <CarouselItem className="flex-none w-[340px]  mr-[40px] shrink-0">
              <ProfileCard
                img={TeamImg3}
                name="Liam Carter"
                tagline="Streamlines operations"
                role="Founder"
              />
            </CarouselItem>
            <CarouselItem className="flex-none w-[340px]  mr-[40px] shrink-0">
              <ProfileCard
                img={TeamImg2}
                name="Stephanie Moore"
                tagline="Crafts intuitive designs"
                role="Design Head"
              />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard
                img={TeamImg1}
                name="Mateo Rossi"
                tagline="Builds smart logistics tech"
                role="CTO"
              />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px] mr-[40px]  shrink-0">
              <ProfileCard img={TeamImg4} name="Ethan Brooks" tagline="Innovates processes" role="CMO" />
            </CarouselItem>
            <CarouselItem className=" flex-none w-[340px]  mr-[40px] shrink-0">
              <ProfileCard
                img={TeamImg5}
                name="Jennifer Rossi"
                tagline="Crafts intuitive designs"
                role="CFO"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      {/* </Stack> */}
      <Button component={Link} href="/about" color="gradient">
        View all
      </Button>
    </Stack>
  );
}

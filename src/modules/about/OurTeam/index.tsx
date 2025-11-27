import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ProfileCard from './ProfileCard';

import TeamImg1 from '../../../../public/images/TeamImages/team-image-1.png';
import TeamImg2 from '../../../../public/images/TeamImages/team-image-2.png';
import TeamImg3 from '../../../../public/images/TeamImages/team-image-3.png';
import TeamImg4 from '../../../../public/images/TeamImages/team-image-4.png';
import TeamImg5 from '../../../../public/images/TeamImages/team-image-5.png';
import TeamImg6 from '../../../../public/images/TeamImages/team-image-6.png';
import TeamImg7 from '../../../../public/images/TeamImages/team-image-7.png';
import TeamImg8 from '../../../../public/images/TeamImages/team-image-8.png';
import TeamImg9 from '../../../../public/images/TeamImages/team-image-9.png';

interface OurTeamProps {
  className?: string;
}

export default function OurTeam({ className }: OurTeamProps) {
  return (
    <Stack alignItems="center" className={cn('gap-15 px-20 py-17.5', className)}>
      <Stack alignItems="center" className="gap-4">
        <TitleChip>Our visionaries</TitleChip>
        <Typography variant="h2" className="text-gradient text-center">
          Meet the Team
        </Typography>
      </Stack>
      <Stack className="gap-10">
        <Stack direction="row" className="gap-10">
          <Stack className="gap-10">
            <ProfileCard img={TeamImg3} justifyBetween={true} name="Liam Carter" tagline="Streamlines operations" role="Founder" />
            <Stack direction="row" className="gap-10">
              <ProfileCard
                img={TeamImg2}
                name="Stephanie Moore "
                tagline="Crafts intuitive designs"
                role="Design Head"
              />
              <ProfileCard
                img={TeamImg7}
                name="Cristina Jones"
                tagline="Builds smart logistics tech"
                role="Sr.HR Manager"
              />
            </Stack>
          </Stack>
          <Stack direction="column-reverse" className="gap-10">
            <ProfileCard img={TeamImg1} justifyBetween={true} name="Mateo Rossi" tagline="Builds smart logistics tech" role="CTO" />
            <Stack direction="row" className="gap-10">
              <ProfileCard
                img={TeamImg5}
                name="Jennifer Rossi"
                tagline="Crafts intuitive designs"
                role="CFO"
              />
              <ProfileCard
                img={TeamImg6}
                name="Edward Davids"
                tagline="Crafts intuitive designs"
                role="Sr.Product Manager"
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" className="gap-10 *:w-full">
          <ProfileCard img={TeamImg4} name="Ethan Brooks" tagline="Innovates processes" role="CMO" />
          <ProfileCard img={TeamImg8} name="Liam Payne" tagline="Innovates processes" role="COO" />
          <ProfileCard
            img={TeamImg9}
            name="Jessica Moore"
            tagline="Innovates processes"
            role="Sr.Marketing Manager"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

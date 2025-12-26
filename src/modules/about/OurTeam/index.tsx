// import Stack from '@/components/Stack';
// import TitleChip from '@/components/TitleChip';
// import Typography from '@/components/Typography';
// import { cn } from '@/lib';

// import ProfileCard from './ProfileCard';

// import TeamImg1 from '../../../../public/images/TeamImages/team-image-1.png';
// import TeamImg2 from '../../../../public/images/TeamImages/team-image-2.png';
// import TeamImg3 from '../../../../public/images/TeamImages/team-image-3.png';
// import TeamImg4 from '../../../../public/images/TeamImages/team-image-4.png';
// import TeamImg5 from '../../../../public/images/TeamImages/team-image-5.png';
// import TeamImg6 from '../../../../public/images/TeamImages/team-image-6.png';
// import TeamImg7 from '../../../../public/images/TeamImages/team-image-7.png';
// import TeamImg8 from '../../../../public/images/TeamImages/team-image-8.png';
// import TeamImg9 from '../../../../public/images/TeamImages/team-image-9.png';

// interface OurTeamProps {
//   className?: string;
// }

// export default function OurTeam({ className }: OurTeamProps) {
//   return (
//     <Stack
//       id="our-team"
//       alignItems="center"
//       className={cn('gap-8 md:gap-15 px-4 md:px-20 py-10 md:py-17.5', className)}
//     >
//       <Stack alignItems="center" className="gap-4">
//         <TitleChip>Our visionaries</TitleChip>
//         <Typography variant="h2" className="text-gradient text-center">
//           Meet the Team
//         </Typography>
//       </Stack>
//       <Stack className="gap-6 md:gap-10 max-w-[1240px] w-full h-fit">
//         {/* Team Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full h-fit">
//           {/* Left Large Column Group */}
//           <div className="flex flex-col gap-6 md:gap-10 w-full h-fit">
//             <div className="w-full">
//               <ProfileCard
//                 img={TeamImg3}
//                 justifyBetween={true}
//                 name="Liam Carter"
//                 tagline="Streamlines operations"
//                 role="Founder"
//                 className="lg:aspect-[21/20] aspect-[4/5]"
//               />
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full h-fit">
//               <ProfileCard
//                 img={TeamImg2}
//                 name="Stephanie Moore"
//                 tagline="Crafts intuitive designs"
//                 role="Design Head"
//                 className="aspect-[4/5] lg:aspect-[3/4]"
//               />
//               <ProfileCard
//                 img={TeamImg7}
//                 name="Cristina Jones"
//                 tagline="Builds smart logistics tech"
//                 role="Sr. HR Manager"
//                 className="aspect-[4/5] lg:aspect-[3/4]"
//               />
//             </div>
//           </div>

//           {/* Right Large Column Group */}
//           <div className="flex flex-col lg:flex-col-reverse gap-6 md:gap-10 w-full h-fit">
//             <div className="w-full">
//               <ProfileCard
//                 img={TeamImg1}
//                 justifyBetween={true}
//                 name="Mateo Rossi"
//                 tagline="Builds smart logistics tech"
//                 role="CTO"
//                 className="lg:aspect-[21/20] aspect-[4/5]"
//               />
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full h-fit">
//               <ProfileCard
//                 img={TeamImg5}
//                 name="Jennifer Rossi"
//                 tagline="Crafts intuitive designs"
//                 role="CFO"
//                 className="aspect-[4/5] lg:aspect-[3/4]"
//               />
//               <ProfileCard
//                 img={TeamImg6}
//                 name="Edward Davids"
//                 tagline="Crafts intuitive designs"
//                 role="Sr. Product Manager"
//                 className="aspect-[4/5] lg:aspect-[3/4]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Row - 3 columns on desktop */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full h-fit">
//           <ProfileCard
//             img={TeamImg4}
//             name="Ethan Brooks"
//             tagline="Innovates processes"
//             role="CMO"
//             className="aspect-[4/5] lg:aspect-[4/3.5]"
//           />
//           <ProfileCard
//             img={TeamImg8}
//             name="Liam Payne"
//             tagline="Innovates processes"
//             role="COO"
//             className="aspect-[4/5] lg:aspect-[4/3.5]"
//           />
//           <ProfileCard
//             img={TeamImg9}
//             name="Jessica Moore"
//             tagline="Innovates processes"
//             role="Sr. Marketing Manager"
//             className="aspect-[4/5] lg:aspect-[4/3.5] sm:col-span-2 lg:col-span-1"
//           />
//         </div>
//       </Stack>
//     </Stack>
//   );
// }

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

// 🔹 2 extra images (same repeat ya new)
import TeamImg10 from '../../../../public/images/TeamImages/team-image-1.png';
import TeamImg11 from '../../../../public/images/TeamImages/team-image-2.png';
import TeamImg12 from '../../../../public/images/TeamImages/team-image-3.png';

interface OurTeamProps {
  className?: string;
}

const TEAM_MEMBERS = [
  { img: TeamImg1, name: 'Mateo Rossi', role: 'CTO', tagline: 'Builds smart logistics tech' },
  { img: TeamImg2, name: 'Stephanie Moore', role: 'Design Head', tagline: 'Crafts intuitive designs' },
  { img: TeamImg3, name: 'Liam Carter', role: 'Founder', tagline: 'Streamlines operations' },
  { img: TeamImg4, name: 'Ethan Brooks', role: 'CMO', tagline: 'Innovates processes' },
  { img: TeamImg5, name: 'Jennifer Rossi', role: 'CFO', tagline: 'Crafts intuitive designs' },
  { img: TeamImg6, name: 'Edward Davids', role: 'Sr. Product Manager', tagline: 'Crafts intuitive designs' },
  { img: TeamImg7, name: 'Cristina Jones', role: 'Sr. HR Manager', tagline: 'Builds smart logistics tech' },
  { img: TeamImg8, name: 'Liam Payne', role: 'COO', tagline: 'Innovates processes' },
  { img: TeamImg9, name: 'Jessica Moore', role: 'Sr. Marketing Manager', tagline: 'Innovates processes' },
  { img: TeamImg10, name: 'Noah Smith', role: 'Tech Lead', tagline: 'Leads engineering teams' },
  { img: TeamImg11, name: 'Olivia Brown', role: 'UX Manager', tagline: 'Improves user experience' },
  { img: TeamImg12, name: 'William Johnson', role: 'QA Lead', tagline: 'Ensures product quality' },
];

export default function OurTeam({ className }: OurTeamProps) {
  return (
    <Stack
      id="our-team"
      alignItems="center"
      className={cn('gap-8 md:gap-15 px-4 md:px-20 py-10 md:py-17.5', className)}
    >
      <Stack alignItems="center" className="gap-4">
        <TitleChip>Our visionaries</TitleChip>
        <Typography variant="h2" className="text-gradient text-center">
          Meet the Team
        </Typography>
      </Stack>

      <div className="max-w-[1240px] w-full">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <ProfileCard
              key={index}
              img={member.img}
              name={member.name}
              role={member.role}
              tagline={member.tagline}
              className="aspect-[3/4]" // same size for all cards
            />
          ))}
        </div>
      </div>
    </Stack>
  );
}

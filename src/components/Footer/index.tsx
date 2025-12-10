import Image from 'next/image';
import Link from 'next/link';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import { contactInfo } from './contact';
import { routes } from './routes';
import { socialMedia } from './socialMedia';

import Logo from '/public/icons/main-logo.svg';
import IndiaFlag from '/public/images/india-flag.png';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('pb-10 bg-[url("/images/bg-gradient.png")] bg-cover w-full', className)}>
      {/* <div className="max-w-[1440px] w-full mx-auto px-20 pt-20 pb-10 max-lg:px-15 max-lg:pt-15 max-sm:px-6 max-sm:pt-10"> */}
      <div className=" w-full mx-auto px-20 pt-20 pb-10 max-lg:px-15 max-lg:pt-15 max-sm:px-6 max-sm:pt-10">
        <Stack divider={<hr className="border-none h-0.5 bg-white/10" />} className="gap-10 text-white">
          <Stack direction="row" className="gap-10 max-lg:flex-col">
            <Stack className="flex-1 gap-10">
              <Stack className="gap-4 max-lg:items-center max-lg:text-center">
                <Logo />
                <Typography variant="body2" className="text-white/60 max-w-105">
                  We are a Salesforce implementation company crafting tailored solutions that drive growth,
                  enhance customer journeys, and enable smart, data-driven decisions.
                </Typography>
                <Stack direction="row" className="gap-4 max-sm:hidden">
                  {contactInfo.map(({ icon: Icon, label, link }) => (
                    <Stack
                      key={label}
                      component={Link}
                      href={link}
                      direction="row"
                      alignItems="center"
                      className="gap-4"
                    >
                      <div className="p-4 rounded-full border border-white/10">
                        <Icon className="size-4" />
                      </div>
                      <Typography className="text-white/60 hover:text-white transition duration-300">
                        {label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack className="gap-4">
                <Typography variant="body2" className="text-white/60">
                  Follow us at
                </Typography>
                <Stack direction="row" className="gap-4">
                  {socialMedia.map(({ icon: Icon, label, link }) => (
                    <Stack
                      key={label}
                      component={Link}
                      href={link}
                      justifyContent="center"
                      alignItems="center"
                      className="size-12 border border-white/10 rounded-full"
                    >
                      <Icon className="size-5" />
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" className="flex-1 gap-20 max-sm:flex-col max-lg:gap-10">
              <Stack direction="row" className="gap-16">
                <Stack className="gap-4">
                  <Typography>Company</Typography>
                  <Stack component="ul" className="gap-3 text-white/60">
                    {routes.map(({ name, path }) => (
                      <li key={name} className="whitespace-nowrap hover:text-white transition duration-300">
                        <Typography component={Link} href={path}>
                          {name}
                        </Typography>
                      </li>
                    ))}
                  </Stack>
                </Stack>
                <Stack className="gap-4 hidden max-sm:flex">
                  {contactInfo.map(({ icon: Icon, label, link }) => (
                    <Stack
                      key={label}
                      component={Link}
                      href={link}
                      direction="row"
                      alignItems="center"
                      className="gap-4"
                    >
                      <div className="p-4 rounded-full border border-white/10">
                        <Icon className="size-4" />
                      </div>
                      <Typography className="text-white/60 hover:text-white transition duration-300">
                        {label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack className="gap-4">
                <Typography>Contact Us</Typography>
                <Stack className="gap-6 text-white/60">
                  <Stack direction="row" alignItems="flex-start" className="gap-4">
                    <div className="p-3.5 border border-white/10 rounded-full">
                      <Image src={IndiaFlag} alt="india flag" className="w-5 min-w-5 h-4" />
                    </div>
                    <Typography>
                      1st Floor, Sri Lakshmi Narasimha Arcade, 6, Bannerghatta Rd, next to Bandhan bank, KEB
                      Colony, Opp. Jayadeva Hospital, Bengaluru, Karnataka 560029.
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="flex-start" className="gap-4">
                    <div className="p-3.5 border border-white/10 rounded-full">
                      <Image src={IndiaFlag} alt="india flag" className="w-5 min-w-5 h-4" />
                    </div>
                    <Typography>
                      1st Floor, Sri Lakshmi Narasimha Arcade, 6, Bannerghatta Rd, next to Bandhan bank, KEB
                      Colony, Opp. Jayadeva Hospital, Bengaluru, Karnataka 560029.
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="flex-start" className="gap-4">
                    <div className="p-3.5 border border-white/10 rounded-full">
                      <Image src={IndiaFlag} alt="india flag" className="w-5 min-w-5 h-4" />
                    </div>
                    <Typography>
                      1st Floor, Sri Lakshmi Narasimha Arcade, 6, Bannerghatta Rd, next to Bandhan bank, KEB
                      Colony, Opp. Jayadeva Hospital, Bengaluru, Karnataka 560029.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItems="center" className="gap-3">
            <Typography variant="body2" className="text-white/60">
              © {new Date().getFullYear()}. All rights reserved by IDRMS Technology Pvt. Ltd.
            </Typography>
            <Typography>
              Website by{' '}
              <Link href="https://techanzo.com" target="_blank" className="font-bold">
                Techanzo
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </div>
    </footer>
  );
}

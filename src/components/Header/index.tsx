'use client';

import { useState } from 'react';

import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import { cn } from '@/lib';
import { useMotionValueEvent, useScroll } from 'motion/react';

import ForDesktop from '../MediaQuery/ForDesktop';
import ForNonDesktop from '../MediaQuery/ForNonDesktop';
import NavLink from './NavLink';
import { routes } from './routes';

import Logo from '/public/icons/main-logo.svg';
import MenuIcon from '/public/icons/menu-icon.svg';
import DownArrowIcon from '/public/icons/chevron down.svg';
import ChevronDownSvg from '/public/icons/ChevronDownSvg';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState<any>({});

  useMotionValueEvent(scrollY, 'change', () => {
    setIsScrolled((scrollY.getPrevious() ?? 0) > 100);
  });

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className={className}>
      <ForDesktop>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={cn(
            'bg-white/10 rounded-3xl mx-10 px-6 py-3 backdrop-blur-xl transition-all duration-300',
            { 'bg-white shadow-xl': isScrolled }
          )}
        >
          <Logo className={cn(isScrolled ? 'text-black' : 'text-white')} />
          <nav>
            <Stack component="ul" direction="row" className="gap-8">
              {routes.map(({ name, path, children }) => (
                // <li key={name} className="hover:scale-105 active:scale-95 transition duration-300">
                <li
                  key={name}
                  className="relative group hover:scale-105 active:scale-95 transition duration-300"
                >
                  <NavLink
                    // href={path}
                    href={path}
                    className={cn(
                      'p-1 text-white data-[active=true]:text-accent font-semibold flex items-center gap-2 justify-center h-6',
                      {
                        'text-black': isScrolled,
                      }
                    )}
                    onClick={(e: any) => {
                      if (children) e.preventDefault(); // ❗ don't navigate, just open dropdown
                    }}
                  >
                    {name}
                    {children && (
                      <span>
                        {isScrolled ? <ChevronDownSvg color={'black'} /> : <ChevronDownSvg color="white" />}
                      </span>
                    )}
                  </NavLink>
                  {/* Desktop Dropdown */}
                  {children && (
                    <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white/10 rounded-2xl  backdrop-blur-xl transition-all duration-300 p-[16px] min-w-[160px] z-50">
                      {children.map((sub: any, i) => (
                        <div key={sub.name} className="flex flex-col">
                          <Link
                            href={sub.path}
                            className="px-3 py-2 rounded-lg hover:bg-white/30 text-[16px] weight-500 text-white whitespace-nowrap"
                          >
                            {sub.name}
                          </Link>

                          {i < children.length - 1 && (
                            <div className="h-[1px] w-full bg-white/10 my-[12px]" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </Stack>
          </nav>
          <Button component={Link} href="/contact-us" color="accent" className="font-semibold text-black">
            Contact Us
          </Button>
        </Stack>
      </ForDesktop>
      <ForNonDesktop mediaQuery="(max-width: 1023px)">
        <div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={cn(
              'bg-white/10 rounded-2xl mx-10 px-6 py-4 backdrop-blur-xl transition-all duration-300',
              {
                'bg-white': isScrolled,
              }
            )}
          >
            <Logo className={cn(isScrolled ? 'text-black' : 'text-white')} />
            <Button variant="icon" onClick={handleToggle}>
              <MenuIcon className={cn(isScrolled ? 'text-black' : 'text-white')} />
            </Button>
          </Stack>
          {isOpen && (
            <Stack
              component="nav"
              justifyContent="space-between"
              className={cn(
                'bg-white/10 rounded-2xl mt-3 mx-10 px-4 py-4 backdrop-blur-xl transition-all duration-300',
                {
                  'bg-white': isScrolled,
                }
              )}
            >
              <Stack component="ul" className="gap-4" divider={<hr className="border-t-white/10" />}>
                {routes.map(({ name, path, children }) => (
                  <li key={name} className="hover:scale-105 active:scale-95 transition duration-300">
                    <NavLink
                      href={path}
                      // href={children ? '' : path}
                      className={cn(
                        'px-1 py-0 text-white data-[active=true]:text-accent font-medium flex items-center justify-between',
                        {
                          'text-black': isScrolled,
                        }
                      )}
                      onClick={(e: any) => {
                        if (children) {
                          e.preventDefault(); // ← navigation stop
                          setIsOpenMenu((prev: any) => ({
                            ...prev,
                            [name]: !prev[name],
                          }));
                        } else {
                          setIsOpen(false); // close menu on navigation
                        }
                      }}
                    >
                      {name}
                      {children && (
                        <span
                          className={cn(
                            isOpenMenu[name] ? 'rotate-360' : 'rotate-270',
                            ' transition-all duration-300'
                          )}
                        >
                          <ChevronDownSvg />
                        </span>
                      )}
                    </NavLink>

                    {children && isOpenMenu[name] && (
                      <div className=" ml-2 mt-1 flex flex-col gap-2">
                        {children.map((sub) => (
                          <NavLink
                            key={sub.name}
                            href={sub.path}
                            className="text-sm text-white/60 hover:text-white"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </Stack>
            </Stack>
          )}
        </div>
      </ForNonDesktop>
    </header>
  );
}

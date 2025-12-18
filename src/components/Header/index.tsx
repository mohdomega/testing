'use client';

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
import ChevronDownSvg from '/public/icons/ChevronDownSvg';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState<any>({});
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);

  const pathname = usePathname();
  const isBlogDetails = pathname?.startsWith('/blogs/') && pathname !== '/blogs';
  const isPrivacyPolicy = pathname === '/privacy-policy';

  // Combined condition for pages that need light header styling
  const isLightHeaderPage = isBlogDetails || isPrivacyPolicy;

  useMotionValueEvent(scrollY, 'change', () => {
    setIsScrolled((scrollY.getPrevious() ?? 0) > 100);
  });

  const [isOpen, setIsOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLElement>(null);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  /* 
   * Hover & Delay Logic 
   */
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDesktopMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDesktopMenu(null);
    }, 300); // 300ms delay to keep it open briefly
  };

  // Close desktop dropdown when clicking outside (still useful if clicks happen elsewhere)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target as Node)) {
        setOpenDesktopMenu(null);
      }
    }

    if (openDesktopMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [openDesktopMenu]);

  return (
    <header className={className}>
      <ForDesktop>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={cn('rounded-3xl mx-10 px-6 py-3 transition-all duration-300', {
            'bg-white/10 backdrop-blur-xl': !isScrolled && !isLightHeaderPage,
            'bg-background': !isScrolled && isLightHeaderPage,
            'bg-white shadow-xl': isScrolled,
          })}
        >
          <Link href="/">
            <Logo
              className={cn(
                !isScrolled && isLightHeaderPage ? '#1E0A52' : isScrolled ? 'text-black' : 'text-white'
              )}
            />
          </Link>
          <nav ref={desktopMenuRef}>
            <Stack component="ul" direction="row" className="gap-8">
              {routes.map(({ name, path, children }) => (
                <li
                  key={name}
                  className="relative transition duration-300"
                  onMouseEnter={() => children && handleMouseEnter(name)}
                  onMouseLeave={() => children && handleMouseLeave()}
                >
                  <NavLink
                    href={path}
                    className={cn(
                      'p-1 text-white data-[active=true]:text-accent font-semibold flex items-center gap-2 justify-center h-6 hover:scale-105 active:scale-95 transition-transform duration-300',
                      {
                        'text-primary-dark': !isScrolled && isLightHeaderPage,
                        'text-black': isScrolled,
                      }
                    )}
                    onClick={(e: any) => {
                      if (children) {
                        if (name === 'Services') {
                          setOpenDesktopMenu(null);
                          return
                        }
                        e.preventDefault();
                      } else {
                        setOpenDesktopMenu(null);
                      }
                    }}
                  >
                    {name}
                    {children && (
                      <span
                        className={cn(
                          'transition-transform duration-300',
                          openDesktopMenu === name && 'rotate-180'
                        )}
                      >
                        {!isScrolled && isLightHeaderPage ? (
                          <ChevronDownSvg color={'#1E0A52'} />
                        ) : isScrolled ? (
                          <ChevronDownSvg color={'black'} />
                        ) : (
                          <ChevronDownSvg color="white" />
                        )}
                      </span>
                    )}
                  </NavLink>
                  {/* Desktop Dropdown */}
                  {children && openDesktopMenu === name && (
                    <div
                      className={cn(
                        'absolute left-[-24px] top-full mt-1 flex flex-col rounded-2xl transition-all duration-300 p-[16px] min-w-[160px] z-50 shadow-xl',
                        // isScrolled ? 'bg-white' : 'bg-white/10 backdrop-blur-xl'
                        isScrolled ? 'bg-white' : 'bg-white'
                      )}
                    >
                      {children.map((sub: any, i) => (
                        <div key={sub.name} className="flex flex-col">
                          <Link
                            href={sub.path}
                            className={cn(
                              'px-3 py-2 rounded-lg text-[16px] weight-500 whitespace-nowrap transition-colors',
                              !isScrolled && isLightHeaderPage
                                ? 'text-primary-dark'
                                : isScrolled
                                  ? 'text-black hover:bg-black/10'
                                  // : 'text-white hover:bg-white/30'
                                  : 'text-black hover:bg-black/10'
                            )}
                            onClick={() => setOpenDesktopMenu(null)}
                          >
                            {sub.name}
                          </Link>

                          {i < children.length - 1 && (
                            <div
                              className={cn(
                                'h-[1px] w-full my-[12px]',
                                isScrolled ? 'bg-black/10' : 'bg-white/10'
                              )}
                            />
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
            className={cn('rounded-2xl mx-10 px-6 py-4 transition-all duration-300', {
              'bg-white/10 backdrop-blur-xl': !isScrolled && !isLightHeaderPage,
              'bg-background': !isScrolled && isLightHeaderPage,
              'bg-white': isScrolled,
            })}
          >
            <Link href="/">
              <Logo
                className={cn(
                  !isScrolled && isLightHeaderPage ? '#1E0A52' : isScrolled ? 'text-black' : 'text-white'
                )}
              />
            </Link>
            <Button variant="icon" onClick={handleToggle}>
              <MenuIcon
                className={cn(
                  !isScrolled && isLightHeaderPage ? '#1E0A52' : isScrolled ? 'text-black' : 'text-white'
                )}
              />
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
                      className={cn(
                        'px-1 py-0 text-white data-[active=true]:text-accent font-medium flex items-center justify-between',
                        {
                          'text-primary-dark': !isScrolled && isLightHeaderPage,
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
                            className={cn(
                              'text-sm transition-colors',
                              !isScrolled && isLightHeaderPage
                                ? 'text-primary-dark'
                                : isScrolled
                                  ? 'text-black hover:text-black/80'
                                  : 'text-white hover:text-white'
                            )}
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

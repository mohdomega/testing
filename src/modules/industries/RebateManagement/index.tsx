import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Stack from '@/components/Stack';
import TitleChip from '@/components/TitleChip';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import ArrowUp from '/public/icons/arrow-up.svg';
import Bill from '/public/icons/bill.svg';
import IndustryImg6 from '/public/images/IndustryImages/industry-image-6.png';

interface RebateManagementProps {
    className?: string;
}

export default function RebateManagement({ className }: RebateManagementProps) {
    return (
        <Stack
            id="rebateManagement"
            component="section"
            className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5 bg-white group even:bg-background', className)}
        >
            <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
                <div className="grid grid-cols-2 items-center gap-10">
                    <Stack alignItems="flex-start" className="flex-1 gap-8">
                        <Stack className="gap-4">
                            <TitleChip>Rebate Management</TitleChip>
                            <Typography variant="h2" className="text-gradient">
                                Smarter Solutions for Channel & Partner Automation
                            </Typography>
                            <Typography className="text-primary-dark/60 font-medium">
                                We help global distributor-driven organizations running multiple rebate programs across regions
                                and partners. Our solutions replace manual tracking and complex calculations with transparent,
                                scalable rebate management systems that improve partner trust and operational efficiency.
                            </Typography>
                        </Stack>
                    </Stack>
                    <div className="flex-1 justify-self-end max-w-125 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden">
                        <Image src={IndustryImg6} alt="Rebate Management image" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="grid grid-cols-[6fr_4fr] gap-15 items-start max-lg:grid-cols-1">
                    <Stack className="gap-8 p-8 rounded-3xl border border-black/15 border-dashed">
                        <div className="px-3 py-1.5 -ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
                            <Typography>Our Benefits</Typography>
                        </div>
                        <div className="grid grid-cols-2 gap-0.25 bg-primary-dark/15 *:bg-white group-even:*:bg-background">
                            <Stack className="gap-2 p-12">
                                <Stack direction="row" alignItems="center" className="gap-2">
                                    <Typography component="span" variant="h3" className="font-semibold">
                                        30%
                                    </Typography>
                                    <ArrowUp className="size-10 text-accent" />
                                </Stack>
                                <Typography variant="body2" className="font-medium text-primary-dark/60">
                                    reduction in rebate calculation errors
                                </Typography>
                            </Stack>
                            <Stack className="gap-2 p-12">
                                <Stack direction="row" alignItems="center" className="gap-2">
                                    <Typography component="span" variant="h3" className="font-semibold">
                                        25%
                                    </Typography>
                                    <ArrowUp className="size-10 text-accent" />
                                </Stack>
                                <Typography variant="body2" className="font-medium text-primary-dark/60">
                                    faster rebate payments
                                </Typography>
                            </Stack>
                            <Stack className="gap-2 p-12">
                                <Stack direction="row" alignItems="center" className="gap-2">
                                    <Typography component="span" variant="h3" className="font-semibold">
                                        20%
                                    </Typography>
                                    <ArrowUp className="size-10 text-accent" />
                                </Stack>
                                <Typography variant="body2" className="font-medium text-primary-dark/60">
                                    increase in rebate program effectiveness
                                </Typography>
                            </Stack>
                            <Stack className="gap-2 p-12">
                                <Stack direction="row" alignItems="center" className="gap-2">
                                    <Typography component="span" variant="h3" className="font-semibold">
                                        100%
                                    </Typography>
                                    <ArrowUp className="size-10 text-accent" />
                                </Stack>
                                <Typography variant="body2" className="font-medium text-primary-dark/60">
                                    improved partner trust and satisfaction
                                </Typography>
                            </Stack>
                        </div>
                    </Stack>
                    <Stack className="gap-8 p-8 rounded-3xl border border-black/15 border-dashed">
                        <div className="px-3 py-1.5 -ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
                            <Typography>Our Solutions</Typography>
                        </div>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-lg:grid-cols-3 max-sm:grid-cols-2">
                            <Stack className="gap-4">
                                <div className="gradient-vertical p-6 rounded-full w-fit">
                                    <Bill className="size-8" />
                                </div>
                                <Typography variant="body2" className="font-medium">
                                    Rebate Automation
                                </Typography>
                            </Stack>
                            <Stack className="gap-4">
                                <div className="gradient-vertical p-6 rounded-full w-fit">
                                    <Bill className="size-8" />
                                </div>
                                <Typography variant="body2" className="font-medium">
                                    Partner Portals
                                </Typography>
                            </Stack>
                            <Stack className="gap-4">
                                <div className="gradient-vertical p-6 rounded-full w-fit">
                                    <Bill className="size-8" />
                                </div>
                                <Typography variant="body2" className="font-medium">
                                    Real-time Dashboards
                                </Typography>
                            </Stack>
                            <Stack className="gap-4">
                                <div className="gradient-vertical p-6 rounded-full w-fit">
                                    <Bill className="size-8" />
                                </div>
                                <Typography variant="body2" className="font-medium">
                                    Approval Workflows
                                </Typography>
                            </Stack>
                        </div>
                    </Stack>
                </div>
                <Button component={Link} href="/contact-us" className="w-fit self-center">
                    Connect with us
                </Button>
            </div>
        </Stack>
    );
}

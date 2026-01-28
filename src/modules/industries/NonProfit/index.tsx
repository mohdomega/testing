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

interface NonProfitProps {
    className?: string;
}

export default function NonProfit({ className }: NonProfitProps) {
    return (
        <Stack
            id="nonProfit"
            component="section"
            className={cn('gap-15 px-6 md:px-10 lg:px-20 py-17.5 bg-white group even:bg-background', className)}
        >
            <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-15">
                <div className="grid grid-cols-2 items-center gap-10">
                    <Stack alignItems="flex-start" className="flex-1 gap-8">
                        <Stack className="gap-4">
                            <TitleChip>Non-Profit</TitleChip>
                            <Typography variant="h2" className="text-gradient">
                                How a Non-Profit Increased Donor Retention by 60% Using Salesforce Nonprofit Cloud
                            </Typography>
                            <Typography className="text-primary-dark/60 font-medium">
                                We help non-profit organizations managing multiple programs and campaigns build stronger donor
                                relationships. Our platforms connect donors, programs, and outcomes to clearly demonstrate
                                impact to stakeholders while enabling personalized engagement at scale.
                            </Typography>
                        </Stack>
                    </Stack>
                    <div className="flex-1 justify-self-end max-w-125 w-full aspect-square rounded-3xl bg-neutral-300 relative overflow-hidden">
                        <Image src={IndustryImg6} alt="Non-Profit image" className="w-full h-full object-cover" />
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
                                        60%
                                    </Typography>
                                    <ArrowUp className="size-10 text-accent" />
                                </Stack>
                                <Typography variant="body2" className="font-medium text-primary-dark/60">
                                    increase in donor retention
                                </Typography>
                            </Stack>
                            <Stack className="gap-2 p-12">
                                <Stack direction="row" alignItems="center" className="gap-2">
                                    <Typography component="span" variant="h3" className="font-semibold">
                                        35%
                                    </Typography>
                                    <ArrowUp className="size-10 text-accent" />
                                </Stack>
                                <Typography variant="body2" className="font-medium text-primary-dark/60">
                                    growth in recurring donations
                                </Typography>
                            </Stack>
                            <Stack className="gap-2 p-12">
                                <Stack direction="row" alignItems="center" className="gap-2">
                                    <Typography component="span" variant="h3" className="font-semibold">
                                        50%
                                    </Typography>
                                    <ArrowUp className="size-10 text-accent" />
                                </Stack>
                                <Typography variant="body2" className="font-medium text-primary-dark/60">
                                    improvement in volunteer engagement
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
                                    transparent real-time reporting
                                </Typography>
                            </Stack>
                        </div>
                    </Stack>
                    <Stack className="gap-8 p-8 rounded-3xl border border-black/15 border-dashed">
                        <div className="px-3 py-1.5 -ml-8 w-fit bg-secondary/20 font-medium rounded-r-full">
                            <Typography>Core Challenges</Typography>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <Stack direction="row" alignItems="center" className="gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                <Typography variant="body2" className="font-medium">
                                    Disconnected donor and campaign data
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" className="gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                <Typography variant="body2" className="font-medium">
                                    Generic outreach that failed to build long-term engagement
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" className="gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                <Typography variant="body2" className="font-medium">
                                    Limited visibility into program impact
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" className="gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                <Typography variant="body2" className="font-medium">
                                    Manual reporting for stakeholders and funders
                                </Typography>
                            </Stack>
                        </div>
                    </Stack>
                </div>
                <Button component={Link} href="/blogs/nonprofit-case-study" className="w-fit self-center">
                    Read More
                </Button>
            </div>
        </Stack>
    );
}

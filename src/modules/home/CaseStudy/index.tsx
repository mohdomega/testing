import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn } from '@/lib';

import Study from './Study';

import HomeVideoImg1 from '../../../../public/images/home-case-study-image-1.png';
import HomeVideoImg2 from '../../../../public/images/home-case-study-image-2.png';
import HomeVideoImg3 from '../../../../public/images/home-case-study-image-3.png';
import HomeVideoImg4 from '../../../../public/images/home-case-study-image-4.png';
import Automation from '/public/icons/automation.svg';
import Clock from '/public/icons/clock.svg';
import Microphone from '/public/icons/microphone.svg';
import PieChart from '/public/icons/pie-chart.svg';
import Star from '/public/icons/star.svg';

interface CaseStudyProps {
  className?: string;
}

export default function CaseStudy({ className }: CaseStudyProps) {
  return (
    <div className={cn('pt-52.5 bg-[url("/images/case-study.png")] bg-cover max-lg:pt-27', className)}>
      <Stack
        component="section"
        alignItems="center"
        className="gap-32 py-25 max-lg:gap-15 max-lg:py-15 max-sm:gap-10"
      >
        <div className="max-w-[1440px] w-full mx-auto px-30 max-lg:px-15 max-sm:px-6 flex flex-col gap-32 max-lg:gap-15 max-sm:gap-10">
          <Typography variant="h2" className="text-white text-center">
            Case Study
          </Typography>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-30 gap-y-20 max-lg:grid-cols-[auto_1fr] max-lg:gap-x-10 max-sm:gap-x-4 max-sm:gap-y-10">
            <Study
              image={HomeVideoImg1}
              step={1}
              title="Customer Service & CX Transformation"
              description="Improve CSAT, reduce handling time, and increase conversions with AI-driven Salesforce Service Cloud solutions by IDRMS."
              highlightedFeatures={
                <div className="w-full p-5 bg-white/10 rounded-3xl">
                  <Stack className="gap-4">
                    <Stack direction="row" className="gap-4">
                      <div className="px-8 py-4 border border-dashed border-white rounded-full max-sm:px-4 max-sm:py-2.5">
                        <Typography className="font-medium max-sm:whitespace-nowrap">Cost savings</Typography>
                      </div>
                      <div className="px-8 py-4 border border-dashed border-white rounded-full max-sm:px-4 max-sm:py-2.5">
                        <Typography className="font-medium max-sm:whitespace-nowrap">Satisfaction</Typography>
                      </div>
                    </Stack>
                    <Stack direction="row" className="gap-4">
                      <div className="px-8 py-4 border border-dashed border-white rounded-full max-sm:px-4 max-sm:py-2.5">
                        <Typography className="font-medium max-sm:whitespace-nowrap">Scalability</Typography>
                      </div>
                      <div className="px-8 py-4 border border-dashed border-white rounded-full max-sm:px-4 max-sm:py-2.5">
                        <Typography className="font-medium max-sm:whitespace-nowrap">
                          Efficiency gain
                        </Typography>
                      </div>
                    </Stack>
                  </Stack>
                </div>
              }
            />
            <Study
              image={HomeVideoImg2}
              step={2}
              title="Manufacturing Sales & Forecasting Transformation"
              description="Drive faster sales cycles, accurate forecasting, and connected manufacturing operations with Salesforce Manufacturing Cloud."
              highlightedFeatures={
                <div className="relative w-full p-6 pb-12.5 bg-white/10 rounded-2xl overflow-hidden">
                  <Stack className="gap-4 w-fit p-4 border border-dashed border-white/20 rounded-2xl">
                    <Typography className="text-white font-medium">IDRMS Salesforce</Typography>
                    <Stack divider={<div className="h-0.5 bg-white/10" />} className="gap-3">
                      <Stack direction="row" alignItems="flex-start" className="gap-2">
                        <Star className="size-4 text-white" />
                        <Stack direction="row" alignItems="center" className="gap-3">
                          <div className="p-3 rounded-full bg-white">
                            <PieChart className="size-4" />
                          </div>
                          <Typography variant="small" className="font-medium text-white/60">
                            Advanced Segmentation
                          </Typography>
                        </Stack>
                        <Star className="size-4 text-white opacity-0" />
                      </Stack>
                      <Stack direction="row" alignItems="flex-start" className="gap-2">
                        <Star className="size-4 text-white" />
                        <Stack direction="row" alignItems="center" className="gap-3">
                          <div className="p-3 rounded-full bg-white">
                            <Microphone className="size-4" />
                          </div>
                          <Typography variant="small" className="font-medium text-white/60">
                            Personalized Campaigns
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="absolute top-[55%] right-6 gap-4 w-fit p-4 bg-white rounded-2xl">
                    <Typography className="font-medium text-primary-dark">Key Features</Typography>
                    <Stack divider={<div className="h-0.25 bg-primary-dark/10" />} className="gap-3">
                      <Stack direction="row" alignItems="flex-start" className="gap-2">
                        <Star className="size-4 text-primary-dark" />
                        <Stack direction="row" alignItems="center" className="gap-3">
                          <div className="p-3 rounded-full bg-[#7952DF]">
                            <Automation className="size-4" />
                          </div>
                          <Typography variant="small" className="font-medium text-primary-dark">
                            Automation
                          </Typography>
                        </Stack>
                        <Star className="size-4 text-white opacity-0" />
                      </Stack>
                      <Stack direction="row" alignItems="flex-start" className="gap-2">
                        <Star className="size-4 text-primary-dark" />
                        <Stack direction="row" alignItems="center" className="gap-3">
                          <div className="p-3 rounded-full bg-[#7952DF]">
                            <Automation className="size-4" />
                          </div>
                          <Typography variant="small" className="font-medium text-primary-dark">
                            Advanced Segmentation
                          </Typography>
                        </Stack>
                        <Star className="size-4 text-white opacity-0" />
                      </Stack>
                    </Stack>
                  </Stack>
                </div>
              }
            />
            <Study
              image={HomeVideoImg3}
              step={3}
              title="REBATE MANAGEMENT – CHANNEL & PARTNER AUTOMATION"
              description="Automate rebate programs, improve accuracy, and accelerate partner payments using Salesforce-powered rebate management solutions."
              highlightedFeatures={
                <Stack
                  divider={<div className="border-t border-dashed border-white" />}
                  className="gap-6 w-full p-6 bg-white/10 rounded-2xl font-medium"
                >
                  <Stack className="gap-2">
                    <Typography variant="subtitle" className="text-white">
                      Boost efficiency
                    </Typography>
                    <Typography variant="body2" className="text-white/60">
                      Savings with smart rebates and automation
                    </Typography>
                  </Stack>
                  <Typography variant="body2" className="text-white/60">
                    125% faster service, 135% higher sales
                  </Typography>
                </Stack>
              }
            />
            <Study
              image={HomeVideoImg4}
              step={4}
              title="MULESOFT – SALESFORCE INTEGRATION AUTOMATION"
              description="Automate data flows, reduce manual effort, and improve accuracy with MuleSoft-powered Salesforce integrations."
              highlightedFeatures={
                <Stack direction="row" className="gap-4 max-sm:flex-col">
                  <Stack
                    alignItems="flex-start"
                    className="gap-4 p-6 rounded-2xl bg-white/10 max-sm:flex-row"
                  >
                    <div className="p-3 rounded-full bg-white">
                      <Clock className="size-4" />
                    </div>
                    <Stack className="gap-2">
                      <Typography variant="subtitle" className="text-white">
                        Faster searches
                      </Typography>
                      <Typography variant="body2" className="text-white/60">
                        Searches complete instantly
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    alignItems="flex-start"
                    className="gap-4 p-6 rounded-2xl bg-white/10 max-sm:flex-row"
                  >
                    <div className="p-3 rounded-full bg-white">
                      <PieChart className="size-4" />
                    </div>
                    <Stack className="gap-2">
                      <Typography variant="subtitle" className="text-white">
                        Enhanced UX
                      </Typography>
                      <Typography variant="body2" className="text-white/60">
                        More seamless interaction
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              }
            />
          </div>
        </div>
      </Stack>
    </div>
  );
}

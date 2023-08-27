import * as React from 'react';
import { StepperNav } from 'vertical-stepper-nav';

const StepContent = (props: { dates: string, company: string, position: string }) => <div className="flex flex-row items-between text-xs font-semibold">
    <span className="font-display text-primary rounded-lg z-10 bg-gray-100 shadow-lg p-1"> {props.dates} </span> <div className="ml-2 mt-1">{props.position}, {props.company} </div>
</div>

export const TimeLine = () => {
    return <div className="container flex flex-col z-10 rounded-lg shadow-lg">
        <div className="container p-2 divide-y divide-primary-400 ">
            <h2 className="display font-bold">Experience Timeline</h2>
        </div>
        <div className="p-2">
            <StepperNav
                steps={[
                    {
                        stepContent: () => <StepContent dates={"July 2021 - Present"} position={'PSE'} company={'Apollo 247 Pharmacy'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "green"
                    },
                    {
                        stepContent: () => <StepContent dates={"Sep 2021 - June 2022"} position={'SSE'} company={'Scripbox Advisory Private Limited(Talent500)'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"June 2016 - Sep 2021"} position={'SE II G2'} company={'TSYS, A Global Payments Company'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Feb 2016 - May 2016"} position={'SE'} company={'Nerdapplabs'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Oct 2014 - Nov 2015"} position={'SE'} company={'Thinksys Pvt. Ltd.'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Summer 2013"} position={'Summer Intern'} company={'DRDO Dehradoon'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    }
                ]}
            />
        </div>
    </div>

}

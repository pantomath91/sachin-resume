import * as React from 'react';
import { StepperNav } from 'vertical-stepper-nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const StepContent = (props: { 
    dates: string, 
    company: string, 
    position: string,
    achievements?: React.ReactNode
}) => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-2 pl-2">
        <div className="flex items-center text-primary-700 mb-1 sm:mb-0 sm:mr-4">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-primary-400 mr-2" />
            <span className="text-sm font-medium">{props.dates}</span>
        </div>
        <div className="flex flex-col">
            <span className="text-base font-semibold text-gray-800">{props.position}</span>
            <span className="text-sm text-gray-600">{props.company}</span>
            {props.achievements && (
                <div className="mt-2">{props.achievements}</div>
            )}
        </div>
    </div>
);

const PayPalAchievements = () => (
    <div className="mt-1 bg-blue-50 p-2 rounded-md border border-blue-100">
        <h4 className="text-sm font-medium text-primary-700 mb-1">Key Achievements:</h4>
        <ul className="space-y-1 text-sm text-gray-700">
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mt-0.5 mr-1.5" />
                <span>Led UI Refresh Project with WCAG accessibility standards</span>
            </li>
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mt-0.5 mr-1.5" />
                <span>Migrated Subscription Product from Angular to Next.js</span>
            </li>
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mt-0.5 mr-1.5" />
                <span>20% improvement in user engagement, 40% reduction in deployment time</span>
            </li>
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mt-0.5 mr-1.5" />
                <span>Enabled 35% faster checkout experience</span>
            </li>
        </ul>
    </div>
);

export const TimeLine = () => {
    return (
        <div className="card fade-in h-full">
            <h3 className="section-title text-primary-800 mb-4">Experience Timeline</h3>
            <div className="relative">
                <StepperNav
                    steps={[
                        {
                            stepContent: () => <StepContent 
                                dates={"Dec 2024 - Present"} 
                                position={'Member Of Technical Staff'} 
                                company={'PayPal Holdings, Inc'} 
                                achievements={<PayPalAchievements />}
                            />,
                            stepStatusCircleSize: 20,
                            stepStateColor: "#2C5282"
                        },
                        {
                            stepContent: () => <StepContent 
                                dates={"Jul 2022 - Dec 2024"} 
                                position={'Principal Software Engineer'} 
                                company={'Apollo 24I7 (Apollo HealthCo Limited)'} 
                            />,
                            stepStatusCircleSize: 20,
                            stepStateColor: "#3182CE"
                        },
                        {
                            stepContent: () => <StepContent 
                                dates={"Sep 2021 - Jun 2022"} 
                                position={'Senior Frontend Developer'} 
                                company={'Scripbox Advisors Private Limited'} 
                            />,
                            stepStatusCircleSize: 20,
                            stepStateColor: "#3182CE"
                        },
                        {
                            stepContent: () => <StepContent 
                                dates={"Jun 2016 - Sep 2021"} 
                                position={'Software Engineer II G2'} 
                                company={'TSYS, A Global Payments Company'} 
                            />,
                            stepStatusCircleSize: 20,
                            stepStateColor: "#3182CE"
                        },
                        {
                            stepContent: () => <StepContent 
                                dates={"Feb 2016 - May 2016"} 
                                position={'Software Test Engineer'} 
                                company={'Nerdapplabs'} 
                            />,
                            stepStatusCircleSize: 20,
                            stepStateColor: "#3182CE"
                        },
                        {
                            stepContent: () => <StepContent 
                                dates={"Oct 2014 - Nov 2015"} 
                                position={'Software Engineer'} 
                                company={'Thinksys Pvt. Ltd.'} 
                            />,
                            stepStatusCircleSize: 20,
                            stepStateColor: "#3182CE"
                        },
                        {
                            stepContent: () => <StepContent 
                                dates={"Summer 2013"} 
                                position={'Summer Intern'} 
                                company={'DRDO Dehradoon'} 
                            />,
                            stepStatusCircleSize: 20,
                            stepStateColor: "#4338ca"
                        }
                    ]}
                />
            </div>
        </div>
    );
};

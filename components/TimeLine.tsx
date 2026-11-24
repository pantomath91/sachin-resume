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
                <span>43% faster vaulting, +295 bps VSR and +154 bps CVR across 42+ merchants</span>
            </li>
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mt-0.5 mr-1.5" />
                <span>Unblocked $20B+ TPV through PPMS migration and cross-border expansion</span>
            </li>
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mt-0.5 mr-1.5" />
                <span>40% faster deploys, 80–85% faster recovery and LLM-powered Slack on-call bots</span>
            </li>
        </ul>
    </div>
);

const PostmanAchievements = () => (
    <div className="mt-1 bg-indigo-50 p-2 rounded-md border border-indigo-100">
        <h4 className="text-sm font-medium text-primary-700 mb-1">Key Impact:</h4>
        <ul className="space-y-1 text-sm text-gray-700">
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-0.5 mr-1.5" />
                <span>Moved releases from monthly to daily with GitHub Actions</span>
            </li>
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-0.5 mr-1.5" />
                <span>Migrated CI and adopted Graphite merge queues for sub-8-minute PR cycles</span>
            </li>
            <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-0.5 mr-1.5" />
                <span>Led Jest to Vitest migration, Rspack caching and Nx modularization</span>
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
                                dates={"May 2026 - Present"} 
                                position={'Senior Software Engineer – Platform'} 
                                company={'Postman'} 
                                achievements={<PostmanAchievements />}
                            />,
                            stepStatusCircleSize: 20,
                            stepStateColor: "#1E2D56"
                        },
                        {
                            stepContent: () => <StepContent 
                                dates={"Dec 2024 - Apr 2026"} 
                                position={'Senior Software Engineer'} 
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
                    ]}
                />
            </div>
        </div>
    );
};

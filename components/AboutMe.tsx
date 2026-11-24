import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser, faCode, faLaptopCode, faCogs, faUniversalAccess, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { ProfilePhoto } from './ProfilePhoto';

export const AboutMe = () => {
    return (
        <div className="card fade-in">
            <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faUser} className="text-primary-600" />
                </div>
                <h3 className="section-title text-primary-800 mb-0">Professional Summary</h3>
            </div>
            
            <div className="block md:hidden mb-6 text-center">
                <ProfilePhoto size="small" className="mx-auto" />
                <h4 className="text-lg font-medium text-primary-700 mt-2">Sachin Lohani</h4>
                <p className="text-sm text-gray-600">Full Stack JavaScript Engineer</p>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                    Full Stack JavaScript Engineer with <span className="font-semibold text-primary-800">12+ years</span> of experience — frontend-heavy in React, Electron, Next.js and React Native, with Node.js, REST and GraphQL backend experience. Currently a <span className="font-semibold text-primary-800">Senior Software Engineer, Platform at Postman</span>, building release, CI, build-tooling and developer-experience infrastructure.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 rounded-lg border border-primary-100">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faCode} className="text-primary-600 mr-2" />
                            <h4 className="font-medium text-primary-800">Development Expertise</h4>
                        </div>
                        <p className="text-gray-700">
                            Builds web and desktop products using <span className="font-semibold">React, Electron, Next.js, TypeScript and React Native</span>, with modular architectures that improve performance, reuse and independent delivery.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faUniversalAccess} className="text-blue-600 mr-2" />
                            <h4 className="font-medium text-blue-800">Accessibility Champion</h4>
                        </div>
                        <p className="text-gray-700">
                            Leads accessibility initiatives across web and mobile applications, implementing <span className="font-semibold">WCAG standards</span> and shared component systems for consistent, inclusive experiences.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-teal-50 to-green-50 p-4 rounded-lg border border-teal-100">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faLaptopCode} className="text-teal-600 mr-2" />
                            <h4 className="font-medium text-teal-800">Test Automation</h4>
                        </div>
                        <p className="text-gray-700">
                            Builds reliable quality systems with <span className="font-semibold">Jest, Vitest, RTL, Selenium, Appium and WebdriverIO</span>, from unit checks and E2E automation to CI feedback in under 8 minutes.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faCogs} className="text-amber-600 mr-2" />
                            <h4 className="font-medium text-amber-800">CI/CD Implementation</h4>
                        </div>
                        <p className="text-gray-700">
                            Designs <span className="font-semibold">GitHub Actions, Harness, Jenkins and GitLab CI</span> platforms, Graphite merge workflows, Nx monorepos and observability with Datadog, Kibana and PagerDuty.
                        </p>
                    </div>
                </div>
                
                <p>
                    Proven track record across developer platforms, fintech and healthcare — from moving monthly releases to daily delivery and decoupling a large monolith into modular Nx packages, to shipping $20B+ payment journeys and building LLM-powered on-call and review bots.
                </p>
                
                <div className="mt-5 pt-4 border-t border-gray-100">
                    <h4 className="text-base font-medium text-gray-800 mb-2 flex items-center">
                        <FontAwesomeIcon icon={faToolbox} className="text-primary-600 mr-2" />
                        Key Professional Attributes
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li className="flex items-start">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2" />
                            <span>Strong expertise in cross-platform development (web & mobile)</span>
                        </li>
                        <li className="flex items-start">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2" />
                            <span>Technical leadership in complex projects</span>
                        </li>
                        <li className="flex items-start">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2" />
                            <span>Excellence in software architecture</span>
                        </li>
                        <li className="flex items-start">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2" />
                            <span>Performance optimization expertise</span>
                        </li>
                        <li className="flex items-start">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2" />
                            <span>Proficient in multiple languages (English, Hindi, Kannada)</span>
                        </li>
                        <li className="flex items-start">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2" />
                            <span>Dedication to code quality and testing</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

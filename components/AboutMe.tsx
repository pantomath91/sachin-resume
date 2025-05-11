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
                <p className="text-sm text-gray-600">Frontend Developer</p>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                    Dedicated <span className="font-semibold text-primary-800">Principal Software Engineer</span> with <span className="font-semibold text-primary-800">11+ years</span> of experience specializing in frontend web and mobile app development. Currently working as a <span className="font-semibold text-primary-800">Member Of Technical Staff</span> at PayPal Holdings, Inc.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 rounded-lg border border-primary-100">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faCode} className="text-primary-600 mr-2" />
                            <h4 className="font-medium text-primary-800">Development Expertise</h4>
                        </div>
                        <p className="text-gray-700">
                            Specialized in building high-performance applications using <span className="font-semibold">React, Next.js, TypeScript</span>, and modern frameworks with emphasis on <span className="font-semibold">responsive design</span> and <span className="font-semibold">performance optimization</span>.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faUniversalAccess} className="text-blue-600 mr-2" />
                            <h4 className="font-medium text-blue-800">Accessibility Champion</h4>
                        </div>
                        <p className="text-gray-700">
                            Dedicated to implementing <span className="font-semibold">WCAG accessibility standards</span> across all projects, ensuring inclusive digital experiences and ADA compliance for diverse user bases.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-teal-50 to-green-50 p-4 rounded-lg border border-teal-100">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faLaptopCode} className="text-teal-600 mr-2" />
                            <h4 className="font-medium text-teal-800">Test Automation</h4>
                        </div>
                        <p className="text-gray-700">
                            Expert in <span className="font-semibold">test automation</span> with <span className="font-semibold">WebdriverIO, Playwright, Selenium, Appium, and BrowserStack</span>, ensuring robust quality assurance and consistent user experiences.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faCogs} className="text-amber-600 mr-2" />
                            <h4 className="font-medium text-amber-800">CI/CD Implementation</h4>
                        </div>
                        <p className="text-gray-700">
                            Established <span className="font-semibold">CI/CD pipelines</span> using <span className="font-semibold">Harness, Jenkins, and GitLab</span>, streamlining deployment workflows and accelerating development cycles while maintaining quality.
                        </p>
                    </div>
                </div>
                
                <p>
                    Proven track record of leading significant projects including UI refresh initiatives, implementing CI/CD pipelines, and migrating legacy applications to modern frameworks, resulting in <span className="font-semibold text-primary-700">measurable improvements in user engagement, accessibility compliance, and performance</span>.
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

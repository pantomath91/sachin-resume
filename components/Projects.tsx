import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm, faGooglePlay, faPaypal, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBriefcase, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface WorkExperienceProps {
    company: string;
    position: string;
    period: string;
    location: string;
    responsibilities: string[];
    icon: any;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ 
    company, 
    position, 
    period, 
    location, 
    responsibilities,
    icon
}) => {
    return (
        <div className="card mb-6 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="flex flex-col border-l-4 border-primary-500">
                <div className="flex items-center p-4 border-b border-gray-100">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full mr-4">
                        <FontAwesomeIcon icon={icon} className="text-primary-700" />
                    </div>
                    <div>
                        <h4 className="font-display font-semibold text-primary-800 text-lg">{position}</h4>
                        <div className="flex flex-col md:flex-row md:items-center text-sm mt-1">
                            <span className="font-medium text-gray-700">{company}</span>
                            <div className="hidden md:flex mx-2 text-gray-400">•</div>
                            <div className="flex items-center text-gray-600">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-gray-400" />
                                <span>{period}</span>
                            </div>
                            <div className="hidden md:flex mx-2 text-gray-400">•</div>
                            <div className="flex items-center text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-gray-400" />
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-gray-700">
                    <ul className="list-disc pl-5 space-y-2">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: responsibility }}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const Projects = () => {
    const experiences = [
        {
            company: "Postman",
            position: "Senior Software Engineer – Platform",
            period: "May 2026 - Present",
            location: "Bengaluru",
            icon: faBriefcase,
            responsibilities: [
                "Automated the end-to-end release pipeline for <b>Postman desktop and CLI on GitHub Actions</b>, removing manual release steps and moving delivery from monthly to daily.",
                "Migrated CI from <b>CircleCI to GitHub Actions</b>, rolled out the Graphite merge queue and tightened PR checks so the engineering platform targets sub-8-minute PR lifecycles.",
                "Led the <b>Jest to Vitest migration</b> across packages, platform libraries, main and renderer, and defined faster, cache-backed build workflows with Rspack.",
                "Decoupled the large Postman application into modular <b>Nx monorepo packages</b>, enabling independent shipping and reuse across desktop, CLI and VS Code clients.",
                "Built a Claude-powered PR reviewer bot and Datadog monitors, dashboards and alerts for faster code review and production regression detection.",
                "Benchmarked TypeScript 7 on a 324-package monorepo and defined a controlled TypeScript 5 to 6 to 7 upgrade path."
            ]
        },
        {
            company: "PayPal Holdings, Inc",
            position: "Senior Software Engineer",
            period: "Dec 2024 - Apr 2026",
            location: "Bengaluru",
            icon: faPaypal,
            responsibilities: [
                "Led the Instant Vault UI redesign in TypeScript across <b>42+ merchants</b>, improving vaulting speed by <b>43%</b> and lifting VSR by <b>295 bps</b> and CVR by <b>154 bps</b>.",
                "Drove the PPMS Angular-to-Next.js migration and ModXO cross-border expansion, unblocking <b>$20B+ TPV</b> while preserving merchant integrations.",
                "Moved four applications from <b>Jenkins to Harness 2.0</b> on Kubernetes, reducing deploy time by <b>40%</b>, recovery time by <b>80–85%</b> and achieving a <b>95.57% FT pass rate</b>.",
                "Certified 128 endpoints in two days and resolved <b>73% of 78 production issues in Q1</b> using React DevTools, Kibana, Datadog, CAL Traces and LogView.",
                "Built LLM Slack bots for on-call Q&A, alert routing and PagerDuty triage, cutting investigation time by <b>40%</b>."
            ]
        },
        {
            company: "Apollo 24I7 (Apollo HealthCo Limited)",
            position: "Principal Software Engineer",
            period: "Jul 2022 - Dec 2024",
            location: "Gurugram",
            icon: faGooglePlay,
            responsibilities: [
                "Integrated <b>Contentful into React Native</b> with automated accessibility testing, eliminating app deployments and accelerating new feature releases, resulting in <b>30% reduction in time-to-market</b> for new features.",
                "Developed comprehensive test automation framework using <b>Appium and WebdriverIO</b> for React Native apps, <b>reducing testing time by 70%</b> and <b>increasing test coverage by 40%</b>.",
                "Translated UX wireframes into responsive Next.js and React Native applications that met <b>WCAG 2.1 AA standards</b>, contributing to <b>20% improvement in page load times</b> and overall performance.",
                "Set up <b>Harness CI/CD pipeline</b> for automated testing and deployment, incorporating accessibility testing as part of the deployment process, ensuring all releases meet quality standards.",
                "Optimized Next.js rendering for improved performance and interactive features, <b>boosting user engagement by 25%</b> and <b>reducing bounce rates by 10%</b>.",
                "Implemented rigorous unit testing with <b>Jest and RTL</b>, ensuring code reliability and accessibility compliance, leading to <b>50% reduction in bug reports</b> and QA time."
            ]
        },
        {
            company: "Scripbox Advisors Private Limited",
            position: "Senior Frontend Developer(Talent 500)",
            period: "Sep 2021 - Jun 2022",
            location: "Bengaluru",
            icon: faBriefcase,
            responsibilities: [
                "Leveraged expertise in frontend architecture, design, and Node.js to contribute to the development of complex and dynamic web applications for <b>Scripbox (Cigar) Mobile App and MSB Web</b>.",
                "Implemented automated testing using <b>WebdriverIO and Selenium</b> for critical user journeys, resulting in <b>60% faster regression testing</b> and higher reliability.",
                "Identified and resolved performance bottlenecks across web and mobile applications, implementing accessibility improvements that resulted in <b>15% improvement in loading times</b> and enhanced user experience.",
                "Integrated <b>BrowserStack</b> for cross-browser testing across multiple devices and platforms, ensuring <b>consistent user experience</b> across all supported environments.",
                "Collaborated effectively with cross-functional teams, demonstrating a strong understanding of <b>backend systems and Node.js</b>, providing valuable insights to product design discussions.",
                "Maintained clear and concise documentation for <b>automation frameworks and accessibility implementation</b>, facilitating knowledge transfer and ensuring consistency in development processes."
            ]
        },
        {
            company: "TSYS, A Global Payments Company",
            position: "Software Engineer II G2",
            period: "June 2016 - Sep 2021",
            location: "Noida",
            icon: faBriefcase,
            responsibilities: [
                "Led the development of the Online Account Center platform, a banking website for US-based customers, implementing <b>WCAG 2.0 accessibility standards</b> and taking ownership of specific modules such as savings, direct deposit, and secure inbox.",
                "Established comprehensive UI automation framework using <b>Selenium and WebdriverIO</b>, <b>reducing manual testing effort by 70%</b> and improving release confidence.",
                "Configured <b>CI/CD pipeline with Jenkins and GitLab</b>, automating deployment and testing processes that <b>reduced release times from days to hours</b>.",
                "Implemented accessibility features ensuring <b>ADA compliance</b> for all banking applications, resulting in increased usability for customers with disabilities and compliance with financial industry regulations.",
                "Collaborated closely with design and QA teams to create <b>responsive interfaces across multiple devices</b> that met both UX and accessibility requirements.",
                "Developed and maintained automated test suites for cross-browser testing using <b>BrowserStack</b>, ensuring compatibility across Chrome, Firefox, Safari, and Edge browsers."
            ]
        },
        {
            company: "Nerdapplabs",
            position: "Software Test Engineer",
            period: "Feb 2016 - May 2016",
            location: "Noida",
            icon: faBriefcase,
            responsibilities: [
                "Developed and implemented SugarCRM features using <b>AngularJS</b>, enhancing the functionality and user experience of the platform.",
                "Designed and configured a fully automated <b>CI/CD lifecycle using Jenkins</b> for a business-critical internal web application, resulting in a <b>4x reduction in average development time</b>.",
                "Built automated test scripts using <b>Selenium and JavaScript</b> for critical business workflows, <b>increasing test coverage</b> and reducing regression testing time.",
                "Developed a framework for unit testing and automation testing of SugarCRM features, <b>improving efficiency and accuracy</b> of testing processes.",
                "Developed <b>Restful Web services using Java</b>, facilitating seamless integration and communication between different components of the application.",
                "Implemented cross-browser testing strategies using <b>BrowserStack</b> to ensure optimal user experience across all major browsers."
            ]
        },
        {
            company: "Thinksys Pvt. Ltd.",
            position: "Software Engineer",
            period: "Oct 2014 - Nov 2015",
            location: "Noida",
            icon: faBriefcase,
            responsibilities: [
                "Developed an automation UI framework using <b>Groovy, Selenium WebDriver, and Appium</b>, improving efficiency and accuracy in testing processes for web and mobile applications.",
                "Created an automation backend (web API) framework for <b>RESTful API testing</b>, streamlining testing and ensuring seamless integration with existing systems.",
                "Established <b>best practices for web and mobile automation</b>, including Page Object Model patterns and data-driven testing approaches.",
                "Automated <b>JIRA tasks</b> and implemented <b>Gradle tasks</b> for automation, reducing manual effort and increasing productivity.",
                "Contributed to the <b>Quantum Secure project</b>, an airline project, by developing and optimizing software solutions with a focus on <b>accessibility and cross-browser compatibility</b>.",
                "Conducted <b>training sessions on test automation best practices</b>, enabling team members to effectively utilize automation frameworks."
            ]
        }
    ];

    return (
        <div className="card fade-in">
            <h3 className="section-title text-primary-800">Work Experience</h3>
            <div className="mt-6">
                {experiences.map((exp, index) => (
                    <WorkExperience 
                        key={index}
                        company={exp.company}
                        position={exp.position}
                        period={exp.period}
                        location={exp.location}
                        responsibilities={exp.responsibilities}
                        icon={exp.icon}
                    />
                ))}
                <div className="flex justify-center mt-4">
                    <a 
                        href="https://www.linkedin.com/in/sachin-lohani/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        <span>View Full Work History on LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

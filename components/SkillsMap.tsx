import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faJs, faReact, faNode, faHtml5, faCss3Alt, faGitAlt, faAws, faDocker,
    faJira, faFigma, faGithub, faNpm
} from '@fortawesome/free-brands-svg-icons';
import { 
    faCode, faDatabase, faServer, faMobile, faGear, faCogs, 
    faUniversalAccess, faVial, faRobot, faBolt, faCloudArrowUp, faShieldAlt,
    faTools, faMicrochip, faBrush, faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

interface SkillPillProps {
    level: 'expert' | 'proficient' | 'familiar';
    text: string;
    icon?: any;
}

const SkillPill: React.FC<SkillPillProps> = ({ level, text, icon }) => {
    const colorClasses = {
        expert: 'bg-gradient-to-r from-primary-100 to-blue-100 text-primary-800 border-primary-300',
        proficient: 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-300',
        familiar: 'bg-gradient-to-r from-teal-100 to-green-100 text-teal-800 border-teal-300'
    };
    
    return (
        <div className={`skill-pill ${colorClasses[level]} border flex items-center`}>
            {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
            {text}
        </div>
    );
};

interface SkillBarProps {
    name: string;
    percentage: number;
    icon?: any;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, icon }) => {
    const [animated, setAnimated] = React.useState(false);
    
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setAnimated(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className="mb-4 group">
            <div className="flex items-center mb-1.5">
                {icon && (
                    <div className="w-6 h-6 flex items-center justify-center text-primary-600 mr-2 group-hover:text-primary-700 transition-colors">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                )}
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{name}</span>
                <span className="ml-auto text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">{percentage}%</span>
            </div>
            <div className="skill-bar-bg">
                <div 
                    className="skill-bar-fill"
                    style={{ width: animated ? `${percentage}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

const SkillCategory: React.FC<{title: string, icon?: any, children: React.ReactNode}> = ({ title, icon, children }) => {
    return (
        <div className="mb-8">
            <h4 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center">
                {icon && <FontAwesomeIcon icon={icon} className="mr-2 text-primary-600" />}
                {title}
            </h4>
            {children}
        </div>
    );
};

export const SkillsMap = () => {
    return (
        <section className="card fade-in mt-8">
            <h3 className="section-title text-primary-800">Technical Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                    <SkillCategory title="Frontend Development" icon={faCode}>
                        <SkillBar name="JavaScript (ES6+)" percentage={98} icon={faJs} />
                        <SkillBar name="React.js & Next.js" percentage={96} icon={faReact} />
                        <SkillBar name="TypeScript" percentage={95} icon={faCode} />
                        <SkillBar name="HTML5 & CSS3" percentage={98} icon={faHtml5} />
                        <SkillBar name="Redux Ecosystem" percentage={95} icon={faLayerGroup} />
                        <SkillBar name="CSS Preprocessors" percentage={90} icon={faCss3Alt} />
                        <SkillBar name="Web Accessibility (WCAG)" percentage={92} icon={faUniversalAccess} />
                    </SkillCategory>
                    
                    <SkillCategory title="Mobile Development" icon={faMobile}>
                        <SkillBar name="React Native" percentage={92} icon={faReact} />
                        <SkillBar name="Cordova/PhoneGap" percentage={85} icon={faMobile} />
                        <SkillBar name="Mobile UI/UX Design" percentage={88} icon={faBrush} />
                        <SkillBar name="Responsive Design" percentage={95} icon={faLayerGroup} />
                        <SkillBar name="Progressive Web Apps" percentage={86} icon={faMicrochip} />
                    </SkillCategory>
                </div>
                
                <div>
                    <SkillCategory title="Accessibility & Testing" icon={faUniversalAccess}>
                        <SkillBar name="WCAG Implementation" percentage={96} icon={faUniversalAccess} />
                        <SkillBar name="Accessibility Testing" percentage={94} icon={faUniversalAccess} />
                        <SkillBar name="WebdriverIO" percentage={95} icon={faRobot} />
                        <SkillBar name="Playwright" percentage={94} icon={faVial} />
                        <SkillBar name="Jest & React Testing Library" percentage={94} icon={faVial} />
                        <SkillBar name="Selenium" percentage={93} icon={faRobot} />
                        <SkillBar name="Appium (Mobile Testing)" percentage={92} icon={faMobile} />
                    </SkillCategory>
                    
                    <SkillCategory title="CI/CD & Infrastructure" icon={faCloudArrowUp}>
                        <SkillBar name="Harness CI/CD" percentage={92} icon={faCloudArrowUp} />
                        <SkillBar name="GitLab/Jenkins" percentage={94} icon={faGitAlt} />
                        <SkillBar name="Node.js & GraphQL" percentage={90} icon={faNode} />
                        <SkillBar name="Microservices Architecture" percentage={88} icon={faCogs} />
                        <SkillBar name="AWS Services" percentage={85} icon={faAws} />
                        <SkillBar name="Docker & Containerization" percentage={84} icon={faDocker} />
                    </SkillCategory>
                </div>
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-100">
                <h4 className="text-lg font-medium text-primary-800 mb-3 flex items-center">
                    <FontAwesomeIcon icon={faTools} className="mr-2" />
                    Areas of Specialization
                </h4>
                <div className="flex flex-wrap">
                    <SkillPill level="expert" text="Web & Mobile Development" icon={faCode} />
                    <SkillPill level="expert" text="React & Next.js Development" icon={faReact} />
                    <SkillPill level="expert" text="React Native Mobile Apps" icon={faMobile} />
                    <SkillPill level="expert" text="WCAG Accessibility Implementation" icon={faUniversalAccess} />
                    <SkillPill level="expert" text="Test Automation Frameworks" icon={faRobot} />
                    <SkillPill level="expert" text="Unit & Integration Testing" icon={faVial} />
                    <SkillPill level="expert" text="Performance Optimization" icon={faBolt} />
                    <SkillPill level="proficient" text="CI/CD Pipelines" icon={faCloudArrowUp} />
                    <SkillPill level="proficient" text="Harness Deployment" icon={faCloudArrowUp} />
                    <SkillPill level="proficient" text="Containerization (Docker)" icon={faDocker} />
                    <SkillPill level="proficient" text="Firebase Integration" icon={faDatabase} />
                    <SkillPill level="proficient" text="Monorepo Management (Lerna)" icon={faLayerGroup} />
                    <SkillPill level="proficient" text="Micro Frontends" icon={faCode} />
                    <SkillPill level="proficient" text="Security Best Practices" icon={faShieldAlt} />
                </div>
            </div>
        </section>
    );
};

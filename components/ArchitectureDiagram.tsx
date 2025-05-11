import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faReact, faJs, faNode, faGitAlt, faHtml5, faNpm, 
    faAws, faDocker, faJenkins
} from '@fortawesome/free-brands-svg-icons';
import { 
    faDatabase, faServer, faArrowRight, faGlobe, faMobile, 
    faCodeBranch, faUsers, faCloudArrowUp, faCode, faBrush,
    faGear, faBoxOpen, faLayerGroup, faSitemap, faShieldAlt,
    faNetworkWired, faCube, faFeather
} from '@fortawesome/free-solid-svg-icons';

interface NodeProps {
    icon: any;
    label: string;
    color: string;
    delay: number;
    className?: string;
    description?: string;
}

const DiagramNode: React.FC<NodeProps> = ({ icon, label, color, delay, className = '', description }) => {
    const [visible, setVisible] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, delay);
        
        return () => clearTimeout(timer);
    }, [delay]);
    
    return (
        <div 
            className={`transform transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className} relative group`}
            onMouseEnter={() => description && setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
        >
            <div className={`flex flex-col items-center justify-center`}>
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${color} shadow-lg flex items-center justify-center text-white mb-2 transition-all duration-300 hover:shadow-xl group-hover:scale-110`}>
                    <FontAwesomeIcon icon={icon} className="text-2xl md:text-3xl" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800">{label}</span>
            </div>
            
            {description && showDescription && (
                <div className="absolute z-10 -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full w-48 bg-white p-2 rounded-md shadow-lg text-xs text-gray-700 border border-gray-200">
                    {description}
                </div>
            )}
        </div>
    );
};

interface ConnectionProps {
    from: string;
    to: string;
    label?: string;
    dashed?: boolean;
    direction?: 'straight' | 'curved';
    delay: number;
}

const Connection: React.FC<ConnectionProps> = ({ from, to, label, dashed = false, direction = 'straight', delay }) => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, delay);
        
        return () => clearTimeout(timer);
    }, [delay]);
    
    return (
        <div className={`absolute transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`h-0.5 bg-gray-300 absolute transform ${dashed ? 'border-dashed border-gray-300 border' : ''}`}></div>
            {label && (
                <span className="absolute text-xs text-gray-500 whitespace-nowrap">{label}</span>
            )}
        </div>
    );
};

export const ArchitectureDiagram = () => {
    const [showDetailedView, setShowDetailedView] = useState(false);
    
    const toggleView = () => {
        setShowDetailedView(!showDetailedView);
    };
    
    return (
        <div className="card fade-in mt-8 overflow-hidden">
            <div className="flex items-center justify-between">
                <h3 className="section-title text-primary-800">Modern Frontend Architecture</h3>
                <button 
                    onClick={toggleView}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-md text-sm font-medium hover:bg-primary-200 transition-colors"
                >
                    {showDetailedView ? 'Simplified View' : 'Detailed View'}
                </button>
            </div>
            
            {!showDetailedView ? (
                // Simple view - vertical flow
                <div className="my-8 px-4">
                    <div className="relative flex flex-col items-center">
                        {/* Developer Row */}
                        <div className="flex justify-center mb-8 w-full">
                            <DiagramNode 
                                icon={faUsers} 
                                label="Frontend Developer" 
                                color="bg-primary-600"
                                delay={300}
                                description="Engineers who implement UI/UX designs using React, Next.js and various frontend technologies"
                            />
                        </div>
                        
                        <div className="w-0.5 h-6 bg-gray-300 my-2"></div>
                        
                        {/* Version Control */}
                        <div className="flex justify-center my-4 w-full">
                            <DiagramNode 
                                icon={faGitAlt} 
                                label="Version Control" 
                                color="bg-red-500"
                                delay={600}
                                description="Git-based source control through GitHub or GitLab for collaborative development"
                            />
                        </div>
                        
                        <div className="w-0.5 h-6 bg-gray-300 my-2"></div>
                        
                        {/* CI/CD */}
                        <div className="flex justify-center my-4 w-full">
                            <DiagramNode 
                                icon={faCloudArrowUp} 
                                label="CI/CD Pipeline" 
                                color="bg-purple-600"
                                delay={900}
                                description="Automated build, test, and deployment pipelines using Harness, Jenkins, or GitLab CI"
                            />
                        </div>
                        
                        <div className="w-0.5 h-6 bg-gray-300 my-2"></div>
                        
                        {/* Core Technology Stack */}
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 my-6 w-full place-items-center">
                            <DiagramNode 
                                icon={faReact} 
                                label="React / Next.js" 
                                color="bg-blue-500"
                                delay={1200}
                                description="Component-based UI development with server-side rendering and static site generation"
                            />
                            <DiagramNode 
                                icon={faJs} 
                                label="TypeScript" 
                                color="bg-amber-500"
                                delay={1400}
                                description="Type-safe JavaScript for improved developer experience and code quality"
                            />
                            <DiagramNode 
                                icon={faHtml5} 
                                label="HTML5/CSS3" 
                                color="bg-red-600"
                                delay={1600}
                                description="Semantic markup and modern styling with responsive design principles"
                            />
                            <DiagramNode 
                                icon={faNpm} 
                                label="Package Mgmt" 
                                color="bg-red-500"
                                delay={1800}
                                className="hidden md:block"
                                description="Dependency management using npm or yarn with package versioning"
                            />
                            <DiagramNode 
                                icon={faCodeBranch} 
                                label="State Management" 
                                color="bg-green-600"
                                delay={2000}
                                className="hidden md:block"
                                description="Centralized state management with Redux, Context API, or Zustand"
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-20 md:gap-32 w-full my-4">
                            <div className="w-0.5 h-6 bg-gray-300 mx-auto"></div>
                            <div className="w-0.5 h-6 bg-gray-300 mx-auto"></div>
                        </div>
                        
                        {/* Platform Outputs */}
                        <div className="grid grid-cols-2 gap-6 md:gap-20 my-4 w-full place-items-center">
                            <DiagramNode 
                                icon={faGlobe} 
                                label="Web Applications" 
                                color="bg-indigo-600"
                                delay={2200}
                                description="Progressive web apps with responsive design and cross-browser support"
                            />
                            <DiagramNode 
                                icon={faMobile} 
                                label="Mobile Applications" 
                                color="bg-teal-600"
                                delay={2200}
                                description="React Native mobile apps sharing business logic with web"
                            />
                        </div>
                        
                        {/* Backend Connection */}
                        <div className="mt-8 pt-4 text-center max-w-lg">
                            <p className="text-gray-500 text-xs md:text-sm italic">
                                This architecture represents a modern frontend development workflow with component-based architecture, type safety, and automated deployment pipelines.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                // Detailed view - more comprehensive
                <div className="my-8 px-2 overflow-x-auto">
                    <div className="relative min-w-[768px] h-[500px]">
                        {/* Development Tools Layer */}
                        <div className="absolute top-0 left-0 right-0 flex justify-around">
                            <DiagramNode
                                icon={faCode}
                                label="IDE/Code Editor"
                                color="bg-gray-700"
                                delay={300}
                                description="VS Code with ESLint, Prettier, and TypeScript integration"
                            />
                            <DiagramNode
                                icon={faGitAlt}
                                label="Version Control"
                                color="bg-red-600"
                                delay={400}
                                description="Git workflows with feature branches and pull requests"
                            />
                            <DiagramNode
                                icon={faBrush}
                                label="Design System"
                                color="bg-pink-600"
                                delay={500}
                                description="Component library with consistent design tokens and patterns"
                            />
                        </div>
                        
                        {/* Build & CI/CD Layer */}
                        <div className="absolute top-[120px] left-0 right-0 flex justify-around">
                            <DiagramNode
                                icon={faGear}
                                label="Build Tools"
                                color="bg-blue-700"
                                delay={700}
                                description="Webpack/Vite bundling with code splitting and optimization"
                            />
                            <DiagramNode
                                icon={faJenkins}
                                label="CI/CD Pipeline"
                                color="bg-primary-700"
                                delay={800}
                                description="Automated build, test, deployment with Harness/Jenkins"
                            />
                            <DiagramNode
                                icon={faBoxOpen}
                                label="Package Registry"
                                color="bg-red-700"
                                delay={900}
                                description="Private npm registry for shared internal components"
                            />
                        </div>
                        
                        {/* Core Framework Layer */}
                        <div className="absolute top-[240px] left-0 right-0 flex justify-center">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-[500px] flex flex-wrap justify-around">
                                <DiagramNode
                                    icon={faReact}
                                    label="React/Next.js"
                                    color="bg-blue-600"
                                    delay={1100}
                                    description="Component-based UI library with SSR/SSG capabilities"
                                    className="m-2"
                                />
                                <DiagramNode
                                    icon={faJs}
                                    label="TypeScript"
                                    color="bg-amber-600"
                                    delay={1200}
                                    description="Static typing for improved code quality and DX"
                                    className="m-2"
                                />
                                <DiagramNode
                                    icon={faLayerGroup}
                                    label="State Management"
                                    color="bg-green-600"
                                    delay={1300}
                                    description="Redux/Context for global state, React Query for server state"
                                    className="m-2"
                                />
                                <DiagramNode
                                    icon={faNetworkWired}
                                    label="API Integration"
                                    color="bg-purple-600"
                                    delay={1400}
                                    description="REST/GraphQL clients with proper error handling and caching"
                                    className="m-2"
                                />
                            </div>
                        </div>
                        
                        {/* Cross-Cutting Concerns */}
                        <div className="absolute top-[350px] left-0 right-0 flex justify-around">
                            <DiagramNode
                                icon={faShieldAlt}
                                label="Security"
                                color="bg-red-600"
                                delay={1600}
                                description="XSS protection, CSRF tokens, secure auth flows"
                            />
                            <DiagramNode
                                icon={faSitemap}
                                label="Accessibility"
                                color="bg-green-600"
                                delay={1700}
                                description="WCAG 2.1 AA compliance with semantic HTML and ARIA"
                            />
                            <DiagramNode
                                icon={faCube}
                                label="Performance"
                                color="bg-amber-600"
                                delay={1800}
                                description="Core Web Vitals optimization with bundle analysis"
                            />
                            <DiagramNode
                                icon={faFeather}
                                label="Testing"
                                color="bg-indigo-600"
                                delay={1900}
                                description="Unit, integration, and E2E testing with Jest and Playwright"
                            />
                        </div>
                        
                        {/* Deployment Targets */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex justify-around w-[600px]">
                                <DiagramNode
                                    icon={faGlobe}
                                    label="Web"
                                    color="bg-indigo-700"
                                    delay={2100}
                                    className="mx-3"
                                />
                                <DiagramNode
                                    icon={faMobile}
                                    label="Mobile"
                                    color="bg-teal-700"
                                    delay={2200}
                                    className="mx-3"
                                />
                                <DiagramNode
                                    icon={faAws}
                                    label="Cloud"
                                    color="bg-orange-700"
                                    delay={2300}
                                    className="mx-3"
                                />
                                <DiagramNode
                                    icon={faDocker}
                                    label="Containers"
                                    color="bg-blue-800"
                                    delay={2400}
                                    className="mx-3"
                                />
                            </div>
                        </div>
                        
                        {/* Connection lines would be added here in a production app */}
                    </div>
                </div>
            )}
            
            <div className="bg-primary-50 rounded-md p-3 mt-4 border border-primary-100">
                <h4 className="text-sm font-semibold text-primary-800 mb-2">Key Architecture Principles:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-700">
                    <li className="flex items-start">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span>Component-driven development with atomic design principles</span>
                    </li>
                    <li className="flex items-start">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span>Static typing throughout the application with TypeScript</span>
                    </li>
                    <li className="flex items-start">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span>Automated testing at all levels (unit, integration, E2E)</span>
                    </li>
                    <li className="flex items-start">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span>Continuous integration and deployment with quality gates</span>
                    </li>
                    <li className="flex items-start">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span>Accessibility compliance (WCAG 2.1 AA) by design</span>
                    </li>
                    <li className="flex items-start">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span>Performance optimization through code splitting and lazy loading</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}; 

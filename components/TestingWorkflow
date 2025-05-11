import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faJs, faReact, faCss3Alt
} from '@fortawesome/free-brands-svg-icons';
import { 
    faVial, faCodeBranch, faRobot, faCheck, faBug, faCode, 
    faUniversalAccess, faList, faSpinner, faCheckCircle, faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

interface TestingStepProps {
    icon: any;
    title: string;
    description: string;
    color: string;
    delay: number;
    index: number;
    activeStep: number;
}

const TestingStep: React.FC<TestingStepProps> = ({ 
    icon, 
    title, 
    description, 
    color, 
    delay, 
    index,
    activeStep
}) => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, delay);
        
        return () => clearTimeout(timer);
    }, [delay]);
    
    return (
        <div 
            className={`flex items-start mb-4 p-4 rounded-lg border-l-4 ${color} transform transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} ${index <= activeStep ? 'bg-white shadow-md' : 'bg-gray-50'}`}
        >
            <div className={`w-10 h-10 rounded-full ${index <= activeStep ? 'bg-primary-100' : 'bg-gray-100'} flex items-center justify-center mr-4`}>
                <FontAwesomeIcon 
                    icon={icon} 
                    className={`${index <= activeStep ? 'text-primary-600' : 'text-gray-400'} transition-colors duration-300`} 
                />
            </div>
            <div>
                <h4 className={`font-medium mb-1 transition-colors duration-300 ${index <= activeStep ? 'text-gray-800' : 'text-gray-500'}`}>{title}</h4>
                <p className={`text-sm transition-colors duration-300 ${index <= activeStep ? 'text-gray-600' : 'text-gray-400'}`}>{description}</p>
            </div>
            {index <= activeStep && (
                <div className="ml-auto">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index < activeStep ? 'bg-green-100' : 'bg-blue-100'}`}>
                        <FontAwesomeIcon 
                            icon={index < activeStep ? faCheck : faSpinner} 
                            className={`text-sm ${index < activeStep ? 'text-green-600' : 'text-blue-600 animate-spin'}`} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

interface TestStep {
    icon: any;
    title: string;
    description: string;
    color: string;
    delay: number;
}

export const TestingWorkflow: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    const steps: TestStep[] = [
        {
            icon: faList,
            title: 'Test Planning',
            description: 'Define test scenarios and acceptance criteria for features based on requirements',
            color: 'border-blue-300',
            delay: 300
        },
        {
            icon: faCode,
            title: 'Write Test Scripts',
            description: 'Develop automated tests using Jest, RTL, WebdriverIO, and Playwright',
            color: 'border-indigo-300',
            delay: 600
        },
        {
            icon: faRobot,
            title: 'Run Automation Suite',
            description: 'Execute tests against the application in development/QA environments',
            color: 'border-purple-300',
            delay: 900
        },
        {
            icon: faUniversalAccess,
            title: 'Accessibility Testing',
            description: 'Verify WCAG 2.1 AA compliance using automated and manual checks',
            color: 'border-green-300',
            delay: 1200
        },
        {
            icon: faBug,
            title: 'Bug Reporting',
            description: 'Document and report any issues found during testing with detailed steps',
            color: 'border-red-300',
            delay: 1500
        },
        {
            icon: faCheck,
            title: 'Test Validation',
            description: 'Confirm fixes and perform regression testing to ensure quality',
            color: 'border-teal-300',
            delay: 1800
        }
    ];
    
    useEffect(() => {
        if (activeStep < steps.length) {
            timeoutRef.current = setTimeout(() => {
                setActiveStep(prev => prev + 1);
            }, 2000);
        } else if (activeStep === steps.length && !completed) {
            setTimeout(() => {
                setCompleted(true);
            }, 1000);
            
            // Reset the animation after a delay
            setTimeout(() => {
                setActiveStep(0);
                setCompleted(false);
            }, 5000);
        }
        
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [activeStep, steps.length, completed]);
    
    return (
        <div className="card fade-in mt-8">
            <h3 className="section-title text-primary-800">Test Automation Workflow</h3>
            
            <div className="mt-6 mb-2">
                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-primary-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${Math.min(100, (activeStep / steps.length) * 100)}%` }}
                    ></div>
                </div>
                
                {/* Testing Steps */}
                <div className="space-y-2">
                    {steps.map((step, index) => (
                        <TestingStep 
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            color={step.color}
                            delay={step.delay}
                            index={index}
                            activeStep={activeStep}
                        />
                    ))}
                </div>
                
                {/* Completion Message */}
                <div 
                    className={`mt-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center transition-all duration-500 ${completed ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
                >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-xl" />
                    </div>
                    <h4 className="text-lg font-medium text-green-800 mb-1">Testing Completed Successfully</h4>
                    <p className="text-green-700">All tests have passed and the application is ready for deployment</p>
                </div>
            </div>
        </div>
    );
}; 

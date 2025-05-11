import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGitAlt, faDocker
} from '@fortawesome/free-brands-svg-icons';
import { 
    faCode, faBoxArchive, faVial, faServer, 
    faCloudArrowUp, faCodeBranch, faPlay,
    faCircleCheck, faTriangleExclamation, faGauge
} from '@fortawesome/free-solid-svg-icons';

interface PipelineStageProps {
    index: number;
    title: string;
    icon: any;
    color: string;
    activeStage: number;
    status: 'waiting' | 'running' | 'success' | 'failed';
}

const PipelineStage: React.FC<PipelineStageProps> = ({ 
    index, 
    title, 
    icon, 
    color, 
    activeStage,
    status
}) => {
    const isActive = index === activeStage;
    const isCompleted = index < activeStage;
    
    const getStatusIcon = () => {
        switch(status) {
            case 'running':
                return <FontAwesomeIcon icon={faPlay} className="text-blue-500 animate-pulse" />;
            case 'success':
                return <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />;
            case 'failed':
                return <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500" />;
            default:
                return null;
        }
    };
    
    return (
        <div className={`flex flex-col items-center ${isActive ? 'scale-110' : 'scale-100'} transition-all duration-300`}>
            <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-2 shadow-md relative transition-all duration-300 ${isActive ? 'animate-pulse' : ''}`}>
                <FontAwesomeIcon icon={icon} className="text-white text-xl" />
                {status !== 'waiting' && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        {getStatusIcon()}
                    </div>
                )}
            </div>
            <span className="text-xs font-medium text-center">{title}</span>
        </div>
    );
};

export const CICDPipeline: React.FC = () => {
    const [activeStage, setActiveStage] = useState(0);
    const [stageStatuses, setStageStatuses] = useState<Array<'waiting' | 'running' | 'success' | 'failed'>>([
        'waiting', 'waiting', 'waiting', 'waiting', 'waiting', 'waiting'
    ]);
    
    const stages = [
        { title: 'Source Code', icon: faGitAlt, color: 'bg-gray-700' },
        { title: 'Build', icon: faCode, color: 'bg-blue-600' },
        { title: 'Test', icon: faVial, color: 'bg-indigo-600' },
        { title: 'Package', icon: faBoxArchive, color: 'bg-purple-600' },
        { title: 'Performance', icon: faGauge, color: 'bg-amber-600' },
        { title: 'Deploy', icon: faCloudArrowUp, color: 'bg-green-600' }
    ];
    
    useEffect(() => {
        const moveNext = (index: number) => {
            // Update current stage status to running
            setStageStatuses(prev => {
                const newStatuses = [...prev];
                newStatuses[index] = 'running';
                return newStatuses;
            });
            
            // After a delay, mark as success and move to next stage
            setTimeout(() => {
                setStageStatuses(prev => {
                    const newStatuses = [...prev];
                    newStatuses[index] = 'success';
                    return newStatuses;
                });
                
                if (index < stages.length - 1) {
                    setActiveStage(index + 1);
                } else {
                    // Restart the animation after all stages complete
                    setTimeout(() => {
                        setActiveStage(0);
                        setStageStatuses(Array(stages.length).fill('waiting'));
                    }, 3000);
                }
            }, 2000);
        };
        
        moveNext(activeStage);
    }, [activeStage, stages.length]);
    
    return (
        <div className="card fade-in mt-8">
            <h3 className="section-title text-primary-800">CI/CD Pipeline with Harness</h3>
            
            <div className="relative mt-12 mb-8">
                {/* Pipeline progress line */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gray-200 rounded-full z-0">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
                    ></div>
                </div>
                
                {/* Pipeline stages */}
                <div className="flex justify-between relative z-10">
                    {stages.map((stage, index) => (
                        <PipelineStage 
                            key={index}
                            index={index}
                            title={stage.title}
                            icon={stage.icon}
                            color={stage.color}
                            activeStage={activeStage}
                            status={stageStatuses[index]}
                        />
                    ))}
                </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mt-8">
                <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                    <FontAwesomeIcon icon={faCodeBranch} className="text-primary-600 mr-2" />
                    Pipeline Benefits
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mt-1 mr-2" />
                        <span>Reduced deployment time by 40%</span>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mt-1 mr-2" />
                        <span>Automated cross-browser testing</span>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mt-1 mr-2" />
                        <span>Integrated accessibility compliance checks</span>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mt-1 mr-2" />
                        <span>Enhanced developer experience</span>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mt-1 mr-2" />
                        <span>Faster feedback cycle</span>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mt-1 mr-2" />
                        <span>Higher quality releases</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}; 

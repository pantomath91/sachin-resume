import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faHandshakeAngle, faCode, faLaptopCode, faLightbulb, faCertificate } from '@fortawesome/free-solid-svg-icons';

interface AchievementProps {
    title: string;
    organization: string;
    description: string;
    icon: any;
}

const Achievement: React.FC<AchievementProps> = ({ title, organization, description, icon }) => {
    return (
        <div className="flex items-start mb-6 transform transition-transform duration-300 hover:translate-x-1">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-100 rounded-full mr-4 shadow-sm">
                <FontAwesomeIcon icon={icon} className="text-primary-600 text-xl" />
            </div>
            <div>
                <h4 className="text-lg font-display font-semibold text-primary-800">{title}</h4>
                <p className="text-sm font-medium text-gray-700 mb-1">{organization}</p>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export const POR = () => {
    const achievements = [
        {
            title: "Volunteer Mentor",
            organization: "CoderDojo",
            description: "Mentored young developers in web development, teaching HTML, CSS, and JavaScript fundamentals through hands-on projects and code reviews.",
            icon: faHandshakeAngle
        },
        {
            title: "Hackathon Winner",
            organization: "TechCrunch Disrupt",
            description: "Led a team of developers to victory at the regional hackathon by creating an innovative web application that solved community challenges using React and Node.js.",
            icon: faTrophy
        },
        {
            title: "Open Source Contributor",
            organization: "React Community",
            description: "Contributed to popular React libraries and components, improving functionality and fixing bugs that benefited thousands of developers worldwide.",
            icon: faCode
        },
        {
            title: "Tech Workshop Leader",
            organization: "Local Developer Community",
            description: "Organized and conducted workshops on advanced frontend technologies, helping professionals stay current with industry trends and best practices.",
            icon: faLaptopCode
        }
    ];

    return (
        <div className="card fade-in">
            <h3 className="section-title text-primary-800">Achievements & Volunteering</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {achievements.map((achievement, index) => (
                    <Achievement 
                        key={index}
                        title={achievement.title}
                        organization={achievement.organization}
                        description={achievement.description}
                        icon={achievement.icon}
                    />
                ))}
            </div>
        </div>
    );
};

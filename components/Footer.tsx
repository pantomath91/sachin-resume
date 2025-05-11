import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="bg-primary-900 text-white py-8 px-6 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <div className="mb-3 text-lg font-medium tracking-wide">
                    Designed & Developed by Sachin Lohani
                </div>
                <div className="text-primary-200 flex items-center space-x-2 text-sm">
                    <span>Built with</span>
                    <FontAwesomeIcon icon={faHeart} className="text-red-400 animate-pulse" />
                    <span>using</span>
                    <FontAwesomeIcon icon={faReact} className="text-blue-400" spin />
                    <span>Next.js and Tailwind CSS</span>
                </div>
                <div className="mt-6 text-xs text-primary-300">
                    © {new Date().getFullYear()} Sachin Lohani. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

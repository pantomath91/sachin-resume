import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faNpm, faTwitter, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const SocialMediaPanel = () => {
    return (
        <div className="flex flex-row space-x-4">
            <a 
                href="https://github.com/pantomath91" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-white transition-colors duration-200 text-lg"
                aria-label="GitHub Profile"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
                href="https://www.linkedin.com/in/sachin-lohani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-white transition-colors duration-200 text-lg"
                aria-label="LinkedIn Profile"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
                href="https://sachin-resume.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-white transition-colors duration-200 text-lg"
                aria-label="Personal Website"
            >
                <FontAwesomeIcon icon={faGlobe} />
            </a>
            <a 
                href="mailto:schnlohani@gmail.com"
                className="text-primary-100 hover:text-white transition-colors duration-200 text-lg"
                aria-label="Email me"
            >
                <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
        </div>
    );
};

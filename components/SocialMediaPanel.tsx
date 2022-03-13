import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faNpm, faTwitter, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export const SocialMediaPanel = () => {
    return <div className="flex flex-row justify-between">
        <a href="https://github.com/pantomath91" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/sachin-lohani-a0255479/" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/loyalsid92" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="mailto:schnlohani@gmail.com" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
    </div>
}
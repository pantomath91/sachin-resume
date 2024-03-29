import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaPanel } from './SocialMediaPanel';

export const Header = () => {
    return <header className="flex z-10 font-display rounded-lg justify-evenly items-center bg-gray-100 h-32 shadow-lg">
        <div className="flex flex-col">
            <div className="font-display text-2xl font-bold">
                SACHIN LOHANI <span>
                    <a href="https://github.com/pantomath91/Resume/raw/master/Sachin_Lohani_Resume.pdf" title="Download Resume" download> <FontAwesomeIcon icon={faDownload} /> </a>
                </span>
            </div>
            <div className="font-display text-xs font-light mx-auto">
                PRINCIPAL SOFTWARE ENGINEER
            </div>
            <div className="mx-auto">
                <SocialMediaPanel />
            </div>
        </div>
    </header>
}

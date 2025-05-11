import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhone, faEnvelope, faMapMarkerAlt, faStar, faCalendarAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaPanel } from './SocialMediaPanel';
import { ProfilePhoto } from './ProfilePhoto';

export const Header = () => {
    return (
        <header className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-12 px-6 shadow-header rounded-b-2xl">
            {/* Abstract decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full transform -translate-y-1/2"></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center mb-8 md:mb-0">
                        <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                            <ProfilePhoto size="medium" border={true} />
                        </div>
                        
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center mb-3">
                                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white text-center md:text-left">
                                    SACHIN LOHANI
                                </h1>
                            </div>
                            <div className="relative">
                                <h2 className="font-body text-white text-xl md:text-2xl font-medium tracking-wide text-center md:text-left">
                                    FRONTEND (WEB & APP) DEVELOPER
                                </h2>
                                <div className="h-1 w-24 bg-accent-400 mt-2 rounded-full mx-auto md:mx-0"></div>
                            </div>
                            
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
                                <div className="flex items-center bg-primary-900 bg-opacity-30 rounded-full px-4 py-1.5">
                                    <FontAwesomeIcon icon={faStar} className="mr-2 text-accent-300" />
                                    <span className="text-lg">11+ Years of Development Excellence</span>
                                </div>
                                
                                <div className="flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-1.5">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-blue-300" />
                                    <span>PayPal Engineer</span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
                                <div className="flex items-center text-primary-100 hover:text-white transition-colors">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-900 bg-opacity-50 mr-2">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-200" />
                                    </div>
                                    <span>Bengaluru</span>
                                </div>
                                <div className="flex items-center text-primary-100 hover:text-white transition-colors">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-900 bg-opacity-50 mr-2">
                                        <FontAwesomeIcon icon={faPhone} className="text-primary-200" />
                                    </div>
                                    <span>9643966273</span>
                                </div>
                                <div className="flex items-center text-primary-100 hover:text-white transition-colors">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-900 bg-opacity-50 mr-2">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-primary-200" />
                                    </div>
                                    <span>schnlohani@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <a 
                            href="/Sachin_Lohani_Resume.pdf" 
                            title="Download Resume" 
                            download
                            className="flex items-center bg-white text-primary-800 hover:bg-primary-50 px-5 py-3 rounded-lg shadow-lg transition-all duration-300 font-medium text-sm hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <FontAwesomeIcon icon={faDownload} className="mr-2" /> 
                            Download Resume
                        </a>
                        
                        <div className="flex items-center text-primary-100 bg-primary-900 bg-opacity-30 px-3 py-1.5 rounded-lg">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-primary-200" />
                            <span>Available for new opportunities</span>
                        </div>
                        
                        <SocialMediaPanel />
                    </div>
                </div>
            </div>
        </header>
    );
};

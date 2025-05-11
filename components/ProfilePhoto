import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface ProfilePhotoProps {
    className?: string;
    size?: 'small' | 'medium' | 'large';
    border?: boolean;
    rounded?: 'full' | 'md' | 'lg';
    hoverEffect?: boolean;
    imagePath?: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
    className = '',
    size = 'medium',
    border = true,
    rounded = 'full',
    hoverEffect = true,
    imagePath = '/images/profile_photo.png'
}) => {
    const [imageError, setImageError] = useState(false);
    
    // Size classes
    const sizeClasses = {
        small: 'w-24 h-24',
        medium: 'w-32 h-32 md:w-40 md:h-40',
        large: 'w-48 h-48'
    };
    
    // Rounded classes
    const roundedClasses = {
        full: 'rounded-full',
        md: 'rounded-md',
        lg: 'rounded-lg'
    };
    
    // Get dimensions based on size for Image component
    const dimensions = {
        small: { width: 96, height: 96 },
        medium: { width: 160, height: 160 },
        large: { width: 192, height: 192 }
    };
    
    // Render a placeholder if the image isn't available
    const renderPlaceholder = () => (
        <div className={`flex items-center justify-center w-full h-full bg-primary-100`}>
            <FontAwesomeIcon 
                icon={faUser} 
                className="text-primary-500"
                style={{ fontSize: size === 'small' ? '2rem' : size === 'medium' ? '3rem' : '4rem' }}
            />
        </div>
    );
    
    return (
        <div 
            className={`relative ${sizeClasses[size]} ${className} overflow-hidden`}
        >
            <div 
                className={`w-full h-full relative ${roundedClasses[rounded]} overflow-hidden
                    ${border ? 'border-4 border-white shadow-lg' : ''}
                    ${hoverEffect ? 'transform transition-transform duration-300 hover:scale-105' : ''}`}
            >
                {imageError ? (
                    renderPlaceholder()
                ) : (
                    <Image
                        src={imagePath}
                        alt="Sachin Lohani - Professional Photo"
                        width={dimensions[size].width}
                        height={dimensions[size].height}
                        className="object-cover w-full h-full"
                        priority
                        onError={() => setImageError(true)}
                    />
                )}
            </div>
        </div>
    );
}; 

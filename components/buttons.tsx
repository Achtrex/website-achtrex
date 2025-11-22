import React from 'react';

export const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline'; size?: 'sm' | 'md' | 'lg'; className?: string; onClick?: () => void; }) => {
    const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center';

    const variants = {
        primary: 'bg-secondary hover:bg-cyan-500 text-white hover:shadow-xl rounded-full',
        secondary: 'bg-white hover:bg-gray-50 text-cyan-600 border-2 border-cyan-400 rounded-full',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-cyan-600 rounded-full'
    };

    const sizes = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-5 py-3 text-base',
        lg: 'px-5 py-4 text-lg'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]}  ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
    
};
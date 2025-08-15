import React, { useEffect } from 'react';

interface AlertProps {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    isVisible: boolean;
    onClose: () => void;
    autoClose?: boolean;
    duration?: number;
}

const Alert: React.FC<AlertProps> = ({ 
    type, 
    message, 
    isVisible, 
    onClose, 
    autoClose = true, 
    duration = 3000 
}) => {
    useEffect(() => {
        if (isVisible && autoClose) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, autoClose, duration, onClose]);

    if (!isVisible) return null;

    const getAlertStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-green-50 border-green-200 text-green-800 border-l-green-500';
            case 'error':
                return 'bg-red-50 border-red-200 text-red-800 border-l-red-500';
            case 'warning':
                return 'bg-yellow-50 border-yellow-200 text-yellow-800 border-l-yellow-500';
            case 'info':
                return 'bg-blue-50 border-blue-200 text-blue-800 border-l-blue-500';
            default:
                return 'bg-gray-50 border-gray-200 text-gray-800 border-l-gray-500';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return 'bi-check-circle-fill text-green-500';
            case 'error':
                return 'bi-x-circle-fill text-red-500';
            case 'warning':
                return 'bi-exclamation-triangle-fill text-yellow-500';
            case 'info':
                return 'bi-info-circle-fill text-blue-500';
            default:
                return 'bi-info-circle-fill text-gray-500';
        }
    };

    return (
        <div className="fixed top-4 right-4 z-50 transform transition-all duration-500 ease-out animate-bounce">
            <div className={`${getAlertStyles()} p-4 rounded-lg shadow-xl border-l-4 flex items-center space-x-3 min-w-80 max-w-md`}>
                <i className={`bi ${getIcon()} text-xl`}></i>
                <div className="flex-1">
                    <p className="font-medium">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <i className="bi bi-x text-lg"></i>
                </button>
            </div>
        </div>
    );
};

export default Alert;

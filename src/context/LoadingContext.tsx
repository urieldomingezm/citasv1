import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
    isLoading: boolean;
    message: string;
    type: 'hearts' | 'cupid' | 'sparkles' | 'default';
    showLoading: (message?: string, type?: 'hearts' | 'cupid' | 'sparkles' | 'default') => void;
    hideLoading: () => void;
    startPageLoading: (message?: string, type?: 'hearts' | 'cupid' | 'sparkles' | 'default') => Promise<void>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('Encontrando tu match perfecto...');
    const [type, setType] = useState<'hearts' | 'cupid' | 'sparkles' | 'default'>('hearts');

    const showLoading = (
        newMessage: string = 'Encontrando tu match perfecto...', 
        newType: 'hearts' | 'cupid' | 'sparkles' | 'default' = 'hearts'
    ) => {
        setMessage(newMessage);
        setType(newType);
        setIsLoading(true);
    };

    const hideLoading = () => {
        setIsLoading(false);
    };

    const startPageLoading = (
        newMessage?: string, 
        newType?: 'hearts' | 'cupid' | 'sparkles' | 'default'
    ): Promise<void> => {
        return new Promise((resolve) => {
            setMessage(newMessage || 'Cargando...');
            setType(newType || 'hearts');
            setIsLoading(true);
            
            // No necesitamos timeout aquí, lo maneja PageWrapper
            resolve();
        });
    };

    return (
        <LoadingContext.Provider value={{
            isLoading,
            message,
            type,
            showLoading,
            hideLoading,
            startPageLoading
        }}>
            {children}
        </LoadingContext.Provider>
    );
};

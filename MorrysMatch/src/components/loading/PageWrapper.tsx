import React, { useEffect, ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext';
import { usePageReady } from '../hooks/usePageReady';
import Loading from './loading';

interface PageWrapperProps {
    children: ReactNode;
    loadingMessage?: string;
    loadingType?: 'hearts' | 'cupid' | 'sparkles' | 'default';
}

const PageWrapper: React.FC<PageWrapperProps> = ({ 
    children, 
    loadingMessage,
    loadingType = 'hearts'
}) => {
    const location = useLocation();
    const { message, type, showLoading, hideLoading } = useLoading();
    const isPageReady = usePageReady();
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        if (currentPath !== location.pathname) {
            setCurrentPath(location.pathname);
            setIsPageLoading(true);
        }

        const getPageMessage = () => {
            if (loadingMessage) return loadingMessage;
            const path = location.pathname;
            if (path === '/') return 'Bienvenido a MorrysMatch...';
            if (path.includes('descubrir')) return 'Buscando perfiles increíbles para ti...';
            if (path.includes('perfil')) return 'Cargando tu perfil...';
            if (path.includes('matches')) return 'Conectando corazones...';
            if (path.includes('mensajes')) return 'Sincronizando conversaciones...';
            if (path.includes('fotos')) return 'Cargando tu galería personal...';
            if (path.includes('previa')) return 'Preparando vista previa...';
            if (path.includes('home')) return 'Preparando tu dashboard...';
            return 'Cargando página...';
        };

        const getPageType = () => {
            if (loadingType !== 'hearts') return loadingType;
            const path = location.pathname;
            if (path === '/') return 'hearts';
            if (path.includes('descubrir')) return 'hearts';
            if (path.includes('perfil')) return 'sparkles';
            if (path.includes('matches')) return 'cupid';
            if (path.includes('mensajes')) return 'default';
            if (path.includes('fotos')) return 'sparkles';
            if (path.includes('home')) return 'cupid';
            return 'hearts';
        };

        showLoading(getPageMessage(), getPageType());

    }, [location.pathname, showLoading, loadingMessage, loadingType]);

    useEffect(() => {
        if (isPageReady) {
            setTimeout(() => {
                setIsPageLoading(false);
                hideLoading();
            }, 200);
        }
    }, [isPageReady, hideLoading]);

    if (isPageLoading || !isPageReady) {
        return <Loading message={message} type={type} />;
    }

    return <>{children}</>;
};

export default PageWrapper;

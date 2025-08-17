import { useState, useEffect } from 'react';

export const usePageReady = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const checkReady = () => {
            // Verificar múltiples factores de "ready"
            const domReady = document.readyState === 'complete';
            const imagesReady = Array.from(document.images).every(img => img.complete);
            const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

            Promise.all([
                fontsReady,
                new Promise(resolve => {
                    if (domReady && imagesReady) {
                        resolve(true);
                    } else {
                        // Esperar un poco más si no están listos
                        setTimeout(() => resolve(true), 100);
                    }
                })
            ]).then(() => {
                // Pequeño delay adicional para asegurar renderizado completo
                setTimeout(() => setIsReady(true), 50);
            });
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', checkReady);
        } else {
            checkReady();
        }

        return () => {
            document.removeEventListener('DOMContentLoaded', checkReady);
        };
    }, []);

    return isReady;
};

import React from 'react';

interface LoadingProps {
    message?: string;
    type?: 'hearts' | 'cupid' | 'sparkles' | 'default';
}

const Loading: React.FC<LoadingProps> = ({ 
    message = "Encontrando tu match perfecto...", 
    type = 'hearts' 
}) => {
    const renderAnimation = () => {
        switch (type) {
            case 'hearts':
                return (
                    <div className="relative">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="animate-bounce" style={{ animationDelay: '0ms' }}>
                                <i className="bi bi-heart-fill text-4xl text-pink-500 dark:text-pink-400"></i>
                            </div>
                            <div className="animate-bounce" style={{ animationDelay: '150ms' }}>
                                <i className="bi bi-heart-fill text-4xl text-red-500 dark:text-red-400"></i>
                            </div>
                            <div className="animate-bounce" style={{ animationDelay: '300ms' }}>
                                <i className="bi bi-heart-fill text-4xl text-pink-500 dark:text-pink-400"></i>
                            </div>
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 to-red-300 dark:from-pink-600 dark:to-red-600 rounded-full opacity-20 animate-pulse"></div>
                    </div>
                );
            
            case 'cupid':
                return (
                    <div className="relative">
                        <div className="animate-spin">
                            <i className="bi bi-arrow-through-heart text-6xl text-pink-500 dark:text-pink-400"></i>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-700 dark:to-purple-700 rounded-full opacity-30 animate-ping"></div>
                    </div>
                );
            
            case 'sparkles':
                return (
                    <div className="relative">
                        <div className="grid grid-cols-3 gap-2">
                            {[...Array(9)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="animate-pulse" 
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <i className={`bi ${i % 3 === 0 ? 'bi-star-fill' : i % 3 === 1 ? 'bi-heart-fill' : 'bi-gem'} text-2xl ${
                                        i % 3 === 0 ? 'text-yellow-400' : i % 3 === 1 ? 'text-pink-400' : 'text-purple-400'
                                    }`}></i>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            
            default:
                return (
                    <div className="relative">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-200 dark:border-pink-700 border-t-pink-500 dark:border-t-pink-400"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <i className="bi bi-heart-fill text-pink-500 dark:text-pink-400 animate-pulse"></i>
                        </div>
                    </div>
                );
        }
    };

    const getRandomMessage = () => {
        const messages = [
            "Encontrando tu match perfecto...",
            "Conectando corazones...",
            "Buscando tu alma gemela...",
            "Preparando perfiles increíbles...",
            "Activando la magia del amor...",
            "Sincronizando latidos...",
            "Creando conexiones especiales...",
            "Despertando cupido...",
            "Filtrando los mejores matches...",
            "Cargando sonrisas..."
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    };

    return (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
            <div className="text-center p-8 animate-fade-in">
                {/* Animación principal */}
                <div className="mb-6 flex justify-center">
                    {renderAnimation()}
                </div>

                {/* Mensaje de carga */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                        MorrysMatch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                        {message || getRandomMessage()}
                    </p>
                </div>

                {/* Barra de progreso animada */}
                <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mx-auto overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-400 via-red-400 to-purple-400 dark:from-pink-500 dark:via-red-500 dark:to-purple-500 rounded-full animate-pulse relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white dark:via-gray-200 to-transparent opacity-30 animate-slide-right"></div>
                    </div>
                </div>

                {/* Puntos de carga adicionales */}
                <div className="flex justify-center space-x-2 mt-6">
                    <div className="w-2 h-2 bg-pink-400 dark:bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-red-400 dark:bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>

                {/* Elementos decorativos flotantes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-20 animate-float">
                        <i className="bi bi-heart text-pink-300 dark:text-pink-600 text-2xl opacity-60"></i>
                    </div>
                    <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '1s' }}>
                        <i className="bi bi-star-fill text-yellow-300 dark:text-yellow-600 text-lg opacity-60"></i>
                    </div>
                    <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
                        <i className="bi bi-gem text-purple-300 dark:text-purple-600 text-xl opacity-60"></i>
                    </div>
                    <div className="absolute bottom-40 right-20 animate-float" style={{ animationDelay: '1.5s' }}>
                        <i className="bi bi-heart-fill text-red-300 dark:text-red-600 text-sm opacity-60"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;

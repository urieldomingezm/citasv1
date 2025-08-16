import React from 'react';
import { themeClasses } from '../../themes';

const UserHome: React.FC = () => {
    return (
        <div className={`min-h-screen ${themeClasses.background} transition-colors duration-300`}>
            {/* Hero Section para Usuario Logueado */}
            <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            ¡Bienvenido de vuelta!
                        </h1>
                        <p className="text-lg opacity-90">
                            Tu siguiente conexión especial podría estar esperándote
                        </p>
                    </div>
                    
                    {/* Stats del usuario */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold">12</div>
                            <div className="text-sm opacity-80">Matches</div>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold">5</div>
                            <div className="text-sm opacity-80">Mensajes</div>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold">3</div>
                            <div className="text-sm opacity-80">Visitas</div>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold">95%</div>
                            <div className="text-sm opacity-80">Perfil</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Acciones Rápidas */}
            <section className="py-8 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6 text-center`}>
                        Acciones Rápidas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className={`${themeClasses.card} rounded-xl p-6 shadow-lg hover:shadow-xl ${themeClasses.hover} transition-all duration-300 cursor-pointer border-pink-100 dark:border-pink-800`}>
                            <div className="text-center">
                                <i className="bi bi-search-heart text-4xl text-pink-500 dark:text-pink-400 mb-4"></i>
                                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-2`}>Descubrir</h3>
                                <p className={`${themeClasses.textSecondary} text-sm`}>Encuentra nuevas personas compatibles contigo</p>
                            </div>
                        </div>
                        <div className={`${themeClasses.card} rounded-xl p-6 shadow-lg hover:shadow-xl ${themeClasses.hover} transition-all duration-300 cursor-pointer border-purple-100 dark:border-purple-800`}>
                            <div className="text-center">
                                <i className="bi bi-chat-dots text-4xl text-purple-500 dark:text-purple-400 mb-4"></i>
                                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-2`}>Mensajes</h3>
                                <p className={`${themeClasses.textSecondary} text-sm`}>Chatea con tus matches y conoce mejor</p>
                            </div>
                        </div>
                        <div className={`${themeClasses.card} rounded-xl p-6 shadow-lg hover:shadow-xl ${themeClasses.hover} transition-all duration-300 cursor-pointer border-blue-100 dark:border-blue-800`}>
                            <div className="text-center">
                                <i className="bi bi-person-gear text-4xl text-blue-500 dark:text-blue-400 mb-4"></i>
                                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-2`}>Mi Perfil</h3>
                                <p className={`${themeClasses.textSecondary} text-sm`}>Edita y mejora tu perfil para más matches</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Anuncios y Promociones */}
            <section className={`py-8 px-6 ${themeClasses.backgroundSecondary} transition-colors duration-300`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6 text-center`}>
                        Promociones Especiales
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Premium por 1 mes</h3>
                                    <p className="text-sm opacity-90 mb-4">Acceso ilimitado a todas las funciones</p>
                                    <button className="bg-white text-yellow-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                        ¡Obtener ahora!
                                    </button>
                                </div>
                                <i className="bi bi-star-fill text-4xl opacity-80"></i>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Super Likes x10</h3>
                                    <p className="text-sm opacity-90 mb-4">Destaca entre la multitud</p>
                                    <button className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                        Comprar pack
                                    </button>
                                </div>
                                <i className="bi bi-heart-fill text-4xl opacity-80"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Matches Recientes */}
            <section className="py-8 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6 text-center`}>
                        Tus Matches Recientes
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className={`${themeClasses.card} rounded-xl p-4 shadow-lg text-center cursor-pointer hover:shadow-xl ${themeClasses.hover} transition-all duration-300`}>
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <i className="bi bi-person text-white text-2xl"></i>
                                </div>
                                <h4 className={`font-semibold ${themeClasses.text} text-sm`}>Usuario {i}</h4>
                                <p className={`text-xs ${themeClasses.textMuted}`}>Online</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserHome;
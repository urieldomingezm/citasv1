import React, { useState } from 'react';
import { themeClasses } from '@themes/index';

const Perfil: React.FC = () => {
    const [activeTab, setActiveTab] = useState('info');

    return (
        <div className={`min-h-screen ${themeClasses.backgroundSecondary} bg-white dark:bg-black transition-colors duration-300`}>
            {/* Encabezado */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Mi Perfil</h1>
                    <p className="text-lg opacity-90">Comparte lo mejor de ti con el mundo</p>
                </div>
            </section>

            {/* Contenido del Perfil */}
            <section className="py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Foto Principal y Info Básica */}
                    <div className={`${themeClasses.card} rounded-xl p-6 shadow-lg mb-8`}>
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                            {/* Foto Principal */}
                            <div className="relative">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                    <i className="bi bi-person text-white text-6xl"></i>
                                </div>
                                <button className={`absolute bottom-0 right-0 bg-purple-500 dark:bg-purple-600 text-white rounded-full p-2 shadow-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition ${themeClasses.hover}`}>
                                    <i className="bi bi-camera text-lg"></i>
                                </button>
                            </div>
                            
                            {/* Info Básica */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className={`text-2xl font-bold ${themeClasses.text} text-gray-800 dark:text-gray-200 mb-2`}>María, 25</h2>
                                <p className={`${themeClasses.textSecondary} text-gray-600 dark:text-gray-400 mb-4`}>
                                    <i className="bi bi-geo-alt text-purple-500 dark:text-purple-400"></i>
                                    Ciudad de México, CDMX
                                </p>
                                <p className={`${themeClasses.textSecondary} text-gray-700 dark:text-gray-300 mb-4`}>
                                    "Amo viajar, la fotografía y los atardeceres. Buscando a alguien con quien compartir aventuras y crear recuerdos increíbles."
                                </p>
                                <div className="flex justify-center md:justify-start space-x-4">
                                    <button className={`bg-purple-500 dark:bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition ${themeClasses.hover}`}>
                                        <i className="bi bi-pencil mr-2"></i>Editar Perfil
                                    </button>
                                    <button className={`border border-purple-500 dark:border-purple-400 text-purple-500 dark:text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 transition ${themeClasses.hover}`}>
                                        <i className="bi bi-eye mr-2"></i>Vista Previa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs de Navegación */}
                    <div className={`${themeClasses.card} rounded-xl shadow-lg mb-8`}>
                        <div className={`border-b ${themeClasses.border} border-gray-200 dark:border-gray-600`}>
                            <nav className="flex">
                                <button
                                    onClick={() => setActiveTab('info')}
                                    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                                        activeTab === 'info'
                                            ? 'border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400'
                                            : `border-transparent ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300`
                                    }`}
                                >
                                    <i className="bi bi-person-lines-fill mr-2"></i>
                                    Información
                                </button>
                                <button
                                    onClick={() => setActiveTab('fotos')}
                                    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                                        activeTab === 'fotos'
                                            ? 'border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400'
                                            : `border-transparent ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300`
                                    }`}
                                >
                                    <i className="bi bi-images mr-2"></i>
                                    Fotos (6)
                                </button>
                                <button
                                    onClick={() => setActiveTab('intereses')}
                                    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                                        activeTab === 'intereses'
                                            ? 'border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400'
                                            : `border-transparent ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300`
                                    }`}
                                >
                                    <i className="bi bi-heart mr-2"></i>
                                    Intereses
                                </button>
                            </nav>
                        </div>

                        <div className="p-6">
                            {/* Tab Información */}
                            {activeTab === 'info' && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} text-gray-700 dark:text-gray-300 mb-2`}>Edad</label>
                                            <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-3 rounded-lg ${themeClasses.text}`}>25 años</div>
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} text-gray-700 dark:text-gray-300 mb-2`}>Altura</label>
                                            <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-3 rounded-lg ${themeClasses.text}`}>1.65 m</div>
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} text-gray-700 dark:text-gray-300 mb-2`}>Educación</label>
                                            <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-3 rounded-lg ${themeClasses.text}`}>Licenciatura en Diseño</div>
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} text-gray-700 dark:text-gray-300 mb-2`}>Trabajo</label>
                                            <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-3 rounded-lg ${themeClasses.text}`}>Diseñadora Gráfica</div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className={`block text-sm font-medium ${themeClasses.text} text-gray-700 dark:text-gray-300 mb-2`}>Sobre mí</label>
                                        <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-3 rounded-lg ${themeClasses.text}`}>
                                            Soy una persona apasionada por el arte y la creatividad. Me encanta explorar nuevos lugares, 
                                            probar comida de diferentes culturas y conocer personas interesantes. 
                                            En mis tiempos libres disfruto de la fotografía, la lectura y el yoga.
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tab Fotos */}
                            {activeTab === 'fotos' && (
                                <div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <div key={i} className="relative group">
                                                <div className={`aspect-square bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition ${themeClasses.hover}`}>
                                                    <i className="bi bi-image text-4xl text-purple-400 dark:text-purple-300"></i>
                                                </div>
                                                <button className="absolute top-2 right-2 bg-red-500 dark:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition hover:bg-red-600 dark:hover:bg-red-700">
                                                    <i className="bi bi-x text-sm"></i>
                                                </button>
                                                <div className="absolute bottom-2 left-2 right-2">
                                                    <div className="bg-black dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-70 text-white text-xs p-1 rounded text-center">
                                                        Foto {i}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`border-2 border-dashed border-purple-300 dark:border-purple-600 rounded-lg p-8 text-center hover:border-purple-400 dark:hover:border-purple-500 cursor-pointer transition ${themeClasses.hover}`}>
                                        <i className="bi bi-plus-circle text-4xl text-purple-400 dark:text-purple-300 mb-4"></i>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">Agregar nueva foto</p>
                                        <p className={`${themeClasses.textSecondary} text-gray-500 dark:text-gray-400 text-sm`}>Máximo 9 fotos</p>
                                    </div>
                                </div>
                            )}

                            {/* Tab Intereses */}
                            {activeTab === 'intereses' && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className={`text-lg font-semibold ${themeClasses.text} text-gray-800 dark:text-gray-200 mb-4`}>Mis Intereses</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {['Fotografía', 'Viajes', 'Yoga', 'Cocina', 'Arte', 'Música', 'Lectura', 'Naturaleza'].map((interes) => (
                                                <span key={interes} className={`bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm ${themeClasses.hover} cursor-pointer transition-colors duration-200`}>
                                                    {interes}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className={`text-lg font-semibold ${themeClasses.text} text-gray-800 dark:text-gray-200 mb-4`}>Estilo de Vida</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-4 rounded-lg`}>
                                                <div className="flex items-center justify-between">
                                                    <span className={`${themeClasses.textSecondary} text-gray-600 dark:text-gray-400`}>¿Fumas?</span>
                                                    <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-sm">No</span>
                                                </div>
                                            </div>
                                            <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-4 rounded-lg`}>
                                                <div className="flex items-center justify-between">
                                                    <span className={`${themeClasses.textSecondary} text-gray-600 dark:text-gray-400`}>¿Bebes?</span>
                                                    <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded text-sm">Socialmente</span>
                                                </div>
                                            </div>
                                            <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-4 rounded-lg`}>
                                                <div className="flex items-center justify-between">
                                                    <span className={`${themeClasses.textSecondary} text-gray-600 dark:text-gray-400`}>Ejercicio</span>
                                                    <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">Regular</span>
                                                </div>
                                            </div>
                                            <div className={`${themeClasses.backgroundTertiary} bg-gray-50 dark:bg-gray-700 p-4 rounded-lg`}>
                                                <div className="flex items-center justify-between">
                                                    <span className={`${themeClasses.textSecondary} text-gray-600 dark:text-gray-400`}>Mascotas</span>
                                                    <span className="bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 px-2 py-1 rounded text-sm">Me encantan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Estadísticas del Perfil */}
                    <div className={`bg-white dark:bg-black rounded-xl p-6 shadow-lg`}>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">Estadísticas de tu Perfil</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="bg-purple-100 dark:bg-purple-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                    <i className="bi bi-eye text-purple-600 dark:text-purple-300 text-2xl"></i>
                                </div>
                                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">127</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Vistas esta semana</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-pink-100 dark:bg-pink-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                    <i className="bi bi-heart text-pink-600 dark:text-pink-300 text-2xl"></i>
                                </div>
                                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">23</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Likes recibidos</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 dark:bg-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                    <i className="bi bi-people text-green-600 dark:text-green-300 text-2xl"></i>
                                </div>
                                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">12</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Matches nuevos</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 dark:bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                    <i className="bi bi-chat-dots text-blue-600 dark:text-blue-300 text-2xl"></i>
                                </div>
                                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">8</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Conversaciones</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Perfil;
import React, { useState } from 'react';
import { themeClasses } from '../../themes';

const Previa: React.FC = () => {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    const photos = [1, 2, 3, 4, 5, 6];

    const nextPhoto = () => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className={`min-h-screen ${themeClasses.backgroundSecondary} transition-colors duration-300 relative overflow-hidden`}>
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 dark:bg-blue-400 rounded-full opacity-10 dark:opacity-20"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 dark:bg-blue-400 rounded-full opacity-10 dark:opacity-20"></div>
            </div>

            {/* Encabezado */}
            <section className="relative bg-blue-600 text-white py-8 px-6 shadow-xl">
                <div className="relative max-w-6xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            Vista Previa
                        </h1>
                        <p className="text-white mt-1 font-medium">Así te ven otros usuarios</p>
                    </div>
                    <div className="flex space-x-3">
                        <button className={`${themeClasses.card} text-blue-600 dark:text-blue-400 ${themeClasses.hover} transition-all duration-300 rounded-2xl p-3 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                            <i className="bi bi-pencil text-lg"></i>
                        </button>
                        <button className={`${themeClasses.card} text-blue-600 dark:text-blue-400 ${themeClasses.hover} transition-all duration-300 rounded-2xl p-3 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                            <i className="bi bi-share text-lg"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Contenido Principal */}
            <section className="relative py-12 px-6">
                <div className="max-w-md mx-auto">
                    {/* Tarjeta de Perfil como la verían otros */}
                    <div className={`relative ${themeClasses.card} bg-opacity-95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden mb-8 border border-opacity-20`} style={{ height: '700px' }}>
                        {/* Carrusel de Fotos */}
                        <div className="relative h-2/3 bg-gradient-to-br from-blue-200 via-indigo-200 to-slate-300 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800 overflow-hidden">
                            {/* Efectos de fondo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-400 dark:from-slate-700 dark:to-slate-800 opacity-70"></div>
                            <div className="absolute top-10 left-10 w-20 h-20 bg-white dark:bg-slate-600 bg-opacity-30 dark:bg-opacity-50 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-10 right-10 w-32 h-32 bg-slate-300 dark:bg-slate-500 bg-opacity-40 dark:bg-opacity-60 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>

                            {/* Foto Principal */}
                            <div className="relative flex items-center justify-center h-full">
                                <i className="bi bi-person text-white text-9xl drop-shadow-lg"></i>
                            </div>

                            {/* Controles de navegación de fotos */}
                            <button
                                onClick={prevPhoto}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black dark:bg-slate-700 bg-opacity-50 hover:bg-opacity-70 dark:hover:bg-opacity-80 text-white rounded-full p-2 transition-all duration-300"
                            >
                                <i className="bi bi-chevron-left text-xl"></i>
                            </button>
                            <button
                                onClick={nextPhoto}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black dark:bg-slate-700 bg-opacity-50 hover:bg-opacity-70 dark:hover:bg-opacity-80 text-white rounded-full p-2 transition-all duration-300"
                            >
                                <i className="bi bi-chevron-right text-xl"></i>
                            </button>

                            {/* Indicadores de fotos */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {photos.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPhoto
                                            ? 'bg-white w-6'
                                            : 'bg-white bg-opacity-50'
                                            }`}
                                    ></div>
                                ))}
                            </div>

                            {/* Badge de verificado */}
                            <div className="absolute top-6 right-6 bg-blue-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center">
                                <i className="bi bi-patch-check-fill mr-1"></i>
                                Verificado
                            </div>

                            {/* Badge de estado */}
                            <div className="absolute top-6 left-6 flex items-center bg-green-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                                Activo ahora
                            </div>
                        </div>

                        {/* Información del Perfil */}
                        <div className={`h-1/3 p-6 bg-gradient-to-b ${themeClasses.backgroundSecondary} from-white to-gray-50 dark:from-slate-800 dark:to-slate-900`}>
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h2 className={`text-2xl font-bold bg-gradient-to-r ${themeClasses.text} from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-1`}>
                                        Tu Nombre, 25
                                    </h2>
                                    <p className={`${themeClasses.textSecondary} text-gray-600 dark:text-gray-400 flex items-center font-medium mb-2`}>
                                        <i className="bi bi-geo-alt text-blue-500 dark:text-blue-400 mr-2"></i>
                                        Tu Ciudad, País
                                    </p>
                                    <div className={`flex items-center space-x-4 text-sm ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`}>
                                        <span className="flex items-center">
                                            <i className="bi bi-eye text-blue-400 dark:text-blue-300 mr-1"></i>
                                            127 vistas
                                        </span>
                                        <span className="flex items-center">
                                            <i className="bi bi-heart text-emerald-400 dark:text-emerald-300 mr-1"></i>
                                            23 likes
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <div className={`bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-800 dark:to-teal-800 text-emerald-600 dark:text-emerald-300 rounded-full p-2 text-center ${themeClasses.hover}`}>
                                        <i className="bi bi-heart text-lg"></i>
                                    </div>
                                    <div className={`bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800 text-blue-600 dark:text-blue-300 rounded-full p-2 text-center ${themeClasses.hover}`}>
                                        <i className="bi bi-star text-lg"></i>
                                    </div>
                                </div>
                            </div>

                            <p className={`${themeClasses.textSecondary} text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed`}>
                                "Amo viajar y conocer nuevas culturas. Buscando a alguien con quien compartir aventuras increíbles y crear recuerdos únicos."
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['Viajes', 'Fotografía', 'Música', 'Arte'].map((interest, index) => (
                                    <span
                                        key={index}
                                        className={`bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-600 ${themeClasses.hover}`}
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Botones de Acción como los verían otros */}
                    <div className="flex justify-center items-center space-x-8 mb-8">
                        <button className={`bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-600 dark:text-gray-400 rounded-full p-5 shadow-xl border border-gray-300 dark:border-gray-600 cursor-not-allowed opacity-70 ${themeClasses.hover}`}>
                            <i className="bi bi-x-lg text-3xl"></i>
                        </button>

                        <button className="bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-600 text-white rounded-full p-5 shadow-xl cursor-not-allowed opacity-70 hover:shadow-2xl transition-all duration-300">
                            <i className="bi bi-star-fill text-3xl"></i>
                        </button>

                        <button className="bg-gradient-to-br from-emerald-400 to-teal-500 dark:from-emerald-500 dark:to-teal-600 text-white rounded-full p-5 shadow-xl cursor-not-allowed opacity-70 hover:shadow-2xl transition-all duration-300">
                            <i className="bi bi-heart-fill text-3xl"></i>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Previa;
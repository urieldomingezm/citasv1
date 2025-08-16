import React, { useState } from 'react';
import { themeClasses } from '../../themes';

const Fotos: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
    const [uploadMode, setUploadMode] = useState(false);

    const photos = [
        { id: 1, isMain: true, likes: 45, views: 120 },
        { id: 2, isMain: false, likes: 32, views: 89 },
        { id: 3, isMain: false, likes: 28, views: 76 },
        { id: 4, isMain: false, likes: 41, views: 103 },
        { id: 5, isMain: false, likes: 37, views: 94 },
        { id: 6, isMain: false, likes: 23, views: 67 },
    ];

    const emptySlots = 9 - photos.length;

    return (
        <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-black dark:via-black dark:to-black relative overflow-hidden transition-colors duration-300`}>
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-400 dark:from-blue-800 dark:to-cyan-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-300 to-indigo-400 dark:from-cyan-800 dark:to-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-pulse animation-delay-2000"></div>
            </div>

            {/* Encabezado */}
            <section className="relative bg-blue-600 dark:bg-blue-800 text-white py-8 px-6 shadow-xl">
                <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Mis Fotos
                    </h1>
                    <p className="text-blue-100 dark:text-blue-300 mt-1 font-medium">Gestiona tu galería personal</p>
                </div>
            </section>

            {/* Estadísticas de Fotos */}
            <section className="relative py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-images text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-white">{photos.length}</div>
                            <div className="text-xs text-white font-semibold">Fotos subidas</div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-heart-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-white">
                                {photos.reduce((sum, photo) => sum + photo.likes, 0)}
                            </div>
                            <div className="text-xs text-white font-semibold">Total likes</div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-eye-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-white">
                                {photos.reduce((sum, photo) => sum + photo.views, 0)}
                            </div>
                            <div className="text-xs text-white font-semibold">Total vistas</div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-star-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-white">
                                {Math.round((photos.reduce((sum, photo) => sum + photo.likes, 0) / photos.reduce((sum, photo) => sum + photo.views, 0)) * 100)}%
                            </div>
                            <div className="text-xs text-white font-semibold">Engagement</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería de Fotos */}
            <section className="relative py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white dark:text-white mb-8 text-center">
                        Tu Galería Personal
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                        {photos.map((photo) => (
                            <div 
                                key={photo.id} 
                                className="group relative aspect-[4/3] bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                onClick={() => setSelectedPhoto(photo.id)}
                            >
                                {/* Contenido de la foto */}
                                <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-blue-300 to-indigo-400 dark:from-blue-700 dark:to-indigo-800">
                                    <i className="bi bi-image text-white text-4xl"></i>
                                </div>
                                
                                {/* Badge de foto principal */}
                                {photo.isMain && (
                                    <div className="absolute top-3 left-3 bg-yellow-500 dark:bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                                        <i className="bi bi-star-fill mr-1"></i>Principal
                                    </div>
                                )}
                                
                                {/* Overlay con estadísticas */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-center">
                                        <div className="flex items-center justify-center space-x-4 mb-2">
                                            <span className="flex items-center">
                                                <i className="bi bi-heart-fill text-red-400 mr-1"></i>
                                                {photo.likes}
                                            </span>
                                            <span className="flex items-center">
                                                <i className="bi bi-eye-fill text-blue-400 mr-1"></i>
                                                {photo.views}
                                            </span>
                                        </div>
                                        <div className="flex justify-center space-x-2">
                                            <button className={`${themeClasses.card} bg-opacity-90 text-gray-700 dark:text-gray-300 rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-all ${themeClasses.hover}`}>
                                                <i className="bi bi-pencil text-sm"></i>
                                            </button>
                                            <button className="bg-red-500 dark:bg-red-600 text-white rounded-full p-2 hover:bg-red-600 dark:hover:bg-red-700 transition-all">
                                                <i className="bi bi-trash text-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Botón de menú */}
                                <button className="absolute top-3 right-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-600">
                                    <i className="bi bi-three-dots text-sm"></i>
                                </button>
                            </div>
                        ))}
                        
                        {/* Espacios vacíos para subir más fotos */}
                        {Array.from({ length: emptySlots }).map((_, index) => (
                            <div 
                                key={`empty-${index}`}
                                className={`group aspect-square border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-2xl flex flex-col items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 cursor-pointer ${themeClasses.hover}`}
                                onClick={() => setUploadMode(true)}
                            >
                                <i className="bi bi-plus-circle text-4xl text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 mb-2"></i>
                                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">Agregar foto</p>
                                <p className="text-violet-400 dark:text-violet-300 text-xs">Máximo 9 fotos</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal de subir foto */}
            {uploadMode && (
                <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-100 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white dark:border-gray-600">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent mb-4">
                                Subir Nueva Foto
                            </h3>
                            <div className={`border-2 border-dashed border-violet-300 dark:border-violet-600 rounded-2xl p-8 mb-6 hover:border-violet-400 dark:hover:border-violet-500 transition-all duration-300 ${themeClasses.hover}`}>
                                <i className="bi bi-cloud-upload text-6xl text-violet-400 dark:text-violet-300 mb-4"></i>
                                <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">Arrastra tu foto aquí</p>
                                <p className="text-violet-400 dark:text-violet-300 text-sm mb-4">o haz clic para seleccionar</p>
                                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-600 dark:to-fuchsia-600 text-white px-6 py-2 rounded-2xl font-semibold hover:from-violet-600 hover:to-fuchsia-600 dark:hover:from-violet-700 dark:hover:to-fuchsia-700 transition-all duration-300">
                                    Seleccionar Archivo
                                </button>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button 
                                    onClick={() => setUploadMode(false)}
                                    className={`px-6 py-2 ${themeClasses.textSecondary} text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-all duration-300 ${themeClasses.hover}`}
                                >
                                    Cancelar
                                </button>
                                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-600 dark:to-fuchsia-600 text-white px-6 py-2 rounded-2xl font-semibold hover:from-violet-600 hover:to-fuchsia-600 dark:hover:from-violet-700 dark:hover:to-fuchsia-700 transition-all duration-300">
                                    Subir Foto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de vista detallada de foto */}
            {selectedPhoto && (
                <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-100 backdrop-blur-xl rounded-3xl p-6 max-w-2xl w-full shadow-2xl border border-white dark:border-gray-600">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                                Detalles de la Foto
                            </h3>
                            <button 
                                onClick={() => setSelectedPhoto(null)}
                                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 text-2xl"
                            >
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                        
                        <div className="aspect-square bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-2xl flex items-center justify-center mb-6">
                            <i className="bi bi-image text-white text-8xl"></i>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-pink-600">{photos.find(p => p.id === selectedPhoto)?.likes}</div>
                                <div className="text-sm text-gray-600">Likes recibidos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">{photos.find(p => p.id === selectedPhoto)?.views}</div>
                                <div className="text-sm text-gray-600">Vistas totales</div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center space-x-4">
                            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-6 py-2 rounded-2xl font-semibold hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300">
                                <i className="bi bi-star mr-2"></i>
                                Hacer Principal
                            </button>
                            <button className="bg-white bg-opacity-80 backdrop-blur-sm border-2 border-violet-300 text-violet-600 px-6 py-2 rounded-2xl font-semibold hover:bg-violet-50 transition-all duration-300">
                                <i className="bi bi-trash mr-2"></i>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Fotos;
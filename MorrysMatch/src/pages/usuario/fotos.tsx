import React, { useState } from 'react';
import { themeClasses } from '@themes/index';
import MostrarFotoModal from '@components/modales/fotos/mostrar-foto';

const Fotos: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
    const [uploadMode, setUploadMode] = useState(false);

    const [photos, setPhotos] = useState([
        { id: 1, isMain: true, likes: 45, views: 120 },
        { id: 2, isMain: false, likes: 32, views: 89 },
        { id: 3, isMain: false, likes: 28, views: 76 },
        { id: 4, isMain: false, likes: 41, views: 103 },
        { id: 5, isMain: false, likes: 37, views: 94 },
        { id: 6, isMain: false, likes: 23, views: 67 },
    ]);

    const emptySlots = 9 - photos.length;

    const handleMakeMain = (photoId: number) => {
        setPhotos(prevPhotos => 
            prevPhotos.map(photo => ({
                ...photo,
                isMain: photo.id === photoId
            }))
        );
    };

    const handleDeletePhoto = (photoId: number) => {
        setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== photoId));
    };

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
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-images text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{photos.length}</div>
                            <div className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Fotos subidas</div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-heart-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                                {photos.reduce((sum, photo) => sum + photo.likes, 0)}
                            </div>
                            <div className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Total likes</div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-eye-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                {photos.reduce((sum, photo) => sum + photo.views, 0)}
                            </div>
                            <div className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Total vistas</div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-star-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                                {Math.round((photos.reduce((sum, photo) => sum + photo.likes, 0) / photos.reduce((sum, photo) => sum + photo.views, 0)) * 100)}%
                            </div>
                            <div className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Engagement</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería de Fotos */}
            <section className="relative py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                        Tu Galería Personal
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
                        {photos.map((photo) => (
                            <div
                                key={photo.id}
                                className="group relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                onClick={() => setSelectedPhoto(photo.id)}
                            >
                                {/* Contenido de la foto */}
                                <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-blue-300 to-indigo-400 dark:from-blue-700 dark:to-indigo-800">
                                    <i className="bi bi-image text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl"></i>
                                </div>

                                {/* Badge de foto principal */}
                                {photo.isMain && (
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 bg-yellow-500 dark:bg-yellow-600 text-white px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-bold shadow-xl">
                                        <i className="bi bi-star-fill mr-1 sm:mr-2 text-sm sm:text-base lg:text-lg"></i>Principal
                                    </div>
                                )}

                                {/* Overlay con estadísticas */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-center">
                                        <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8 mb-3 sm:mb-4 lg:mb-6">
                                            <span className="flex items-center text-sm sm:text-base lg:text-xl">
                                                <i className="bi bi-heart-fill text-red-400 mr-2 sm:mr-3 text-lg sm:text-xl lg:text-2xl"></i>
                                                {photo.likes}
                                            </span>
                                            <span className="flex items-center text-sm sm:text-base lg:text-xl">
                                                <i className="bi bi-eye-fill text-blue-400 mr-2 sm:mr-3 text-lg sm:text-xl lg:text-2xl"></i>
                                                {photo.views}
                                            </span>
                                        </div>
                                        <div className="flex justify-center space-x-2 sm:space-x-3 lg:space-x-4">
                                            <button className="bg-white dark:bg-gray-700 bg-opacity-90 dark:bg-opacity-90 text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-3 lg:p-4 hover:bg-white dark:hover:bg-gray-600 transition-all shadow-xl">
                                                <i className="bi bi-pencil text-sm sm:text-base lg:text-xl"></i>
                                            </button>
                                            <button className="bg-red-500 dark:bg-red-600 text-white rounded-full p-2 sm:p-3 lg:p-4 hover:bg-red-600 dark:hover:bg-red-700 transition-all shadow-xl">
                                                <i className="bi bi-trash text-sm sm:text-base lg:text-xl"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Botón de menú */}
                                <button className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 bg-gray-800 dark:bg-gray-700 text-white rounded-full p-2 sm:p-2.5 lg:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-600 shadow-xl">
                                    <i className="bi bi-three-dots text-sm sm:text-base lg:text-xl"></i>
                                </button>
                            </div>
                        ))}

                        {/* Espacios vacíos para subir más fotos */}
                        {Array.from({ length: emptySlots }).map((_, index) => (
                            <div
                                key={`empty-${index}`}
                                className="group w-full h-64 sm:h-72 md:h-80 lg:h-96 border-3 sm:border-4 border-dashed border-blue-300 dark:border-blue-600 rounded-3xl flex flex-col items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 cursor-pointer"
                                onClick={() => setUploadMode(true)}
                            >
                                <i className="bi bi-plus-circle text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 mb-2 sm:mb-3 lg:mb-4"></i>
                                <p className="text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg lg:text-xl text-center px-2 sm:px-4">Agregar foto</p>
                                <p className="text-violet-400 dark:text-violet-300 text-sm sm:text-base lg:text-lg text-center mt-1 sm:mt-2">Máximo 9 fotos</p>
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
            <MostrarFotoModal 
                selectedPhoto={selectedPhoto}
                photos={photos}
                onClose={() => setSelectedPhoto(null)}
                onMakeMain={handleMakeMain}
                onDelete={handleDeletePhoto}
            />

        </div>
    );
};

export default Fotos;
import React, { useState } from 'react';

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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
            </div>

            {/* Encabezado */}
            <section className="relative bg-blue-600 text-white py-8 px-6 shadow-xl">
                <div className="relative max-w-6xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            Mis Fotos
                        </h1>
                        <p className="text-blue-100 mt-1 font-medium">Gestiona tu galería personal</p>
                    </div>
                    <div className="flex space-x-3">
                        <button 
                            onClick={() => setUploadMode(!uploadMode)}
                            className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-2xl p-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <i className="bi bi-plus-lg text-lg"></i>
                        </button>
                        <button className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-2xl p-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                            <i className="bi bi-gear text-lg"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Estadísticas de Fotos */}
            <section className="relative py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-200">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-images text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-blue-600">{photos.length}</div>
                            <div className="text-xs text-gray-700 font-semibold">Fotos subidas</div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-200">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-heart-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-emerald-600">
                                {photos.reduce((sum, photo) => sum + photo.likes, 0)}
                            </div>
                            <div className="text-xs text-gray-700 font-semibold">Total likes</div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-200">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-eye-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-indigo-600">
                                {photos.reduce((sum, photo) => sum + photo.views, 0)}
                            </div>
                            <div className="text-xs text-gray-700 font-semibold">Total vistas</div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-200">
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <i className="bi bi-star-fill text-white text-xl"></i>
                            </div>
                            <div className="text-2xl font-bold text-amber-600">
                                {Math.round((photos.reduce((sum, photo) => sum + photo.likes, 0) / photos.reduce((sum, photo) => sum + photo.views, 0)) * 100)}%
                            </div>
                            <div className="text-xs text-gray-700 font-semibold">Engagement</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería de Fotos */}
            <section className="relative py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-8 text-center">
                        Tu Galería Personal
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                        {photos.map((photo) => (
                            <div 
                                key={photo.id} 
                                className="group relative aspect-square bg-gradient-to-br from-blue-200 to-indigo-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                onClick={() => setSelectedPhoto(photo.id)}
                            >
                                {/* Contenido de la foto */}
                                <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-blue-300 to-indigo-400">
                                    <i className="bi bi-image text-white text-4xl"></i>
                                </div>
                                
                                {/* Badge de foto principal */}
                                {photo.isMain && (
                                    <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
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
                                            <button className="bg-white bg-opacity-90 text-gray-700 rounded-full p-2 hover:bg-white transition-all">
                                                <i className="bi bi-pencil text-sm"></i>
                                            </button>
                                            <button className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-all">
                                                <i className="bi bi-trash text-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Botón de menú */}
                                <button className="absolute top-3 right-3 bg-gray-800 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-900">
                                    <i className="bi bi-three-dots text-sm"></i>
                                </button>
                            </div>
                        ))}
                        
                        {/* Espacios vacíos para subir más fotos */}
                        {Array.from({ length: emptySlots }).map((_, index) => (
                            <div 
                                key={`empty-${index}`}
                                className="group aspect-square border-2 border-dashed border-blue-300 rounded-2xl flex flex-col items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                                onClick={() => setUploadMode(true)}
                            >
                                <i className="bi bi-plus-circle text-4xl text-blue-500 group-hover:text-blue-600 mb-2"></i>
                                <p className="text-blue-600 font-medium text-sm">Agregar foto</p>
                                <p className="text-violet-400 text-xs">Máximo 9 fotos</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal de subir foto */}
            {uploadMode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white border-opacity-20">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
                                Subir Nueva Foto
                            </h3>
                            <div className="border-2 border-dashed border-violet-300 rounded-2xl p-8 mb-6 hover:border-violet-400 transition-all duration-300">
                                <i className="bi bi-cloud-upload text-6xl text-violet-400 mb-4"></i>
                                <p className="text-violet-600 font-medium mb-2">Arrastra tu foto aquí</p>
                                <p className="text-violet-400 text-sm mb-4">o haz clic para seleccionar</p>
                                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-6 py-2 rounded-2xl font-semibold hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300">
                                    Seleccionar Archivo
                                </button>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button 
                                    onClick={() => setUploadMode(false)}
                                    className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-all duration-300"
                                >
                                    Cancelar
                                </button>
                                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-6 py-2 rounded-2xl font-semibold hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300">
                                    Subir Foto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de vista detallada de foto */}
            {selectedPhoto && (
                <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl p-6 max-w-2xl w-full shadow-2xl border border-white border-opacity-20">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                                Detalles de la Foto
                            </h3>
                            <button 
                                onClick={() => setSelectedPhoto(null)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
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

            {/* Consejos para Fotos */}
            <section className="relative py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white border-opacity-20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text mb-6 text-center">
                            Tips para Fotos Perfectas
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 text-green-600 rounded-full p-2 flex-shrink-0">
                                    <i className="bi bi-check-lg text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Buena Iluminación</h4>
                                    <p className="text-gray-600 text-sm">Usa luz natural siempre que sea posible</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 text-blue-600 rounded-full p-2 flex-shrink-0">
                                    <i className="bi bi-camera text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Variedad</h4>
                                    <p className="text-gray-600 text-sm">Incluye fotos de cuerpo completo y primeros planos</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-100 text-purple-600 rounded-full p-2 flex-shrink-0">
                                    <i className="bi bi-person text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Sé Auténtico</h4>
                                    <p className="text-gray-600 text-sm">Muestra tu personalidad real y sonríe</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="bg-yellow-100 text-yellow-600 rounded-full p-2 flex-shrink-0">
                                    <i className="bi bi-heart text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Actividades</h4>
                                    <p className="text-gray-600 text-sm">Incluye fotos haciendo lo que te gusta</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <i className="bi bi-camera mr-2"></i>
                                Tomar Foto Ahora
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Fotos;
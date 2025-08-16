import React, { useState } from 'react';

const Descubrir: React.FC = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [currentProfile, setCurrentProfile] = useState(0);

    const profiles = [
        {
            id: 1,
            name: "Ana",
            age: 24,
            location: "Ciudad de México",
            bio: "Me encanta viajar y conocer nuevas culturas. Buscando a alguien con quien compartir aventuras.",
            interests: ["Viajes", "Fotografía", "Música"],
            distance: "2 km"
        },
        {
            id: 2,
            name: "Sofía",
            age: 27,
            location: "Guadalajara",
            bio: "Diseñadora gráfica apasionada por el arte. Amante de los cafés y las conversaciones profundas.",
            interests: ["Arte", "Diseño", "Café"],
            distance: "5 km"
        },
        {
            id: 3,
            name: "Isabella",
            age: 26,
            location: "Monterrey",
            bio: "Chef profesional, me gusta cocinar y experimentar con sabores. ¿Te animas a una cena juntos?",
            interests: ["Cocina", "Gastronomía", "Vino"],
            distance: "3 km"
        }
    ];

    const handleLike = () => {
        if (currentProfile < profiles.length - 1) {
            setCurrentProfile(currentProfile + 1);
        } else {
            setCurrentProfile(0);
        }
    };

    const handlePass = () => {
        if (currentProfile < profiles.length - 1) {
            setCurrentProfile(currentProfile + 1);
        } else {
            setCurrentProfile(0);
        }
    };

    const profile = profiles[currentProfile];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-red-100 p-2 sm:p-4 lg:p-6">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                        Descubrir
                    </h1>
                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="bg-white bg-opacity-80 backdrop-blur-sm border border-pink-200 hover:bg-opacity-90 transition-all duration-300 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl"
                    >
                        <i className="bi bi-sliders text-pink-600 text-sm sm:text-lg md:text-xl lg:text-2xl"></i>
                    </button>
                </div>

                {/* Filtros */}
                {showFilters && (
                    <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 mb-3 sm:mb-4 md:mb-6 shadow-xl border border-white border-opacity-50">
                        <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg lg:text-xl">Filtros de Búsqueda</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                            <div>
                                <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                                    Edad (18-35)
                                </label>
                                <input 
                                    type="range" 
                                    min="18" 
                                    max="50" 
                                    className="w-full h-1.5 sm:h-2 md:h-2.5 bg-pink-200 rounded-lg appearance-none cursor-pointer hover:bg-pink-300 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                                    Distancia (10km)
                                </label>
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="100" 
                                    className="w-full h-1.5 sm:h-2 md:h-2.5 bg-orange-200 rounded-lg appearance-none cursor-pointer hover:bg-orange-300 transition-colors"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-2 sm:mt-3 md:mt-4">
                            <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                                Intereses
                            </label>
                            <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3">
                                {['Viajes', 'Arte', 'Música', 'Deportes', 'Cocina', 'Lectura'].map((interest) => (
                                    <span 
                                        key={interest} 
                                        className="bg-gradient-to-r from-pink-100 to-orange-100 text-pink-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base cursor-pointer hover:from-pink-200 hover:to-orange-200 hover:scale-105 transition-all duration-300"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            {/* Tarjetas de Perfiles mejoradas */}
            <section className="relative py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                    {/* Tarjeta Principal con efectos glassmorphism */}
                    <div className="relative bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-3xl shadow-2xl overflow-hidden mb-4 sm:mb-6 md:mb-8 border border-white border-opacity-20 h-96 sm:h-[500px] md:h-[600px] lg:h-[650px]">
                        {/* Imagen de Perfil */}
                        <div className="h-2/3 bg-gradient-to-br from-pink-200 via-rose-200 to-orange-200 flex items-center justify-center relative overflow-hidden">
                            {/* Efectos de fondo animados */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-orange-300 opacity-70"></div>
                            <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-white bg-opacity-30 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-rose-300 bg-opacity-40 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
                            
                            <i className="relative bi bi-person text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-lg"></i>
                            
                            {/* Badge de distancia mejorado */}
                            <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-black bg-opacity-60 backdrop-blur-sm text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-lg border border-white border-opacity-20">
                                <i className="bi bi-geo-alt mr-1"></i>
                                {profile.distance}
                            </div>
                            
                            {/* Indicador de online */}
                            <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 flex items-center bg-green-500 bg-opacity-90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-300 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
                                En línea
                            </div>
                        </div>
                        
                        {/* Información del Perfil mejorada y responsiva */}
                        <div className="h-1/3 p-3 sm:p-4 md:p-6 bg-gradient-to-b from-white to-gray-50">
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="flex-1">
                                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
                                        {profile.name}, {profile.age}
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-600 flex items-center font-medium">
                                        <i className="bi bi-geo-alt text-pink-500 mr-1 sm:mr-2"></i>
                                        {profile.location}
                                    </p>
                                </div>
                                <button className="bg-gradient-to-r from-pink-100 to-orange-100 text-pink-600 hover:from-pink-200 hover:to-orange-200 rounded-full p-2 sm:p-3 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg">
                                    <i className="bi bi-info-circle text-sm sm:text-base md:text-lg"></i>
                                </button>
                            </div>
                            
                            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed line-clamp-2">{profile.bio}</p>
                            
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                {profile.interests.map((interest, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium border border-pink-200 hover:from-pink-200 hover:to-orange-200 transition-all duration-300 cursor-pointer"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Botones de Acción responsivos */}
                    <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 mb-3 sm:mb-4">
                        {/* Botón Pasar */}
                        <button 
                            onClick={handlePass}
                            className="group bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-600 hover:text-gray-700 rounded-full p-3 sm:p-4 md:p-5 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-300 hover:border-gray-400"
                        >
                            <i className="bi bi-x-lg text-lg sm:text-2xl md:text-3xl group-hover:rotate-90 transition-transform duration-300"></i>
                        </button>
                        
                        {/* Botón Super Like */}
                        <button className="group bg-gradient-to-br from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white rounded-full p-3 sm:p-4 md:p-5 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-110 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <i className="relative bi bi-star-fill text-lg sm:text-2xl md:text-3xl group-hover:rotate-12 transition-transform duration-300"></i>
                        </button>
                        
                        {/* Botón Me Gusta */}
                        <button 
                            onClick={handleLike}
                            className="group bg-gradient-to-br from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white rounded-full p-3 sm:p-4 md:p-5 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-110 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-rose-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <i className="relative bi bi-heart-fill text-lg sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                        </button>
                    </div>
                    
                    {/* Labels de los botones responsivos */}
                    <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8">
                        <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium w-12 sm:w-16 text-center">Pasar</span>
                        <span className="text-xs sm:text-sm md:text-base text-blue-600 font-medium w-12 sm:w-16 md:w-20 text-center">Super Like</span>
                        <span className="text-xs sm:text-sm md:text-base text-pink-600 font-medium w-12 sm:w-16 text-center">Me Gusta</span>
                    </div>
                </div>
            </section>

            </div>

            {/* Estadísticas de Descubrir completamente responsivas */}
            <section className="relative py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-orange-50"></div>
                <div className="relative max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
                    <div className="text-center mb-6 sm:mb-8 md:mb-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                            Tu Actividad Hoy ⚡
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">Sigue descubriendo conexiones increíbles</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {/* Card Likes dados */}
                        <div className="group bg-white bg-opacity-80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-50">
                            <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-xl sm:rounded-2xl w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-pink-200 group-hover:to-rose-300 transition-all duration-300">
                                <i className="bi bi-heart-fill text-pink-500 text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-1">15</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Likes dados</div>
                        </div>
                        
                        {/* Card Super Likes */}
                        <div className="group bg-white bg-opacity-80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-50">
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl sm:rounded-2xl w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-blue-200 group-hover:to-indigo-300 transition-all duration-300">
                                <i className="bi bi-star-fill text-blue-500 text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">3</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Super Likes</div>
                        </div>
                        
                        {/* Card Matches */}
                        <div className="group bg-white bg-opacity-80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-50">
                            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl sm:rounded-2xl w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-green-200 group-hover:to-emerald-300 transition-all duration-300">
                                <i className="bi bi-people-fill text-green-500 text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">4</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Matches</div>
                        </div>
                        
                        {/* Card Perfiles vistos */}
                        <div className="group bg-white bg-opacity-80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-50">
                            <div className="bg-gradient-to-br from-purple-100 to-violet-200 rounded-xl sm:rounded-2xl w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-purple-200 group-hover:to-violet-300 transition-all duration-300">
                                <i className="bi bi-eye-fill text-purple-500 text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-1">47</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Perfiles vistos</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips para Descubrir completamente responsivos */}
            <section className="relative py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
                    <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white border-opacity-20">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                            💡 Tips para Mejores Matches
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
                            "Sé selectivo pero abierto. Lee los perfiles completos y busca intereses en común. 
                            Los Super Likes aumentan tus posibilidades de match en un <span className="font-bold text-blue-600">3x</span>."
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                            <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-pink-600 hover:to-orange-600">
                                <i className="bi bi-lightbulb mr-2"></i>
                                Más consejos
                            </button>
                            <button className="w-full sm:w-auto bg-white bg-opacity-80 backdrop-blur-sm border-2 border-pink-300 text-pink-600 hover:text-pink-700 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-pink-50">
                                <i className="bi bi-share mr-2"></i>
                                Compartir
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Descubrir;
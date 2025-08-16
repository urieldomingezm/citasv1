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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-2 sm:p-4 lg:p-6">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Descubrir
                    </h1>
                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="bg-white bg-opacity-80 backdrop-blur-sm border border-indigo-200 hover:bg-opacity-90 transition-all duration-300 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl"
                    >
                        <i className="bi bi-sliders text-indigo-600 text-sm sm:text-lg md:text-xl lg:text-2xl"></i>
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
                                    className="w-full h-1.5 sm:h-2 md:h-2.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer hover:bg-indigo-300 transition-colors"
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
                                    className="w-full h-1.5 sm:h-2 md:h-2.5 bg-purple-200 rounded-lg appearance-none cursor-pointer hover:bg-purple-300 transition-colors"
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
                                        className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base cursor-pointer hover:from-indigo-200 hover:to-purple-200 hover:scale-105 transition-all duration-300"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            {/* Tarjetas de Perfiles - 3 cards inteligentemente colocadas */}
            <section className="relative py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
                        Personas cerca de ti
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                        {profiles.map((profile, index) => (
                            <div 
                                key={profile.id} 
                                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200 ${
                                    index === 1 ? 'md:-translate-y-4' : ''
                                }`}
                                style={{ height: '400px' }}
                            >
                                {/* Imagen de Perfil */}
                                <div className="h-48 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 flex items-center justify-center relative overflow-hidden">
                                    <i className="text-white text-5xl bi bi-person drop-shadow-lg"></i>
                                    
                                    {/* Badge de distancia */}
                                    <div className="absolute top-3 right-3 bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                                        <i className="bi bi-geo-alt mr-1"></i>
                                        {profile.distance}
                                    </div>
                                    
                                    {/* Indicador online */}
                                    <div className="absolute top-3 left-3 flex items-center bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                                        <div className="w-1.5 h-1.5 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                                        En línea
                                    </div>
                                </div>
                                
                                {/* Información del Perfil */}
                                <div className="p-4 flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-800 mb-1">
                                                {profile.name}, {profile.age}
                                            </h3>
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <i className="bi bi-geo-alt text-indigo-500 mr-1"></i>
                                                {profile.location}
                                            </p>
                                        </div>
                                        <button className="bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full p-2 transition-all duration-300">
                                            <i className="bi bi-info-circle text-sm"></i>
                                        </button>
                                    </div>
                                    
                                    <p className="text-sm text-gray-700 mb-3 line-clamp-2 leading-relaxed">
                                        {profile.bio}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-1 mb-12">
                                        {profile.interests.slice(0, 3).map((interest, idx) => (
                                            <span 
                                                key={idx} 
                                                className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium border border-indigo-200"
                                            >
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Botones de Acción de cada card */}
                                <div className="absolute bottom-3 left-3 right-3 flex justify-center space-x-2">
                                    <button 
                                        onClick={() => handlePass()}
                                        className="group bg-gray-500 hover:bg-gray-600 text-white rounded-full p-2.5 shadow-lg transition-all duration-300 transform hover:scale-110"
                                    >
                                        <i className="bi bi-x-lg text-sm group-hover:rotate-90 transition-transform duration-300"></i>
                                    </button>
                                    
                                    <button className="group bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2.5 shadow-lg transition-all duration-300 transform hover:scale-110">
                                        <i className="bi bi-star-fill text-sm group-hover:rotate-12 transition-transform duration-300"></i>
                                    </button>
                                    
                                    <button 
                                        onClick={() => handleLike()}
                                        className="group bg-red-500 hover:bg-red-600 text-white rounded-full p-2.5 shadow-lg transition-all duration-300 transform hover:scale-110"
                                    >
                                        <i className="bi bi-heart-fill text-sm group-hover:scale-110 transition-transform duration-300"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Botones de Navegación */}
                    <div className="flex justify-center space-x-4">
                        <button className="bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Ver más perfiles
                        </button>
                        <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Ajustar filtros
                        </button>
                    </div>
                </div>
            </section>

            </div>

            {/* Estadísticas de Descubrir */}
            <section className="relative py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
                <div className="relative max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
                    <div className="text-center mb-6 sm:mb-8 md:mb-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                            Tu Actividad Hoy ⚡
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">Sigue descubriendo conexiones increíbles</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {/* Card Likes dados - Emerald/Teal */}
                        <div className="group bg-white bg-opacity-95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-emerald-200 hover:border-emerald-300">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-emerald-600 group-hover:to-teal-700 transition-all duration-300 shadow-lg">
                                <i className="bi bi-heart-fill text-white text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-600 mb-1">15</div>
                            <div className="text-xs sm:text-sm text-gray-700 font-semibold">Likes dados</div>
                        </div>
                        
                        {/* Card Super Likes - Primary Blue */}
                        <div className="group bg-white bg-opacity-95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-200 hover:border-blue-300">
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300 shadow-lg">
                                <i className="bi bi-star-fill text-white text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1">3</div>
                            <div className="text-xs sm:text-sm text-gray-700 font-semibold">Super Likes</div>
                        </div>
                        
                        {/* Card Matches - Indigo */}
                        <div className="group bg-white bg-opacity-95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-indigo-200 hover:border-indigo-300">
                            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl sm:rounded-2xl w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-indigo-600 group-hover:to-violet-700 transition-all duration-300 shadow-lg">
                                <i className="bi bi-people-fill text-white text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-600 mb-1">4</div>
                            <div className="text-xs sm:text-sm text-gray-700 font-semibold">Matches</div>
                        </div>
                        
                        {/* Card Perfiles vistos - Slate/Gray */}
                        <div className="group bg-white bg-opacity-95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-slate-200 hover:border-slate-300">
                            <div className="bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl sm:rounded-2xl w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-slate-600 group-hover:to-gray-700 transition-all duration-300 shadow-lg">
                                <i className="bi bi-eye-fill text-white text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-600 mb-1">47</div>
                            <div className="text-xs sm:text-sm text-gray-700 font-semibold">Perfiles vistos</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips para Descubrir completamente responsivos */}
            <section className="relative py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
                    <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white border-opacity-20">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                            💡 Tips para Mejores Matches
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
                            "Sé selectivo pero abierto. Lee los perfiles completos y busca intereses en común. 
                            Los Super Likes aumentan tus posibilidades de match en un <span className="font-bold text-blue-600">3x</span>."
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                            <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white border-opacity-20">
                                <i className="bi bi-lightbulb mr-2"></i>
                                Más consejos
                            </button>
                            <button className="w-full sm:w-auto bg-white bg-opacity-90 backdrop-blur-sm border-2 border-indigo-400 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
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
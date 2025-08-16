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
                        
                    </div>
                )}

            {/* Stack de Tarjetas con Lados Pegados */}
            <section className="relative py-8 px-4">
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
                        Descubre personas increíbles
                    </h2>
                    
                    {/* Container del Stack de Tarjetas */}
                    <div className="relative flex items-center justify-center">
                        
                        {/* Lado Izquierdo - Cartas con Like/Pass (Más grandes) */}
                        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-20">
                            {/* Carta de Like anterior */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-70 scale-80 transform -rotate-20 w-44 h-56">
                                <div className="h-28 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                    <i className="text-white text-3xl bi bi-heart-fill"></i>
                                </div>
                                <div className="p-2">
                                    <p className="text-sm text-gray-700 text-center font-medium">Match</p>
                                </div>
                            </div>
                            
                            {/* Carta de Pass anterior */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-60 scale-75 transform -rotate-12 w-44 h-56">
                                <div className="h-28 bg-gradient-to-br from-gray-400 to-slate-500 flex items-center justify-center">
                                    <i className="text-white text-3xl bi bi-x-lg"></i>
                                </div>
                                <div className="p-2">
                                    <p className="text-sm text-gray-700 text-center font-medium">Pass</p>
                                </div>
                            </div>
                        </div>

                        {/* Lado Derecho - Próximas Cartas (Más grandes) */}
                        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-20">
                            {/* Próxima carta 1 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-70 scale-80 transform rotate-20 w-44 h-56">
                                <div className="h-28 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                                    <i className="text-white text-3xl bi bi-person"></i>
                                </div>
                                <div className="p-2">
                                    <p className="text-sm text-gray-700 text-center font-medium truncate">
                                        {profiles[(currentProfile + 1) % profiles.length]?.name}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Próxima carta 2 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-60 scale-75 transform rotate-12 w-44 h-56">
                                <div className="h-28 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                                    <i className="text-white text-3xl bi bi-person"></i>
                                </div>
                                <div className="p-2">
                                    <p className="text-sm text-gray-700 text-center font-medium truncate">
                                        {profiles[(currentProfile + 2) % profiles.length]?.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tarjeta Principal - Centro con toda la información */}
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-30 w-80 h-auto">
                            {/* Imagen de Perfil */}
                            <div className="h-96 bg-gradient-to-br from-pink-400 via-red-400 to-orange-400 flex items-center justify-center relative">
                                <i className="text-white text-8xl bi bi-person drop-shadow-2xl"></i>
                                
                                {/* Badge de distancia */}
                                <div className="absolute top-4 right-4 bg-black bg-opacity-60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                    <i className="bi bi-geo-alt mr-1"></i>
                                    {profile.distance}
                                </div>
                                
                                {/* Indicador online */}
                                <div className="absolute top-4 left-4 flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                                    Activo ahora
                                </div>

                                {/* Botón de información */}
                                <button className="absolute bottom-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full p-3 hover:bg-opacity-30 transition-all duration-300">
                                    <i className="bi bi-info-circle text-lg"></i>
                                </button>
                            </div>
                            
                            {/* Información del Perfil Completa */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {profile.name}, {profile.age}
                                    </h3>
                                    <p className="text-gray-600 flex items-center text-base">
                                        <i className="bi bi-geo-alt text-red-500 mr-2"></i>
                                        {profile.location}
                                    </p>
                                </div>
                                
                                <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    {profile.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Botones de Acción Estilo Tinder */}
                    <div className="flex justify-center items-center space-x-6 mt-8">
                        {/* Botón Rechazar */}
                        <button 
                            onClick={handlePass}
                            className="group bg-white border-2 border-gray-300 hover:border-gray-400 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                        >
                            <i className="bi bi-x-lg text-2xl text-gray-500 group-hover:text-gray-600 group-hover:rotate-90 transition-all duration-300"></i>
                        </button>
                        
                        {/* Botón Super Like */}
                        <button className="group bg-white border-2 border-blue-400 hover:border-blue-500 hover:bg-blue-50 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95">
                            <i className="bi bi-star-fill text-2xl text-blue-500 group-hover:text-blue-600 group-hover:rotate-12 transition-all duration-300"></i>
                        </button>
                        
                        {/* Botón Like */}
                        <button 
                            onClick={handleLike}
                            className="group bg-white border-2 border-red-400 hover:border-red-500 hover:bg-red-50 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                        >
                            <i className="bi bi-heart-fill text-2xl text-red-500 group-hover:text-red-600 group-hover:scale-125 transition-all duration-300"></i>
                        </button>
                    </div>
                    
                    {/* Información adicional */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            {profiles.length - 1 - currentProfile} personas más cerca de ti
                        </p>
                        <button className="mt-2 text-red-500 font-semibold text-sm hover:text-red-600 transition-colors duration-300">
                            Ver más opciones
                        </button>
                    </div>
                </div>
            </section>

            </div>


        </div>
    );
};

export default Descubrir;
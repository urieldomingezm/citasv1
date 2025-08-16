import React from 'react';

const Matches: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Encabezado */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8 sm:py-12 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-white">Tus Matches</h1>
                    <p className="text-sm sm:text-lg text-blue-100">Conecta con personas que comparten tus intereses</p>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-4 sm:py-6 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border border-blue-100">
                            <div className="text-lg sm:text-2xl font-bold text-blue-600 mb-1">24</div>
                            <div className="text-xs sm:text-sm text-gray-600">Matches</div>
                        </div>
                        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border border-green-100">
                            <div className="text-lg sm:text-2xl font-bold text-green-600 mb-1">12</div>
                            <div className="text-xs sm:text-sm text-gray-600">Conversaciones</div>
                        </div>
                        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border border-purple-100">
                            <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-1">5</div>
                            <div className="text-xs sm:text-sm text-gray-600">Nuevos hoy</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lista de Matches */}
            <section className="py-4 sm:py-8 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Explora tus Matches</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <div key={i} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg text-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white border-opacity-50">
                                <div className="relative">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                                        <i className="bi bi-person text-white text-lg sm:text-2xl"></i>
                                    </div>
                                    {/* Indicador online */}
                                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                </div>
                                <h4 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1">Usuario {i}</h4>
                                <p className="text-xs text-gray-500">2 km</p>
                                <div className="mt-2 flex justify-center">
                                    <div className="w-8 h-1 sm:w-10 sm:h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consejos para Matches */}
            <section className="py-6 sm:py-8 px-4 sm:px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">💡 Consejos para tus Matches</h2>
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white border-opacity-50">
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            "Sé auténtico y muestra interés genuino en tus conversaciones. La honestidad y la empatía son clave para construir relaciones significativas."
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                                Más consejos
                            </button>
                            <button className="border-2 border-indigo-500 text-indigo-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 text-sm sm:text-base">
                                Compartir
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Matches;
import React from 'react';

const Mensajes: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
            {/* Encabezado */}
            <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-8 sm:py-12 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-white">Mensajes</h1>
                    <p className="text-sm sm:text-lg text-green-100">Conecta y conversa con tus matches</p>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-4 sm:py-6 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border border-green-100">
                            <div className="text-lg sm:text-2xl font-bold text-green-600 mb-1">12</div>
                            <div className="text-xs sm:text-sm text-gray-600">Conversaciones</div>
                        </div>
                        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border border-blue-100">
                            <div className="text-lg sm:text-2xl font-bold text-blue-600 mb-1">3</div>
                            <div className="text-xs sm:text-sm text-gray-600">No leídos</div>
                        </div>
                        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border border-purple-100">
                            <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-1">7</div>
                            <div className="text-xs sm:text-sm text-gray-600">Online</div>
                        </div>
                        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border border-orange-100">
                            <div className="text-lg sm:text-2xl font-bold text-orange-600 mb-1">48</div>
                            <div className="text-xs sm:text-sm text-gray-600">Mensajes hoy</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lista de Conversaciones */}
            <section className="py-4 sm:py-8 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Conversaciones Activas</h2>
                    <div className="space-y-3 sm:space-y-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-102">
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="relative">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full flex items-center justify-center">
                                            <i className="bi bi-person text-white text-lg sm:text-xl"></i>
                                        </div>
                                        {/* Indicador online */}
                                        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">Usuario {i}</h4>
                                            <span className="text-xs text-gray-400 flex-shrink-0 ml-2">2h</span>
                                        </div>
                                        <p className="text-gray-500 text-xs sm:text-sm truncate">
                                            Hola, ¿cómo estás? Me gustaría conocerte mejor y saber más sobre tus intereses...
                                        </p>
                                    </div>
                                    <div className="text-center flex-shrink-0">
                                        {i <= 3 ? (
                                            <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold">
                                                {i}
                                            </span>
                                        ) : (
                                            <div className="w-5 h-5 sm:w-6 sm:h-6"></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Acciones Rápidas */}
            <section className="py-6 sm:py-8 px-4 sm:px-6 bg-gradient-to-r from-emerald-50 to-green-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Acciones Rápidas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-105">
                            <div className="text-center">
                                <i className="bi bi-plus-circle text-3xl sm:text-4xl text-green-500 mb-2 sm:mb-4"></i>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Nuevo Chat</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Inicia conversación con un match</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-105">
                            <div className="text-center">
                                <i className="bi bi-heart text-3xl sm:text-4xl text-pink-500 mb-2 sm:mb-4"></i>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Likes Recibidos</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Ve quién te ha dado like</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-105 sm:col-span-2 lg:col-span-1">
                            <div className="text-center">
                                <i className="bi bi-search text-3xl sm:text-4xl text-blue-500 mb-2 sm:mb-4"></i>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Descubrir</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Encuentra nuevas personas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mensajes;
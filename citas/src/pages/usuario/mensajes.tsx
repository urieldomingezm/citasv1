import React from 'react';

const Mensajes: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
            {/* Encabezado completamente responsivo */}
            <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 md:mb-4 text-white">
                        <i className="bi bi-chat-heart mr-2 sm:mr-3"></i>
                        Mensajes
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-100">Conecta y conversa con tus matches</p>
                </div>
            </section>

            {/* Estadísticas completamente responsivas */}
            <section className="py-3 sm:py-4 md:py-6 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        {/* Card Conversaciones */}
                        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:scale-105 group">
                            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg sm:rounded-xl w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:from-green-200 group-hover:to-emerald-300 transition-all duration-300">
                                <i className="bi bi-chat-dots text-green-600 text-sm sm:text-base md:text-lg lg:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-600 mb-1">12</div>
                            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Conversaciones</div>
                        </div>
                        
                        {/* Card No leídos */}
                        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:scale-105 group">
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg sm:rounded-xl w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:from-blue-200 group-hover:to-indigo-300 transition-all duration-300">
                                <i className="bi bi-envelope-exclamation text-blue-600 text-sm sm:text-base md:text-lg lg:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600 mb-1">3</div>
                            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">No leídos</div>
                        </div>
                        
                        {/* Card Online */}
                        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:scale-105 group">
                            <div className="bg-gradient-to-br from-purple-100 to-violet-200 rounded-lg sm:rounded-xl w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:from-purple-200 group-hover:to-violet-300 transition-all duration-300">
                                <i className="bi bi-circle-fill text-purple-600 text-sm sm:text-base md:text-lg lg:text-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse"></i>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-600 mb-1">7</div>
                            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Online</div>
                        </div>
                        
                        {/* Card Mensajes hoy */}
                        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:scale-105 group">
                            <div className="bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg sm:rounded-xl w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:from-orange-200 group-hover:to-amber-300 transition-all duration-300">
                                <i className="bi bi-lightning-charge text-orange-600 text-sm sm:text-base md:text-lg lg:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-orange-600 mb-1">48</div>
                            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Mensajes hoy</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lista de Conversaciones completamente responsiva */}
            <section className="py-3 sm:py-4 md:py-6 lg:py-8 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
                    <div className="text-center mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                            <i className="bi bi-chat-square-dots mr-2"></i>
                            Conversaciones Activas
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">Mantente conectado con tus matches</p>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {[
                            { id: 1, name: "Sofia Martinez", message: "Hola, ¿cómo estás? Me gustaría conocerte mejor y saber más sobre tus intereses...", time: "2h", unread: 3, online: true },
                            { id: 2, name: "Carmen López", message: "¿Te gustaría salir a tomar un café esta tarde?", time: "4h", unread: 1, online: true },
                            { id: 3, name: "Ana García", message: "Me encanta tu perfil! Tenemos muchas cosas en común", time: "1d", unread: 2, online: false },
                            { id: 4, name: "María Silva", message: "Gracias por el match! ¿De dónde eres?", time: "2d", unread: 0, online: true },
                            { id: 5, name: "Laura Torres", message: "¿Has visto la nueva película de...?", time: "3d", unread: 0, online: false },
                            { id: 6, name: "Elena Ruiz", message: "¡Hola! Vi que te gusta viajar, yo también", time: "1w", unread: 0, online: true }
                        ].map((chat) => (
                            <div key={chat.id} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-102 group">
                                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                                    {/* Avatar responsivo */}
                                    <div className="relative flex-shrink-0">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-300">
                                            <i className="bi bi-person text-white text-sm sm:text-base md:text-lg lg:text-xl"></i>
                                        </div>
                                        {/* Indicador online responsivo */}
                                        {chat.online && (
                                            <div className="absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                                        )}
                                    </div>
                                    
                                    {/* Contenido del mensaje */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg truncate pr-2">
                                                {chat.name}
                                            </h4>
                                            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                                                <span className="text-xs sm:text-sm text-gray-400">{chat.time}</span>
                                                {chat.online && (
                                                    <i className="bi bi-circle-fill text-green-500 text-xs animate-pulse"></i>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-xs sm:text-sm md:text-base truncate pr-2 leading-relaxed">
                                            {chat.message}
                                        </p>
                                    </div>
                                    
                                    {/* Badge de mensajes no leídos */}
                                    <div className="text-center flex-shrink-0">
                                        {chat.unread > 0 ? (
                                            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs sm:text-sm rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center font-bold shadow-lg animate-pulse">
                                                {chat.unread}
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Acciones Rápidas completamente responsivas */}
            <section className="py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 bg-gradient-to-r from-emerald-50 to-green-50">
                <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
                    <div className="text-center mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                            <i className="bi bi-lightning-charge mr-2"></i>
                            Acciones Rápidas
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">Herramientas para conectar mejor</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                        {/* Card Nuevo Chat */}
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-105 group">
                            <div className="text-center">
                                <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl sm:rounded-2xl w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-green-200 group-hover:to-emerald-300 transition-all duration-300">
                                    <i className="bi bi-plus-circle text-green-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300"></i>
                                </div>
                                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Nuevo Chat</h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">Inicia conversación con un match</p>
                            </div>
                        </div>
                        
                        {/* Card Likes Recibidos */}
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-105 group">
                            <div className="text-center">
                                <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-xl sm:rounded-2xl w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-pink-200 group-hover:to-rose-300 transition-all duration-300">
                                    <i className="bi bi-heart text-pink-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300 animate-pulse"></i>
                                </div>
                                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Likes Recibidos</h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">Ve quién te ha dado like</p>
                            </div>
                        </div>
                        
                        {/* Card Descubrir */}
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-105 group sm:col-span-2 lg:col-span-1">
                            <div className="text-center">
                                <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl sm:rounded-2xl w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-blue-200 group-hover:to-indigo-300 transition-all duration-300">
                                    <i className="bi bi-search text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300"></i>
                                </div>
                                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Descubrir</h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">Encuentra nuevas personas</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Botón adicional para crear grupo o acción especial */}
                    <div className="mt-6 sm:mt-8 text-center">
                        <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            <i className="bi bi-people-fill mr-2"></i>
                            Ver Todos los Matches
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mensajes;
import React from 'react';
import { themeClasses } from '@themes/index';

const Mensajes: React.FC = () => {
    return (
        <div className={`min-h-screen ${themeClasses.backgroundSecondary} transition-colors duration-300`}>
            {/* Encabezado completamente responsivo */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 md:mb-4 text-white">
                        Mensajes
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100">Conecta y conversa con tus matches</p>
                </div>
            </section>

            {/* Estadísticas completamente responsivas */}
            <section className="py-3 sm:py-4 md:py-6 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        {/* Card Conversaciones - Blue/Cyan */}
                        <div className={`${themeClasses.card} bg-opacity-90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-blue-200 dark:border-blue-700 hover:scale-105 group`}>
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg sm:rounded-xl w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:from-blue-600 group-hover:to-cyan-700 transition-all duration-300 shadow-md">
                                <i className="bi bi-chat-dots text-black dark:text-white text-sm sm:text-base md:text-lg lg:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black dark:text-white mb-1">12</div>
                            <div className={`text-xs sm:text-sm md:text-base ${themeClasses.text} font-semibold dark:text-white`}>Conversaciones</div>
                        </div>
                        
                        {/* Card No leídos - Indigo */}
                        <div className={`${themeClasses.card} bg-opacity-90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-indigo-200 dark:border-indigo-700 hover:scale-105 group`}>
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg sm:rounded-xl w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:from-indigo-600 group-hover:to-purple-700 transition-all duration-300 shadow-md">
                                <i className="bi bi-envelope-exclamation text-black dark:text-white text-sm sm:text-base md:text-lg lg:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black dark:text-white mb-1">3</div>
                            <div className={`text-xs sm:text-sm md:text-base ${themeClasses.text} font-semibold dark:text-white`}>No leídos</div>
                        </div>
                        
                        {/* Card Online - Emerald/Teal */}
                        <div className={`${themeClasses.card} bg-opacity-90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-emerald-200 dark:border-emerald-700 hover:scale-105 group`}>
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:from-emerald-600 group-hover:to-teal-700 transition-all duration-300 shadow-md">
                                <i className="bi bi-circle-fill text-black dark:text-white text-sm sm:text-base md:text-lg lg:text-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse"></i>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black dark:text-white mb-1">7</div>
                            <div className={`text-xs sm:text-sm md:text-base ${themeClasses.text} font-semibold dark:text-white`}>Online</div>
                        </div>
                        
                        {/* Card Mensajes hoy - Amber/Orange */}
                        <div className={`${themeClasses.card} bg-opacity-90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-amber-200 dark:border-amber-700 hover:scale-105 group`}>
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg sm:rounded-xl w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:from-amber-600 group-hover:to-orange-700 transition-all duration-300 shadow-md">
                                <i className="bi bi-lightning-charge text-black dark:text-white text-sm sm:text-base md:text-lg lg:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black dark:text-white mb-1">48</div>
                            <div className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-white font-semibold">Mensajes hoy</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lista de Conversaciones completamente responsiva */}
            <section className="py-3 sm:py-4 md:py-6 lg:py-8 px-2 sm:px-4 md:px-6">
                <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
                    <div className="text-center mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-black dark:text-white">
                            <i className="bi bi-chat-square-dots mr-2"></i>
                            Conversaciones Activas
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { id: 1, name: "Sofia Martinez", message: "Hola, ¿cómo estás? Me gustaría conocerte mejor y saber más sobre tus intereses...", time: "2h", unread: 3, online: true },
                            { id: 2, name: "Carmen López", message: "¿Te gustaría salir a tomar un café esta tarde?", time: "4h", unread: 1, online: true },
                            { id: 3, name: "Ana García", message: "Me encanta tu perfil! Tenemos muchas cosas en común", time: "1d", unread: 2, online: false },
                            { id: 4, name: "María Silva", message: "Gracias por el match! ¿De dónde eres?", time: "2d", unread: 0, online: true },
                            { id: 5, name: "Laura Torres", message: "¿Has visto la nueva película de...?", time: "3d", unread: 0, online: false },
                            { id: 6, name: "Elena Ruiz", message: "¡Hola! Vi que te gusta viajar, yo también", time: "1w", unread: 0, online: true }
                        ].map((chat) => (
                            <div key={chat.id} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 hover:scale-102 group h-fit">
                                {/* Avatar centrado en la parte superior */}
                                <div className="flex flex-col items-center text-center mb-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-300 mb-2">
                                            <i className="bi bi-person text-white text-lg sm:text-xl md:text-2xl lg:text-3xl"></i>
                                        </div>
                                        {/* Indicador online */}
                                        {chat.online && (
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                                        )}
                                    </div>
                                    
                                    {/* Nombre y tiempo */}
                                    <div className="flex items-center justify-center space-x-2 mb-2">
                                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
                                            {chat.name}
                                        </h4>
                                        {chat.online && (
                                            <i className="bi bi-circle-fill text-green-500 text-xs animate-pulse"></i>
                                        )}
                                    </div>
                                    
                                    {/* Badge de mensajes no leídos */}
                                    {chat.unread > 0 && (
                                        <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white text-xs rounded-full px-2 py-1 font-bold shadow-lg animate-pulse mb-2">
                                            {chat.unread} nuevos
                                        </div>
                                    )}
                                </div>
                                
                                {/* Contenido del mensaje */}
                                <div className="text-center space-y-2">
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                        {chat.message}
                                    </p>
                                    <span className="text-xs text-gray-400 block">{chat.time}</span>
                                </div>
                                
                                {/* Botón de acción */}
                                <div className="mt-3 pt-3 border-t border-gray-100">
                                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                        <i className="bi bi-chat-dots mr-2"></i>
                                        Responder
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mensajes;
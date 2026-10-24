import React, { useState } from 'react';

interface AyudaModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AyudaModal: React.FC<AyudaModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('faq');
    const [selectedCategory, setSelectedCategory] = useState('general');

    if (!isOpen) return null;

    const faqData = {
        general: [
            {
                question: "¿Cómo funciona MorrysMatch?",
                answer: "MorrysMatch es una plataforma de citas que te conecta con personas compatibles basándose en tus intereses, ubicación y preferencias. Simplemente crea tu perfil, sube fotos y comienza a explorar."
            },
            {
                question: "¿Es seguro usar la aplicación?",
                answer: "Sí, tu seguridad es nuestra prioridad. Verificamos perfiles, moderamos contenido y ofrecemos herramientas para reportar comportamientos inapropiados."
            },
            {
                question: "¿Cómo puedo eliminar mi cuenta?",
                answer: "Ve a Configuración > Privacidad > Eliminar Cuenta. Ten en cuenta que esta acción es permanente y no se puede deshacer."
            }
        ],
        perfil: [
            {
                question: "¿Cómo subo fotos a mi perfil?",
                answer: "Ve a la sección 'Mis Fotos', haz clic en 'Agregar foto' y selecciona hasta 9 imágenes. La primera foto será tu foto principal."
            },
            {
                question: "¿Puedo cambiar mi foto principal?",
                answer: "Sí, ve a 'Mis Fotos', selecciona la foto que quieres como principal y haz clic en 'Hacer Principal'."
            },
            {
                question: "¿Cómo edito mi información personal?",
                answer: "Ve a tu perfil y haz clic en el botón 'Editar'. Podrás modificar tu descripción, intereses y otra información."
            }
        ],
        matches: [
            {
                question: "¿Cómo funcionan los matches?",
                answer: "Un match ocurre cuando dos personas se dan 'like' mutuamente. Una vez que hay match, pueden comenzar a chatear."
            },
            {
                question: "¿Puedo deshacer un like?",
                answer: "No, los likes no se pueden deshacer. Piensa bien antes de dar like a alguien."
            },
            {
                question: "¿Por qué no veo más perfiles?",
                answer: "Puede ser que hayas revisado todos los perfiles disponibles en tu área. Intenta ampliar tu rango de distancia en configuración."
            }
        ]
    };

    const contactInfo = [
        {
            icon: "bi-envelope-fill",
            title: "Email de Soporte",
            content: "soporte@morrysMatch.com",
            action: "Enviar Email"
        },
        {
            icon: "bi-chat-dots-fill",
            title: "Chat en Vivo",
            content: "Disponible 24/7",
            action: "Iniciar Chat"
        },
        {
            icon: "bi-telephone-fill",
            title: "Teléfono",
            content: "+1 (555) 123-4567",
            action: "Llamar"
        },
        {
            icon: "bi-question-circle-fill",
            title: "Centro de Ayuda",
            content: "Artículos y tutoriales",
            action: "Visitar"
        }
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-100 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-y-auto shadow-xl border border-white dark:border-gray-600">
                
                {/* Header */}
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                        <i className="bi bi-question-circle-fill mr-1 sm:mr-2"></i>
                        <span className="hidden sm:inline">Centro de </span>Ayuda
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 text-lg sm:text-xl transition-colors duration-200"
                    >
                        <i className="bi bi-x"></i>
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 mb-3 sm:mb-4 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg sm:rounded-xl">
                    <button
                        onClick={() => setActiveTab('faq')}
                        className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${
                            activeTab === 'faq'
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                        }`}
                    >
                        <i className="bi bi-question-circle mr-1"></i>
                        <span className="hidden xs:inline">FAQ</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('contact')}
                        className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${
                            activeTab === 'contact'
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                        }`}
                    >
                        <i className="bi bi-headset mr-1"></i>
                        <span className="hidden xs:inline">Contacto</span>
                    </button>
                </div>

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <div>
                        {/* Categories */}
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                            {Object.keys(faqData).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-medium transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900'
                                    }`}
                                >
                                    <span className="sm:hidden">
                                        {category === 'general' && '🔧'}
                                        {category === 'perfil' && '👤'}
                                        {category === 'matches' && '💕'}
                                    </span>
                                    <span className="hidden sm:inline">
                                        {category === 'general' && '🔧 General'}
                                        {category === 'perfil' && '👤 Perfil'}
                                        {category === 'matches' && '💕 Matches'}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* FAQ Content */}
                        <div className="space-y-2 sm:space-y-3">
                            {faqData[selectedCategory as keyof typeof faqData].map((faq, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-gray-600">
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">
                                        <i className="bi bi-question-circle-fill text-blue-500 mr-1 sm:mr-2"></i>
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contact Tab */}
                {activeTab === 'contact' && (
                    <div>
                        <div className="text-center mb-3 sm:mb-4">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                ¿Necesitas ayuda?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                                Contacta con nuestro equipo.
                            </p>
                        </div>

                        {/* Simplified Contact Options for Mobile */}
                        <div className="space-y-2 sm:hidden">
                            {contactInfo.slice(0, 2).map((contact, index) => (
                                <div key={index} className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3 text-white">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <i className={`${contact.icon} text-lg mr-2`}></i>
                                            <div>
                                                <h4 className="font-semibold text-sm">{contact.title}</h4>
                                                <p className="text-xs opacity-90">{contact.content}</p>
                                            </div>
                                        </div>
                                        <button className="bg-white bg-opacity-20 px-3 py-1 rounded text-xs font-medium">
                                            {contact.action}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Full Contact Grid for Larger Screens */}
                        <div className="hidden sm:grid grid-cols-2 gap-3">
                            {contactInfo.map((contact, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 rounded-xl p-3 sm:p-4 border border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center mb-2 sm:mb-3">
                                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-2 sm:mr-3">
                                            <i className={`${contact.icon} text-white text-sm sm:text-lg`}></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 dark:text-white text-xs sm:text-sm">{contact.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-xs">{contact.content}</p>
                                        </div>
                                    </div>
                                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md">
                                        {contact.action}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-3 sm:mt-4 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900 dark:to-fuchsia-900 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-violet-200 dark:border-violet-700">
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 text-center text-xs sm:text-sm">
                                <i className="bi bi-lightning-fill text-violet-500 mr-1"></i>
                                <span className="hidden sm:inline">Acciones Rápidas</span>
                                <span className="sm:hidden">Rápidas</span>
                            </h4>
                            <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-1 sm:gap-2">
                                <button className="bg-white dark:bg-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow text-center">
                                    <i className="bi bi-bug block sm:inline sm:mr-1"></i>
                                    <span className="hidden sm:inline">Reportar </span>
                                    <span className="block sm:hidden text-[10px]">Bug</span>
                                </button>
                                <button className="bg-white dark:bg-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow text-center">
                                    <i className="bi bi-lightbulb block sm:inline sm:mr-1"></i>
                                    <span className="hidden sm:inline">Sugerir </span>
                                    <span className="block sm:hidden text-[10px]">Idea</span>
                                </button>
                                <button className="bg-white dark:bg-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow text-center">
                                    <i className="bi bi-flag block sm:inline sm:mr-1"></i>
                                    <span className="hidden sm:inline">Reportar </span>
                                    <span className="block sm:hidden text-[10px]">Usuario</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AyudaModal;

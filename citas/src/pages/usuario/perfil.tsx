import React, { useState } from 'react';

const Perfil: React.FC = () => {
    const [activeTab, setActiveTab] = useState('info');

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            {/* Encabezado */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Mi Perfil</h1>
                    <p className="text-lg opacity-90">Comparte lo mejor de ti con el mundo</p>
                </div>
            </section>

            {/* Contenido del Perfil */}
            <section className="py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Foto Principal y Info Básica */}
                    <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                            {/* Foto Principal */}
                            <div className="relative">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center shadow-lg">
                                    <i className="bi bi-person text-white text-6xl"></i>
                                </div>
                                <button className="absolute bottom-0 right-0 bg-purple-500 text-white rounded-full p-2 shadow-lg hover:bg-purple-600 transition">
                                    <i className="bi bi-camera text-lg"></i>
                                </button>
                            </div>
                            
                            {/* Info Básica */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">María, 25</h2>
                                <p className="text-gray-600 mb-4">
                                    <i className="bi bi-geo-alt text-purple-500"></i>
                                    Ciudad de México, CDMX
                                </p>
                                <p className="text-gray-700 mb-4">
                                    "Amo viajar, la fotografía y los atardeceres. Buscando a alguien con quien compartir aventuras y crear recuerdos increíbles."
                                </p>
                                <div className="flex justify-center md:justify-start space-x-4">
                                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                                        <i className="bi bi-pencil mr-2"></i>Editar Perfil
                                    </button>
                                    <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-50 transition">
                                        <i className="bi bi-eye mr-2"></i>Vista Previa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs de Navegación */}
                    <div className="bg-white rounded-xl shadow-lg mb-8">
                        <div className="border-b border-gray-200">
                            <nav className="flex">
                                <button
                                    onClick={() => setActiveTab('info')}
                                    className={`px-6 py-3 font-medium text-sm border-b-2 ${
                                        activeTab === 'info'
                                            ? 'border-purple-500 text-purple-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <i className="bi bi-person-lines-fill mr-2"></i>
                                    Información
                                </button>
                                <button
                                    onClick={() => setActiveTab('fotos')}
                                    className={`px-6 py-3 font-medium text-sm border-b-2 ${
                                        activeTab === 'fotos'
                                            ? 'border-purple-500 text-purple-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <i className="bi bi-images mr-2"></i>
                                    Fotos (6)
                                </button>
                                <button
                                    onClick={() => setActiveTab('intereses')}
                                    className={`px-6 py-3 font-medium text-sm border-b-2 ${
                                        activeTab === 'intereses'
                                            ? 'border-purple-500 text-purple-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <i className="bi bi-heart mr-2"></i>
                                    Intereses
                                </button>
                            </nav>
                        </div>

                        <div className="p-6">
                            {/* Tab Información */}
                            {activeTab === 'info' && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Edad</label>
                                            <div className="bg-gray-50 p-3 rounded-lg">25 años</div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Altura</label>
                                            <div className="bg-gray-50 p-3 rounded-lg">1.65 m</div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Educación</label>
                                            <div className="bg-gray-50 p-3 rounded-lg">Licenciatura en Diseño</div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Trabajo</label>
                                            <div className="bg-gray-50 p-3 rounded-lg">Diseñadora Gráfica</div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Sobre mí</label>
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            Soy una persona apasionada por el arte y la creatividad. Me encanta explorar nuevos lugares, 
                                            probar comida de diferentes culturas y conocer personas interesantes. 
                                            En mis tiempos libres disfruto de la fotografía, la lectura y el yoga.
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tab Fotos */}
                            {activeTab === 'fotos' && (
                                <div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <div key={i} className="relative group">
                                                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition">
                                                    <i className="bi bi-image text-4xl text-purple-400"></i>
                                                </div>
                                                <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition">
                                                    <i className="bi bi-x text-sm"></i>
                                                </button>
                                                <div className="absolute bottom-2 left-2 right-2">
                                                    <div className="bg-black bg-opacity-50 text-white text-xs p-1 rounded text-center">
                                                        Foto {i}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center hover:border-purple-400 cursor-pointer transition">
                                        <i className="bi bi-plus-circle text-4xl text-purple-400 mb-4"></i>
                                        <p className="text-purple-600 font-medium">Agregar nueva foto</p>
                                        <p className="text-gray-500 text-sm">Máximo 9 fotos</p>
                                    </div>
                                </div>
                            )}

                            {/* Tab Intereses */}
                            {activeTab === 'intereses' && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Mis Intereses</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {['Fotografía', 'Viajes', 'Yoga', 'Cocina', 'Arte', 'Música', 'Lectura', 'Naturaleza'].map((interes) => (
                                                <span key={interes} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                                                    {interes}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Estilo de Vida</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600">¿Fumas?</span>
                                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">No</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600">¿Bebes?</span>
                                                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">Socialmente</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600">Ejercicio</span>
                                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Regular</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600">Mascotas</span>
                                                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-sm">Me encantan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Estadísticas del Perfil */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Estadísticas de tu Perfil</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                    <i className="bi bi-eye text-purple-600 text-2xl"></i>
                                </div>
                                <div className="text-2xl font-bold text-gray-800">127</div>
                                <div className="text-sm text-gray-600">Vistas esta semana</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                    <i className="bi bi-heart text-pink-600 text-2xl"></i>
                                </div>
                                <div className="text-2xl font-bold text-gray-800">23</div>
                                <div className="text-sm text-gray-600">Likes recibidos</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                    <i className="bi bi-people text-green-600 text-2xl"></i>
                                </div>
                                <div className="text-2xl font-bold text-gray-800">12</div>
                                <div className="text-sm text-gray-600">Matches nuevos</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                    <i className="bi bi-chat-dots text-blue-600 text-2xl"></i>
                                </div>
                                <div className="text-2xl font-bold text-gray-800">8</div>
                                <div className="text-sm text-gray-600">Conversaciones</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Perfil;
import React from 'react';
import { themeClasses } from '../../themes';

const Matches: React.FC = () => {
    return (
        <div className={`min-h-screen ${themeClasses.backgroundSecondary} transition-colors duration-300`}>
            {/* Header */}
            <section className="bg-gradient-to-r from-pink-500 to-red-600 text-white py-8 px-6 shadow-xl">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Tus Matches
                    </h1>
                    <p className="text-pink-100 text-lg">
                        Personas que también se interesaron en ti
                    </p>
                </div>
            </section>

            {/* Contenido */}
            <section className="py-8 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6 text-center`}>
                        Nuevos Matches
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((match) => (
                            <div key={match} className={`${themeClasses.card} rounded-xl overflow-hidden shadow-lg hover:shadow-xl ${themeClasses.hover} transition-all duration-300`}>
                                <div className="h-64 bg-gradient-to-br from-pink-300 to-red-400 flex items-center justify-center">
                                    <i className="bi bi-person text-white text-6xl"></i>
                                </div>
                                <div className="p-4">
                                    <h3 className={`font-semibold ${themeClasses.text} text-lg mb-2`}>
                                        Match {match}
                                    </h3>
                                    <p className={`${themeClasses.textSecondary} text-sm mb-3`}>
                                        Tienen gustos similares
                                    </p>
                                    <button className="w-full bg-gradient-to-r from-pink-500 to-red-600 text-white py-2 rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300">
                                        Enviar mensaje
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

export default Matches;
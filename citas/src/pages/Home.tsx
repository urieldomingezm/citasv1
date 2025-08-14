import React from 'react';

const Home: React.FC = () => (
  <section className="w-full bg-gradient-to-r from-pink-50 via-white to-pink-50 py-16 px-6">
    {/* Hero */}
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
        Bienvenido a <span className="text-pink-500">Citas</span>
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        ¡Encuentra tu pareja ideal y organiza tus citas románticas de manera fácil y divertida!
      </p>
      <button className="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition transform hover:scale-105">
        <i className="bi bi-heart-fill mr-2"></i> Comenzar ahora
      </button>
    </div>

    {/* Features */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
        <i className="bi bi-person-circle text-pink-500 text-5xl mb-4"></i>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Crea tu perfil</h3>
        <p className="text-gray-600 mb-4">
          Personaliza tu perfil y muestra tu mejor versión para encontrar tu match ideal.
        </p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
          <i className="bi bi-pencil-square mr-2"></i> Editar perfil
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
        <i className="bi bi-search-heart text-pink-500 text-5xl mb-4"></i>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Busca coincidencias</h3>
        <p className="text-gray-600 mb-4">
          Explora perfiles y encuentra personas compatibles contigo de manera sencilla.
        </p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
          <i className="bi bi-search mr-2"></i> Buscar parejas
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
        <i className="bi bi-calendar-heart text-pink-500 text-5xl mb-4"></i>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Organiza una cita</h3>
        <p className="text-gray-600 mb-4">
          Agenda y gestiona tus citas con facilidad y seguridad.
        </p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
          <i className="bi bi-calendar-plus mr-2"></i> Agendar cita
        </button>
      </div>
    </div>
    
  </section>
);

export default Home;

import React from 'react';

const Home: React.FC = () => (
  <section className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow p-6">
    <h2 className="text-3xl font-bold mb-4 text-pink-600 text-center">Bienvenido a Citas</h2>
    <p className="mb-6 text-center text-gray-700">
      ¡Encuentra tu pareja ideal y organiza tus citas románticas de manera fácil y divertida!
    </p>
    <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
      <div className="flex-1 bg-pink-50 rounded-lg p-4 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-pink-500 mb-2">Crea tu perfil</h3>
        <p className="text-gray-600 mb-2">Personaliza tu perfil para que otros puedan conocerte mejor.</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">Editar perfil</button>
      </div>
      <div className="flex-1 bg-pink-50 rounded-lg p-4 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-pink-500 mb-2">Busca coincidencias</h3>
        <p className="text-gray-600 mb-2">Explora perfiles y encuentra personas compatibles contigo.</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">Buscar parejas</button>
      </div>
      <div className="flex-1 bg-pink-50 rounded-lg p-4 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-pink-500 mb-2">Organiza una cita</h3>
        <p className="text-gray-600 mb-2">Agenda y gestiona tus citas de forma sencilla y segura.</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">Agendar cita</button>
      </div>
    </div>
    <div className="text-center mt-8">
      <span className="inline-block text-pink-400 text-2xl animate-bounce">💕</span>
      <p className="mt-2 text-gray-500">¡El amor está a un clic de distancia!</p>
    </div>
  </section>
);

export default Home;
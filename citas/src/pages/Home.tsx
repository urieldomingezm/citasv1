import React from 'react';

const Home: React.FC = () => (
  <section className="w-full bg-gradient-to-r from-pink-50 via-white to-pink-50 py-16 px-6">
    {/* Hero */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
        Bienvenido a <span className="text-pink-500">Citas</span>
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        ¡Encuentra tu pareja ideal y vive experiencias únicas en un ambiente seguro y divertido!
      </p>
      <p className="text-sm text-gray-500">
        Con miles de historias de amor formadas aquí, tu próxima conexión especial podría estar a un clic.
      </p>
    </div>

    {/* Stats */}
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
      <div>
        <p className="text-3xl font-bold text-pink-600">+50K</p>
        <p className="text-gray-600 text-sm">Usuarios activos</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-pink-600">92%</p>
        <p className="text-gray-600 text-sm">Compatibilidad promedio</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-pink-600">+10K</p>
        <p className="text-gray-600 text-sm">Parejas formadas</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-pink-600">24/7</p>
        <p className="text-gray-600 text-sm">Soporte en línea</p>
      </div>
    </div>

    {/* Features */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
        <i className="bi bi-person-circle text-pink-500 text-5xl mb-4"></i>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Crea tu perfil</h3>
        <p className="text-gray-600">
          Muestra lo mejor de ti: sube fotos, describe tus intereses y personaliza tu espacio.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
        <i className="bi bi-search-heart text-pink-500 text-5xl mb-4"></i>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Busca coincidencias</h3>
        <p className="text-gray-600">
          Descubre personas afines mediante nuestro sistema inteligente de compatibilidad.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
        <i className="bi bi-calendar-heart text-pink-500 text-5xl mb-4"></i>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Organiza una cita</h3>
        <p className="text-gray-600">
          Planifica encuentros seguros y emocionantes para dar el siguiente paso.
        </p>
      </div>
    </div>

    {/* Testimonials */}
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-pink-600 mb-6">Historias reales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <p className="text-gray-600 italic mb-4">
            “Nunca imaginé encontrar a mi alma gemela tan rápido. Llevamos 2 años juntos gracias a Citas.”
          </p>
          <p className="text-pink-500 font-semibold">María & Luis</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <p className="text-gray-600 italic mb-4">
            “La plataforma es súper intuitiva y segura. He conocido personas increíbles.”
          </p>
          <p className="text-pink-500 font-semibold">Andrea</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <p className="text-gray-600 italic mb-4">
            “Organizar mi primera cita aquí fue facilísimo. ¡Recomendado al 100%!”
          </p>
          <p className="text-pink-500 font-semibold">Carlos</p>
        </div>
      </div>
    </div>
  </section>
);

export default Home;

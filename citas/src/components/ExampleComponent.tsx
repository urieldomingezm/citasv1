// Ejemplo: Componente usando rutas absolutas
import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { AuthContext } from '@context/AuthContext';
import { userService } from '@services/userService';
import { ApiResponse } from '@types/index';

// También puedes usar el alias @ para la carpeta raíz src
import '@/index.css';

const ExampleComponent: React.FC = () => {
    // Tu código aquí
    return (
        <div>
            <Header />
            {/* Contenido */}
            <Footer />
        </div>
    );
};

export default ExampleComponent;

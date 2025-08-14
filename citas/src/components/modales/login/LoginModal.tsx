import React, { useState } from 'react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí irá la lógica de inicio de sesión
        console.log('Login:', { username, password });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Iniciar Sesión</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <i className="bi bi-x" style={{ fontSize: '24px' }}></i>
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                            <i className="bi bi-person-circle mr-2"></i>
                            Nombre de usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="usuario123"
                            required
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            <i className="bi bi-lock mr-2"></i>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Tu contraseña"
                            required
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                        >
                            <i className="bi bi-box-arrow-in-right mr-2"></i>
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;

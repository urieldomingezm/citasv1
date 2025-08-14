import React, { useState } from 'react';

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        // Aquí irá la lógica de registro
        console.log('Register:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Registrarse</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <i className="bi bi-x" style={{ fontSize: '24px' }}></i>
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                <i className="bi bi-person mr-2"></i>
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                <i className="bi bi-person-circle mr-2"></i>
                                Nombre de usuario
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="usuario123"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                <i className="bi bi-lock mr-2"></i>
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tu contraseña"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                <i className="bi bi-lock-fill mr-2"></i>
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirma tu contraseña"
                                required
                            />
                        </div>
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
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                        >
                            <i className="bi bi-person-plus mr-2"></i>
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;

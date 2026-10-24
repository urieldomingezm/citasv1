import React from 'react';

interface Photo {
    id: number;
    isMain: boolean;
    likes: number;
    views: number;
}

interface MostrarFotoModalProps {
    selectedPhoto: number | null;
    photos: Photo[];
    onClose: () => void;
    onMakeMain?: (photoId: number) => void;
    onDelete?: (photoId: number) => void;
}

const MostrarFotoModal: React.FC<MostrarFotoModalProps> = ({
    selectedPhoto,
    photos,
    onClose,
    onMakeMain,
    onDelete
}) => {
    if (!selectedPhoto) return null;

    const photo = photos.find(p => p.id === selectedPhoto);
    if (!photo) return null;

    const handleMakeMain = () => {
        if (onMakeMain) {
            onMakeMain(selectedPhoto);
        }
        onClose();
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(selectedPhoto);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-100 backdrop-blur-xl rounded-3xl p-6 max-w-2xl w-full shadow-2xl border border-white dark:border-gray-600">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                        Detalles de la Foto
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 text-2xl transition-colors duration-200"
                    >
                        <i className="bi bi-x"></i>
                    </button>
                </div>

                <div className="aspect-square bg-gradient-to-br from-violet-200 to-fuchsia-200 dark:from-violet-800 dark:to-fuchsia-800 rounded-2xl flex items-center justify-center mb-6">
                    <i className="bi bi-image text-white text-8xl"></i>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{photo.likes}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Likes recibidos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{photo.views}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Vistas totales</div>
                    </div>
                </div>

                {/* Badge si es foto principal */}
                {photo.isMain && (
                    <div className="flex justify-center mb-4">
                        <div className="bg-yellow-500 dark:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            <i className="bi bi-star-fill mr-2"></i>Foto Principal
                        </div>
                    </div>
                )}

                <div className="flex justify-center space-x-4">
                    {!photo.isMain && onMakeMain && (
                        <button
                            onClick={handleMakeMain}
                            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-600 dark:to-fuchsia-600 text-white px-6 py-2 rounded-2xl font-semibold hover:from-violet-600 hover:to-fuchsia-600 dark:hover:from-violet-700 dark:hover:to-fuchsia-700 transition-all duration-300 shadow-lg"
                        >
                            <i className="bi bi-star mr-2"></i>
                            Hacer Principal
                        </button>
                    )}

                    {onDelete && (
                        <button
                            onClick={handleDelete}
                            className="bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm border-2 border-violet-300 dark:border-violet-600 text-violet-600 dark:text-violet-400 px-6 py-2 rounded-2xl font-semibold hover:bg-violet-50 dark:hover:bg-violet-900 transition-all duration-300 shadow-lg"
                        >
                            <i className="bi bi-trash mr-2"></i>
                            Eliminar
                        </button>
                    )}

                    <button
                        onClick={onClose}
                        className="bg-gray-500 dark:bg-gray-600 text-white px-6 py-2 rounded-2xl font-semibold hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
                    >
                        <i className="bi bi-x mr-2"></i>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MostrarFotoModal;

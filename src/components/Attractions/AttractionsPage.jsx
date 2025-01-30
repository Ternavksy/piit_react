import React, { useState } from 'react';
import styles from './Attractions.module.css';

const AttractionsPage = () => {
    // Список достопримечательностей
    const [attractions, setAttractions] = useState([
        { id: 1, name: 'Eiffel Tower', description: 'Famous tower in Paris', active: true },
        { id: 2, name: 'Great Wall', description: 'Historic wall in China', active: true },
        { id: 3, name: 'Colosseum', description: 'Ancient Roman amphitheater', active: true },
    ]);

    // Функция для удаления достопримечательности
    const handleDelete = (id) => {
        setAttractions(attractions.filter((attraction) => attraction.id !== id));
    };

    // Функция для переключения статуса активности
    const toggleActive = (id) => {
        setAttractions((prev) =>
            prev.map((attraction) =>
                attraction.id === id ? { ...attraction, active: !attraction.active } : attraction
            )
        );
    };

    return (
        <div className={styles.attractions}>
            <h2 className={styles.title}>Manage Attractions</h2>
            <ul className={styles.list}>
                {attractions.map((attraction) => (
                    <li key={attraction.id} className={styles.item}>
                        <div className={styles.info}>
                            <h3>{attraction.name}</h3>
                            <p>{attraction.description}</p>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => toggleActive(attraction.id)} className={styles.toggle}>
                                {attraction.active ? 'Deactivate' : 'Activate'}
                            </button>
                            <button onClick={() => handleDelete(attraction.id)} className={styles.delete}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttractionsPage;

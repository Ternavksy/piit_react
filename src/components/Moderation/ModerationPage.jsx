import React, { useState } from 'react';
import styles from './Moderation.module.css';

const ModerationPage = () => {
    // Список точек, ожидающих модерации
    const [pendingPoints, setPendingPoints] = useState([
        { id: 1, name: 'Statue of Liberty', description: 'User-submitted landmark in NYC' },
        { id: 2, name: 'Sydney Opera House', description: 'Iconic performing arts center' },
        { id: 3, name: 'Mount Everest Base Camp', description: 'Popular trekking destination' },
    ]);

    // Функция для одобрения точки (удаляет из списка)
    const approvePoint = (id) => {
        setPendingPoints(pendingPoints.filter((point) => point.id !== id));
        alert('Point approved!');
    };

    // Функция для отклонения точки (удаляет из списка)
    const rejectPoint = (id) => {
        setPendingPoints(pendingPoints.filter((point) => point.id !== id));
        alert('Point rejected.');
    };

    return (
        <div className={styles.moderation}>
            <h2 className={styles.title}>Moderation Panel</h2>
            {pendingPoints.length === 0 ? (
                <p className={styles.empty}>No pending points for review.</p>
            ) : (
                <ul className={styles.list}>
                    {pendingPoints.map((point) => (
                        <li key={point.id} className={styles.item}>
                            <div className={styles.info}>
                                <h3>{point.name}</h3>
                                <p>{point.description}</p>
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={() => approvePoint(point.id)} className={styles.approve}>
                                    Approve
                                </button>
                                <button onClick={() => rejectPoint(point.id)} className={styles.reject}>
                                    Reject
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ModerationPage;

import React from 'react';
import styles from './Dashboard.module.css';

const DashboardPage = () => {
    const statistics = [
        { title: 'Attractions', value: 50, description: 'Active Points' },
        { title: 'Users', value: 200, description: 'Registered Users' },
        { title: 'Visits', value: 1200, description: 'This Week' },
    ];

    const topAttractions = [
        { name: 'ВГУ', visits: 340 },
        { name: 'ГЧ', visits: 280 },
        { name: 'МП', visits: 220 },
    ];

    // Вычисляем максимальное количество посещений для нормализации
    const maxVisits = Math.max(...topAttractions.map(attraction => attraction.visits));

    return (
        <div className={styles.dashboard}>
            <h2 className={styles.title}>Dashboard</h2>

            {/* Виджеты со статистикой */}
            <div className={styles.stats}>
                {statistics.map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                        <h3>{stat.title}</h3>
                        <p className={styles.value}>{stat.value}</p>
                        <p className={styles.description}>{stat.description}</p>
                    </div>
                ))}
            </div>

            {/* Секция с популярными достопримечательностями */}
            <div className={styles.chart}>
                <h3>Top Attractions This Week</h3>
                <ul className={styles.attractionList}>
                    {topAttractions.map((attraction, index) => (
                        <li key={index} className={styles.attractionItem}>
                            <div className={styles.progressBarContainer}>
                                <div
                                    className={styles.progressBar}
                                    style={{ width: `${(attraction.visits / maxVisits) * 100}%` }}
                                ></div>
                            </div>
                            <span>
                                {attraction.name} - {attraction.visits} visits
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardPage;

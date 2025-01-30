import React, { useState } from 'react';
import styles from './Users.module.css';

const UsersPage = () => {
    // Список пользователей
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', active: true },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', active: true },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', active: false },
    ]);

    // Функция для блокировки/разблокировки пользователя
    const toggleUserStatus = (id) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    // Функция для удаления пользователя
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className={styles.users}>
            <h2 className={styles.title}>User Management</h2>
            {users.length === 0 ? (
                <p className={styles.empty}>No users found.</p>
            ) : (
                <ul className={styles.list}>
                    {users.map((user) => (
                        <li key={user.id} className={styles.item}>
                            <div className={styles.info}>
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                                <p className={user.active ? styles.active : styles.blocked}>
                                    {user.active ? 'Active' : 'Blocked'}
                                </p>
                            </div>
                            <div className={styles.buttons}>
                                <button
                                    onClick={() => toggleUserStatus(user.id)}
                                    className={user.active ? styles.block : styles.unblock}
                                >
                                    {user.active ? 'Block' : 'Unblock'}
                                </button>
                                <button onClick={() => deleteUser(user.id)} className={styles.delete}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UsersPage;

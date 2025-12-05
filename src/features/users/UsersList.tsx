// src/features/users/UsersList.tsx
import styles from "./UsersList.module.css";
import { useGetUsersQuery } from "./usersApi";

const UsersList = () => {
  const { data: users, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) return <p className={styles.loading}>Загрузка...</p>;

  if (isError) {
    let errorMessage = "Произошла неизвестная ошибка.";
    if (error && 'status' in error) {
      errorMessage = `Ошибка загрузки: статус ${error.status}`;
    } else if (error && 'message' in error) {
      errorMessage = error.message || "Неизвестная ошибка";
    }
    return <p className={styles.error}>{errorMessage}</p>;
  }

  if (!users || users.length === 0) {
    return <p className={styles.loading}>Пользователи не найдены.</p>;
  }

  return (
    <div className={styles.grid}>
      {users?.map((user) => (
        <div key={user.id} className={styles.card}>
          <h2 className={styles.name}>
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className={styles.field}>
            <span>Email:</span> {user.email}
          </p>

          <p className={styles.field}>
            <span>Username:</span> {user.username}
          </p>

          <p className={styles.field}>
            <span>Phone:</span> {user.phone}
          </p>

          <div className={styles.address}>
            <span>Address:</span>
            <p>
              {user.address.city}, {user.address.street} {user.address.number}
            </p>
            <p>ZIP: {user.address.zipcode}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;

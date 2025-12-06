import type { Profile } from "../profiles"; // Импорт интерфейса и данных
// Импорт интерфейса и данных
import styles from "./ProfileCard.module.css"; // Импорт стилей

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div>

    
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={profile.avatarUrl}
        alt={`${profile.firstName} ${profile.lastName}`}
      />
      <h2 className={styles.name}>
        {`${profile.firstName} ${profile.lastName}`}
      </h2>
      <p className={styles.occupation}>{profile.occupation}</p>
      <h3 className={styles.hobby}>
        Hobbies: <span className={styles.hobbyValue}>{profile.hobby}</span>
      </h3>
    </div>
    
    </div>
  );
}

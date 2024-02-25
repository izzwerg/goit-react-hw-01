import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, followers, views, likes }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.userInfo}>
        <img
          width={150}
          src={image}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Followers</span>
          <span className={styles.itemAccent}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span className={styles.itemAccent}>{views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span className={styles.itemAccent}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

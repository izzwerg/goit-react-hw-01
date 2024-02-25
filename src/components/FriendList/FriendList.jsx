import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsWrap}>
      {friends.map((item) => {
        return (
          <li key={item.id} className={styles.friendObj}>
            <FriendListItem
              avatar={item.avatar}
              friendName={item.name}
              status={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

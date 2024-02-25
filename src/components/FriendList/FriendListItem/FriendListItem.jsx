import styles from './FriendListItem.module.css'

const FriendListItem = ({avatar, status, friendName}) => {
    return(
    <>
        <img className={styles.friendImg} src={avatar} alt={friendName} />
        <p className={styles.friendName}>{friendName}</p>
        <p className={(status ? styles.isOnline : styles.isOffline)}>{(status ? "Online" : "Offline")}</p>
    </>
    )
};

export default FriendListItem;
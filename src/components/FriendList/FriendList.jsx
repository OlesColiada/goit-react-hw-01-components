import styles from './FriendList.module.css'


const FriendListItem = ({avatar, isOnline, name}) => {
    const status = isOnline?'Online':'Offline';
    return (
        <li className={styles.itemFriend}>
            <span className={styles[status]}></span>
            <img src={avatar} alt="User avatar"  className={styles.friendAvatar}/>
            <p className={styles.friendName}>{name}</p>
        </li>
    )
}

export const FriendList = ({friends}) => {
    return (
        <div className={styles.friendListContainer}>
            <ul className={styles.friendsList}>
                {friends.map(friend=>(
                    <FriendListItem 
                    id={friend.id}
                    avatar={friend.avatar}
                    key={friend.id}
                    isOnline = {friend.isOnline}
                    name={friend.name}
                    />))}
            </ul>
        </div>
    )
}
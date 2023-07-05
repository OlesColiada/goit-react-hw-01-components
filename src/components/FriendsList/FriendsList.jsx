import styles from './FriendsList.module.css'
import {FriendsListItem} from './FriendsListItem/FriendsListItem'

export const FriendsList = ({friends}) => {
    return (
        <div className={styles.friendsListContainer}>
            <ul className={styles.friendsList}>
                {friends.map(friend=>(
                    <FriendsListItem
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
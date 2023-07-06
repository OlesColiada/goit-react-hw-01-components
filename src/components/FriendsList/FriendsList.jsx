import styles from './FriendsList.module.css'
import {FriendsListItem} from './FriendsListItem/FriendsListItem'
import PropTypes from 'prop-types'

export const FriendsList = ({friends}) => {
    return (
        <div className={styles.friendsListContainer}>
            <ul className={styles.friendsList}>
                {friends.map(friend=>(
                    <FriendsListItem
                    avatar={friend.avatar}
                    key={friend.id}
                    isOnline = {friend.isOnline}
                    name={friend.name}
                    />))}
            </ul>
        </div>
    )
}

// FriendsList.propTypes = {
//     friends: PropTypes.array(
//         PropTypes.object({
//             id: PropTypes.number
//         }).isRequired
//     )
// }

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
}
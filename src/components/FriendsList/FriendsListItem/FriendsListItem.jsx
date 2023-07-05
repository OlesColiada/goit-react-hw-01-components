import PropTypes from 'prop-types'
import styles from './FriendsListItem.module.css'

export const FriendsListItem = ({avatar, isOnline, name, id}) => {
    const status = isOnline?'Online':'Offline';
    return (
        <li className={styles.itemFriend} id={id}>
            <span className={styles[status]}></span>
            <img src={avatar} alt="User avatar"  className={styles.friendAvatar}/>
            <p className={styles.friendName}>{name}</p>
        </li>
    )
}

FriendsListItem.propTypes = {
    // id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}
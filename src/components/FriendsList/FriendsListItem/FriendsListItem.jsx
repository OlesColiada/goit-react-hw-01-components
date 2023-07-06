import PropTypes from 'prop-types'
import styles from './FriendsListItem.module.css'

export const FriendsListItem = ({avatar, isOnline, name}) => {
    const status = isOnline?'Online':'Offline';
    return (
        <li className={styles.itemFriend}>
            <span className={styles[status]}></span>
            <img src={avatar} alt="User avatar"  className={styles.friendAvatar}/>
            <p className={styles.friendName}>{name}</p>
        </li>
    )
}

// Не знаю чи є зміст їх тут другий раз перевіряти
FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}
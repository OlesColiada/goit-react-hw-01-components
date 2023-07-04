import styles from './App.module.css'
import {Profile} from './Profile/profile'
import {Statistics} from './Statistics/Statistics'
import {FriendList} from './FriendList/FriendList'
import {TransactionHistory} from './Transaction/Transaction'
import user from '../data/user.json'
import statistic from '../data/data.json';
import friends from '../data/friends.json'
import transaction from '../data/transactions.json'


export const App = () => {
  return (
  <div>
    <div className={styles.mainModule}>
      <Profile 
        username={user.username} 
        tag={user.tag} 
        location={user.location} 
        avatar={user.avatar} 
        stats={user.stats}/>
      <Statistics
        title ="upload stats"
        stats = {statistic}/>
      <FriendList
        friends={friends}/>
      <TransactionHistory
       items = {transaction}/>
    </div>
  </div>);
};

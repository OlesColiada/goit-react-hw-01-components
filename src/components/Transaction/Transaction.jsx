import PropTypes from 'prop-types'
import styles from './transactions.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <div className={styles.transactionContainer}>
            <table className={styles.transactionHistory}>
            <thead className={styles.tableCurrencyHead}>
                <tr>
                <th className={styles.tableHeadCell}>Type</th>
                <th className={styles.tableHeadCell}>Amount</th>
                <th className={styles.tableHeadCell}>Currency</th>
                </tr>
            </thead>
            <tbody>
                
                {items.map((item)=>{
                    return(
                        <tr className={item.index%2===0?styles.lightStyle:styles.grayStyle} key={item.id}>
                            <td className={styles.cellTrans}>{item.type}</td>
                            <td className={styles.cellTrans}>{item.amount}</td>
                            <td className={styles.cellTrans}>{item.currency}</td>
                        </tr>)
                    })}
            </tbody>
            </table>
        </div>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape ({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        }).isRequired
    ).isRequired
}
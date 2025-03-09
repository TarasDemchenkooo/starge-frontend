import { IGroupedTransactions } from "../types/IGroupedTransactions"
import styles from './GroupedTransactions.module.scss'
import Transaction from "./Transaction"

export default function GroupedTransactions({ date, transactions }: IGroupedTransactions) {
    return (
        <div className={styles.groupedTransactions}>
            <h4>{date}</h4>
            <div className={styles.groupedTransactionsData}>
                {transactions.map(txn => <Transaction key={txn.chargeId} {...txn} />)}
            </div>
        </div>
    )
}
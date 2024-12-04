import styles from './History.module.scss'
import HistoryPlaceholder from './HistoryPlaceholder'
import GroupedTransactions from './GroupedTransactions'
import groupTransactions from '../utils/groupTransactions'
import useAuth from '../../Swap/hooks/useAuth'

export default function History() {
    const { history } = useAuth()

    return (
        <div className={styles.history}>
            <div className={styles.historyHeader}>
                <h2>History</h2>
            </div>
            {history?.length !== 0 ?
                Object.entries(groupTransactions(history!))
                    .map(([date, transactions]) =>
                        <GroupedTransactions date={date} transactions={transactions} />) :
                <HistoryPlaceholder />
            }
        </div>
    )
}
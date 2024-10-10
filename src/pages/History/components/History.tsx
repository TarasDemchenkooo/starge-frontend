import styles from './History.module.scss'
import HistoryPlaceholder from './HistoryPlaceholder'
import GroupedTransactions from './GroupedTransactions'
import useHistory from '../hooks/useHistory'
import groupTransactions from '../utils/groupTransactions'
import HistorySkeleton from './HistorySkeleton'

export default function History() {
    const userId = Telegram.WebApp.initDataUnsafe.user?.id!
    const { data, isLoading } = useHistory(userId)

    return (
        <div className={styles.history}>
            <h2>Transaction History</h2>
            {isLoading ? <HistorySkeleton /> : data ?
                Object.entries(groupTransactions(data))
                    .map(([date, transactions]) =>
                        <GroupedTransactions date={date} transactions={transactions} />) :
                <HistoryPlaceholder />
            }
        </div>
    )
}
import styles from './History.module.scss'
import HistoryPlaceholder from './components/HistoryPlaceholder'
import GroupedTransactions from './components/GroupedTransactions'
import groupTransactions from './utils/groupTransactions'
import useHistory from './hooks/useHistory'

export default function History() {
    const { history } = useHistory()

    return (
        <div className={styles.history}>
            {history?.length ?
                <div className={styles.historyTransactions}>
                    {Object.entries(groupTransactions(history!)).map(([date, transactions]) =>
                        <GroupedTransactions date={date} key={date} transactions={transactions} />)}
                </div> :
                <HistoryPlaceholder />
            }
        </div>
    )
}
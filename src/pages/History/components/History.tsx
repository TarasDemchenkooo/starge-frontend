import styles from './History.module.scss'
import HistoryPlaceholder from './HistoryPlaceholder'
import GroupedTransactions from './GroupedTransactions'
import groupTransactions from '../utils/groupTransactions'
import useAuth from '../../Swap/hooks/useAuth'

export default function History() {
    const { history } = useAuth()

    console.log(history)

    return (
        <div className={styles.history}>
            <h2>History</h2>
            {history?.length !== 0 ?
            //@ts-ignore
                Object.entries(groupTransactions(history))
                    .map(([date, transactions]) =>
                        <GroupedTransactions date={date} transactions={transactions} />) :
                <HistoryPlaceholder />
            }
        </div>
    )
}
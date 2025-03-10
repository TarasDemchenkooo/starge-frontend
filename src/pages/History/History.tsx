import styles from './History.module.scss'
import HistoryPlaceholder from './components/HistoryPlaceholder'
import GroupedTransactions from './components/GroupedTransactions'
import groupTransactions from './utils/groupTransactions'
import useHistory from './hooks/useHistory'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Status } from '../../shared/types/ITransaction'

export default function History() {
    const [params, setParams] = useSearchParams()
    const targetLength = Number(params.get('target_length'))
    const { history, setIsRefetching } = useHistory()

    useEffect(() => {
        if (targetLength) {
            if (history?.length !== targetLength) {
                setIsRefetching(true)
            } else {
                params.delete('target_length')
                setParams(params)
            }
        } else if (history?.some(tx => tx.status === Status.PENDING)) {
            setIsRefetching(true)
        } else {
            setIsRefetching(false)
        }
    }, [history])

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
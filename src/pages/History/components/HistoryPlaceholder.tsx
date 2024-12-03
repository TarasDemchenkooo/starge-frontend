import { useNavigate } from 'react-router-dom'
import Button from '../../../shared/components/Button/components/Button'
import styles from './HistoryPlaceholder.module.scss'

export default function HistoryPlaceholder() {
    const nav = useNavigate()

    return (
        <div className={styles.historyPlaceholder}>
            <h3>No History Yet</h3>
            <p>All your transactions will be displayed here.</p>
            <Button content='Swap' onClick={() => nav('/')} />
        </div>
    )
}
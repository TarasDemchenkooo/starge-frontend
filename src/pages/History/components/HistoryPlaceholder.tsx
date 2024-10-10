import styles from './HistoryPlaceholder.module.scss'
import transactionsSticker from '../../../../public/animations-json/transactionsDuck.json'
import Sticker from '../../../shared/components/Sticker/components/Sticker'

export default function HistoryPlaceholder() {
    return (
            <div className={styles.historyPlaceholder}>
                <Sticker sticker={transactionsSticker}/>
                <h3>No History Yet</h3>
                <p>All your transactions will be displayed here.</p>
            </div>
    )
}
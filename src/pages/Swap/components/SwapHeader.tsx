import styles from './SwapHeader.module.scss'
import SettingsIcon from '../../../assets/svg/settings.svg?react'
import TransactionIcon from '../../../assets/svg/transaction.svg?react'
import Ripple from '../../../shared/components/Ripple/components/Ripple'

export default function SwapHeader() {
    return (
        <div className={styles.swapHeader}>
            <Ripple onClick={() => { }} holdTime={300} inDuration="0.3s">
                <SettingsIcon />
            </Ripple>
            <h1>Swap</h1>
            <Ripple onClick={() => {}} holdTime={300} inDuration="0.3s">
                <TransactionIcon />
            </Ripple>
        </div>
    )
}
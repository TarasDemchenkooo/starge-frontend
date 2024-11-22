import styles from './SwapHeader.module.scss'
import SettingsIcon from '../../../assets/svg/settings.svg?react'
import TransactionIcon from '../../../assets/svg/transaction.svg?react'
import Ripple from '../../../shared/components/Ripple/components/Ripple'
import { useNavigate } from 'react-router-dom'

export default function SwapHeader() {
    const navigate = useNavigate()

    return (
        <div className={styles.swapHeader}>
            {/* <Ripple onClick={() => navigate('/settings')} holdTime={300} inDuration="0.3s">
                <SettingsIcon />
            </Ripple> */}
            <h1>Swap</h1>
            {/* <Ripple onClick={() => navigate('/history')} holdTime={300} inDuration="0.3s">
                <TransactionIcon />
            </Ripple> */}
        </div>
    )
}
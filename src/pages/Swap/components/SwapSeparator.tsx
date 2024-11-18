import styles from './SwapSeparator.module.scss'
import ArrowIcon from '../../../assets/svg/arrow.svg?react'

export default function SwapSeparator() {
    return (
        <div className={styles.swapSeparator}>
            <div><ArrowIcon /></div>
        </div>
    )
}
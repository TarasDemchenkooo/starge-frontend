import styles from './AssetSeparator.module.scss'
import ArrowIcon from '../../../assets/svg/arrow.svg?react'

export default function AssetSeparator() {
    return (
        <div className={styles.assetSeparator}>
            <div>
                <div></div>
                <ArrowIcon />
            </div>
        </div>
    )
}
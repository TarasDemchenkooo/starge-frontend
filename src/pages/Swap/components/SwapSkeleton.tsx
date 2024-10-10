import Skeleton from '../../../shared/components/Skeleton/components/Skeleton'
import ArrowIcon from '../../../assets/svg/arrow.svg?react'
import styles from './SwapSkeleton.module.scss'
import hex2rgba from 'hex2rgba'

export default function SwapSkeleton() {
    return (
        <div className={styles.swapSkeleton}>
            <div className={styles.swapSkeletonAsset}>
                <div className={styles.swapSkeletonAssetData}>
                    <h3>You send</h3>
                </div>
                <div className={styles.swapSkeletonAssetInfo}>
                    <div className={styles.swapSkeletonAssetInfoLeft}>
                        <Skeleton type='default' className={styles.swapSkeletonAssetInfoLeftIcon} />
                        <Skeleton type='default' className={styles.swapSkeletonAssetInfoLeftSymbol} />
                    </div>
                    <Skeleton type='default' className={styles.swapSkeletonAssetInfoAmount} />
                </div>
                <div className={styles.swapSkeletonAssetQuote}>
                    <Skeleton type='default' className={styles.swapSkeletonAssetQuoteValue} />
                </div>
            </div>
            <div className={styles.swapSkeletonSeparator}>
                <div>
                    <div style={{ backgroundColor: hex2rgba(Telegram.WebApp.themeParams.link_color!, 0.1) }}>
                        <ArrowIcon />
                    </div>
                </div>
            </div>
            <div className={styles.swapSkeletonAsset}>
                <div className={styles.swapSkeletonAssetData}>
                    <h3>You receive</h3>
                    <Skeleton type='default' className={styles.swapSkeletonAssetDataBalance} />
                </div>
                <div className={styles.swapSkeletonAssetInfo}>
                    <div className={styles.swapSkeletonAssetInfoLeft}>
                        <Skeleton type='default' className={styles.swapSkeletonAssetInfoLeftIcon} />
                        <Skeleton type='default' className={styles.swapSkeletonAssetInfoLeftSymbol} />
                    </div>
                    <Skeleton type='default' className={styles.swapSkeletonAssetInfoAmount} />
                </div>
                <div className={styles.swapSkeletonAssetQuote}>
                    <Skeleton type='default' className={styles.swapSkeletonAssetQuotePrice} />
                    <Skeleton type='default' className={styles.swapSkeletonAssetQuoteValue} />
                </div>
            </div>
            <Skeleton type='default' className={styles.swapSkeletonButton} />
        </div>
    )
}
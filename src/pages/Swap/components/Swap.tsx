import styles from './Swap.module.scss'
import SourceAsset from './SourceAsset'
import TargetAsset from './TargetAsset'
import useIsFullyLoaded from '../hooks/useIsFullyLoaded'
import SwapHeader from './SwapHeader'
import SwapAction from './SwapAction'
import ArrowIcon from '../../../assets/svg/arrow.svg?react'

export default function Swap() {
    const isFullyLoaded = useIsFullyLoaded()

    return !isFullyLoaded ? 'Loading...' : (
        <div className={styles.swap}>
            <SwapHeader />
            <SourceAsset />
            <div className={styles.swapSeparator}>
                <div>
                    <ArrowIcon />
                </div>
            </div>
            <TargetAsset />
            <SwapAction />
        </div>
    )
}
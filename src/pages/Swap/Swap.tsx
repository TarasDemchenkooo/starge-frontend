import SwapHeader from './components/SwapHeader'
import SourceAsset from './components/SourceAsset'
import SwapSeparator from './components/SwapSeparator'
import TargetAsset from './components/TargetAsset'
import SwapAction from './components/SwapAction'
import styles from './Swap.module.scss'

export default function Swap() {
    return (
        <div className={styles.swap}>
            <SwapHeader />
            <SourceAsset />
            <SwapSeparator />
            <TargetAsset />
            <SwapAction />
        </div>
    )
}
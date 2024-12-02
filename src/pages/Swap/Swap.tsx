import SwapHeader from './components/SwapHeader'
import SourceAsset from './components/SourceAsset'
import SwapSeparator from './components/SwapSeparator'
import TargetAsset from './components/TargetAsset'
import SwapAction from './components/SwapAction'
import styles from './Swap.module.scss'
import { useEffect } from 'react'
import createBoc from './utils/createBoc'

export default function Swap() {
    
    useEffect(() => {
        //createBoc().then(res => console.log('BOC =>', res))
    }, [])

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
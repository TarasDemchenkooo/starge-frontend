import styles from './Swap.module.scss'
import SourceAsset from './SourceAsset'
import TargetAsset from './TargetAsset'
import useIsFullyLoaded from '../hooks/useIsFullyLoaded'
import SwapSkeleton from './SwapSkeleton'
import SwapHeader from './SwapHeader'
import SwapAction from './SwapAction'
import ArrowIcon from '../../../assets/svg/arrow.svg?react'
import createBoc from '../utils/createBoc'
import { useEffect } from 'react'
import axios from 'axios'
import tonApiKey from '../../../shared/constants/TonApiKey'
import tonApiUrl from '../../../shared/constants/TonApiUrl'
import { Address } from 'ton-core'

export default function Swap() {
    const isFullyLoaded = useIsFullyLoaded()

    // const address = Address.parse('UQCGl9xm8cIezBLfC0jtkixFPRgYdU2jV8vIE0DGxohbRx4T')
    // const id = address.toRawString()

    // useEffect(() => {
    //     createBoc().then(data => {
    //         axios.post(tonApiUrl.concat(`accounts/${id}/events/emulate`), { boc: data }, {
    //             headers: {
    //                 Authorization: `Bearer ${tonApiKey}`
    //             }
    //         }).then(res => console.log(res.data))
    //     })
    // }, [])

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
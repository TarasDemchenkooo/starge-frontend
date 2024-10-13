import styles from './Swap.module.scss'
import ArrowIcon from '../../../assets/svg/arrow.svg?react'
import SourceAsset from './SourceAsset'
import SwapButton from './SwapButton'
import TargetAsset from './TargetAsset'
import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import Button from '../../../shared/components/Button/components/Button'
import TonButtonIcon from '../../../assets/svg/ton-button.svg?react'
import useIsFullyLoaded from '../hooks/useIsFullyLoaded'
import SwapSkeleton from './SwapSkeleton'

export default function Swap() {
    const isFullyLoaded = useIsFullyLoaded()
    const address = useTonAddress()
    const { open } = useTonConnectModal()

    return !isFullyLoaded ? <SwapSkeleton/> : (
        <div className={styles.swap}>
            <SourceAsset />
            <div className={styles.swapSeparator}>
                <div>
                    <div></div>
                    <ArrowIcon />
                </div>
            </div>
            <TargetAsset />
            <div className={styles.swapAction}>
                {address ? <SwapButton /> :
                    <Button className={styles.swapActionConnect} onClick={open}>
                        <TonButtonIcon />
                        Connect wallet
                    </Button>
                }
            </div>
        </div>
    )
}
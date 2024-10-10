import styles from './Swap.module.scss'
import AssetSeparator from './AssetSeparator'
import SourceAsset from './SourceAsset'
import SwapButton from './SwapButton'
import TargetAsset from './TargetAsset'
import { useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react'
import Button from '../../../shared/components/Button/components/Button'
import TonButtonIcon from '../../../assets/svg/ton-button.svg?react'

export default function Swap() {
    const { connected } = useTonConnectUI()[0]
    const { open } = useTonConnectModal()

    return (
        <div className={styles.swap}>
            <SourceAsset />
            <AssetSeparator />
            <TargetAsset />
            <div className={styles.swapAction}>
                {connected ? <SwapButton /> :
                    <Button className={styles.swapActionConnect} onClick={open}>
                        <TonButtonIcon />
                        Connect wallet
                    </Button>
                }
            </div>
        </div>
    )
}
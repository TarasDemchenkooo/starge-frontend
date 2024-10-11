import styles from './Swap.module.scss'
import ArrowIcon from '../../../assets/svg/arrow.svg?react'
import SourceAsset from './SourceAsset'
import SwapButton from './SwapButton'
import TargetAsset from './TargetAsset'
import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import Button from '../../../shared/components/Button/components/Button'
import TonButtonIcon from '../../../assets/svg/ton-button.svg?react'
import useRegisterUser from '../hooks/useRegisterUser'
import useTargetAsset from '../hooks/useTargetAsset'

export default function Swap() {
    const address = useTonAddress()
    const isUserRegistered = useRegisterUser()
    const { targetAsset, isLoading } = useTargetAsset()
    const { open } = useTonConnectModal()

    return !isUserRegistered || isLoading ? 'pizda' : (
        <div className={styles.swap}>
            <SourceAsset />
            <div className={styles.swapSeparator}>
                <div>
                    <div></div>
                    <ArrowIcon />
                </div>
            </div>
            <TargetAsset targetAsset={targetAsset!} />
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
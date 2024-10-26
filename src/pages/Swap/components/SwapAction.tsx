import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import styles from './SwapAction.module.scss'
import Button from '../../../shared/components/Button/components/Button'
import useSourceInput from '../hooks/useSourceInput'
import usePrice from '../hooks/usePrice'
import useTargetAsset from '../hooks/useTargetAsset'

export default function SwapAction() {
    const {targetAsset} = useTargetAsset()
    const {isPriceLoading} = usePrice(targetAsset)
    const {sourceAmount} = useSourceInput()
    const address = useTonAddress()
    const { open } = useTonConnectModal()

    return (
        <div className={styles.swapAction}>
            {address ?
                <Button onClick={() => { }} className={styles.swapActionButton}>
                    {isPriceLoading ? 'Loading...' : sourceAmount ? 'Swap' : 'Enter an amount'}
                </Button> :
                <Button className={styles.swapActionButton} onClick={open}>
                    Connect wallet
                </Button>
            }
        </div>
    )
}
import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import styles from './SwapAction.module.scss'
import Button from '../../../shared/components/Button/components/Button'
import usePrice from '../hooks/usePrice'
import useTargetAsset from '../hooks/useTargetAsset'
import classNames from 'classnames'
import useInputs from '../hooks/useInputs'
import maxSwapRange from '../../../shared/constants/maxSwapRange'

export default function SwapAction() {
    const { targetAsset } = useTargetAsset()
    const { source } = useInputs()
    const { isPriceLoading } = usePrice(targetAsset)
    const address = useTonAddress()
    const { open } = useTonConnectModal()

    const swapState = classNames({
        [styles.swapActionButtonSwap]: true,
        [styles.swapActionButtonSwapError]: Number(source) === 0 || Number(source) > maxSwapRange,
    })

    return (
        <div className={styles.swapAction}>
            {address ?
                <Button disabled={isPriceLoading} onClick={() => { }} className={swapState}>
                    Swap
                </Button> :
                <Button className={styles.swapActionButton} onClick={open}>
                    Connect wallet
                </Button>
            }
        </div>
    )
}
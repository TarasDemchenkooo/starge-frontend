import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import styles from './SwapAction.module.scss'
import Button from '../../../shared/components/Button/components/Button'
import usePrice from '../hooks/usePrice'
import useTargetAsset from '../hooks/useTargetAsset'
import useInputs from '../hooks/useInputs'
import maxSwapRange from '../../../shared/constants/maxSwapRange'
import formatSourceInput from '../utils/formatSourceInput'

export default function SwapAction() {
    const { targetAsset } = useTargetAsset()
    const { source } = useInputs()
    const { isPriceLoading } = usePrice(targetAsset)
    const address = useTonAddress()
    const { open } = useTonConnectModal()

    function getButtonState(source: string) {
        const amount = Number(source)
        const nullValueError = 'Enter an amount'
        const maxSwapRangeError = `Max amount is ${formatSourceInput(maxSwapRange.toString())} STARS`
        const acceptableText = 'Swap'

        return {
            content: amount === 0 ? nullValueError : amount > maxSwapRange
                ? maxSwapRangeError : acceptableText,
            disabled: amount === 0 || amount > maxSwapRange
        }
    }

    return (
        <div className={styles.swapAction}>
            {address ?
                <Button content={getButtonState(source).content} isLoading={isPriceLoading}
                    disabled={getButtonState(source).disabled} onClick={() => { }} /> :
                <Button content='Connect wallet' isLoading={isPriceLoading} onClick={open} />
            }
        </div>
    )
}
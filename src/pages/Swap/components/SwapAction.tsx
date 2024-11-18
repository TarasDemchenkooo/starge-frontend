import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import styles from './SwapAction.module.scss'
import Button from '../../../shared/components/Button/components/Button'
import usePrice from '../hooks/usePrice'
import useInputs from '../hooks/useInputs'
import { useEffect, useState } from 'react'
import ConfirmModal from './ConfirmModal'
import useConfirmSwap from '../hooks/useConfirmeSwap'
import getButtonState from '../utils/getButtonState'
import { IConfirmSwap } from '../types/IConfirmSwap'
import calculatePrice from '../utils/calculatePrice'
import { IValidatedSwap } from '../types/IValidatedSwap'
import useAuth from '../hooks/useAuth'

export default function SwapAction() {
    const { settings } = useAuth()
    const { source, target } = useInputs()
    const { price, isPriceLoading } = usePrice(settings?.tokenSymbol!)
    const address = useTonAddress()
    const { open } = useTonConnectModal()
    const [modal, setModal] = useState(false)
    const { data, mutate, isPending } = useConfirmSwap()
    const [confirmedData, setConfirmedData] = useState<IValidatedSwap | null>(null)

    useEffect(() => {
        if (data) {
            setModal(true)
            setConfirmedData(data)
        }
    }, [data])

    function swapConfirm() {
        const validatingAssets: IConfirmSwap = {
            address,
            source: Number(source),
            target: Number(target),
            target_symbol: settings?.tokenSymbol!,
            quote: calculatePrice(price!)
        }

        mutate(validatingAssets)
    }

    return (
        <div className={styles.swapAction}>
            {address ?
                <Button content={getButtonState(source).content} isLoading={isPriceLoading || isPending}
                    disabled={getButtonState(source).disabled} onClick={swapConfirm} /> :
                <Button content='Connect wallet' isLoading={isPriceLoading} onClick={open} />
            }
            {modal && <ConfirmModal {...confirmedData!} />}
        </div>
    )
}
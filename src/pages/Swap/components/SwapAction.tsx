import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import styles from './SwapAction.module.scss'
import Button from '../../../shared/components/Button/components/Button'
import usePrice from '../hooks/usePrice'
import useInputs from '../hooks/useInputs'
import { useEffect, useState } from 'react'
import ConfirmModal from './ConfirmModal'
import useConfirmSwap from '../hooks/useConfirmeSwap'
import getButtonState from '../utils/getButtonState'
import { IValidatedSwap } from '../types/IValidatedSwap'
import useAuth from '../hooks/useAuth'

export default function SwapAction() {
    const { settings } = useAuth()
    const { source, target } = useInputs()
    const { isPriceLoading } = usePrice(settings?.tokenSymbol!)
    const address = useTonAddress()
    const { open } = useTonConnectModal()
    const [modal, setModal] = useState(false)
    const { data, mutate, isPending } = useConfirmSwap()
    const [confirmedData, setConfirmedData] = useState<IValidatedSwap | null>(null)

    useEffect(() => {
        if (data) {
            setConfirmedData(data)
            setModal(true)
        }
    }, [data])

    function swapConfirm() {
        mutate({
            address,
            source: Number(source),
            target: Number(target),
            route: settings?.tokenSymbol!
        })
    }

    return (
        <div className={styles.swapAction}>
            {address ?
                <Button content={getButtonState(source).content} isLoading={isPriceLoading || isPending}
                    disabled={getButtonState(source).disabled} onClick={swapConfirm} /> :
                <Button content='Connect wallet' isLoading={isPriceLoading} onClick={open} />
            }
            {modal && <ConfirmModal data={confirmedData!} setModalStatus={setModal} />}
        </div>
    )
}
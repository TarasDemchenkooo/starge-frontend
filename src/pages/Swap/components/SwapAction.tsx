import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import styles from './SwapAction.module.scss'
import Button from '../../../shared/components/Button/components/Button'
import usePrice from '../hooks/usePrice'
import useInputs from '../hooks/useInputs'
import { useState } from 'react'
import ConfirmModal from './ConfirmModal'
import getButtonState from '../utils/getButtonState'
import { IConfirmedSwap } from '../types/IConfirmedSwap'
import { useAsset } from '../hooks/useTargetAsset'

export default function SwapAction() {
    const { source, target } = useInputs()
    const asset = useAsset(state => state.asset)
    const { isPriceLoading } = usePrice(asset)
    const address = useTonAddress()
    const { open } = useTonConnectModal()
    const [modal, setModal] = useState(false)
    const [confirmedData, setConfirmedData] = useState<IConfirmedSwap | null>(null)

    function swapConfirm() {
        setConfirmedData({
            address,
            source: Number(source),
            target: Number(target),
            route: asset
        })

        setModal(true)
    }

    return (
        <div className={styles.swapAction}>
            {address ?
                <Button content={getButtonState(source).content} isLoading={isPriceLoading}
                    disabled={getButtonState(source).disabled} onClick={swapConfirm} /> :
                <Button content='Connect wallet' isLoading={isPriceLoading} onClick={open} />
            }
            {modal && <ConfirmModal data={confirmedData!} setModalStatus={setModal} />}
        </div>
    )
}
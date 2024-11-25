import styles from './TargetAsset.module.scss'
import WalletIcon from '../../../assets/svg/wallet.svg?react'
import jettons from '../../../../public/jettons/jettons.json'
import { useEffect, useState } from 'react'
import AssetsModal from './AssetsModal'
import useBalance from '../hooks/useBalance'
import formatDecimal from '../utils/formatDecimal'
import SwapInfo from './SwapInfo'
import SwapInput from './SwapInput'
import useAuth from '../hooks/useAuth'
import useVibrate from '../../../shared/hooks/useVibrate'

export default function TargetAsset() {
    const { settings } = useAuth()
    const { balance, isBalanceLoading } = useBalance(settings?.tokenSymbol!)
    const [stickyBalance, setStickyBalance] = useState(balance || 0)
    const [modalStatus, setModalStatus] = useState(false)
    const jetton = jettons.jettons.find(jetton => jetton.symbol === settings?.tokenSymbol)!
    const { vibrate } = useVibrate()

    useEffect(() => {
        if (!isBalanceLoading && balance !== undefined) {
            setStickyBalance(balance)
        }
    }, [isBalanceLoading,
        settings?.tokenSymbol,
    ])

    function openModal() {
        vibrate()
        setModalStatus(true)
    }

    return (
        <div className={styles.targetAsset}>
            <div className={styles.targetAssetMain}>
                <div className={styles.targetAssetTop}>
                    <h4>You receive</h4>
                    <div>
                        <WalletIcon />
                        <span>{formatDecimal(stickyBalance!)}</span>
                    </div>
                </div>
                <div className={styles.targetAssetMiddle}>
                    <button onClick={openModal}>
                        <img src={jetton.icon} />
                        <span>{jetton.symbol}</span>
                        <div></div>
                    </button>
                    <SwapInput targetAsset={settings?.tokenSymbol!} inputType='target' />
                </div>
            </div>
            <SwapInfo targetAsset={settings?.tokenSymbol!} />
            {modalStatus && <AssetsModal targetAsset={settings?.tokenSymbol!} setModalStatus={setModalStatus} />}
        </div>
    )
}
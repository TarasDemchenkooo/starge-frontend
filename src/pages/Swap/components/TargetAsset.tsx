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
import { IValidatedSwap } from '../types/IValidatedSwap'

export default function TargetAsset({ confirmedData }: { confirmedData?: IValidatedSwap }) {
    const { settings } = useAuth()
    const { balance, isBalanceLoading } = useBalance(settings?.tokenSymbol!)
    const [stickyBalance, setStickyBalance] = useState(balance || 0)
    const [modalStatus, setModalStatus] = useState(false)
    const jetton = jettons.jettons.find(jetton => {
        const searchKey = confirmedData?.tokenSymbol || settings?.tokenSymbol
        return jetton.symbol === searchKey
    })!
    const { vibrate } = useVibrate()

    useEffect(() => {
        if (!isBalanceLoading && balance !== undefined) {
            setStickyBalance(balance)
        }
    }, [isBalanceLoading,
        settings?.tokenSymbol,
    ])

    function openModal() {
        if (!confirmedData) {
            vibrate()
            setModalStatus(true)
        }
    }

    return (
        <div className={styles.targetAsset}>
            <div className={styles.targetAssetMain}>
                <div className={styles.targetAssetTop}>
                    <h4>You receive</h4>
                    {!confirmedData &&
                        <div>
                            <WalletIcon />
                            <span>{formatDecimal(stickyBalance!)}</span>
                        </div>
                    }
                </div>
                <div className={styles.targetAssetMiddle}>
                    <button onClick={openModal}>
                        <img src={jetton.icon} />
                        <span>{jetton.symbol}</span>
                        {!confirmedData && <div></div>}
                    </button>
                    <SwapInput targetAsset={settings?.tokenSymbol!} inputType='target'
                        confirmedAmount={confirmedData?.tokenAmount} />
                </div>
            </div>
            <SwapInfo targetAsset={settings?.tokenSymbol!} confirmedData={confirmedData} />
            {modalStatus && <AssetsModal targetAsset={settings?.tokenSymbol!} setModalStatus={setModalStatus} />}
        </div>
    )
}
import styles from './TargetAsset.module.scss'
import WalletIcon from '../../../assets/svg/wallet.svg?react'
import jettons from '../../../../public/jettons/jettons.json'
import { useEffect, useState } from 'react'
import AssetsModal from './AssetsModal'
import useBalance from '../hooks/useBalance'
import formatDecimal from '../utils/formatDecimal'
import SwapInfo from './SwapInfo'
import SwapInput from './SwapInput'
import { useTonAddress } from '@tonconnect/ui-react'
import { IConfirmedSwap } from '../types/IConfirmedSwap'
import { useAsset } from '../hooks/useTargetAsset'
import { vibrate } from '../../../shared/utils/vibrate'

export default function TargetAsset({ confirmedData }: { confirmedData?: IConfirmedSwap }) {
    const address = useTonAddress()
    const asset = useAsset(state => state.asset)
    const { balance, isBalanceLoading, isBalanceError } = useBalance(asset)
    const [stickyBalance, setStickyBalance] = useState(balance || 0)
    const [modalStatus, setModalStatus] = useState(false)
    const jetton = jettons.jettons.find(jetton => jetton.symbol === asset)!

    useEffect(() => {
        if (balance) setStickyBalance(balance)
        else if (!address || isBalanceError || isBalanceLoading) setStickyBalance(0)
    }, [isBalanceLoading, asset, address])

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
                    <SwapInput targetAsset={asset} inputType='target'
                        confirmedAmount={confirmedData?.target} />
                </div>
            </div>
            <SwapInfo targetAsset={asset} confirmedData={confirmedData} />
            {modalStatus && <AssetsModal targetAsset={asset} setModalStatus={setModalStatus} />}
        </div>
    )
}
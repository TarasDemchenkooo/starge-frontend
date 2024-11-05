import styles from './TargetAsset.module.scss'
import WalletIcon from '../../../assets/svg/wallet.svg?react'
import jettons from '../../../../public/jettons/jettons.json'
import { useEffect, useState } from 'react'
import AssetsModal from './AssetsModal'
import useTargetAsset from '../hooks/useTargetAsset'
import useBalance from '../hooks/useBalance'
import formatDecimal from '../utils/formatDecimal'
import TargetInput from './TargetInput'
import SwapInfo from './SwapInfo'

export default function TargetAsset() {
    const { targetAsset } = useTargetAsset()
    const { balance, isBalanceLoading } = useBalance(targetAsset)
    const [stickyBalance, setStickyBalance] = useState(balance || 0)
    const [modalStatus, setModalStatus] = useState(false)
    const jetton = jettons.jettons.find(jetton => jetton.symbol === targetAsset)!

    useEffect(() => {
        if (!isBalanceLoading && balance !== undefined) {
            setStickyBalance(balance!)
        }
    }, [isBalanceLoading])

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
                    <div onClick={() => setModalStatus(true)}>
                        <img src={jetton.icon} />
                        <span>{jetton.symbol}</span>
                        <div></div>
                    </div>
                    <TargetInput targetAsset={targetAsset!} />
                </div>
            </div>
            <SwapInfo targetAsset={targetAsset!} />
            {modalStatus && <AssetsModal targetAsset={targetAsset!} setModalStatus={setModalStatus} />}
        </div>
    )
}
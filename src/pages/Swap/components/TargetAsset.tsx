import styles from './TargetAsset.module.scss'
import WalletIcon from '../../../assets/svg/wallet.svg?react'
import jettons from '../../../../public/jettons/jettons.json'
import { useState } from 'react'
import AssetsModal from './AssetsModal'
import useTargetAsset from '../hooks/useTargetAsset'
import usePrice from '../hooks/usePrice'
import calculatePrice from '../utils/calculatePrice'
import useBalance from '../hooks/useBalance'
import formatBalance from '../utils/formatBalance'

export default function TargetAsset() {
    const { targetAsset } = useTargetAsset()
    const { price, isPriceLoading } = usePrice(targetAsset)
    const { balance, isBalanceLoading } = useBalance(targetAsset)
    const jetton = jettons.jettons.find(jetton => jetton.symbol === targetAsset)!
    const [modalStatus, setModalStatus] = useState(false)

    return (
        <div className={styles.targetAsset}>
            <div className={styles.targetAssetTop}>
                <h4>You receive</h4>
                <div>
                    <WalletIcon />
                    <span>{isBalanceLoading ? 0 : formatBalance(balance)}</span>
                </div>
            </div>
            <div className={styles.targetAssetMiddle}>
                <div onClick={() => setModalStatus(true)}>
                    <img src={jetton.icon} />
                    <span>{jetton.symbol}</span>
                    <div></div>
                </div>
                {/* input */}
            </div>
            <div className={styles.targetAssetBottom}>
                <span className={styles.targetAssetBottomPrice}>
                    100 STARS ≈ {calculatePrice(price!)} {jetton.symbol}
                </span>
                <span className={styles.targetAssetBottomQuote}>$0</span>
            </div>
            {modalStatus && <AssetsModal targetAsset={targetAsset!} setModalStatus={setModalStatus} />}
        </div>
    )
}
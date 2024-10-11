import styles from './TargetAsset.module.scss'
import WalletIcon from '../../../assets/svg/wallet.svg?react'
import jettons from '../../../../public/jettons/jettons.json'
import { useState } from 'react'
import AssetsModal from './AssetsModal'

export default function TargetAsset({ targetAsset }: { targetAsset: string }) {
    const jetton = jettons.jettons.find(jetton => jetton.symbol === targetAsset)!
    const [modalStatus, setModalStatus] = useState(false)

    return (
        <div className={styles.targetAsset}>
            <div className={styles.targetAssetTop}>
                <h4>You receive</h4>
                <div>
                    <WalletIcon />
                    <span>{'0'}</span>
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
                    1 {jetton.symbol} ≈ {'0'} USDT
                </span>
                <span className={styles.targetAssetBottomQuote}>$0</span>
            </div>
            {modalStatus && <AssetsModal setModalStatus={setModalStatus} />}
        </div>
    )
}
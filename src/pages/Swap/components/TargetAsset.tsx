import styles from './TargetAsset.module.scss'
import WalletIcon from '../../../assets/svg/wallet.svg?react'
import useTargetCurrency from '../hooks/useTargetCurrency'

export default function TargetAsset() {
    const { currency } = useTargetCurrency()

    return (
        <div className={styles.targetAsset}>
            <div className={styles.targetAssetTop}>
                <h4>You receive</h4>
                <div>
                    <WalletIcon />
                    <span>{currency.balance.toFixed(2)}</span>
                </div>
            </div>
            <div className={styles.targetAssetMiddle}>
                <div>
                    {currency.icon}
                    <span>{currency.symbol}</span>
                </div>
                {/* input */}
            </div>
            <div className={styles.targetAssetBottom}>
                <span className={styles.targetAssetBottomPrice}>
                    1 {currency.symbol} ≈ {currency.price.toFixed(2)} USDT
                </span>
                <span className={styles.targetAssetBottomQuote}>$0</span>
            </div>
        </div>
    )
}
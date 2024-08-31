import styles from './Swap.module.scss'
import TonLogo from '../../assets/svg/ton-logo.svg?react'
import StarsLogo from '../../assets/svg/stars-logo.svg?react'
import WalletIcon from '../../assets/svg/wallet.svg?react'
import ArrowIcon from '../../assets/svg/arrow.svg?react'
import hex2rgba from 'hex2rgba'

interface ISwap {
    theme: Telegram['WebApp']['themeParams']
}

export default function Swap({ theme }: ISwap) {
    return (
        <>
            <div className={styles.swap}>
                <div className={styles.swapAsset}>
                    <div className={styles.info}>
                        <span>You send</span>
                        <div>
                            <WalletIcon fill={theme.hint_color} />
                            <span>0</span>
                        </div>
                    </div>
                    <div className={styles.data}>
                        <div>
                            <StarsLogo />
                            <span>STARS</span>
                        </div>
                        <input type="number" placeholder="0.00" />
                    </div>
                    <span className={styles.quote}>$0</span>
                </div>
                <div className={styles.separator}>
                    <div>
                        <div style={{ backgroundColor: hex2rgba(theme.link_color!, 0.1) }}>
                            <ArrowIcon fill={theme.link_color} />
                        </div>
                    </div>
                </div>
                <div className={styles.swapAsset}>
                    <div className={styles.info}>
                        <span>You receive</span>
                        <div>
                            <WalletIcon fill={theme.hint_color} />
                            <span>0</span>
                        </div>
                    </div>
                    <div className={styles.data}>
                        <div>
                            <TonLogo />
                            <span>TON</span>
                        </div>
                        <input type="number" placeholder="0.00" />
                    </div>
                    <span className={styles.quote}>$0</span>
                </div>
            </div>
            <button className={styles.btn}>Enter an amount</button>
        </>
    )
}
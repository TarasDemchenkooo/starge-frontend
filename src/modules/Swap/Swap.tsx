import ConnectButtonUI from '../../ui/Buttons/ConnectButton'
import SwapButton from '../../ui/Buttons/SwapButton'
import Ton from '../Ton/TonClient'
import hex2rgba from 'hex2rgba'
import { useTonWallet } from '@tonconnect/ui-react'
import { useEffect, useState } from 'react'
import { Address } from 'ton-core'
import styles from './Swap.module.scss'
import TonLogo from '../../assets/svg/ton-logo.svg?react'
import StarsLogo from '../../assets/svg/stars-logo.svg?react'
import WalletIcon from '../../assets/svg/wallet.svg?react'
import ArrowIcon from '../../assets/svg/arrow.svg?react'

export default function Swap() {
    const theme = Telegram.WebApp.themeParams
    const wallet = useTonWallet()
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        if (wallet) {
            Ton.getClient().getBalance(wallet.account.address as unknown as Address)
                .then(res => setBalance(Number(res) / 10 ** 9))
        }
    }, [wallet])

    return (
        <>
            <div className={styles.swap}>
                <div className={styles.swapAsset}>
                    <div className={styles.swapAssetInfo}>
                        <span>You send</span>
                        <div>
                            <WalletIcon fill={theme.hint_color} />
                            <span>0</span>
                        </div>
                    </div>
                    <div className={styles.swapAssetData}>
                        <div>
                            <StarsLogo />
                            <span>STARS</span>
                        </div>
                        <input type="number" placeholder="0.00" />
                    </div>
                    <span className={styles.swapAssetQuote}>$0</span>
                </div>
                <div className={styles.swapSeparator}>
                    <div>
                        <div style={{ backgroundColor: hex2rgba(theme.link_color!, 0.1) }}>
                            <ArrowIcon fill={theme.link_color} />
                        </div>
                    </div>
                </div>
                <div className={styles.swapAsset}>
                    <div className={styles.swapAssetInfo}>
                        <span>You receive</span>
                        <div>
                            <WalletIcon fill={theme.hint_color} />
                            <span>{balance}</span>
                        </div>
                    </div>
                    <div className={styles.swapAssetData}>
                        <div>
                            <TonLogo />
                            <span>TON</span>
                        </div>
                        <input type="number" placeholder="0.00" />
                    </div>
                    <span className={styles.swapAssetQuote}>$0</span>
                </div>
                {wallet ?
                    <SwapButton className={styles.swapBtn} /> :
                    <ConnectButtonUI className={styles.swapConnect} />}
            </div>
        </>
    )
}
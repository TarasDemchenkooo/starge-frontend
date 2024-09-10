import ConnectButtonUI from '../../ui/Buttons/ConnectButton'
import SwapButton from '../../ui/Buttons/SwapButton'
import hex2rgba from 'hex2rgba'
import { useTonWallet } from '@tonconnect/ui-react'
import { useCallback, useEffect, useState } from 'react'
import { Address } from 'ton-core'
import styles from './Swap.module.scss'
import TonLogo from '../../assets/svg/ton-logo.svg?react'
import StarsLogo from '../../assets/svg/stars-logo.svg?react'
import WalletIcon from '../../assets/svg/wallet.svg?react'
import ArrowIcon from '../../assets/svg/arrow.svg?react'
import StarsInput from '../../ui/Inputs/StarsInput'
import TonInput from '../../ui/Inputs/TonInput'
import WSTon from '../Ton/WSClient'
import Ton from '../Ton/TonClient'
import debounce from '../../utils/debounce'
import { setForStars, setForTon } from './utils/stateSetters'

export default function Swap() {
    const theme = Telegram.WebApp.themeParams
    const wallet = useTonWallet()
    const [stars, setStars] = useState('')
    const [ton, setTon] = useState('')
    const [starsQuote, setStarsQuote] = useState('0')
    const [tonQuote, setTonQuote] = useState('0')
    const [starsChecker, setStarsChecker] = useState(true)
    const [tonChecker, setTonChecker] = useState(true)
    const [price, setPrice] = useState(0)
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        if (wallet && !balance) {
            Ton.getBalance(wallet.account.address as unknown as Address)
                .then(balance => setBalance(balance))
        }

        WSTon.getPrice().then(price => setPrice(price))
    }, [wallet])

    const setFromStars = useCallback(debounce((value: string) => {
        setForStars({ value, setStarsQuote, setTon, setTonQuote, setStarsChecker, price })
    }, 300), [price])

    const setFromTon = useCallback(debounce((value: string) => {
        setForTon({ value, setStarsQuote, setStars, setTonQuote, setTonChecker, price })
    }, 300), [price])

    return (
        <>
            <div className={styles.swap}>
                <div className={styles.swapAsset}>
                    <div className={styles.swapAssetInfo}>
                        <span>You send</span>
                        {/* <div>
                            <WalletIcon fill={theme.hint_color} />
                            <span>0</span>
                        </div> */}
                        {/* <div className={styles.swapAssetInfoFast}>
                            <div>100</div>
                            <div>500</div>
                            <div>2000</div>
                        </div> */}
                    </div>
                    <div className={styles.swapAssetData}>
                        <div>
                            <StarsLogo />
                            <span>STARS</span>
                        </div>
                        <StarsInput checker={starsChecker} setQuote={setFromStars} stars={stars} setStars={setStars} />
                    </div>
                    {starsChecker ?
                        <span className={styles.swapAssetSubQuote}>${starsQuote}</span> :
                        <span className={styles.swapAssetSubWarning}>At least 100 Stars</span>
                    }
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
                        <TonInput checker={tonChecker} setQuote={setFromTon} ton={ton} setTon={setTon} />
                    </div>
                    <div className={styles.swapAssetSub}>
                        {price ?
                        <span className={styles.swapAssetSubPrice}>1 TON ≈ {Number(price).toFixed(2)} USDT</span>
                        : <span className={styles.swapAssetSubPriceLoader}></span>
                        }
                        {tonChecker ?
                            <span className={styles.swapAssetSubQuote}>${tonQuote}</span> :
                            <span className={styles.swapAssetSubWarning}>At least 0.25 TON</span>
                        }
                    </div>
                </div>
                {wallet ?
                <SwapButton isActive={stars !== '' && ton !== '' && starsChecker && tonChecker}
                        className={styles.swapBtn} /> :
                    <ConnectButtonUI className={styles.swapConnect} />}
            </div>
        </>
    )
}
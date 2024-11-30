import styles from './SourceAsset.module.scss'
import StarsIcon from '../../../assets/svg/stars-logo.svg?react'
import SwapInput from './SwapInput'
import useAuth from '../hooks/useAuth'

export default function SourceAsset({ confirmedAmount }: { confirmedAmount?: number }) {
    const { settings } = useAuth()

    return (
        <div className={styles.sourceAsset}>
            <h4>You send</h4>
            <div>
                <div>
                    <StarsIcon />
                    <span>Stars</span>
                </div>
                <SwapInput targetAsset={settings?.tokenSymbol!} inputType='source'
                    confirmedAmount={confirmedAmount} />
            </div>
        </div>
    )
}
import styles from './SourceAsset.module.scss'
import StarsIcon from '../../../assets/svg/stars-logo.svg?react'
import SwapInput from './SwapInput'
import { useAsset } from '../hooks/useTargetAsset'

export default function SourceAsset({ confirmedAmount }: { confirmedAmount?: number }) {
    const asset = useAsset(state => state.asset)

    return (
        <div className={styles.sourceAsset}>
            <h4>You send</h4>
            <div>
                <div>
                    <StarsIcon />
                    <span>Stars</span>
                </div>
                <SwapInput targetAsset={asset} inputType='source' confirmedAmount={confirmedAmount} />
            </div>
        </div>
    )
}
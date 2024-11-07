import styles from './SourceAsset.module.scss'
import StarsIcon from '../../../assets/svg/stars-logo.svg?react'
import useTargetAsset from '../hooks/useTargetAsset'
import SwapInput from './SwapInput'

export default function SourceAsset() {
    const { targetAsset } = useTargetAsset()

    return (
        <div className={styles.sourceAsset}>
            <h4>You send</h4>
            <div>
                <div>
                    <StarsIcon />
                    <span>Stars</span>
                </div>
                <SwapInput targetAsset={targetAsset!} inputType='source'/>
            </div>
        </div>
    )
}
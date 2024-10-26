import styles from './SourceAsset.module.scss'
import StarsIcon from '../../../assets/svg/stars-logo.svg?react'
import SourceInput from './SourceInput'
import useTargetAsset from '../hooks/useTargetAsset'

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
                <SourceInput targetAsset={targetAsset!} />
            </div>
        </div>
    )
}
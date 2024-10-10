import styles from './SourceAsset.module.scss'
import StarsIcon from '../../../assets/svg/stars-logo.svg?react'

export default function SourceAsset() {
    return (
        <div className={styles.sourceAsset}>
            <h4>You send</h4>
            <div>
                <div>
                    <StarsIcon />
                    <span>Stars</span>
                </div>
                {/* input */}
            </div>
            <span>$0</span>
        </div>
    )
}
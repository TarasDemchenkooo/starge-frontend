import classNames from "classnames"
import Ripple from "../../../shared/components/Ripple/components/Ripple"
import useJettonBalance from "../hooks/useJettonBalance"
import { IModalAsset } from "../types/IModalAsset"
import styles from './ModalAsset.module.scss'

export default function ModalAsset(asset: IModalAsset) {
    const { balance, isLoading } = useJettonBalance(asset.ca)

    const radioClassnames = classNames({
        [styles.modalAssetRadio]: true,
        [styles.modalAssetRadioActive]: asset.activeAsset === asset.symbol
    })

    function setActiveAsset() {
        asset.setActiveAsset(asset.symbol)
    }

    return (
        <Ripple className={styles.modalAsset} onClick={setActiveAsset}
        holdTime={200} inDuration="0.8s">
            <img src={asset.icon} />
            <div>
                <div className={styles.modalAssetData}>
                    <h4>{asset.name}</h4>
                    <p>{balance} {asset.symbol}</p>
                </div>
                <div className={radioClassnames}></div>
            </div>
        </Ripple>
    )
}
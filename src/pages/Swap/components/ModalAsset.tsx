import classNames from "classnames"
import Ripple from "../../../shared/components/Ripple/components/Ripple"
import { IModalAsset } from "../types/IModalAsset"
import styles from './ModalAsset.module.scss'
import useBalance from "../hooks/useBalance"
import formatDecimal from "../utils/formatDecimal"
import { useTonAddress } from "@tonconnect/ui-react"
import { vibrate } from "../../../shared/utils/vibrate"

export default function ModalAsset(asset: IModalAsset) {
    const address = useTonAddress()
    const { balance } = useBalance(asset.symbol)

    const radioClassnames = classNames({
        [styles.modalAssetRadio]: true,
        [styles.modalAssetRadioActive]: asset.activeAsset === asset.symbol
    })

    function setActiveAsset() {
        asset.setActiveAsset(asset.symbol)
        vibrate()
    }

    return (
        <Ripple className={styles.modalAsset} onClick={setActiveAsset}
            holdTime={200} inDuration="0.8s">
            <img src={asset.icon} />
            <div>
                <div className={styles.modalAssetData}>
                    <h4>{asset.name}</h4>
                    <p>{address ? !balance ? 0 : formatDecimal(balance!) : 0} {asset.symbol}</p>
                </div>
                <div className={radioClassnames}></div>
            </div>
        </Ripple>
    )
}
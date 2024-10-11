import Ripple from "../../../shared/components/Ripple/components/Ripple"
import useJettonBalance from "../hooks/useJettonBalance"
import { IModalAsset } from "../types/IModalAsset"
import styles from './ModalAsset.module.scss'

export default function ModalAsset({ icon, name, symbol, ca, address }: IModalAsset) {
    const { balance, isLoading } = useJettonBalance(address, ca)

    return (
        <Ripple color={Telegram.WebApp.themeParams.hint_color!}
            className={styles.modalAsset} onClick={() => { }}>
            <img src={icon} />
            <div>
                <div className={styles.modalAssetData}>
                    <h4>{name}</h4>
                    <p>{balance ?? 0} {symbol}</p>
                </div>
                <div className={styles.modalAssetRadio}>

                </div>
            </div>
        </Ripple>
    )
}
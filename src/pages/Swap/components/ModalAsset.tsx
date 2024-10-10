import Ripple from "../../../shared/components/Ripple/components/Ripple"
import styles from './ModalAsset.module.scss'

export default function ModalAsset() {
    return (
        <Ripple color={Telegram.WebApp.themeParams.hint_color!}
        className={styles.modalAsset} onClick={() => {}}>
            {icon}
            <div>
                <div>
                    <h4>{name}</h4>
                    <p>{balance} {symbol}</p>
                </div>
            </div>
        </Ripple>
    )
}
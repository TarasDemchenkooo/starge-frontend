import { TonConnectButton } from "@tonconnect/ui-react"
import styles from './ConnectButton.module.scss'

interface IConnectButtonUI {
    className: string
}

export default function TonConnectButtonUI({ className }: IConnectButtonUI) {
    return (
        <TonConnectButton className={styles.btn + ' ' + className} />
    )
}
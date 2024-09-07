import styles from './DisconnectButton.module.scss'
import TonButtonIcon from '../../assets/svg/ton-button.svg?react'

interface IDisconnectButton {
    className: string
    address: string
    disconnect: () => Promise<void>
}

export default function DisconnectButton({ className, address, disconnect }: IDisconnectButton) {
    return (
        <button onClick={disconnect} className={styles.disconnect + ' ' + className}>
            <span>
                <TonButtonIcon />
                Disconnect
            </span>
            <span>
                ({address.slice(0, 4)}...{address.slice(-4)})
            </span>
        </button>
    )
}
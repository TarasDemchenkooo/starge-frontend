import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import styles from './SettingsUser.module.scss'
import { ISettingsUser } from '../types/ISettingsUser'
import Button from '../../../shared/components/Button/components/Button'
import TonButtonIcon from '../../../assets/svg/ton-button.svg?react'
import { useState } from 'react'
import SettingsModal from './SettingsModal'

export default function SettingsUser({ user, avatar }: ISettingsUser) {
    const [modalStatus, setModalStatus] = useState(false)
    const address = useTonAddress()
    const { open } = useTonConnectModal()

    function openDisconnectModal() {
        setModalStatus(true)
    }

    return (
        <div className={styles.settingsUser}>
            {avatar ?
                <img src={avatar} /> :
                <div>{user.first_name[0]}</div>
            }
            <h3>{`${user.first_name} ${user.last_name}`.trim()}</h3>
            {user.username && <span>@{user.username}</span>}
            {address ?
                <Button className={styles.settingsUserWalletDisconnect} onClick={openDisconnectModal}>
                    <TonButtonIcon />
                    Disconnect wallet
                </Button> :
                <Button className={styles.settingsUserWalletConnect} onClick={open}>
                    <TonButtonIcon />
                    Connect wallet
                </Button>
            }
            {modalStatus && <SettingsModal address={address} setModalStatus={setModalStatus}/>}
        </div>
    )
}
import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import styles from './SettingsUser.module.scss'
import Button from '../../../shared/components/Button/components/Button'
import { useState } from 'react'
import SettingsModal from './SettingsModal'

export default function SettingsUser() {
    const user = Telegram.WebApp.initDataUnsafe.user!
    const [modalStatus, setModalStatus] = useState(false)
    const address = useTonAddress()
    const { open } = useTonConnectModal()

    function openDisconnectModal() {
        setModalStatus(true)
    }

    return (
        <div className={styles.settingsUser}>
            {user.photo_url ?
                <img src={user.photo_url} /> :
                <div>{user.first_name[0]}</div>
            }
            <h3>{`${user.first_name} ${user.last_name}`.trim()}</h3>
            {user.username && <span>@{user.username}</span>}
            {address ?
                <Button content='Disconnect wallet' className={styles.settingsUserWalletDisconnect} onClick={openDisconnectModal} /> :
                <Button content='Connect wallet' className={styles.settingsUserWalletConnect} onClick={open} />
            }
            {modalStatus && <SettingsModal address={address} setModalStatus={setModalStatus} />}
        </div>
    )
}
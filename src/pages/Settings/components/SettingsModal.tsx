import styles from './SettingsModal.module.scss'
import Modal from '../../../shared/components/Modal/components/Modal'
import { useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react'
import Button from '../../../shared/components/Button/components/Button'
import { ISettingsModal } from '../types/ISettingsModal'
import TruncatedText from '../../../shared/components/TruncatedText/components/TruncatedText'
import { useState } from 'react'
import Ripple from '../../../shared/components/Ripple/components/Ripple'

export default function SettingsModal({ address, setModalStatus }: ISettingsModal) {
    const tonConnect = useTonConnectUI()
    const { open } = useTonConnectModal()
    const [closeRequest, setCloseRequest] = useState(false)

    function disconnect() {
        tonConnect[0].disconnect()
        setCloseRequest(true)
        setTimeout(() => {
            open()
        }, 500)
    }

    return (
        <Modal closeRequest={closeRequest} setModalStatus={setModalStatus}>
            <div className={styles.settingsModal}>
                <h3 className={styles.settingsModalTitle}>Confirm wallet disconnect</h3>
                <p className={styles.settingsModalDescr}>
                    Are you sure you want to disconnect your TON wallet? You won't be able to swap stars without a connected wallet.
                </p>
                <Ripple color={Telegram.WebApp.themeParams.hint_color!}
                    className={styles.settingsModalWallet}
                    onClick={() => {}}>
                    <h5>Connected wallet</h5>
                    <TruncatedText text={address} className={styles.settingsModalWalletAddress} />
                </Ripple>
                <Button content='Confirm' className={styles.settingsModalConfirm} onClick={disconnect}/>
            </div>
        </Modal>
    )
}
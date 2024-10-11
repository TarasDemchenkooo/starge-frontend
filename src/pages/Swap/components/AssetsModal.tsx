import Modal from "../../../shared/components/Modal/components/Modal"
import styles from './AssetsModal.module.scss'
import jettons from '../../../../public/jettons/jettons.json'
import ModalAsset from "./ModalAsset"
import { useTonAddress } from "@tonconnect/ui-react"
import Button from "../../../shared/components/Button/components/Button"

export default function AssetsModal({ setModalStatus }: { setModalStatus: (val: boolean) => void }) {
    const address = useTonAddress()

    return (
        <Modal setModalStatus={setModalStatus}>
            <div className={styles.assetsModal}>
                <h3>Select crypto</h3>
                <div>
                    {jettons.jettons.map(jetton =>
                        <ModalAsset {...jetton} address={address} />)
                    }
                </div>
                <Button onClick={() => { }}>
                    Confirm
                </Button>
            </div>
        </Modal>
    )
}
import Modal from "../../../shared/components/Modal/components/Modal"
import styles from './AssetsModal.module.scss'
import jettons from '../../../../public/jettons/jettons.json'
import ModalAsset from "./ModalAsset"
import { useTonAddress } from "@tonconnect/ui-react"
import Button from "../../../shared/components/Button/components/Button"
import { useState } from "react"
import { IAssetsModal } from "../types/IAssetsModal"
import { Assets } from "../../../shared/types/Assets"
import useInputs from "../hooks/useInputs"
import { useAsset } from "../hooks/useTargetAsset"

export default function AssetsModal({ setModalStatus }: IAssetsModal) {
    const address = useTonAddress()
    const asset = useAsset(state => state.asset)
    const updateAsset = useAsset(state => state.updateAsset)
    const { clearInputs } = useInputs()
    const [activeAsset, setActiveAsset] = useState(asset)
    const [closeRequest, setCloseRequest] = useState(false)

    function updateTargetAsset() {
        if (asset !== activeAsset) {
            updateAsset(activeAsset)
            setCloseRequest(true)
            clearInputs()
        } else {
            setCloseRequest(true)
        }
    }

    return (
        <Modal closeRequest={closeRequest} setModalStatus={setModalStatus}>
            <div className={styles.assetsModal}>
                <h3>Select crypto</h3>
                <div>
                    {jettons.jettons.map(jetton =>
                        <ModalAsset {...jetton} symbol={jetton.symbol as Assets} address={address}
                            activeAsset={activeAsset} setActiveAsset={setActiveAsset} />)
                    }
                </div>
                <Button content='Confirm' onClick={updateTargetAsset} />
            </div>
        </Modal>
    )
}
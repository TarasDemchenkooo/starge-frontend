import Modal from "../../../shared/components/Modal/components/Modal"
import styles from './AssetsModal.module.scss'
import jettons from '../../../../public/jettons/jettons.json'
import ModalAsset from "./ModalAsset"
import { useTonAddress } from "@tonconnect/ui-react"
import Button from "../../../shared/components/Button/components/Button"
import { useEffect, useState } from "react"
import { IAssetsModal } from "../types/IAssetsModal"
import useMutateSettings from "../hooks/useMutateSettings"
import useTargetAsset from "../hooks/useTargetAsset"
import { Assets } from "../../../shared/types/Assets"
import useInputs from "../hooks/useInputs"

export default function AssetsModal({ setModalStatus }: IAssetsModal) {
    const address = useTonAddress()
    const { clearInputs } = useInputs()
    const { targetAsset, update } = useTargetAsset()
    const [activeAsset, setActiveAsset] = useState(targetAsset!)
    const [closeRequest, setCloseRequest] = useState(false)
    const { mutate, isPending, isSuccess } = useMutateSettings()

    useEffect(() => {
        if (isSuccess) {
            update!()
            setCloseRequest(true)
            clearInputs()
        }
    }, [isSuccess])

    function updateTargetAsset() {
        if (targetAsset !== activeAsset) {
            mutate({ target_asset: activeAsset })
        } else {
            update()
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
                <Button content='Confirm' isLoading={isPending} onClick={updateTargetAsset}/>
            </div>
        </Modal>
    )
}
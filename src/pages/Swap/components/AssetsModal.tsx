import Modal from "../../../shared/components/Modal/components/Modal"
import styles from './AssetsModal.module.scss'

export default function AssetsModal() {
    return (
        <Modal>
            <div className={styles.assetsModal}>
                <h4>Select crypto</h4>
                <div></div>
            </div>
        </Modal>
    )
}
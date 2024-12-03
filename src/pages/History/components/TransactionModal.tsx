import Modal from "../../../shared/components/Modal/components/Modal"
import { ITransactionModal } from "../types/ITransactionModal"
import styles from './TransactionModal.module.scss'
import TonIcon from '../../../assets/svg/ton-logo.svg?react'
import StarsIcon from '../../../assets/svg/stars-logo.svg?react'
import formatDate from "../utils/formatDate"
//import formatIntegerWithCommas from "../../../shared/utils/formatInteger"

export default function TransactionModal({ transaction, setModalStatus }: ITransactionModal) {

    return (
        <Modal setModalStatus={setModalStatus}>
            <div className={styles.transactionModal}>
                <div className={styles.transactionModalIcons}>
                    <div>
                        <StarsIcon />
                    </div>
                    <div>
                        <TonIcon />
                    </div>
                </div>
                <div className={styles.transactionModalData}>
                    {/* <span className={styles.transactionModalDataFrom}>
                        -&thinsp;{formatIntegerWithCommas(transaction.from.amount)} {transaction.from.symbol}
                    </span> */}
                    <span className={styles.transactionModalDataTo}>
                        +&thinsp;{transaction.to.amount} {transaction.to.symbol}
                    </span>
                    <span className={styles.transactionModalDataQuote}>
                        $&thinsp;116.82
                    </span>
                    <span className={styles.transactionModalDataDate}>
                        Swapped on {formatDate(transaction.timestamp, false)}
                    </span>
                </div>
            </div>
        </Modal>
    )
}
import Modal from "../../../shared/components/Modal/components/Modal"
import { ITransactionModal } from "../types/ITransactionModal"
import styles from './TransactionModal.module.scss'
import StarsIcon from '../../../assets/svg/stars-logo.svg?react'
import formatDate from "../utils/formatDate"
import formatSourceInput from "../../Swap/utils/formatSourceInput"
import jettons from '../../../../public/jettons/jettons.json'
import formatTargetInput from "../../Swap/utils/formatTargetInput"
import toast from "react-hot-toast"
import Ripple from "../../../shared/components/Ripple/components/Ripple"
import TruncatedText from "../../../shared/components/TruncatedText/components/TruncatedText"
import WorldWideIcon from '../../../assets/svg/world-wide.svg?react'

export default function TransactionModal({ transaction, setModalStatus }: ITransactionModal) {
    const jetton = jettons.jettons.find(jetton => jetton.symbol === transaction.tokenSymbol)

    function handleCopy(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            toast('Copied', { id: text })
        })
    }

    function openViewer() {
        Telegram.WebApp.openLink(`https://tonviewer.com/transaction/${transaction.hash}`)
    }

    return (
        <Modal setModalStatus={setModalStatus}>
            <div className={styles.transactionModal}>
                <div className={styles.transactionModalIcons}>
                    <div>
                        <StarsIcon />
                    </div>
                    <div>
                        <img src={jetton?.icon} />
                    </div>
                </div>
                <div className={styles.transactionModalData}>
                    <span className={styles.transactionModalDataFrom}>
                        -&thinsp;{formatSourceInput(String(transaction.starsAmount))} STARS
                    </span>
                    <span className={styles.transactionModalDataTo}>
                        +&thinsp;{formatTargetInput(String(transaction.tokenAmount))} {transaction.tokenSymbol}
                    </span>
                    <span className={styles.transactionModalDataDate}>
                        Swapped on {formatDate(transaction.createdAt, false)}
                    </span>
                </div>
                <div className={styles.transactionModalMetadata}>
                    <Ripple
                        className={styles.transactionModalMetadataItem}
                        onClick={() => handleCopy(transaction.address)}>
                        <h5>Recipient address</h5>
                        <TruncatedText text={transaction.address} />
                    </Ripple>
                    <div className={styles.transactionModalMetadataSeparator}></div>
                    <Ripple
                        className={styles.transactionModalMetadataItem}
                        onClick={() => handleCopy(String('liquidity provider fee: ' +
                            transaction.lpFee + '\n' + 'blockchain fees: ' + transaction.bchFees))}>
                        <h5>Fees</h5>
                        <div>{formatSourceInput(String(transaction.lpFee + transaction.bchFees))} STARS</div>
                    </Ripple>
                </div>
                {transaction.hash &&
                    <Ripple className={styles.transactionModalViewer} onClick={openViewer}>
                        <WorldWideIcon />
                        <span>Transaction</span>
                    </Ripple>
                }
            </div>
        </Modal>
    )
}
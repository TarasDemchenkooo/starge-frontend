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
import ProcessingIcon from '../../../assets/svg/processing.svg?react'
import { Status } from "../../../shared/types/ITransaction"
import classNames from "classnames"

export default function TransactionModal({ transaction, setModalStatus }: ITransactionModal) {
    const jetton = jettons.jettons.find(jetton => jetton.symbol === transaction.tokenSymbol)
    const copyFees = `liquidity provider fee: ${transaction.lpFee}\nblockchain fees: ${transaction.bchFees}`

    const transactionModalDataClassnames = classNames(styles.transactionModalData, {
        [styles.transactionModalDataPending]: transaction.status === Status.PENDING,
        [styles.transactionModalDataFailed]: transaction.status === Status.FAILED
    })

    function handleCopy(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            toast('Copied', { id: text })
        })
    }

    function openViewer() {
        if (transaction.status === Status.PENDING) {
            toast('Transaction is still processing', { id: transaction.chargeId })
        } else {
            Telegram.WebApp.openLink(`https://testnet.tonviewer.com/transaction/${transaction.hash}`)
        }
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
                <div className={transactionModalDataClassnames}>
                    <span className={styles.transactionModalDataFrom}>
                        -&thinsp;{formatSourceInput(String(transaction.starsAmount))}
                        &nbsp;STAR{transaction.starsAmount > 1 ? 'S' : ''}
                    </span>
                    <span className={styles.transactionModalDataTo}>
                        +&thinsp;{formatTargetInput(String(transaction.tokenAmount))} {transaction.tokenSymbol}
                    </span>
                    <div className={styles.transactionModalDataDate}>
                        {transaction.status === Status.PENDING ? 'Swap is processing' :
                            transaction.status === Status.CONFIRMED ? 'Swapped on ' : 'Swap failed on '}
                        {transaction.status === Status.PENDING ? <ProcessingIcon /> :
                            formatDate(transaction.processedAt!, false)}
                    </div>
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
                        onClick={() => handleCopy(copyFees)}>
                        <h5>Fees</h5>
                        <div>{formatSourceInput(String(transaction.lpFee + transaction.bchFees))} STARS</div>
                    </Ripple>
                </div>
                <Ripple className={styles.transactionModalViewer} onClick={openViewer}>
                    {transaction.status === Status.PENDING ? <div></div> : <WorldWideIcon />}
                    <span>View on Tonviewer</span>
                </Ripple>
            </div>
        </Modal>
    )
}
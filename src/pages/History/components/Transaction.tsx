import styles from './Transaction.module.scss'
import formatDate from "../utils/formatDate"
import Ripple from "../../../shared/components/Ripple/components/Ripple"
import { useState } from "react"
import TransactionModal from "./TransactionModal"
import { ITransaction, Status } from '../../../shared/types/ITransaction'
import jettons from '../../../../public/jettons/jettons.json'
import classNames from 'classnames'

export default function Transaction(transaction: ITransaction) {
    const jetton = jettons.jettons.find(jetton => jetton.symbol === transaction.tokenSymbol)!
    const [modalStatus, setModalStatus] = useState(false)

    const iconClassnames = classNames(styles.transactionIcon, {
        [styles.transactionIconPending]: transaction.status === Status.PENDING
    })

    return (
        <Ripple className={styles.transaction}
            onClick={() => setModalStatus(true)}>
            <div className={iconClassnames}>
                <img src={jetton.icon} />
                <div><div></div></div>
            </div>
            <div className={styles.transactionType}>
                <span>Swap</span>
                <span>{transaction.address.slice(0, 4)}...{transaction.address.slice(-4)}</span>
            </div>
            <div className={styles.transactionData}>
                <span>+&thinsp;{transaction.tokenAmount} {transaction.tokenSymbol}</span>
                <span>{formatDate(transaction.createdAt)}</span>
            </div>
            {modalStatus && <TransactionModal
                setModalStatus={setModalStatus}
                transaction={transaction} />}
        </Ripple>
    )
}
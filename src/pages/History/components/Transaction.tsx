import SwapIcon from '../../../assets/svg/swap.svg?react'
import styles from './Transaction.module.scss'
import formatDate from "../utils/formatDate"
import Ripple from "../../../shared/components/Ripple/components/Ripple"
import { useState } from "react"
import TransactionModal from "./TransactionModal"
import { ITransaction } from '../../../shared/types/ITransaction'

export default function Transaction(transaction: ITransaction) {
    const [modalStatus, setModalStatus] = useState(false)

    return (
        <Ripple className={styles.transaction}
            onClick={() => setModalStatus(true)}>
            <button className={styles.transactionIcon}>
                <SwapIcon />
            </button>
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
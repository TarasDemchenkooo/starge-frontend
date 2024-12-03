import { ITransaction } from "../types/ITransaction"
import SwapIcon from '../../../assets/svg/swapTxn.svg?react'
import styles from './Transaction.module.scss'
//import formatAddress from "../../../utils/formarAddress"
import formatDate from "../utils/formatDate"
import Ripple from "../../../shared/components/Ripple/components/Ripple"
import { useState } from "react"
import TransactionModal from "./TransactionModal"

export default function Transaction(transaction: ITransaction) {
    const [modalStatus, setModalStatus] = useState(false)

    return (
        <Ripple className={styles.transaction}
            onClick={() => setModalStatus(true)}
            color={Telegram.WebApp.themeParams.hint_color!}>
            <div className={styles.transactionIcon}>
                <SwapIcon />
            </div>
            <div className={styles.transactionType}>
                <span>Swap</span>
                {/* <span>{formatAddress(transaction.address)}</span> */}
            </div>
            <div className={styles.transactionData}>
                <span>+&thinsp;{transaction.to.amount} {transaction.to.symbol}</span>
                <span>{formatDate(transaction.timestamp)}</span>
            </div>
            {modalStatus && <TransactionModal
                setModalStatus={setModalStatus}
                transaction={transaction} />}
        </Ripple>
    )
}
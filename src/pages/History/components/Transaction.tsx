import styles from './Transaction.module.scss'
import formatDate from "../utils/formatDate"
import Ripple from "../../../shared/components/Ripple/components/Ripple"
import { useEffect, useState } from "react"
import TransactionModal from "./TransactionModal"
import { ITransaction, Status } from '../../../shared/types/ITransaction'
import jettons from '../../../../public/jettons/jettons.json'
import classNames from 'classnames'
import { useSearchParams } from 'react-router-dom'

export default function Transaction(transaction: ITransaction) {
    const [params, setParams] = useSearchParams()
    const isDirectView = params.get('charge_id') === transaction.chargeId
    const [isActive, setIsActive] = useState(isDirectView)
    const jetton = jettons.jettons.find(jetton => jetton.symbol === transaction.tokenSymbol)!
    const [modalStatus, setModalStatus] = useState(false)

    const iconClassnames = classNames(styles.transactionIcon, {
        [styles.transactionIconPending]: transaction.status === Status.PENDING
    })

    const transactionClassnames = classNames(styles.transaction, {
        [styles.transactionActive]: isActive
    })

    useEffect(() => {
        if (isDirectView) {
            const element = document.getElementById(transaction.chargeId)!

            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        setModalStatus(true)
                        params.delete('charge_id')
                        setParams(params)
                        setIsActive(false)
                        observer.unobserve(element)
                    }, 400)
                }
            }, { threshold: 1 })
            observer.observe(element)

            window.scrollTo({
                behavior: 'smooth',
                top: element.getBoundingClientRect().top + window.scrollY - 50
            })
        }
    }, [])

    return (
        <Ripple id={transaction.chargeId} className={transactionClassnames}
            onClick={() => setModalStatus(true)}>
            <div className={iconClassnames}>
                <img src={jetton.icon} />
                <div></div>
            </div>
            <div className={styles.transactionType}>
                <span>Swap</span>
                <span>{transaction.address.slice(0, 4)}...{transaction.address.slice(-4)}</span>
            </div>
            <div className={styles.transactionData}>
                <span>+&thinsp;{transaction.tokenAmount} {transaction.tokenSymbol}</span>
                <span>{formatDate(transaction.createdAt)}</span>
            </div>
            {modalStatus && <TransactionModal setModalStatus={setModalStatus} transaction={transaction} />}
        </Ripple>
    )
}
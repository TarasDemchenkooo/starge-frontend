import { ITransaction } from "../../../shared/types/ITransaction"

export default function groupTransactions(transactions: ITransaction[]) {
    let groupLabel
    const today = new Date()
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    const sortedTransactions = transactions.sort((a, b) => {
        const firstDate = new Date(a.createdAt)
        const secondDate = new Date(b.createdAt)

        return secondDate.getTime() - firstDate.getTime()
    })

    const groupedTransactions = sortedTransactions.reduce<Record<string, ITransaction[]>>((acc, transaction) => {
        const transactionDate = new Date(transaction.createdAt)
        const isToday = transactionDate.toDateString() === today.toDateString()
        const isYesterday = transactionDate.toDateString() === yesterday.toDateString()
        const isCurrentYear = transactionDate.getFullYear() === today.getFullYear()

        if (isCurrentYear) {
            if (isToday) {
                groupLabel = 'Today'
            } else if (isYesterday) {
                groupLabel = 'Yesterday'
            } else {
                groupLabel = transactionDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
            }
        } else {
            groupLabel = transactionDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
        }

        if (!acc[groupLabel]) {
            acc[groupLabel] = []
        }

        acc[groupLabel].push(transaction)

        return acc
    }, {})

    return groupedTransactions
}
import { ITransaction } from "./ITransaction"

export interface IGroupedTransactions {
    date: string
    transactions: ITransaction[]
}
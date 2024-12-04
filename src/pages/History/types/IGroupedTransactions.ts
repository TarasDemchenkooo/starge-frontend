import { ITransaction } from "../../../shared/types/ITransaction"

export interface IGroupedTransactions {
    date: string
    transactions: ITransaction[]
}
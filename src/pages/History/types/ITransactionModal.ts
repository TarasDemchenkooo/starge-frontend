import { ITransaction } from "./ITransaction"

export interface ITransactionModal {
    transaction: ITransaction
    setModalStatus: (status: boolean) => void
}
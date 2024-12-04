import { ITransaction } from "../../../shared/types/ITransaction"

export interface ITransactionModal {
    transaction: ITransaction
    setModalStatus: (status: boolean) => void
}
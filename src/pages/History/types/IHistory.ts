import { ITransaction } from "./ITransaction"

export interface IHistory {
    history: ITransaction[] | null
}
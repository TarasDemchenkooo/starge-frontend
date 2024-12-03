import { ISettings } from "./ISettings"
import { ITransaction } from "./ITransaction"

export interface IAuth {
    user: {
        id: number
        transactions: ITransaction[]
        settings: ISettings
    }
    jwt: string
}
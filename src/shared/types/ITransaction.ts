import { Assets } from "./Assets"

enum Status {
    PENDING,
    CONFIRMED,
    FAILED
}

export interface ITransaction {
    address: string
    starsAmount: number
    tokenAmount: number
    tokenSymbol: Assets
    lpFee: number
    bchFees: number
    hash: string
    status: Status
    createdAt: string
}
import { Assets } from "./Assets"

export enum Status {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    FAILED = 'FAILED'
}

export interface ITransaction {
    address: string
    starsAmount: number
    tokenAmount: number
    tokenSymbol: Assets
    lpFee: number
    bchFees: number
    chargeId: string
    hash: string
    status: Status
    processedAt: null | string
    createdAt: string
}
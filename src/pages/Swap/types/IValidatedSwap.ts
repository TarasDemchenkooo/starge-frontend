import { Assets } from "../../../shared/types/Assets"

export interface IValidatedSwap {
    address: string
    starsAmount: number
    tokenAmount: number
    tokenSymbol: Assets
    lpFee: number
    bchFees: number
    hash: string
}
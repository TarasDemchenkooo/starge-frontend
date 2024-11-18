import { Assets } from "../../../shared/types/Assets"

export interface IValidatedSwap {
    id: number
    address: string
    source: number
    target: number
    target_symbol: Assets
    quote: number
    hash: string
}
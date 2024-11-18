import { Assets } from "../../../shared/types/Assets"

export interface IConfirmSwap {
    address: string
    source: number
    target: number
    target_symbol: Assets
    quote: number
}
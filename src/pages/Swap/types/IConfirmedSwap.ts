import { Assets } from "../../../shared/types/Assets"

export interface IConfirmedSwap {
    address: string
    source: number
    target: number
    route: Assets
}
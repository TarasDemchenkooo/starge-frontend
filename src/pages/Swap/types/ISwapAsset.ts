import { Assets } from "./Assets"

export interface ISwapAsset {
    asset: Assets
    icon: React.ReactNode
    balance: number | null | undefined
    price: number
}
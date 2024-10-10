import { Assets } from "./Assets"

export interface IUseAsset {
    amount: Record<Assets, number>
    setAmount: (asset: Assets, amount: number) => void
}
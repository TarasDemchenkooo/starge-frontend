import { Assets } from "../../../shared/types/Assets"

export interface ITargetAsset {
    targetAsset: Assets | null
    setTargetAsset: (newAsset: Assets) => void
}
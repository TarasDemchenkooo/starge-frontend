import { Assets } from "../../../shared/types/Assets"

export interface IModalAsset {
    icon: string
    name: string
    symbol: Assets
    ca: string
    address: string
    activeAsset: Assets
    setActiveAsset: (status: Assets) => void
}
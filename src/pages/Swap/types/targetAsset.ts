import { Assets } from "../../../shared/types/Assets"

export type AssetState = { asset: Assets, updateAsset: (newAsset: Assets) => void }
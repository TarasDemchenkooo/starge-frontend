import { Assets } from "../../../shared/types/Assets"

export interface IAssetsModal {
    targetAsset: Assets
    setModalStatus: (status: boolean) => void
}
import { Assets } from "../../../shared/types/Assets"
import { InputType } from "./InputType"

export interface ISwapInput {
    targetAsset: Assets
    inputType: InputType
}
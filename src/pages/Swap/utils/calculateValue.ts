import starPrice from "../../../shared/constants/StarPrice"
import { AssetType } from "../types/AssetType"
import formatDecimal from "./formatDecimal"

export default function calculateValue(assetType: AssetType, value: number, price: number) {
    if (assetType === 'source') {
        return formatDecimal(value * starPrice / price)
    } else {
        return formatDecimal(value * price / starPrice)
    }
}
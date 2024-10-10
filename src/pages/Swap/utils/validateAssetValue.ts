import { Assets } from "../types/Assets"

export default function validateAssetValue(asset: Assets, value: string) {
    if (asset === 'STARS') {
        return /^(?!0)\d{0,6}$/.test(value)
    } else {
        return /^(?!0\d)(\d{0,4})(\.\d{0,2})?$/.test(value)
    }
}
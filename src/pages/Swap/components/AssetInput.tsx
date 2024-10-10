import { useCallback, useState } from "react"
import useAsset from "../hooks/useAsset"
import { Assets } from "../types/Assets"
import formatAssetValue from "../utils/formatAssetValue"
import validateAssetValue from "../utils/validateAssetValue"
import styles from './AssetInput.module.scss'
import debounce from "../../../utils/debounce"

export default function AssetInput({ asset }: Record<'asset', Assets>) {
    const { amount, setAmount } = useAsset()
    const [viewValue, setViewValue] = useState(
        formatAssetValue(String(amount[asset]), true)
    )

    const debouncedCalculation = useCallback(
        debounce((asset: Assets, amount: number) => {

        }, 300),
        [])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value.replace(/,/g, '')

        if (validateAssetValue(asset, value)) {
            setViewValue(formatAssetValue(value))
            setAmount(asset, Number(value))
            debouncedCalculation()
        }
    }

    return (
        <input value={viewValue} onChange={handleChange}
            type="text" placeholder="0.00" inputMode='numeric'
            className={styles.assetInput} />
    )
}
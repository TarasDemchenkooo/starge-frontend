import { useCallback, useEffect, useState } from "react"
import useStarsInput from "../hooks/useSourceInput"
import formatSourceInput from "../utils/formatSourceInput"
import styles from './SourceInput.module.scss'
import useTargetInput from "../hooks/useTargetInput"
import usePrice from "../hooks/usePrice"
import { Assets } from "../../../shared/types/Assets"
import useDebounce from "../hooks/useDebounce"

export default function SourceInput({ targetAsset }: { targetAsset: Assets }) {
    const { sourceAmount, setSourceAmount } = useStarsInput()
    const debouncedSourceAmount = useDebounce(sourceAmount, 300)
    const { refetchPrice } = usePrice(targetAsset)
    //const { setTargetAmount } = useTargetInput()

    useEffect(() => {
        if (debouncedSourceAmount) {
        refetchPrice()
        }
        //setTargetAmount(String(Number(debouncedSourceAmount) / 200))
    }, [debouncedSourceAmount])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value.replace(/,/g, '')

        if (/^(?!0)\d{0,6}$/.test(value)) {
            setSourceAmount(value)
        }
    }

    return (
        <input value={formatSourceInput(sourceAmount)} onChange={handleChange}
            type="text" placeholder="0" inputMode='numeric'
            className={styles.assetInput} />
    )
}
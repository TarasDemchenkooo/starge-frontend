import { useEffect, useState } from "react"
import formatTargetInput from "../utils/formatTargetInput"
import styles from './TargetInput.module.scss'
import usePrice from "../hooks/usePrice"
import { Assets } from "../../../shared/types/Assets"
import useInputs from "../hooks/useInputs"
import { useDebouncedCallback } from "use-debounce"

export default function TargetInput({ targetAsset }: { targetAsset: Assets }) {
    const { target, setTarget } = useInputs()
    const [targetView, setTargetView] = useState(target)
    const { price, refetchPrice } = usePrice(targetAsset)

    useEffect(() => {
        setTargetView(target)
    }, [target])

    const setInputs = useDebouncedCallback((value: string) => {
        if (price) {
            setTarget(value, price)
        } else {
            refetchPrice().then(price => setTarget(value, price.data!))
        }
    }, 300)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value.replace(/,/g, '')

        if (/^(?!0\d)(\d{0,18})(\.\d{0,6})?$/.test(value)) {
            setTargetView(value)
            setInputs(value)
        }
    }

    return (
        <input value={formatTargetInput(targetView)} onChange={handleChange}
            type="text" placeholder="0" inputMode='numeric'
            className={styles.assetInput} />
    )
}
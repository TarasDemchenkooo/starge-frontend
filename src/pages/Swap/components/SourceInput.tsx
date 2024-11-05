import { useEffect, useState } from "react"
import formatSourceInput from "../utils/formatSourceInput"
import styles from './SourceInput.module.scss'
import usePrice from "../hooks/usePrice"
import { Assets } from "../../../shared/types/Assets"
import useInputs from "../hooks/useInputs"
import { useDebouncedCallback } from "use-debounce"

export default function SourceInput({ targetAsset }: { targetAsset: Assets }) {
    const { source, setSource } = useInputs()
    const [sourceView, setSourceView] = useState(source)
    const { price, refetchPrice } = usePrice(targetAsset)

    useEffect(() => {
        setSourceView(source)
    }, [source])

    const setInputs = useDebouncedCallback((value: string) => {
        if (price) {
            setSource(value, price)
        } else {
            refetchPrice().then(price => setSource(value, price.data!))
        }
    }, 300)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value.replace(/,/g, '')

        if (/^(?!0)\d{0,18}$/.test(value)) {
            setSourceView(value)
            setInputs(value)
        }
    }

    return (
        <input value={formatSourceInput(sourceView)} onChange={handleChange}
            type="text" placeholder="0" inputMode='numeric'
            className={styles.assetInput} />
    )
}
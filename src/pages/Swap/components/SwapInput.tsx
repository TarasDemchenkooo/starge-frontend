import { useEffect, useState } from "react"
import useInputs from "../hooks/useInputs"
import { ISwapInput } from "../types/ISwapInput"
import usePrice from "../hooks/usePrice"
import { useDebouncedCallback } from "use-debounce"
import formatSourceInput from "../utils/formatSourceInput"
import formatTargetInput from "../utils/formatTargetInput"
import styles from './SwapInput.module.scss'
import classNames from "classnames"
import { vibrate } from "../../../shared/utils/vibrate"

export default function SwapInput({ targetAsset, inputType, confirmedAmount }: ISwapInput) {
    const value = useInputs(state => state[inputType])
    const setValue = useInputs(state => inputType === 'source' ? state.setSource : state.setTarget)
    const { source, setSource, target, setTarget, activeInput, setActiveInput } = useInputs()
    const [valueView, setValueView] = useState(value)
    const { price, initialFetch, isRefetching } = usePrice(targetAsset)

    useEffect(() => {
        setValueView(value)
    }, [value])

    useEffect(() => {
        if (price) {
            if (activeInput === 'source') {
                setSource(source, price)
            } else {
                setTarget(target, price)
            }
        }
    }, [price])

    const setInputs = useDebouncedCallback((value: string) => {
        setActiveInput(inputType)

        if (price) {
            setValue(value, price)
        } else {
            initialFetch(price => setValue(value, price.data!))
        }
    }, 300)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value.replace(/,/g, '')
        const regexp = inputType === 'source' ?
            /^(?!0)\d{0,18}$/ : /^(?!0\d)(\d{0,18})(\.\d{0,6})?$/

        if (regexp.test(value)) {
            setValueView(value)
            setInputs(value)
            vibrate()
        }
    }

    const inputClassnames = classNames(styles.swapInput, {
        [styles.swapInputRefetching]: isRefetching && activeInput !== inputType
    })

    return confirmedAmount ? (
        <span className={styles.swapInput}>{inputType === 'source' ?
            formatSourceInput(String(confirmedAmount)) : formatTargetInput(String(confirmedAmount))}
        </span>
    ) : (
        <input className={inputClassnames}
            value={inputType === 'source' ? formatSourceInput(valueView) : formatTargetInput(valueView)}
            onChange={handleChange} type="text" placeholder="0" inputMode='numeric' />
    )
}
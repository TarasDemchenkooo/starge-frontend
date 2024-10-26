import useTargetInput from "../hooks/useTargetInput"
import formatTargetInput from "../utils/formatTargetInput"
import styles from './TargetInput.module.scss'

export default function TargetInput() {
    const { targetAmount, setTargetAmount } = useTargetInput()

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value.replace(/,/g, '')

        if (/^(?!0\d)(\d{0,4})(\.\d{0,2})?$/.test(value)) {
            setTargetAmount(value)
        }
    }

    return (
        <input value={formatTargetInput(targetAmount)} onChange={handleChange}
            type="text" placeholder="0" inputMode='numeric'
            className={styles.assetInput} />
    )
}
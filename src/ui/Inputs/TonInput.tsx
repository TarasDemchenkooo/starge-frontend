import formatNumberWithCommas from '../../utils/formatNumberWithCommas'
import styles from './TonInput.module.scss'

interface IStarsInput {
    ton: string
    checker: boolean
    setQuote: (value: string) => void
    setTon: (value: string) => void
}

export default function TonInput({ ton, setTon, setQuote, checker }: IStarsInput) {
    const theme = Telegram.WebApp.themeParams

    function handleTonChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value
        const parts = value.split('.')

        if (!/^0\d/g.test(value) && parts[0].length <= 4 && (parts[1] ? parts[1].length <= 2 : true)) {

            const wholePart = formatNumberWithCommas(parts[0].replace(/\D/g, '').slice(0, 4), false)
            const decimalPart = parts[1] ? parts[1].replace(/\D/g, '').slice(0, 2) : ''

            if (parts[1] !== undefined) {
                setTon(`${wholePart}.${decimalPart}`)
            } else {
                setTon(wholePart)
            }

            setQuote(value.replace(/[^\d\.]/g, ''))
        }

        if (value === '.') {
            setTon('0.')
        }
    }

    function handleTonPaste(e: React.ClipboardEvent<HTMLInputElement>) {
        const data = e.clipboardData.getData('text')
        if (data.length > 5) {
            setTon('9,999')
        }
    }

    return (
        <input value={ton} onPaste={handleTonPaste} onChange={handleTonChange}
            type="text" inputMode='decimal' placeholder="0.00" className={styles.tonInput}
            style={{ color: checker ? theme.text_color : theme.destructive_text_color }}/>
    )
}
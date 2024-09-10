import formatNumberWithCommas from '../../utils/formatNumberWithCommas'
import styles from './StarsInput.module.scss'

interface IStarsInput {
    stars: string
    checker: boolean
    setStars: (value: string) => void
    setQuote: (value: string) => void
}

export default function StarsInput({ stars, setStars, setQuote, checker }: IStarsInput) {
    const theme = Telegram.WebApp.themeParams

    function handleStarsChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.value !== '0' && e.currentTarget.value.length <= 7) {
            setStars(formatNumberWithCommas(e.currentTarget.value))
            setQuote(e.currentTarget.value.replace(/\D/g, ''))
        }
    }

    function handleStarsPaste(e: React.ClipboardEvent<HTMLInputElement>) {
        const data = e.clipboardData.getData('text')

        if (data.length > 6) {
            setStars('999,999')
            setQuote('999999')
        }
    }

    return (
        <input value={stars} onPaste={handleStarsPaste} inputMode='numeric'
            onChange={handleStarsChange} type="text" placeholder="0.00"
            style={{ color: checker ? theme.text_color : theme.destructive_text_color }}
            className={styles.starsInput} />
    )
}
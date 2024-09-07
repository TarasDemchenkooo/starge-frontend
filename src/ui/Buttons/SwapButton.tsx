import styles from './SwapButton.module.scss'

interface ITonSwapButtonUI {
    className: string
}

export default function SwapButton({ className }: ITonSwapButtonUI) {
    return (
        <button className={styles.btn + ' ' + className}>
            Enter an amount
        </button>
    )
}
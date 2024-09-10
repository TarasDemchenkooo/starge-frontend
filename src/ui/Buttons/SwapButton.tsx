import classNames from 'classnames'
import styles from './SwapButton.module.scss'
import hex2rgba from 'hex2rgba'

interface ITonSwapButtonUI {
    className: string
    isActive: boolean
}

export default function SwapButton({ className, isActive }: ITonSwapButtonUI) {
    const theme = Telegram.WebApp.themeParams
    const classNameState = classNames({
        [styles.btn]: true,
        [className]: true,
        [styles.btnActive]: isActive
    })

    return (
        <button style={{
            backgroundColor: isActive ? theme.button_color :
                hex2rgba(theme.subtitle_text_color!, 0.3)
        }}
            className={classNameState}>
            {isActive ? 'Swap' : 'Enter an amount'}
        </button>
    )
}
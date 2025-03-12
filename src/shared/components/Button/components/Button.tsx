import styles from './Button.module.scss'
import { IButton } from "../types/IButton"
import { useState } from 'react'
import classNames from 'classnames'
import { vibrate } from '../../../utils/vibrate'

export default function Button({ children, content,
    className, onClick, isLoading, disabled = false }: IButton) {
    const [pressed, setPressed] = useState(false)
    const [released, setReleased] = useState(false)
    const clickable = !isLoading && !disabled

    const buttonClassnames = classNames({
        [styles.button]: true,
        [styles.buttonPressed]: pressed,
        [styles.buttonReleased]: released,
        [styles.buttonLoading]: isLoading,
        [styles.buttonDisabled]: disabled,
        [className!]: true,
    })

    function press() {
        if (clickable) setPressed(true)
    }

    function release(event: React.TouchEvent<HTMLButtonElement>) {
        if (clickable) {
            setReleased(true)
            setPressed(false)
            event.currentTarget.onanimationend = () => setReleased(false)
        }
    }

    function click(event: React.MouseEvent<HTMLButtonElement>) {
        if (clickable) {
            vibrate()
            onClick(event)
        }
    }

    return (
        <button disabled={disabled} data-text={content} className={buttonClassnames} onClick={click}
            onTouchStart={press} onTouchEnd={release}>
            {children}
        </button>
    )
}
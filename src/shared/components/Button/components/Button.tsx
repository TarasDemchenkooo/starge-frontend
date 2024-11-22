import styles from './Button.module.scss'
import { IButton } from "../types/IButton"
import { useState } from 'react'
import classNames from 'classnames'
import useVibrate from '../../../hooks/useVibrate'

export default function Button({ content, className, onClick, isLoading, disabled = false }: IButton) {
    const [pressed, setPressed] = useState(false)
    const [released, setReleased] = useState(false)
    const clickable = !isLoading && !disabled
    const { vibrate } = useVibrate()

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
        </button>
    )
}
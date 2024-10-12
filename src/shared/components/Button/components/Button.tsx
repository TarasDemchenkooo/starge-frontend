import styles from './Button.module.scss'
import { IButton } from "../types/IButton"
import { useState } from 'react'
import classNames from 'classnames'
import vibrate from '../../../../utils/vibration'

export default function Button({ children, className, onClick, disabled = false }: IButton) {
    const [pressed, setPressed] = useState(false)
    const [released, setReleased] = useState(false)

    const buttonClassnames = classNames({
        [styles.button]: true,
        [styles.buttonPressed]: pressed,
        [styles.buttonReleased]: released,
        [className!]: true,
    })

    function press() {
        if (!disabled) {
            setPressed(true)
        }
    }

    function release(event: React.TouchEvent<HTMLButtonElement>) {
        if (!disabled) {
            setReleased(true)
            setPressed(false)
            event.currentTarget.onanimationend = () => setReleased(false)
        }
    }

    function click(event: React.MouseEvent<HTMLButtonElement>) {
        vibrate('medium')
        onClick(event)
    }

    return (
        <button disabled={disabled} className={buttonClassnames} onClick={click}
            onTouchStart={press} onTouchEnd={release}>
            {children && children}
        </button>
    )
}
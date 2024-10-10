import { useState } from 'react'
import styles from './Ripple.module.scss'
import classNames from 'classnames'
import { IRipple } from '../types/IRipple'

export default function Ripple({ children, className, color, onClick }: IRipple) {
    const [ripple, setRipple] = useState<Record<string, number> | null>(null)
    const [rippleEnd, setRippleEnd] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const rippleClassnames = classNames({
        [styles.rippleEffect]: true,
        [styles.rippleEffectEnd]: rippleEnd
    })

    const rippleContainerClassnames = classNames({
        [className]: true,
        [styles.ripple]: true,
    })

    function createTouchRipple(event: React.TouchEvent) {
        if (isAnimating) return

        const button = event.currentTarget
        const rect = button.getBoundingClientRect()
        const size = Math.max(button.clientWidth, button.clientHeight)
        const x = event.touches[0].clientX - rect.left - size / 2
        const y = event.touches[0].clientY - rect.top - size / 2

        setRipple({ x, y, size })
        setIsAnimating(true)
    }

    function deleteTouchRipple() {
        setRippleEnd(true)
        setTimeout(() => {
            setRipple(null)
            setIsAnimating(false)
            setRippleEnd(false)
        }, 500)
    }

    return (
        <button className={rippleContainerClassnames} onClick={onClick}
            onTouchStart={createTouchRipple} onTouchEnd={deleteTouchRipple}>
            {children}
            {ripple && (
                <span className={rippleClassnames}
                    style={{
                        width: ripple.size,
                        height: ripple.size,
                        left: ripple.x,
                        top: ripple.y,
                        backgroundColor: color
                    }}
                />
            )}
        </button>
    )
}
import React, { useState } from 'react'
import styles from './Ripple.module.scss'
import classNames from 'classnames'
import { IRipple } from '../types/IRipple'
import setDefaultConfiguration from '../utils/setDefaultConfiguration'
import defineRipple from '../utils/defineRipple'
import { vibrate } from '../../../utils/vibrate'

export default function Ripple(cfg: IRipple) {
    const { color, inDuration, outDuration, holdTime } = setDefaultConfiguration(cfg)
    const [ripple, setRipple] = useState<Record<string, number> | null>(null)
    const [rippleEnd, setRippleEnd] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [startTouch, setStartTouch] = useState(0)

    const rippleClassnames = classNames(styles.rippleEffect, {
        [styles.rippleEffectEnd]: rippleEnd
    })
    const rippleContainerClassnames = classNames(styles.ripple, cfg.className)

    function createTouchRipple(event: React.TouchEvent) {
        if (isAnimating) return
        setStartTouch(Date.now())
        setRipple(defineRipple(event))
        setIsAnimating(true)
    }

    function deleteRipple() {
        setRippleEnd(true)
        setTimeout(() => {
            setRipple(null)
            setIsAnimating(false)
            setRippleEnd(false)
        }, 500)
    }

    function deleteTouchRipple() {
        const diff = Date.now() - startTouch
        setTimeout(deleteRipple, diff > 400 ? 0 : holdTime)
    }

    function click(event: React.MouseEvent<HTMLButtonElement>) {
        cfg.onClick(event)
        vibrate()
    }

    return (
        <button className={rippleContainerClassnames} id={cfg.id} onClick={click}
            onTouchStart={createTouchRipple} onTouchMove={deleteRipple}
            onTouchEnd={deleteTouchRipple}>
            {cfg.children}
            {ripple && (
                <span className={rippleClassnames}
                    style={{
                        width: ripple.size,
                        height: ripple.size,
                        left: ripple.x,
                        top: ripple.y,
                        backgroundColor: color,
                        animationDuration: inDuration,
                        transitionDuration: outDuration
                    }}
                />
            )}
        </button>
    )
}
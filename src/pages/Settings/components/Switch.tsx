import styles from './Switch.module.scss'
import { useState } from "react"
import classNames from "classnames"
import vibrate from '../../../utils/vibration'
import Ripple from '../../../shared/components/Ripple/components/Ripple'
import { ISwitch } from '../types/ISwitch'

export default function Switch({ name, description, children }: ISwitch) {
    const key = name.toLowerCase()
    const status: boolean = JSON.parse(localStorage.getItem(key)!)
    const rippleColor = Telegram.WebApp.themeParams.hint_color!
    const [isActive, setIsActive] = useState(status)

    const switchClassnames = classNames({
        [styles.switchSlider]: true,
        [styles.switchSliderActive]: isActive
    })

    function handleClick() {
        vibrate('medium')

        setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(!isActive))
            setIsActive(!isActive)
        }, 200)
    }

    return (
        <Ripple color={rippleColor} className={styles.switch} onClick={handleClick}>
            {children}
            <div>
                <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
                <div className={switchClassnames}>
                    <div></div>
                </div>
            </div>
        </Ripple>
    )
}
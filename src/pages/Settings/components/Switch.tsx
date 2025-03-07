import styles from './Switch.module.scss'
import { useState } from "react"
import classNames from "classnames"
import Ripple from '../../../shared/components/Ripple/components/Ripple'
import { ISwitch } from '../types/ISwitch'
import { useDebouncedCallback } from 'use-debounce'
import useMutateSettings from '../hooks/useMutateSettings'
import useSettings from '../hooks/useSettings'

export default function Switch({ name, description, children, localKey }: ISwitch) {
    const key = name.toLowerCase()
    const { settings } = useSettings()
    //@ts-ignore
    const status = localKey ? JSON.parse(localStorage.getItem(localKey)) : settings[key]
    const [isActive, setIsActive] = useState(status)
    const { mutate } = useMutateSettings()

    const switchClassnames = classNames({
        [styles.switchSlider]: true,
        [styles.switchSliderActive]: isActive
    })

    const debouncedPatch = useDebouncedCallback(() => {
        if (localKey) {
            const status = JSON.parse(localStorage.getItem(localKey)!)
            localStorage.setItem(localKey, String(!status))
        } else {
            //@ts-ignore
            mutate({ [key]: !status })
        }
    }, 500)

    function handleClick() {
        debouncedPatch()
        setTimeout(() => {
            setIsActive(!isActive)
        }, 200)
    }

    return (
        <Ripple className={styles.switch} onClick={handleClick}>
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
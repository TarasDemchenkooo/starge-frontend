import styles from './Switch.module.scss'
import { useState } from "react"
import classNames from "classnames"
import Ripple from '../../../shared/components/Ripple/components/Ripple'
import { ISwitch } from '../types/ISwitch'
import useAuth from '../../Swap/hooks/useAuth'
import { useDebouncedCallback } from 'use-debounce'
import useMutateSettings from '../hooks/useMutateSettings'

export default function Switch({ name, description, children }: ISwitch) {
    const key = name.toLowerCase()
    const { settings } = useAuth()
    //@ts-ignore
    const status = settings[key]
    const [isActive, setIsActive] = useState(status)
    const { mutate } = useMutateSettings()

    const switchClassnames = classNames({
        [styles.switchSlider]: true,
        [styles.switchSliderActive]: isActive
    })

    const debouncedPatch = useDebouncedCallback(() => {
        mutate({ [key]: !status })
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
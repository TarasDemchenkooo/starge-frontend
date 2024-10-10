import styles from './SettingsApp.module.scss'
import Switch from './Switch'
import VibrationIcon from '../../../assets/svg/vibration.svg?react'
import NotificationsIcon from '../../../assets/svg/notifications.svg?react'

export default function SettingsApp() {

    return (
        <div className={styles.settingsApp}>
            <h3>Settings</h3>
            <Switch name='Vibration' description='Enable in-app vibration'>
                <VibrationIcon />
            </Switch>
            <Switch name='Notifications' description='Notify about transactions'>
                <NotificationsIcon />
            </Switch>
        </div>
    )
}
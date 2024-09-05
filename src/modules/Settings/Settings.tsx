import styles from './Settings.module.scss'
import ThemeIcon from '../../assets/svg/theme.svg?react'
import NotificationsIcon from '../../assets/svg/notifications.svg?react'
import VibrationIcon from '../../assets/svg/vibration.svg?react'
import hex2rgba from 'hex2rgba'

export default function Settings() {
    const data = Telegram.WebApp.initDataUnsafe.user
    const theme = Telegram.WebApp.themeParams

    function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
        event.currentTarget.style.backgroundColor = hex2rgba(theme.hint_color!, 0.1)
    }

    function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
        event.currentTarget.style.backgroundColor = theme.section_bg_color!
    }

    // function handleClick(event: React.TouchEvent<HTMLDivElement>) {
    //     event.currentTarget.
    // }

    return (
        <div className={styles.settings}>
            <div className={styles.settingsProfile}>
                <img src={data?.photo_url} alt="User's pfp" />
                <h3>{`${data?.first_name} ${data?.last_name}`.trim()}</h3>
                <span>@{data?.username}</span>
            </div>
            <div className={styles.settingsApp}>
                <h3>Settings</h3>
                <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <ThemeIcon stroke={theme.hint_color} />
                    <div>
                        <div>
                            <h4>Default theme</h4>
                            <p>Use Telegram theme</p>
                        </div>
                        <div className={styles.settingsAppSlider}>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <VibrationIcon fill={theme.hint_color} />
                    <div>
                        <div>
                            <h4>Vibration</h4>
                            <p>Enable in-app vibration</p>
                        </div>
                        <div className={styles.settingsAppSlider}>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <NotificationsIcon stroke={theme.hint_color} />
                    <div>
                        <div>
                            <h4>Notifications</h4>
                            <p>Notify about transactions</p>
                        </div>
                        <div className={styles.settingsAppSlider}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
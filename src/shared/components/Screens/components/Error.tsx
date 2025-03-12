import link from '../../../constants/link'
import Button from '../../Button/components/Button'
import styles from './Error.module.scss'
import TelegramIcon from '../../../../assets/svg/telegram.svg?react'

export default function ErrorScreen() {

    return (
        <div className={styles.error}>
            <div className={styles.errorText}>
                <h3>Error occurred!</h3>
                <p>
                    We're already working on fixing the issue. Try reloading the page or accessing the app later.
                </p>
                <Button onClick={() => Telegram.WebApp.openTelegramLink(link.channelLink)}>
                    <TelegramIcon />
                    Open channel
                </Button>
            </div>
        </div>
    )
}
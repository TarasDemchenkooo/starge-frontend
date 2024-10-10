import classNames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Menu.module.scss'
import TransactionIcon from '../../../../assets/svg/tx.svg?react'
import SwapIcon from '../../../../assets/svg/swap.svg?react'
import SettingsIcon from '../../../../assets/svg/settings.svg?react'
import vibrate from '../../../../utils/vibration'

export default function Menu() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    function to(to: string) {
        navigate(to)
        vibrate('medium')
    }

    function checkLinkState(path: string) {
        return classNames({
            [styles.menuLinkDefault]: true,
            [styles.menuLinkActive]: pathname === path
        })
    }

    return (
        <div className={styles.menu}>
            <button className={checkLinkState('/')}
                onClick={() => to('/')} >
                <SwapIcon />
                <span>Swap</span>
            </button>

            <button className={checkLinkState('/history')}
                onClick={() => to('/history')}>
                <TransactionIcon />
                <span>History</span>
            </button>

            <button className={checkLinkState('/settings')}
                onClick={() => to('/settings')} >
                <SettingsIcon />
                <span>Settings</span>
            </button>
        </div>
    )
}
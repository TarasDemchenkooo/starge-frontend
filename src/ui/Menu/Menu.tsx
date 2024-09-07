import classNames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Menu.module.scss'
import TransactionIcon from '../../assets/svg/tx.svg?react'
import SwapIcon from '../../assets/svg/swap.svg?react'
import SettingsIcon from '../../assets/svg/settings.svg?react'

export default function Menu() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    function checkLinkState(path: string) {
        return classNames({
            [styles.menuLinkDefault]: true,
            [styles.menuLinkActive]: pathname === path
        })
    }

    return (
        <div className={styles.menu}>
            <button className={checkLinkState('/')}
                onClick={() => navigate('/')} >
                <SwapIcon />
                <span>Swap</span>
            </button>

            <button className={checkLinkState('/history')}
                onClick={() => navigate('/history')}>
                <TransactionIcon />
                <span>History</span>
            </button>

            <button className={checkLinkState('/settings')}
                onClick={() => navigate('/settings')} >
                <SettingsIcon />
                <span>Settings</span>
            </button>
        </div>
    )
}
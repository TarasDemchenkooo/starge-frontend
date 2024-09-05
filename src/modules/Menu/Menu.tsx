import styles from './Menu.module.scss'
import TransactionIcon from '../../assets/svg/tx.svg?react'
import SwapIcon from '../../assets/svg/swap.svg?react'
import SettingsIcon from '../../assets/svg/settings.svg?react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'

export default function Menu() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    function checkLinkState(path: string) {
        return classNames({
            [styles.linkDefault]: true,
            [styles.linkActive]: pathname === path
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
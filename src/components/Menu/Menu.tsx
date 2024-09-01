import styles from './Menu.module.scss'
import TransactionIcon from '../../assets/svg/tx.svg?react'
import SwapIcon from '../../assets/svg/swap.svg?react'
import SettingsIcon from '../../assets/svg/settings.svg?react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

export default function Menu() {
    const { pathname } = useLocation()

    function checkLinkState(path: string) {
        return classNames({
            [styles.linkDefault]: true,
            [styles.linkActive]: pathname === path
        })
    }

    return (
        <div className={styles.menu}>
            <Link className={checkLinkState('/')} to='/'>
                <SwapIcon />
                <span>Swap</span>
            </Link>

            <Link className={checkLinkState('/history')} to='/history'>
                <TransactionIcon />
                <span>History</span>
            </Link>

            <Link className={checkLinkState('/settings')} to='/settings'>
                <SettingsIcon />
                <span>Settings</span>
            </Link>
        </div>
    )
}
import { Toaster } from 'react-hot-toast'
import styles from './Toast.module.scss'
import ErrorIcon from '../../../../assets/svg/error.svg?react'
import classNames from 'classnames'

export default function Toast() {
    const errorClassnames = classNames(styles.toast, styles.toastError)

    return (
        <Toaster containerStyle={{ top: 50 }} position="top-center" toastOptions={{
            className: styles.toast,
            duration: 2000,
            error: {
                duration: 4000,
                icon: <ErrorIcon />,
                className: errorClassnames
            }
        }} />
    )
}
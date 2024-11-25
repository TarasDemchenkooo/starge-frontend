import { Toaster } from 'react-hot-toast'
import styles from './Toast.module.scss'

export default function Toast() {
    return (
        <Toaster containerStyle={{top: 50}} position="top-center" toastOptions={{
            className: styles.toast,
            duration: 2000
        }} />
    )
}
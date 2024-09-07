import Lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import styles from './History.module.scss'
import duckTgSticker from '../../../public/animations-json/duck-tg-sticker.json'

export default function History() {
    const lottieRef = useRef(null)

    useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: lottieRef.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: duckTgSticker
        })

        return () => animation.destroy()
    }, [])

    return (
        <div className={styles.history}>
            <h2>Transaction History</h2>

            <div className={styles.historyInfoNull}>
                <div ref={lottieRef}></div>
                <h3>No History Yet</h3>
                <p>All your transactions will be displayed here.</p>
            </div>

        </div>
    )
}
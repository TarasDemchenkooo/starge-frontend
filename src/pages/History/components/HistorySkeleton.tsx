import { useEffect } from 'react'
import styles from './HistorySkeleton.module.scss'
import Skeleton from '../../../shared/components/Skeleton/components/Skeleton'

export default function HistorySkeleton() {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div className={styles.skeleton}>
            <Skeleton type='default' className={styles.skeletonTitle} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
            <div className={styles.skeletonSeparator}></div>
            <Skeleton width={132} type='default' className={styles.skeletonTitle} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
            <div className={styles.skeletonSeparator}></div>
            <Skeleton width={90} type='default' className={styles.skeletonTitle} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
            <Skeleton type='default' className={styles.skeletonTransaction} />
        </div>
    )
}
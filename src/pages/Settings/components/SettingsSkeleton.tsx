import { useEffect } from "react"
import Skeleton from "../../../shared/components/Skeleton/components/Skeleton"
import styles from './SettingsSkeleton.module.scss'

export default function SettingsSkeleton() {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div className={styles.skeleton}>
            <div className={styles.skeletonBg}>
                <Skeleton type="dark" className={styles.skeletonAvatar} />
                <Skeleton type="dark" className={styles.skeletonName} />
                <Skeleton type="dark" className={styles.skeletonTag} />
                <Skeleton type="dark" className={styles.skeletonButton} />
            </div>
            <div className={styles.skeletonSettings}>
                <h3>Settings</h3>
                <div className={styles.skeletonSlider}>
                    <Skeleton type="default" className={styles.skeletonSliderIcon} />
                    <div className={styles.skeletonSliderData}>
                        <div className={styles.skeletonSliderDataText}>
                            <Skeleton type="default" className={styles.skeletonSliderDataTextTitle} />
                            <Skeleton type="default" className={styles.skeletonSliderDataTextDescr} />
                        </div>
                        <Skeleton type="default" className={styles.skeletonSliderController} />
                    </div>
                </div>
                <div className={styles.skeletonSlider}>
                    <Skeleton type="default" className={styles.skeletonSliderIcon} />
                    <div className={styles.skeletonSliderData}>
                        <div className={styles.skeletonSliderDataText}>
                            <Skeleton width={100} type="default" className={styles.skeletonSliderDataTextTitle} />
                            <Skeleton width={170} type="default" className={styles.skeletonSliderDataTextDescr} />
                        </div>
                        <Skeleton type="default" className={styles.skeletonSliderController} />
                    </div>
                </div>
                <div className={styles.skeletonSlider}>
                    <Skeleton type="default" className={styles.skeletonSliderIcon} />
                    <div className={styles.skeletonSliderData}>
                        <div className={styles.skeletonSliderDataText}>
                            <Skeleton type="default" className={styles.skeletonSliderDataTextTitle} />
                            <Skeleton width={120} type="default" className={styles.skeletonSliderDataTextDescr} />
                        </div>
                        <Skeleton type="default" className={styles.skeletonSliderController} />
                    </div>
                </div>
            </div>
        </div>
    )
}
import classNames from 'classnames'
import { ISkeleton } from '../types/ISkeleton'
import styles from './Skeleton.module.scss'

export default function Skeleton(skeleton: ISkeleton) {
    const baseDefault = Telegram.WebApp.themeParams.section_bg_color
    const baseDark = Telegram.WebApp.themeParams.section_separator_color
    const highlight = Telegram.WebApp.themeParams.bg_color

    const colors = {
        base: skeleton.type === 'default' ? baseDefault : baseDark,
        highlight: highlight
    }


    const skeletonClassnames = classNames({
        [skeleton.className]: true,
        [styles.skeleton]: true
    })

    const backgroundImage = `linear-gradient(\
    90deg,\
    ${colors.base} 0,\
    ${colors.highlight} 50%,\
    ${colors.base})`

    return (
        <div style={{ backgroundColor: colors.base, width: skeleton.width }} className={skeletonClassnames}>
            <div style={{ backgroundImage }}></div>
        </div>
    )
}
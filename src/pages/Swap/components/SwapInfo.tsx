import classNames from "classnames"
import { Assets } from "../../../shared/types/Assets"
import usePrice from "../hooks/usePrice"
import styles from './SwapInfo.module.scss'
import Chevron from '../../../assets/svg/chevron.svg?react'
import { useState } from "react"
import calculatePrice from "../utils/calculatePrice"
import useSourceInput from "../hooks/useSourceInput"
import comissionRate from "../../../shared/constants/comissionRate"

export default function SwapInfo({ targetAsset }: { targetAsset: Assets }) {
    const { price } = usePrice(targetAsset)
    const {sourceAmount} = useSourceInput()
    const [isOpen, setIsOpen] = useState(true)

    const swapInfoClassnames = classNames(styles.swapInfo, {
        [styles.swapInfoActive]: price
    })

    const dropdownClassnames = classNames(styles.swapInfoDropdown, {
        [styles.swapInfoDropdownActive]: isOpen
    })

    return (
        <div className={swapInfoClassnames}>
            <div onClick={() => setIsOpen(!isOpen)} className={styles.swapInfoButton}>
                <span>1 STAR ≈ {calculatePrice(price!)} {targetAsset}</span>
                <Chevron style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }} />
            </div>
            <div className={dropdownClassnames}>
                <div className={styles.swapInfoDropdownContent}>
                    <div>
                        <span>Liquidity provider fee</span>
                        <span>{Math.ceil(Number(sourceAmount) * comissionRate)} STARS</span>
                    </div>
                    <div>
                        <span>Blockchain fees</span>
                        <span>1 STAR</span>
                    </div>
                    <div>
                        <span>Route</span>
                        <span>STARS » {targetAsset}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
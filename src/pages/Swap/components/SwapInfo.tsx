import classNames from "classnames"
import { Assets } from "../../../shared/types/Assets"
import usePrice from "../hooks/usePrice"
import styles from './SwapInfo.module.scss'
import Chevron from '../../../assets/svg/chevron.svg?react'
import { useEffect, useState } from "react"
import calculatePrice from "../utils/calculatePrice"
import comissionRate from "../../../shared/constants/comissionRate"
import formatSourceInput from "../utils/formatSourceInput"
import useInputs from "../hooks/useInputs"

export default function SwapInfo({ targetAsset }: { targetAsset: Assets }) {
    const { price } = usePrice(targetAsset)
    const { source, target } = useInputs()
    const [stickyAmount, setStickyAmount] = useState(Number(source))
    const [isOpen, setIsOpen] = useState(true)
    const simulationRange = 10 ** 7

    useEffect(() => {
        if (Number(source) <= simulationRange) {
            setStickyAmount(Number(source))
        }
    }, [source])

    const swapInfoClassnames = classNames(styles.swapInfo, {
        [styles.swapInfoActive]: price && source && target
            && Number(source) <= simulationRange
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
                        <span>{formatSourceInput(String(
                            Math.ceil(stickyAmount * comissionRate)
                        ))} STARS</span>
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
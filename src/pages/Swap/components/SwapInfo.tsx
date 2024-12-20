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
import { useTonAddress } from "@tonconnect/ui-react"
import { IValidatedSwap } from "../types/IValidatedSwap"

export default function SwapInfo({ targetAsset, confirmedData }:
    { targetAsset: Assets, confirmedData?: IValidatedSwap }) {
    const { price } = usePrice(targetAsset)
    const { source, target } = useInputs()
    const address = useTonAddress()
    const [stickyAmount, setStickyAmount] = useState(Number(source))
    const [isOpen, setIsOpen] = useState(true)

    const simulationRange = address ? 50000 : 10 ** 7
    const lpFee = confirmedData?.lpFee || Math.ceil(stickyAmount * comissionRate)
    const bchFees = confirmedData?.bchFees || (targetAsset === 'TON' ? 2 : 12)

    useEffect(() => {
        if (Number(source) <= simulationRange && Number(source) !== 0) {
            setStickyAmount(Number(source))
        }
    }, [source])

    const swapInfoClassnames = classNames(styles.swapInfo, {
        [styles.swapInfoActive]: (price && source && target
            && Number(source) <= simulationRange) || confirmedData
    })

    const dropdownClassnames = classNames(styles.swapInfoDropdown, {
        [styles.swapInfoDropdownActive]: isOpen
    })

    return (
        <div className={swapInfoClassnames}>
            {!confirmedData &&
                <div onClick={() => setIsOpen(!isOpen)} className={styles.swapInfoButton}>
                    <span>1 STAR ≈ {calculatePrice(price!)} {targetAsset}</span>
                    <Chevron style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }} />
                </div>
            }
            <div className={dropdownClassnames}>
                <div className={styles.swapInfoDropdownContent}>
                    {confirmedData &&
                        <>
                            <div>
                                <span>Exchange rate</span>
                                <span>
                                    1 STAR ≈ {calculatePrice(0, confirmedData.tokenAmount /
                                        confirmedData.starsAmount)} {confirmedData.tokenSymbol}
                                </span>
                            </div>
                            <div>
                                <span>Max. price slippage</span>
                                <span>0.5%</span>
                            </div>
                        </>
                    }
                    <div>
                        <span>Liquidity provider fee</span>
                        <span>{formatSourceInput(String(lpFee))} STARS</span>
                    </div>
                    <div>
                        <span>Blockchain fees</span>
                        <span>{!confirmedData ? '~' : ''} {bchFees} STARS</span>
                    </div>
                    <div>
                        <span>Route</span>
                        <span>STARS » {confirmedData?.tokenSymbol || targetAsset}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
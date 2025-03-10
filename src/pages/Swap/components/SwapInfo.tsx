import classNames from "classnames"
import { Assets } from "../../../shared/types/Assets"
import usePrice from "../hooks/usePrice"
import styles from './SwapInfo.module.scss'
import Chevron from '../../../assets/svg/chevron.svg?react'
import { useEffect, useState } from "react"
import calculatePrice from "../utils/calculatePrice"
import formatSourceInput from "../utils/formatSourceInput"
import useInputs from "../hooks/useInputs"
import { useTonAddress } from "@tonconnect/ui-react"
import { IConfirmedSwap } from "../types/IConfirmedSwap"
import payment from "../../../shared/constants/payment"

export default function SwapInfo({ targetAsset, confirmedData }:
    { targetAsset: Assets, confirmedData?: IConfirmedSwap }) {
    const { price } = usePrice(targetAsset)
    const { source, target } = useInputs()
    const address = useTonAddress()
    const [stickyAmount, setStickyAmount] = useState(Number(source))
    const [stickyPrice, setStickyPrice] = useState(price)
    const [stickyAsset, setStickyAsset] = useState(targetAsset)
    const [isOpen, setIsOpen] = useState(true)

    const simulationRange = address ? 50000 : 10 ** 7
    const lpFee = Math.ceil(confirmedData?.source! * payment.comissionRate)
        || Math.ceil(stickyAmount * payment.comissionRate)
    const bchFees = stickyAsset === 'TON' ? payment.tonFees : payment.jettonFees

    useEffect(() => {
        if (Number(source) <= simulationRange && Number(source) !== 0) {
            setStickyAmount(Number(source))
        }

        if (price) {
            setStickyPrice(price)
            setStickyAsset(targetAsset)
        }
    }, [source, price])

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
                    <span>1 STAR ≈ {calculatePrice(stickyPrice!)} {stickyAsset}</span>
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
                                    1 STAR ≈ {calculatePrice(0, confirmedData.target /
                                        confirmedData.source)} {confirmedData.route}
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
                        <span>{formatSourceInput(String(lpFee))} STAR{lpFee > 1 ? 'S' : ''}</span>
                    </div>
                    <div>
                        <span>Blockchain fees</span>
                        <span>~ {bchFees} STARS</span>
                    </div>
                    <div>
                        <span>Route</span>
                        <span>STARS » {confirmedData?.route || stickyAsset}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
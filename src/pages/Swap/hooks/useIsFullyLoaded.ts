import { useEffect, useState } from "react"
import useRegisterUser from "./useRegisterUser"
import useTargetAsset from "./useTargetAsset"
import usePrice from "./usePrice"
import useBalance from "./useBalance"

export default function useIsFullyLoaded() {
    const [targetPrice, setTargetPrice] = useState<number | null>(null)
    const [targetBalance, setTargetBalance] = useState<number | null>(null)
    const isUserRegistered = useRegisterUser()
    const { targetAsset } = useTargetAsset(isUserRegistered)
    const { price } = usePrice(targetAsset)
    const { balance } = useBalance(targetAsset)

    useEffect(() => {
        if (price) setTargetPrice(price)
        if (balance !== undefined) setTargetBalance(balance)
    }, [targetAsset, price, balance])

    return Boolean(targetPrice && targetBalance === 0 ? true : targetBalance)
}
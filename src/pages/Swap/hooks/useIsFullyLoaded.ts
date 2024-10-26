import { useEffect, useState } from "react"
import useRegisterUser from "./useRegisterUser"
import useTargetAsset from "./useTargetAsset"
import useBalance from "./useBalance"
import { useTonAddress } from "@tonconnect/ui-react"

export default function useIsFullyLoaded() {
    const address = useTonAddress()
    const [targetBalance, setTargetBalance] = useState<number | null>(null)
    const isUserRegistered = useRegisterUser()
    const { targetAsset } = useTargetAsset(isUserRegistered)
    const { balance, isBalanceLoading } = useBalance(targetAsset)

    useEffect(() => {
        if (!address) setTargetBalance(0)
        else if (!isBalanceLoading) setTargetBalance(balance!)
    }, [isBalanceLoading])

    return Boolean(targetAsset && targetBalance === 0 || targetBalance)
}
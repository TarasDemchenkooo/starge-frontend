import { useQuery } from "@tanstack/react-query"
import getBalance from "../api/getBalance"
import { useTonAddress } from "@tonconnect/ui-react"
import { Assets } from "../../../shared/types/Assets"
import jettons from '../../../../public/jettons/jettons.json'
import { AxiosError } from "axios"
import { useState } from "react"

export default function useBalance(targetAsset: Assets) {
    const address = useTonAddress()
    const [enabled, setEnabled] = useState(true)
    const jetton = jettons.jettons.find(jetton => jetton.symbol === targetAsset)!

    const { data, isLoading, isError } = useQuery({
        queryKey: [jetton.symbol.concat('_balance')],
        queryFn: () => getBalance(address, jetton.ca),
        enabled: Boolean(address) && enabled,
        refetchInterval: 30000,
        retry: (failureCount, error) => {
            if (error instanceof AxiosError) {
                if (error.response?.data.error.includes('no jetton wallet')) {
                    setEnabled(false)
                    return false
                }
            }

            return failureCount < 3
        },
    })

    return { balance: data, isBalanceLoading: isLoading, isBalanceError: isError }
}
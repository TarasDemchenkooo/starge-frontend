import { useQuery, UseQueryResult } from "@tanstack/react-query"
import jettons from '../../../../public/jettons/jettons.json'
import { Assets } from "../../../shared/types/Assets"
import getPrice from "../api/getPrice"
import { useState } from "react"

export default function usePrice(targetAsset: Assets) {
    const [enable, setEnable] = useState(false)
    const jetton = jettons.jettons.find(jetton => jetton.symbol === targetAsset)!
    const ca = jetton.ca || 'ton'

    const { data, isLoading, refetch, isRefetching } = useQuery({
        queryKey: [jetton.symbol.concat('_price')],
        queryFn: () => getPrice(ca),
        enabled: enable,
        refetchInterval: 15000
    })

    function initialFetch(callback: (data: UseQueryResult<number>) => void) {
        refetch().then(callback)
        setEnable(true)
    }

    return { price: data, isPriceLoading: isLoading, initialFetch, isRefetching }
}
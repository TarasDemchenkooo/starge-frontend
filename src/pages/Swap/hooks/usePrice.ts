import { useQuery } from "@tanstack/react-query"
import jettons from '../../../../public/jettons/jettons.json'
import { Assets } from "../../../shared/types/Assets"
import getPrice from "../api/getPrice"

export default function usePrice(targetAsset: Assets | null | undefined) {
    const jetton = jettons.jettons.find(jetton => jetton.symbol === targetAsset)
    const ca = jetton?.ca || 'ton'

    const { data, isLoading } = useQuery({
        queryKey: [jetton?.symbol.concat('_price')],
        queryFn: () => getPrice(ca),
        enabled: Boolean(targetAsset),
        refetchInterval: 5000
    })

    return { price: data, isPriceLoading: isLoading }
}
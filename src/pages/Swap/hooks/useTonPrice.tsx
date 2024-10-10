import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import getTonStream from "../api/getTonStream"
import useTargetCurrency from "./useTargetCurrency"

export default function useTonPrice() {
    const queryClient = useQueryClient()
    const { setPrice } = useTargetCurrency()

    useEffect(() => {
        const websocket = getTonStream()

        websocket.onmessage = (event) => {
            const price = Number(JSON.parse(event.data).c)
            queryClient.setQueryData(['ton_price'], () => price)
            setPrice(price)
        }
    }, [])

    const { data } = useQuery({
        queryKey: ['ton_price'],
        enabled: false,
        initialData: 0
    })

    return data
}
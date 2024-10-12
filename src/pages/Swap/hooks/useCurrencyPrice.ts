import { useQuery } from "@tanstack/react-query"
import getCurrencyPrice from "../api/getCurrencyPrice"

export default function useCurrencyPrice(address: string) {
    const { data, isLoading } = useQuery({
        queryKey: [address],
        queryFn: () => getCurrencyPrice(address),
        staleTime: 5000
    })

    return { price: data, isLoading }
}
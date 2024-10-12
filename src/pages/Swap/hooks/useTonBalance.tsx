import { useQuery } from "@tanstack/react-query"
import { useTonAddress } from "@tonconnect/ui-react"
import getTonBalance from "../api/getTonBalance"

export default function useTonBalance() {
    const address = useTonAddress()

    const { data, isLoading } = useQuery({
        queryKey: ['ton_balance'],
        queryFn: () => getTonBalance(address)
    })

    return { balance: data, isLoading }
}
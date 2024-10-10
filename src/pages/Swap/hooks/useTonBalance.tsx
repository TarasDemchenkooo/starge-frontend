import { useQuery } from "@tanstack/react-query"
import { useTonWallet } from "@tonconnect/ui-react"
import { Address } from "ton"
import getTonBalance from "../api/getTonBalance"

export default function useTonBalance() {
    const wallet = useTonWallet()

    const { data, isLoading } = useQuery({
        queryKey: ['ton_balance'],
        queryFn: () => getTonBalance(wallet?.account.address as unknown as Address),
        enabled: Boolean(wallet?.account.address),
        initialData: 0
    })

    return { tonBalance: data, isLoading }
}
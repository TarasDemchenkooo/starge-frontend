import { useQuery } from "@tanstack/react-query"
import getJettonBalance from "../api/getJettonBalance"
import { useTonAddress } from "@tonconnect/ui-react"

export default function useJettonBalance(ca: string) {
    const address = useTonAddress()

    const { data, isLoading } = useQuery({
        queryKey: [ca],
        queryFn: () => getJettonBalance(address, ca),
        staleTime: 60000
    })

    return { balance: data, isLoading }
}
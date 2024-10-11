import { useQuery } from "@tanstack/react-query"
import getJettonBalance from "../api/getJettonBalance"

export default function useJettonBalance(address: string, ca: string) {
    const { data, isLoading } = useQuery({
        queryKey: [ca],
        queryFn: () => getJettonBalance(address, ca),
    })

    return { balance: data, isLoading }
}
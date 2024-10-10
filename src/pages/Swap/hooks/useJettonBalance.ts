import { useQuery } from "@tanstack/react-query"
import getJettonBalance from "../api/getJettonBalance"

export default function useJettonBalance(addr: string, ca: string) {
    const { data, isLoading } = useQuery({
        queryKey: [ca],
        queryFn: () => getJettonBalance(addr, ca)
    })

    return { data, isLoading }
}
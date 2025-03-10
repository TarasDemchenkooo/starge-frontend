import { useQuery } from "@tanstack/react-query"
import getHistory from "../api/getHistory"
import { useState } from "react"

export default function useHistory() {
    const [isRefetching, setIsRefetching] = useState(false)

    const { data, isLoading, isError } = useQuery({
        queryKey: ['history'],
        queryFn: () => getHistory(),
        refetchInterval: isRefetching ? 3000 : false
    })

    return { history: data, isHistoryLoading: isLoading, isHistoryError: isError, setIsRefetching }
}
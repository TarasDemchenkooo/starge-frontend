import { useQuery } from "@tanstack/react-query"
import getHistory from "../api/getHistory"
import { useState } from "react"

export default function useHistory(enable: boolean = true) {
    const [isRefetching, setIsRefetching] = useState(false)
    const [enabled, setEnabled] = useState(enable)

    const { data, isLoading, isError } = useQuery({
        queryKey: ['history'],
        queryFn: () => getHistory(),
        refetchInterval: isRefetching ? 3000 : false,
        enabled
    })

    return {
        history: data, isHistoryLoading: isLoading,
        isHistoryError: isError, setIsRefetching,
        setHistoryEnabled: setEnabled
    }
}
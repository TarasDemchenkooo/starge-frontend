import { useQuery } from "@tanstack/react-query"
import getHistory from "../api/getHistory"

export default function useHistory() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['history'],
        queryFn: () => getHistory()
    })

    return { history: data, isHistoryLoading: isLoading, isHistoryError: isError }
}
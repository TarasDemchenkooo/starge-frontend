import { useQuery } from "@tanstack/react-query"
import getHistory from "../api/getHistory"

export default function useHistory() {
    const { data, isLoading } = useQuery({
        queryKey: ['history'],
        queryFn: () => getHistory(),
    })

    return { history: data, isLoading }
}
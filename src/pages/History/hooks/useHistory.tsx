import { useQuery } from "@tanstack/react-query"
import getHistory from "../api/getHistory"

export default function useHistory(id: number) {
    const { data, isLoading } = useQuery({
        queryKey: ['history'],
        queryFn: () => getHistory(id),
        select: data => data.data.history
    })

    return { data, isLoading }
}
import { useQuery } from "@tanstack/react-query"
import getSettings from "../api/getSettings"

export default function useSettings() {
    const { data, isLoading } = useQuery({
        queryKey: ['settings'],
        queryFn: () => getSettings(),
    })

    return { settings: data, isLoading }
}
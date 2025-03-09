import { useQuery } from "@tanstack/react-query"
import getSettings from "../api/getSettings"

export default function useSettings() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['settings'],
        queryFn: () => getSettings()
    })

    return { settings: data, isSettingsLoading: isLoading, isSettingsError: isError }
}
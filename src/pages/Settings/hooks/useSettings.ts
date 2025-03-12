import { useQuery } from "@tanstack/react-query"
import getSettings from "../api/getSettings"
import { useState } from "react"

export default function useSettings(enable: boolean = true) {
    const [enabled, setEnabled] = useState(enable)

    const { data, isLoading, isError } = useQuery({
        queryKey: ['settings'],
        queryFn: () => getSettings(),
        enabled
    })

    return {
        settings: data, isSettingsLoading: isLoading,
        isSettingsError: isError, setSettingsEnabled: setEnabled
    }
}
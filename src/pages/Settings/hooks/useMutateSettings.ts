import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Settings } from "../types/settings"
import patchSettings from "../api/updateSettings"

export default function useMutateSettings() {
    const query = useQueryClient()

    const { isPending, mutate, isSuccess } = useMutation({
        mutationFn: (settings: Settings) => patchSettings(settings),
        onSuccess: (newSettings) => {
            query.setQueryData(['settings'], () => newSettings)
        }
    })

    return { mutate, isPending, isSuccess }
}
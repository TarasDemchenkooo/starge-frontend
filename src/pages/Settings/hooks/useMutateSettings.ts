import { useMutation, useQueryClient } from "@tanstack/react-query"
import patchSettings from "../../../shared/api/patchSettings"
import { ISettings } from "../../../shared/types/ISettings"
import { IAuth } from "../../../shared/types/IAuth"

export default function useMutateSettings() {
    const query = useQueryClient()

    const { data, isPending, mutate, isSuccess } = useMutation({
        mutationFn: (settings: ISettings) => patchSettings(settings),
        onSuccess: (newSettings) => {
            query.setQueryData(['user'], (oldData: IAuth) => ({
                ...oldData,
                user: {
                    ...oldData.user,
                    settings: newSettings
                }
            }))
        }
    })

    return { data, mutate, isPending, isSuccess }
}
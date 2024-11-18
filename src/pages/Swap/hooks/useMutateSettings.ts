import { useMutation } from "@tanstack/react-query"
import patchSettings from "../../../shared/api/patchSettings"
import { ISettings } from "../../../shared/types/ISettings"

export default function useMutateSettings() {
    const { data, isPending, mutate, isSuccess } = useMutation({
        mutationFn: (settings: ISettings) => patchSettings(settings)
    })

    return { data, mutate, isPending, isSuccess }
}
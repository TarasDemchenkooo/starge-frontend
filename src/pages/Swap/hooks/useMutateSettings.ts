import { useMutation } from "@tanstack/react-query"
import patchSettings from "../../../shared/api/patchSettings"
import userId from "../../../shared/constants/UserId"
import { ISettings } from "../../../shared/types/ISettings"

export default function useMutateSettings() {
    const { isPending, mutate, isSuccess } = useMutation({
        mutationFn: (settings: ISettings) => patchSettings(userId, settings)
    })

    return { mutate, isPending, isSuccess }
}
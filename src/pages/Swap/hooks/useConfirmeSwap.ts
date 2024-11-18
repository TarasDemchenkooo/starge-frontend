import { useMutation } from "@tanstack/react-query"
import { IConfirmSwap } from "../types/IConfirmSwap"
import confirmSwap from "../api/confirmSwap"
import userId from "../../../shared/constants/UserId"

export default function useConfirmSwap() {
    const { data, mutate, isPending, isError } = useMutation({
        mutationFn: (validatingAssets: IConfirmSwap) => confirmSwap(userId, validatingAssets)
    })

    return { data, mutate, isPending }
}
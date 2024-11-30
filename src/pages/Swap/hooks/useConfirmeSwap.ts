import { useMutation } from "@tanstack/react-query"
import { IConfirmSwap } from "../types/IConfirmSwap"
import confirmSwap from "../api/confirmSwap"

export default function useConfirmSwap() {
    const { data, mutate, isPending, isError } = useMutation({
        mutationFn: (validatingAssets: IConfirmSwap) => confirmSwap(validatingAssets)
    })

    return { data, mutate, isPending }
}
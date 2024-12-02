import { useMutation } from "@tanstack/react-query"
import { IConfirmSwap } from "../types/IConfirmSwap"
import swap from "../api/swap"

export default function useConfirmSwap() {
    const { data, mutate, isPending, error } = useMutation({
        mutationFn: (validatingAssets: IConfirmSwap) => swap(validatingAssets)
    })

    return { data, mutate, isPending, error }
}
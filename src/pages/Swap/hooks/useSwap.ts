import { useMutation } from "@tanstack/react-query"
import { IConfirmedSwap } from "../types/IConfirmedSwap"
import swap from "../api/swap"

export default function useSwap() {
    const { data, mutate, isPending, error } = useMutation({
        mutationFn: (data: IConfirmedSwap) => swap(data)
    })

    return { invoice: data, mutate, isPending, error }
}
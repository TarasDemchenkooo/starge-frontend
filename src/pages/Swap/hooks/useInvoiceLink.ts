import { useMutation } from "@tanstack/react-query"
import getInvoiceLink from "../api/getInvoiceLink"

export default function useInvoiceLink() {
    const { data, mutate, isPending, isError } = useMutation({
        mutationFn: (hash: string) => getInvoiceLink(hash)
    })

    return { invoice: data, mutate, isPending, isError }
}
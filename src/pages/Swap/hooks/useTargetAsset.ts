import { useQuery } from "@tanstack/react-query"
import getTargetAsset from "../api/getTargetAsset"

export default function useTargetAsset() {
    const id = Telegram.WebApp.initDataUnsafe.user?.id!

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['target_asset'],
        queryFn: () => getTargetAsset(id),
        staleTime: Infinity,
        refetchOnWindowFocus: false
    })

    return { targetAsset: data, isLoading, isError, update: refetch }
}
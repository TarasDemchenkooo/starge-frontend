import { useQuery } from "@tanstack/react-query"
import getTargetAsset from "../api/getTargetAsset"

export default function useTargetAsset(isRegistered: boolean = true) {
    const id = Telegram.WebApp.initDataUnsafe.user?.id!

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['target_asset'],
        queryFn: () => getTargetAsset(id),
        enabled: isRegistered,
        staleTime: Infinity,
        refetchOnWindowFocus: false
    })

    return { targetAsset: data, isLoading, isError, update: refetch }
}
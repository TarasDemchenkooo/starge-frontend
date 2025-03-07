import { useQuery } from "@tanstack/react-query"
import authUser from "../api/auth"

export default function useAuth() {
    const initData = Telegram.WebApp.initData
    const isSupported = Telegram.WebApp.isVersionAtLeast('8.0')

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['jwt'],
        queryFn: () => authUser(initData),
        enabled: isSupported,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false
    })

    return { jwt: data?.jwt, isLoading, isError: !isSupported || isError, refetch }
}
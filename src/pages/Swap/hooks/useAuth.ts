import { useQuery } from "@tanstack/react-query"
import authUser from "../api/auth"

export default function useAuth() {
    const initData = Telegram.WebApp.initData
    const version = Number(Telegram.WebApp.version[0])

    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: () => authUser(initData),
        enabled: version >= 8,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false
    })

    return {
        jwt: data?.jwt, settings: data?.user.settings,
        isLoading, isError: version < 8 || isError
    }
}
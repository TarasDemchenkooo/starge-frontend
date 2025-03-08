import { useQuery } from "@tanstack/react-query"
import authUser from "../api/auth"

export default function useAuth() {
    const initData = Telegram.WebApp.initData

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['jwt'],
        queryFn: () => authUser(initData),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false
    })

    return { jwt: data?.jwt, isLoading, isError, refetch }
}
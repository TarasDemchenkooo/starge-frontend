import { useEffect } from "react"
import registerUser from "../api/registerUser"
import { useQuery } from "@tanstack/react-query"

export default function useRegisterUser() {
    const id = Telegram.WebApp.initDataUnsafe.user?.id!
    const key = 'is_registered'
    const isRegistered = JSON.parse(localStorage.getItem(key)!)

    const { data, isLoading, isError } = useQuery({
        queryKey: [key],
        queryFn: () => registerUser(id),
        enabled: !isRegistered
    })

    useEffect(() => {
        if (!isError && data) {
            localStorage.setItem(key, 'true')
        }
    }, [isLoading])

    return isRegistered || data
}
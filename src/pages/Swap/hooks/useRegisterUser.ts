import { useEffect } from "react"
import registerUser from "../api/registerUser"
import { useQuery } from "@tanstack/react-query"

export default function useRegisterUser() {
    const id = Telegram.WebApp.initDataUnsafe.user?.id!
    const key = 'is_registered'
    const isRegistered = JSON.parse(localStorage.getItem(key)!)

    const { data, isLoading } = useQuery({
        queryKey: [key],
        queryFn: () => registerUser(id),
        enabled: Boolean(!isRegistered && id)
    })

    useEffect(() => {
        if (data) {
            localStorage.setItem(key, 'true')
        }
    }, [isLoading])

    return isRegistered || data
}
import { useQuery } from "@tanstack/react-query"
import getAvatar from "../api/getAvatar"
import { useEffect, useState } from "react"

export default function useAvatar(id: number) {
    const [avatarUrl, setAvatarUrl] = useState('')

    const { data, isLoading } = useQuery({
        queryKey: ['avatar'],
        queryFn: () => getAvatar(id),
        select: data => data.data
    })

    useEffect(() => {
        if (data) {
            const imageUrl = URL.createObjectURL(data)
            setAvatarUrl(imageUrl)
        }
    }, [data])

    return { avatarUrl, isLoading }
}
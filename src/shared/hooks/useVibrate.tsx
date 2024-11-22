import useAuth from "../../pages/Swap/hooks/useAuth"
import { Vibration } from "../types/Vibration"

export default function useVibrate() {
    const { settings } = useAuth()

    function vibrate(type: Vibration = 'medium') {
        const isVibrated = settings?.vibration

        if (isVibrated) Telegram.WebApp.HapticFeedback.impactOccurred(type)
    }

    return { vibrate }
}
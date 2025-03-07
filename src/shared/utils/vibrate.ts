import { Vibration } from "../types/Vibration"

export function vibrate(type: Vibration = 'medium') {
    const isVibrated = JSON.parse(localStorage.getItem('vibration')!)

    if (isVibrated) Telegram.WebApp.HapticFeedback.impactOccurred(type)
}
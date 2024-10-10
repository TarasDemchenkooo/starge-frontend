type Vibration = 'light' | 'medium' | 'heavy'

export default function vibrate(type: Vibration) {
    const isVibrated = JSON.parse(localStorage.getItem('vibration')!)

    if (isVibrated) Telegram.WebApp.HapticFeedback.impactOccurred(type)
}
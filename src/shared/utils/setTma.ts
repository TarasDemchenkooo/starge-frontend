export default function setTma() {
    const interfaceColor = '#0F1620'
    const isSupported = Telegram.WebApp.isVersionAtLeast('8.0')

    if (isSupported) {
        //@ts-ignore
        Telegram.WebApp.requestFullscreen()
    }
    Telegram.WebApp.expand()
    Telegram.WebApp.setHeaderColor(interfaceColor)
    Telegram.WebApp.setBottomBarColor(interfaceColor)
    Telegram.WebApp.disableVerticalSwipes()
    Telegram.WebApp.enableClosingConfirmation()
    Telegram.WebApp.ready()
}
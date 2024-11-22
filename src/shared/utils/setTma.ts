export default function setTma() {
    const interfaceColor = '#0F1620'
    const version = Number(Telegram.WebApp.version[0])

    if (version >= 8) {
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
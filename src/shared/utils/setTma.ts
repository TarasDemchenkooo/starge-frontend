export default function setTma() {
    const interfaceColor = '#0F1620'

    Telegram.WebApp.expand()
    Telegram.WebApp.setHeaderColor(interfaceColor)
    Telegram.WebApp.setBottomBarColor(interfaceColor)
    Telegram.WebApp.disableVerticalSwipes()
    Telegram.WebApp.enableClosingConfirmation()
    Telegram.WebApp.ready()
}
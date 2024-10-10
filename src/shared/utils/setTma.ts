export default function setTma() {
    const interfaceColor = Telegram.WebApp.themeParams.section_bg_color!

    Telegram.WebApp.expand()
    Telegram.WebApp.setHeaderColor(interfaceColor)
    Telegram.WebApp.setBottomBarColor(interfaceColor)
    Telegram.WebApp.disableVerticalSwipes()
    Telegram.WebApp.enableClosingConfirmation()
    Telegram.WebApp.ready()
}
import { THEME, TonConnectUiOptions } from "@tonconnect/ui-react"

const theme = Telegram.WebApp.themeParams

const themeSettings = {
    background: {
        primary: theme.section_bg_color,
        tint: theme.bg_color
    },
    text: {
        primary: theme.text_color,
        secondary: theme.hint_color
    },
    icon: {
        error: theme.destructive_text_color
    },
    telegramButton: theme.button_color,
}

const UIOptions: TonConnectUiOptions = {
    uiPreferences: {
        theme: Telegram.WebApp.colorScheme === 'light' ? THEME.LIGHT : THEME.DARK,
        colorsSet: {
            DARK: themeSettings,
            LIGHT: themeSettings
        }
    }
}

export default UIOptions
import { THEME, TonConnectUiOptions } from "@tonconnect/ui-react"

const theme = Telegram.WebApp.themeParams

const themeSettings = {
    background: {
        primary: '#0F1620',
        tint: '#1D2733'
    },
    text: {
        primary: '#FFFFFF',
        secondary: '#7F8A98'
    },
    icon: {
        error: theme.destructive_text_color
    },
    telegramButton: '#46AEF5',
}

export const UIOptions: TonConnectUiOptions = {
    uiPreferences: {
        theme: Telegram.WebApp.colorScheme === 'light' ? THEME.LIGHT : THEME.DARK,
        colorsSet: {
            DARK: themeSettings,
            LIGHT: themeSettings
        }
    }
}
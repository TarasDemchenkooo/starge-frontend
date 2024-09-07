import { ReactNode } from "react"
import Menu from "./ui/Menu/Menu"
import { THEME, useTonConnectUI } from "@tonconnect/ui-react"

interface ILayout {
    children: ReactNode
}

export default function Layout({ children }: ILayout) {
    const [_, setOptions] = useTonConnectUI()
    
    setOptions({
        uiPreferences: {
            theme: Telegram.WebApp.colorScheme === 'light' ? THEME.LIGHT : THEME.DARK
        }
    })

    return (
        <>
            <main>
                {children}
            </main>
            <footer>
                <Menu />
            </footer>
        </>
    )
}
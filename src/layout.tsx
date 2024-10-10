import { useTonConnectUI } from "@tonconnect/ui-react"
import Menu from "./shared/components/Menu/components/Menu"
import UIOptions from "./shared/constants/TonConnectUI"

export default function Layout({ children }: { children: React.ReactNode }) {
    useTonConnectUI()[1](UIOptions)

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
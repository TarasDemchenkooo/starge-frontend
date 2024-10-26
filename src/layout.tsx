import { useTonConnectUI } from "@tonconnect/ui-react"
import UIOptions from "./shared/constants/TonConnectUI"

export default function Layout({ children }: { children: React.ReactNode }) {
    useTonConnectUI()[1](UIOptions)

    return (
        <main>
            {children}
        </main>
    )
}
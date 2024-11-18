import { Route, Routes } from "react-router-dom"
import useAuth from "./pages/Swap/hooks/useAuth"
import History from "./pages/History/components/History"
import Settings from "./pages/Settings/components/Settings"
import UIOptions from "./shared/constants/TonConnectUI"
import { useTonConnectUI } from "@tonconnect/ui-react"
import Swap from "./pages/Swap/Swap"
import { useEffect } from "react"

export default function App() {
    const { jwt, isLoading, isError } = useAuth()
    useTonConnectUI()[1](UIOptions)

    useEffect(() => {
        if (jwt) localStorage.setItem('jwt', jwt)
    }, [isLoading])

    if (isLoading) return 'Loading...'

    if (isError) return 'Error'

    return (
        <main>
            <Routes>
                <Route path="/" element={<Swap />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </main>
    )
}
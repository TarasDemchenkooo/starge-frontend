import { Route, Routes, useNavigate } from "react-router-dom"
import useAuth from "./pages/Swap/hooks/useAuth"
import History from "./pages/History/History"
import { useTonConnectUI } from "@tonconnect/ui-react"
import Swap from "./pages/Swap/Swap"
import { useEffect } from "react"
import Settings from "./pages/Settings/Settings"
import Menu from "./shared/components/Menu/components/Menu"
import Toast from "./shared/components/Toast/components/Toast"
import UIOptions from "./shared/constants/tonConnectUi"
import useHistory from "./pages/History/hooks/useHistory"
import useSettings from "./pages/Settings/hooks/useSettings"

export default function App() {
    const navigate = useNavigate()
    const [_, configureTonConnectUi] = useTonConnectUI()
    const { jwt, isAuthLoading, isAuthError } = useAuth()
    const { isHistoryLoading, isHistoryError } = useHistory()
    const { isSettingsLoading, isSettingsError } = useSettings()

    useEffect(() => {
        const startParam = Telegram.WebApp.initDataUnsafe.start_param
        if (startParam) navigate(`/history?${startParam}`)

        if (jwt) {
            localStorage.setItem('jwt', jwt)
            configureTonConnectUi(UIOptions)
        }
    }, [isAuthLoading])

    if (isAuthLoading || isHistoryLoading || isSettingsLoading) return 'Loading...'

    if (isAuthError || isHistoryError || isSettingsError) return 'Error'

    return (
        <>
            <main>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Swap />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </main>
            <Menu />
            <Toast />
        </>
    )
}
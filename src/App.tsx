import { Route, Routes, useNavigate } from "react-router-dom"
import useAuth from "./pages/Swap/hooks/useAuth"
import History from "./pages/History/History"
import { useTonConnectUI } from "@tonconnect/ui-react"
import Swap from "./pages/Swap/Swap"
import { useEffect, useState } from "react"
import Settings from "./pages/Settings/Settings"
import Menu from "./shared/components/Menu/components/Menu"
import Toast from "./shared/components/Toast/components/Toast"
import useHistory from "./pages/History/hooks/useHistory"
import useSettings from "./pages/Settings/hooks/useSettings"
import LoadingScreen from "./shared/components/Screens/components/Loading"
import ErrorScreen from "./shared/components/Screens/components/Error"
import UiOptions from "./shared/constants/tonConnectUi"

export default function App() {
    const startParam = Telegram.WebApp.initDataUnsafe.start_param
    const isJwtExists = Boolean(localStorage.getItem('jwt'))
    const [_, configureTonConnectUi] = useTonConnectUI()
    const { jwt, isAuthLoading, isAuthError } = useAuth()
    const { isHistoryLoading, isHistoryError, setHistoryEnabled } = useHistory(isJwtExists)
    const { isSettingsLoading, isSettingsError, setSettingsEnabled } = useSettings(isJwtExists)
    const [isRequested, setIsRequested] = useState(isJwtExists)
    const navigate = useNavigate()

    useEffect(() => {
        if (startParam) navigate(`/history?${startParam}`)

        if (jwt) {
            setHistoryEnabled(true)
            setSettingsEnabled(true)
            setIsRequested(true)
            localStorage.setItem('jwt', jwt)
            configureTonConnectUi(UiOptions)
        }
    }, [jwt])

    if (isAuthLoading || isHistoryLoading || isSettingsLoading ||
        (!isRequested && !isAuthError)) return <LoadingScreen />

    if (isAuthError || isHistoryError || isSettingsError) return <ErrorScreen />

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
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useBackButton() {
    const navigate = useNavigate()
    const location = useLocation()

    Telegram.WebApp.onEvent('backButtonClicked', () => {
        navigate('/')
    })

    useEffect(() => {
        if (location.pathname === '/') {
            Telegram.WebApp.BackButton.hide()
        } else {
            Telegram.WebApp.BackButton.show()
        }
    }, [location.pathname])
}
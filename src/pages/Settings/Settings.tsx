import SettingsApp from "./components/SettingsApp"
import SettingsUser from "./components/SettingsUser"

export default function Settings() {
    const user = Telegram.WebApp.initDataUnsafe.user

    return (
        <>
            <SettingsUser user={user!} />
            <SettingsApp />
        </>
    )
}
import SettingsApp from "./components/SettingsApp"
import SettingsUser from "./components/SettingsUser"
import useSettings from "./hooks/useSettings"

export default function Settings() {
    const { isLoading } = useSettings()

    if (isLoading) return 'loading...'

    return (
        <>
            <SettingsUser />
            <SettingsApp />
        </>
    )
}
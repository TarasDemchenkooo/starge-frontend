import useAvatar from '../hooks/useAvatar'
import SettingsSkeleton from './SettingsSkeleton'
import SettingsUser from './SettingsUser'
import SettingsApp from './SettingsApp'

export default function Settings() {
    const user = Telegram.WebApp.initDataUnsafe.user
    const { avatarUrl, isLoading } = useAvatar(user?.id!)

    return isLoading ? <SettingsSkeleton /> : (
        <>
            <SettingsUser avatar={avatarUrl} user={user!} />
            <SettingsApp />
        </>
    )
}
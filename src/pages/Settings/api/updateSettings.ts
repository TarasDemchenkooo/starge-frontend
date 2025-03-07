import { backend } from "../../../shared/api/apiClinet"
import { Settings } from "../types/settings"

export default function patchSettings(settings: Settings): Promise<Settings> {
    return backend.patch('/user/settings', settings)
}
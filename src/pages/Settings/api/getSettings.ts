import { backend } from "../../../shared/api/apiClinet"
import { Settings } from "../types/settings"

export default function getSettings(): Promise<Settings> {
    return backend.get('/user/settings')
}
import { ISettings } from "../types/ISettings"
import apiClient from "./apiClinet"

export default function patchSettings(settings: ISettings): Promise<ISettings> {
    return apiClient.patch('/user', settings)
}
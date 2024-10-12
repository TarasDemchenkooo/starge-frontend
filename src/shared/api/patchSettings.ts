import axios from "axios"
import { ISettings } from "../types/ISettings"
import backendApiUrl from "../constants/BackendApiUrl"

export default function patchSettings(id: number, settings: ISettings) {
    return axios.patch(backendApiUrl.concat(`user/${id}/settings`), settings)
}
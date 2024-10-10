import axios from "axios"
import { IHistory } from "../types/IHistory"
import backendApiUrl from "../../../shared/constants/BackendApiUrl"

export default function getHistory(id: number) {
    return axios.get<IHistory>(backendApiUrl.concat(`user/${id}/history`), {
        headers: {
            'ngrok-skip-browser-warning': true
        }
    })
}

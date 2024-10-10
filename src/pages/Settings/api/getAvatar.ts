import axios from "axios"
import backendApiUrl from "../../../shared/constants/BackendApiUrl"

export default function getAvatar(id: number) {
    return axios({
        url: backendApiUrl.concat(`user/${id}/avatar`),
        method: 'GET',
        responseType: 'blob',
        headers: {
            'ngrok-skip-browser-warning': true
        }
    })
}
import axios from "axios"
import backendApiUrl from "../../../shared/constants/BackendApiUrl"

export default async function registerUser(id: number): Promise<boolean> {
    if (!id) return false

    const response = await axios.get(backendApiUrl.concat(`user/${id}/register`), {
        headers: {
            'ngrok-skip-browser-warning': true
        }
    })
    return response.data.status
}
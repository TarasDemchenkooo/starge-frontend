import axios from "axios"
import backendApiUrl from "../../../shared/constants/BackendApiUrl"

export default async function registerUser(id: number): Promise<boolean> {
    const response = await axios.post(backendApiUrl.concat(`user/${id}/register`), {
        headers: {
            'ngrok-skip-browser-warning': true
        }
    })
    
    return response.data.status
}
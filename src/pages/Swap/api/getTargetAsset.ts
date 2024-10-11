import axios from "axios"
import backendApiUrl from "../../../shared/constants/BackendApiUrl"

export default async function getTargetAsset(id: number): Promise<string> {
    if (!id) return 'TON'

    const response = await axios.get(backendApiUrl.concat(`user/${id}/settings`), {
        headers: {
            'ngrok-skip-browser-warning': true
        }
    })
    return response.data.settings.target_asset
}
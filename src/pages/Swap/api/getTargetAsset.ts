import axios from "axios"
import backendApiUrl from "../../../shared/constants/BackendApiUrl"
import { Assets } from "../../../shared/types/Assets"

export default async function getTargetAsset(id: number): Promise<Assets> {
    const response = await axios.get(backendApiUrl.concat(`user/${id}/settings`), {
        headers: {
            'ngrok-skip-browser-warning': true
        }
    })
    
    return response.data.settings.target_asset
}
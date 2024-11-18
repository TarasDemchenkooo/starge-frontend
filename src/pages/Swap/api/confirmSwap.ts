import axios from "axios"
import { IConfirmSwap } from "../types/IConfirmSwap"
import backendApiUrl from "../../../shared/constants/BackendApiUrl"
import { IValidatedSwap } from "../types/IValidatedSwap"

export default async function confirmSwap(id: number, assets: IConfirmSwap): Promise<IValidatedSwap> {
    const response = await axios.post(backendApiUrl.concat(`user/${id}/swap-confirm`), assets, {
        headers: {
            'ngrok-skip-browser-warning': true
        }
    })

    return response.data.confirm
}
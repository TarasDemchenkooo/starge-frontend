import axios from "axios"
import tonApiUrl from "../../../shared/constants/TonApiUrl"
import tonApiKey from "../../../shared/constants/TonApiKey"

export default async function getTonBalance(address: string): Promise<number> {
    if (!address) return 0

    const response = await axios.get(tonApiUrl.concat(`accounts/${address}`), {
        headers: {
            Authorization: `Bearer ${tonApiKey}`,
            'ngrok-skip-browser-warning': true
        }
    })

    return response.data.balance
}
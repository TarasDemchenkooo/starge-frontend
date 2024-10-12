import axios from "axios"
import tonApiKey from "../../../shared/constants/TonApiKey"
import tonApiUrl from "../../../shared/constants/TonApiUrl"

export default async function getJettonBalance(address: string, ca: string): Promise<number> {
    if (!address) return 0

    const response = await axios.get(tonApiUrl.concat(`accounts/${address}/jettons/${ca}`), {
        headers: {
            Authorization: `Bearer ${tonApiKey}`,
            'ngrok-skip-browser-warning': true
        }
    })

    const balance = response.data.balance / response.data.jetton.decimals

    return balance
}
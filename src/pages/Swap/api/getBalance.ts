import axios from "axios"
import tonApiKey from "../../../shared/constants/TonApiKey"
import tonApiUrl from "../../../shared/constants/TonApiUrl"

export default async function getBalance(address: string, ca: string): Promise<number> {
    const requestJetton = ca ? `/jettons/${ca}` : ''
    const response = await axios.get(tonApiUrl.concat(`accounts/${address}${requestJetton}`), {
        headers: {
            Authorization: `Bearer ${tonApiKey}`
        }
    })

    const balance = response.data.balance / (ca ? 10 ** response.data.jetton.decimals : 10 ** 9)

    return balance
}
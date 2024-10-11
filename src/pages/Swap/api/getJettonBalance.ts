import axios from "axios"
import { Address } from "ton-core"
import tonApiKey from "../../../shared/constants/TonApiKey"
import tonApiUrl from "../../../shared/constants/TonApiUrl"

export default async function getJettonBalance(address: string, ca: string): Promise<number> {
    if (!address) return 0

    const addrId = Address.parse(address).hash.toString('hex')
    const caId = Address.parse(ca).hash.toString('hex')

    const response = await axios.get(tonApiUrl.concat(`accounts/${addrId}/jettons/${caId}`), {
        headers: {
            Authorization: `Bearer ${tonApiKey}`,
            'ngrok-skip-browser-warning': true
        }
    })

    const balance = response.data.balance / response.data.jetton.decimals

    return balance
}
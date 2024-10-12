import axios from "axios"
import tonApiUrl from "../../../shared/constants/TonApiUrl"
import tonApiKey from "../../../shared/constants/TonApiKey"

export default async function getCurrencyPrice(address: string): Promise<number> {
    const response = await axios.get(tonApiUrl.concat(`rates?tokens=${address}`), {
        headers: {
            Authorization: `Bearer ${tonApiKey}`,
            'ngrok-skip-browser-warning': true
        }
    })

    const data = response.data.rates
    const price: number = data[Object.keys(data)[0]].prices.USD

    return price
}
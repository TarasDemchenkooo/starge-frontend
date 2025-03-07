import { tonapi } from "../../../shared/api/apiClinet"

export default async function getPrice(contract: string): Promise<number> {
    const response = await tonapi.get(`/rates?tokens=${contract}&currencies=usd`)
    const data = response.data.rates
    const price: number = data[Object.keys(data)[0]].prices.USD

    return price
}
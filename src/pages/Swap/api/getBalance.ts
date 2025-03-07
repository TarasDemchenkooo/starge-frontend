import { tonapi } from "../../../shared/api/apiClinet"

export default async function getBalance(address: string, ca: string): Promise<number> {
    const requestJetton = ca ? `/jettons/${ca}` : ''
    const response = await tonapi.get(`/accounts/${address}${requestJetton}`)
    const balance = response.data.balance / (ca ? 10 ** response.data.jetton.decimals : 10 ** 9)

    return balance
}
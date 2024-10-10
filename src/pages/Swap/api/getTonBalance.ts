import { Address, TonClient } from "ton"

export default async function getTonBalance(address: Address) {
    const client = new TonClient({
        endpoint: 'https://toncenter.com/api/v2/jsonRPC'
    })

    const nanoTon = await client.getBalance(address)
    const ton = Number(nanoTon) / 1e9

    return ton
}
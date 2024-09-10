import { Address, TonClient } from "ton"

class TonService {
    private client: TonClient

    constructor() {
        this.client = new TonClient({
            endpoint: 'https://toncenter.com/api/v2/jsonRPC'
        })
    }

    getClient() {
        return this.client
    }

    async getBalance(address: Address): Promise<number> {
        return this.client.getBalance(address).then(balance => Number(balance) / 10**9)
    }
}

const Ton = new TonService()

export default Ton
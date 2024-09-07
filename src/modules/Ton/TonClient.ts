import { TonClient } from "ton"

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
}

const Ton = new TonService()

export default Ton